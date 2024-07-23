import User from '../../../models/userModel.ts';  // Ensure path is correct
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connect from "./../../../Database/config";

export async function POST(req: Request) {
    connect();
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
        return NextResponse.json({ msg: 'Invalid fields' }, { status: 400 });
    }

    const isUser = await User.findOne({ email });
    if (isUser) {
        return NextResponse.json({ msg: 'User already present' }, { status: 409 });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({ email, name, password:hashPassword });
        await user.save();

        const token = jwt.sign({ name, email }, 'fgeduywhvdsuygsd');
        const response = NextResponse.json({ msg: 'User successfully created' }, { status: 201 });
        response.cookies.set('token', token);

        return response;
    } catch (error) {
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
    return NextResponse.json({msg: "ok"})
}
