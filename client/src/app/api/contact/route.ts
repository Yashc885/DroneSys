import { NextResponse } from 'next/server';
import dbConnect from '../../../Database/config';
import Contact from '../../../models/ContactModel';

// Connect to the database
dbConnect();

// Handler for POST requests to create a new contact
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Create a new contact entry
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    return NextResponse.json({ message: 'Contact saved successfully!' }, { status: 201 });
  } catch (error) {
    console.error('POST error:', error); // Log the error
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

// Handler for GET requests to retrieve all contact entries
export async function GET() {
  try {
    const contacts = await Contact.find({});
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error('GET error:', error); // Log the error
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
