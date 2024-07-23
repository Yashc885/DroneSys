import User from '../../../models/userModel.ts';  // Ensure path is correct
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connect from "./../../../Database/config";

export async function POST(req: Request) {
    try{
    connect();
    const body = await req.json();
    const {email, password } = body;

    if ( !email || !password) {
        return NextResponse.json({ msg: 'Invalid credentials' }, { status: 400 });
    }

    const isUser = await User.findOne({ email });
    if (!isUser) {
        return NextResponse.json({ msg: 'Invalid credentials' }, { status: 409 });
    }
    const isMatch = await bcrypt.compare(password , isUser.password)
      const name = isUser.name;
      const token = jwt.sign({ name, email }, 'fgeduywhvdsuygsd');

      const response = NextResponse.json({ msg: 'User successfully login' }, { status: 201 });
        response.cookies.set('token', token);

        return response;
    } catch (error) {
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
    return NextResponse.json({msg: "ok"})
}
