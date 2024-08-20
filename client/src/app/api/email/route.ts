// app/api/email/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '../../../Database/config';
import Email from '../../../models/emailModel';

// Connect to the database
dbConnect();

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const newEmail = new Email({ email });
    await newEmail.save();
    return NextResponse.json({ message: 'Email saved successfully!' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}

export async function GET() {
  try {
    const emails = await Email.find({});
    return NextResponse.json(emails, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 400 });
  }
}
