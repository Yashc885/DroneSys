import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Booking from '../../../models/bookingModel'; // Adjust the path as needed
import connect from '../../../Database/config'; // Adjust the path as needed

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) return;
    await connect();
};

export async function GET() {
    await connectToDatabase();

    try {
        const bookings = await Booking.find();
        return NextResponse.json(bookings, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error fetching bookings' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    await connectToDatabase();

    try {
        const data = await request.json();
        const booking = new Booking(data);
        await booking.save();
        return NextResponse.json(booking, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Error creating booking' }, { status: 400 });
    }
}

export async function PUT(request: Request) {
    await connectToDatabase();

    try {
        const data = await request.json();
        const { id } = data; // Assuming id is part of the request body
        const updatedBooking = await Booking.findByIdAndUpdate(id, data, { new: true });
        if (!updatedBooking) return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        return NextResponse.json(updatedBooking, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error updating booking' }, { status: 400 });
    }
}

export async function DELETE(request: Request) {
    await connectToDatabase();

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id'); // Extract id from the query string
        const deletedBooking = await Booking.findByIdAndDelete(id);
        if (!deletedBooking) return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        return NextResponse.json({ message: 'Booking deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting booking' }, { status: 400 });
    }
}
