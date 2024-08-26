// api/change-password/route.ts
import User from '../../../models/userModel';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import connect from "../../../Database/config";
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
    try {
        await connect(); 

        const body = await req.json();
        const { oldPassword, newPassword } = body;

        if (!oldPassword || !newPassword) {
            return NextResponse.json({ msg: 'Invalid request. Old and new passwords are required.' }, { status: 400 });
        }

        // Retrieve the token from the request cookies
        const token = req.headers.get('cookie')?.split('; ').find(row => row.startsWith('token='));
        const jwtToken = token?.split('=')[1];

        if (!jwtToken) {
            return NextResponse.json({ msg: 'Authentication required' }, { status: 401 });
        }

        // Verify JWT token
        const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET || 'default_secret') as jwt.JwtPayload;
        const email = decoded.email;

        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ msg: 'User not found' }, { status: 404 });
        }

        // Check if the user has the 'customer' role
        if (user.role !== 'customer') {
            return NextResponse.json({ msg: 'Access denied. Only customers can change passwords.' }, { status: 403 });
        }

        // Check if the old password matches
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return NextResponse.json({ msg: 'Old password is incorrect' }, { status: 401 });
        }

        // Hash the new password and save it
        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedNewPassword;
        await user.save();

        return NextResponse.json({ msg: 'Password successfully updated' }, { status: 200 });
    } catch (error) {
        console.error('Change password error:', error);
        return NextResponse.json({ msg: 'Internal server error', error: error.message }, { status: 500 });
    }
}
