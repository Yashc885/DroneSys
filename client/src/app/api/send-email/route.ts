import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';
import connect from "../../../Database/config"; // If you need a database connection for logging, etc.

export async function POST(req: Request) {
    try {
        // Assuming you may want to connect to your database
        await connect(); 

        const body = await req.json();
        const { to, subject, text } = body;

        if (!to || !subject || !text) {
            return NextResponse.json({ msg: 'Please provide all required fields: to, subject, and text' }, { status: 400 });
        }

        // Nodemailer transport configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'yash.c@acceledge.ai', // Replace with your Gmail address
                pass: 'nrkbcrfqfozxrqox',     // Replace with the app password you generated (without spaces)
            },
        });
        

        try {
            // Send email
            await transporter.sendMail({
                from: 'yash.c@acceledge.ai', // Sender address
                to, // Receiver email
                subject, // Subject line
                text, // Email body
            });

            // Return success response
            return NextResponse.json({ msg: 'Email sent successfully' }, { status: 200 });
        } catch (emailError) {
            console.error('Error sending email:', emailError);
            return NextResponse.json({ msg: 'Error sending email', error: emailError }, { status: 500 });
        }
    } catch (error) {
        console.error('Send email error:', error); 
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}
