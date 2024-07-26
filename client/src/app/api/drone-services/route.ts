import { NextResponse } from 'next/server';
import DroneService from '../../../models/droneServiceModel'; // Adjust path as needed
import connect from '../../../Database/config'; // Adjust path as needed

export async function GET() {
    await connect();
    try {
        const services = await DroneService.find({});
        return NextResponse.json(services);
    } catch (error) {
        console.error('Error fetching drone services:', error);
        return NextResponse.json({ error: 'Error fetching drone services' }, { status: 500 });
    }
}

export async function POST(request) {
    await connect();
    try {
        const { user_id, drone_services_id, title, description, price_info } = await request.json();

        // Basic validation
        if (!user_id || !drone_services_id || !title || !description || !price_info) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newService = new DroneService({ user_id, drone_services_id, title, description, price_info });
        await newService.save();
        return NextResponse.json(newService, { status: 201 });
    } catch (error) {
        console.error('Error creating drone service:', error);
        return NextResponse.json({ error: 'Error creating drone service' }, { status: 500 });
    }
}
