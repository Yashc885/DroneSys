import Admin from '../../../../models/adminModel'; // Ensure path is correct
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connect from "../../../../Database/config.ts";

export async function POST(req) {
    try {
        await connect(); // Ensure the database connection is established

        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ msg: 'Invalid fields' }, { status: 400 });
        }

        const admin = await Admin.findOne({ email });
        if (!admin) {
            return NextResponse.json({ msg: 'Invalid email or password' }, { status: 401 });
        }

        const isPasswordCorrect = await bcrypt.compare(password, admin.password);
        if (!isPasswordCorrect) {
            return NextResponse.json({ msg: 'Invalid email or password' }, { status: 401 });
        }

        const token = jwt.sign({ name: admin.name, email: admin.email }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });

        const response = NextResponse.json({ msg: 'Login successful' }, { status: 200 });
        response.cookies.set('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });    
        return response;
    } catch (error) {
        console.error('Admin Login error:', error); 
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}
