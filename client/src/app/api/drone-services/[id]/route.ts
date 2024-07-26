import { NextResponse } from 'next/server';
import DroneService from '../../../../models/droneServiceModel'; // Adjust path as needed
import connect from '../../../../Database/config'; // Adjust path as needed

export async function GET(request) {
    await connect();
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // Extract ID from URL
    
    try {
        const service = await DroneService.findById(id);
        if (!service) {
            return NextResponse.json({ message: 'Not Found' }, { status: 404 });
        }
        return NextResponse.json(service);
    } catch (error) {
        console.error('Error fetching drone service:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PUT(request) {
    await connect();
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // Extract ID from URL
    const { title, description, price_info } = await request.json();
    
    try {
        const updatedService = await DroneService.findByIdAndUpdate(id, { title, description, price_info }, { new: true });
        if (!updatedService) {
            return NextResponse.json({ message: 'Not Found' }, { status: 404 });
        }
        return NextResponse.json(updatedService);
    } catch (error) {
        console.error('Error updating drone service:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}

export async function DELETE(request) {
    await connect();
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop(); // Extract ID from URL
    
    try {
        const deletedService = await DroneService.findByIdAndDelete(id);
        if (!deletedService) {
            return NextResponse.json({ message: 'Not Found' }, { status: 404 });
        }
        return NextResponse.json(deletedService);
    } catch (error) {
        console.error('Error deleting drone service:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
