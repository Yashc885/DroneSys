import User from '../../../models/userModel';  // Ensure path is correct
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connect from "../../../Database/config";

export async function POST(req: Request) {
    try {
        await connect(); // Ensure the database connection is established

        const body = await req.json();
        const { email, password } = body;

        if (!email || !password) {
            return NextResponse.json({ msg: 'Invalid credentials' }, { status: 400 });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ msg: 'Invalid credentials' }, { status: 409 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ msg: 'Invalid credentials' }, { status: 401 });
        }

        const name = user.name;
        const token = jwt.sign({ name, email }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });

        const response = NextResponse.json({ msg: 'User successfully logged in' }, { status: 200 });
        response.cookies.set('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });

        return response;
    } catch (error) {
        console.error('Login error:', error); // Log the error for debugging
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}
