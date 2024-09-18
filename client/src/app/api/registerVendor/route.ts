import User from '../../../models/userModel';  // Ensure the path to the model is correct
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import connect from "../../../Database/config";

export async function POST(req: Request) {
    try {
        // Ensure the database connection is established
        await connect();

        // Parse the request body
        const body = await req.json();
        const { name, email, password, role } = body;

        // Validate the required fields
        if (!name || !email || !password || !role) {
            return NextResponse.json({ msg: 'Invalid fields' }, { status: 400 });
        }

        // Validate role
        if (!['customer', 'provider'].includes(role)) {
            return NextResponse.json({ msg: 'Invalid role' }, { status: 400 });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ msg: 'User already present' }, { status: 409 });
        }

        // Hash the password
        const hashPassword = await bcrypt.hash(password, 10);

        // Create a new user instance
        const user = new User({
            name,
            email,
            password: hashPassword,
            role,
        });

        // Save the user to the database
        const savedUser = await user.save();

        // Create a JWT token
        const token = jwt.sign(
            { id: savedUser._id, name, email }, 
            process.env.JWT_SECRET || 'default_secret', 
            { expiresIn: '1h' }
        );

        // Set the token as an HTTP-only cookie
        const response = NextResponse.json({
            msg: 'User successfully created',
            vendorId: savedUser._id  // Add vendor ID to the response
        }, { status: 201 });

        // Set the token cookie
        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
        });

        return response;

    } catch (error) {
        console.error('Registration error:', error);
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}
