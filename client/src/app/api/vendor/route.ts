import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Vendor from '../../../models/vendorModel';
import connect from '../../../Database/config'; 

export async function POST(req: Request) {
    try {
        await connect(); // Ensure the database connection is established

        const body = await req.json();
        const { user_id, company_name, company_email, company_contact, company_address } = body;

        // Validate input
        if (!mongoose.Types.ObjectId.isValid(user_id)) {
            return NextResponse.json({ msg: 'Invalid user_id' }, { status: 400 });
        }
        if (!company_name || !company_email || !company_contact || !company_address) {
            return NextResponse.json({ msg: 'All fields are required' }, { status: 400 });
        }

        // Create a new vendor
        const newVendor = new Vendor({
            user_id, 
            company_name,
            company_email,
            company_contact,
            company_address
        });

        // Save the vendor to the database
        const savedVendor = await newVendor.save();

        return NextResponse.json({ msg: 'Vendor successfully created', vendor: savedVendor }, { status: 201 });
    } catch (error) {
        console.error('Error creating vendor:', error);
        return NextResponse.json({ msg: 'Internal server error', error: error.message }, { status: 500 });
    }
}
