import { NextResponse } from 'next/server';
import DroneService from '../../../models/droneServiceModel'; // Adjust the path as needed
import connect from '../../../Database/config.ts'; // Ensure you have a database connection function

// Connect to the database
connect();

// Handler for GET requests
export async function GET() {
    try {
        const droneServices = await DroneService.find();
        return NextResponse.json(droneServices);
    } catch (error) {
        console.error('Error fetching drone services:', error);
        return NextResponse.error(new Error('Failed to fetch drone services'));
    }
}

// Handler for POST requests
export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { user_id, drone_services_id, title, description, price_info, images } = data;

        if (!user_id || !drone_services_id || !title || !description || !price_info) {
            return NextResponse.error(new Error('All fields are required'), { status: 400 });
        }

        const newDroneService = new DroneService({
            user_id,
            drone_services_id,
            title,
            description,
            price_info,
            images: images || [] // Handle images field
        });

        await newDroneService.save();
        return NextResponse.json(newDroneService, { status: 201 });
    } catch (error) {
        console.error('Error creating drone service:', error);
        return NextResponse.error(new Error('Failed to create drone service'));
    }
}

// Handler for PUT requests (update)
export async function PUT(request: Request) {
    try {
        const data = await request.json();
        const { _id, user_id, drone_services_id, title, description, price_info, images } = data;

        if (!_id) {
            return NextResponse.error(new Error('Drone service ID is required'), { status: 400 });
        }

        const updateData: any = {
            user_id,
            drone_services_id,
            title,
            description,
            price_info,
            images
        };

        // Remove undefined fields
        Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);

        const updatedDroneService = await DroneService.findByIdAndUpdate(_id, updateData, { new: true });
        if (!updatedDroneService) {
            return NextResponse.error(new Error('Drone service not found'), { status: 404 });
        }

        return NextResponse.json(updatedDroneService);
    } catch (error) {
        console.error('Error updating drone service:', error);
        return NextResponse.error(new Error('Failed to update drone service'));
    }
}

// Handler for DELETE requests
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const _id = searchParams.get('_id');

        if (!_id) {
            return NextResponse.error(new Error('Drone service ID is required'), { status: 400 });
        }

        const deletedDroneService = await DroneService.findByIdAndDelete(_id);
        if (!deletedDroneService) {
            return NextResponse.error(new Error('Drone service not found'), { status: 404 });
        }

        return NextResponse.json({ message: 'Drone service deleted successfully' });
    } catch (error) {
        console.error('Error deleting drone service:', error);
        return NextResponse.error(new Error('Failed to delete drone service'));
    }
}
