// src/app/api/service/route.ts
import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Service from '../../../models/serviceModel'; // Ensure path is correct
import connect from '../../../Database/config'; // Ensure path is correct

export async function POST(req: Request) {
    try {
        await connect(); // Ensure the database connection is established

        const body = await req.json();
        const { _id, title, description } = body;

        // Validate input
        if (!_id || !title || !description) {
            return NextResponse.json({ msg: 'All fields are required' }, { status: 400 });
        }

        // Create a new service
        const newService = new Service({
            _id, // Optionally, you can remove this if you want MongoDB to auto-generate the ID
            title,
            description
        });

        // Save the service to the database
        const savedService = await newService.save();

        return NextResponse.json({ msg: 'Service successfully created', service: savedService }, { status: 201 });
    } catch (error) {
        console.error('Error creating service:', error);
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}
