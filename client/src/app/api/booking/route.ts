import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Booking from '../../../models/bookingModel'; 
import connect from '../../../Database/config'; 

const connectToDatabase = async () => {
    if (mongoose.connections[0].readyState) return;
    await connect();
};

export async function GET(request: Request) {
    try {
        // console.log("Request:", request);
        const searchParams = request.nextUrl.searchParams;
        const query = searchParams.get('title');
        // console.log("SearchParams:", searchParams);
        // console.log("Query:", query);
        
        let droneServices;
        if (query === null || query === undefined) {
            console.log('hello ')
            droneServices = await Booking.find();
        } else {
            droneServices = await Booking.findById(query);
        }
        
        return NextResponse.json(droneServices);
    } catch (error) {
        console.error('Error fetching drone services:', error);
        return NextResponse.json({ error: 'Failed to fetch drone services' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    await connectToDatabase();

    try {
        const data = await request.json();

        // Ensure the incoming data contains all the required fields
        const { user_id, drone_services_info_id, address, is_fullday, booking_info, price, name, email, phone_number, status, cancelled_reason , description , product_id , title , location  } = data;
        const booking = new Booking({
            user_id,
            drone_services_info_id,
            address,
            is_fullday,
            booking_info,
            price,
            name,
            email,
            phone_number,
            status,
            cancelled_reason,
            description,
            product_id ,
            title ,
            location
        });
            console.log("booking" , booking)
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
        const { orderId, status } = data;

        if (!orderId || !status) {
            return NextResponse.json({ error: 'orderId and status are required' }, { status: 400 });
        }

        const updatedBooking = await Booking.findByIdAndUpdate(orderId, { status }, { new: true });

        if (!updatedBooking) {
            return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        }

        return NextResponse.json(updatedBooking, { status: 200 });
    } catch (error) {
        console.error('Error updating booking:', error); 
        return NextResponse.json({ error: 'Error updating booking' }, { status: 500 });
    }
}


export async function DELETE(request: Request) {
    await connectToDatabase();

    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id'); 
        const deletedBooking = await Booking.findByIdAndDelete(id);
        if (!deletedBooking) return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
        return NextResponse.json({ message: 'Booking deleted successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Error deleting booking' }, { status: 400 });
    }
}
