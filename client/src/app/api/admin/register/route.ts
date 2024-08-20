import Admin from '../../../../models/adminModel'; 
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connect from "../../../../Database/config.ts"
export async function POST(req) {
    try {
        await connect(); 

        const body = await req.json();
        const { name, email, password } = body;

        if (!name || !email || !password) {
            return NextResponse.json({ msg: 'Invalid fields' }, { status: 400 });
        }

        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return NextResponse.json({ msg: 'Admin already present' }, { status: 409 });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const admin = new Admin({
            name,
            email,
            password: hashPassword,
        });
        
        await admin.save();

        const token = jwt.sign({ name, email }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });

        const response = NextResponse.json({ msg: 'Admin successfully created' }, { status: 201 });
        response.cookies.set('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });    
        return response;
    } catch (error) {
        console.error('Admin Registration error:', error); 
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}
