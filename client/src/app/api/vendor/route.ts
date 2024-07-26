// app/api/vendor/route.ts
import { NextResponse } from 'next/server';
import Vendor from '../../../models/vendorModels'; // Adjust the path as needed
import connect from '../../../Database/config'; // Ensure you have a database connection function

// Connect to the database
connect();

// Handler for GET requests
export async function GET() {
    try {
        const vendors = await Vendor.find();
        return NextResponse.json(vendors);
    } catch (error) {
        console.error('Error fetching vendors:', error);
        return NextResponse.error(new Error('Failed to fetch vendors'));
    }
}

// Handler for POST requests
export async function POST(request: Request) {
    try {
        const data = await request.json();
        const { user_id, company_name, company_email, company_contact, company_address } = data;

        if (!user_id || !company_name || !company_email || !company_contact || !company_address) {
            return NextResponse.error(new Error('All fields are required'), { status: 400 });
        }

        const newVendor = new Vendor({
            user_id,
            company_name,
            company_email,
            company_contact,
            company_address,
        });

        await newVendor.save();
        return NextResponse.json(newVendor, { status: 201 });
    } catch (error) {
        console.error('Error creating vendor:', error);
        return NextResponse.error(new Error('Failed to create vendor'));
    }
}

// Handler for PUT requests (update)
export async function PUT(request: Request) {
    try {
        const data = await request.json();
        const { _id, ...updateData } = data;

        if (!_id) {
            return NextResponse.error(new Error('Vendor ID is required'), { status: 400 });
        }

        const updatedVendor = await Vendor.findByIdAndUpdate(_id, updateData, { new: true });
        if (!updatedVendor) {
            return NextResponse.error(new Error('Vendor not found'), { status: 404 });
        }

        return NextResponse.json(updatedVendor);
    } catch (error) {
        console.error('Error updating vendor:', error);
        return NextResponse.error(new Error('Failed to update vendor'));
    }
}

// Handler for DELETE requests
export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const _id = searchParams.get('_id');

        if (!_id) {
            return NextResponse.error(new Error('Vendor ID is required'), { status: 400 });
        }

        const deletedVendor = await Vendor.findByIdAndDelete(_id);
        if (!deletedVendor) {
            return NextResponse.error(new Error('Vendor not found'), { status: 404 });
        }

        return NextResponse.json({ message: 'Vendor deleted successfully' });
    } catch (error) {
        console.error('Error deleting vendor:', error);
        return NextResponse.error(new Error('Failed to delete vendor'));
    }
}
