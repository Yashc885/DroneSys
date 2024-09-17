import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Contact from '../../../models/ContactModel'; // Import the Contact model
import connect from '../../../Database/config'; // Ensure the path is correct for your database config

export async function POST(req: Request) {
  try {
    await connect(); // Ensure the database connection is established

    // Parse the incoming request data
    const { name, email, message } = await req.json();

    // Validate the request data
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
    }

    // Store the contact data in the database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Create a transporter object using SMTP with your email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yash.c@acceledge.ai', // Your email
        pass: 'nrkbcrfqfozxrqox', // Your email app password
      },
    });

    // Email options
    const mailOptions = {
      from: email, // Sender email
      to: 'yash.c@acceledge.ai', // Your email (where the message will be sent)
      subject: 'New Contact Form Submission',
      html: `
        <h3>Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({ message: 'Email sent and saved to the database successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ error: 'Failed to process the request.' }, { status: 500 });
  }
}
