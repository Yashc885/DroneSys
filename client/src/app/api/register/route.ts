import User from '../../../models/userModel';  // Ensure path is correct
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connect from "../../../Database/config";

export async function POST(req: Request) {
    try {
        await connect(); // Ensure the database connection is established

        const body = await req.json();
        const { name, email, password, role } = body;

        if (!name || !email || !password || !role) {
            return NextResponse.json({ msg: 'Invalid fields' }, { status: 400 });
        }

        if (!['customer', 'provider'].includes(role)) {
            return NextResponse.json({ msg: 'Invalid role' }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ msg: 'User already present' }, { status: 409 });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            email,
            password: hashPassword,
            role,
        });
        
        await user.save();

        const token = jwt.sign({ name, email }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });

        const response = NextResponse.json({ msg: 'User successfully created' }, { status: 201 });
        response.cookies.set('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });    
        return response;
    } catch (error) {
        console.error('Registration error:', error); 
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}
