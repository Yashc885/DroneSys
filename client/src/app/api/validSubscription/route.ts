import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Subscription from '../../../models/subscriptionModel'; // Ensure the path is correct
import connect from '../../../Database/config'; // Ensure the path is correct

// POST: Check if the subscription is valid
export async function POST(req: Request) {
    try {
        await connect(); // Ensure the database connection is established

        const body = await req.json();
        const { subscriptionId } = body;

        if (!subscriptionId) {
            return NextResponse.json({ msg: 'Subscription ID is required' }, { status: 400 });
        }

        // Find the subscription by ID
        const subscription = await Subscription.findById(subscriptionId);
        if (!subscription) {
            return NextResponse.json({ msg: 'Subscription not found' }, { status: 404 });
        }

        // Check if the subscription is still valid
        const currentDate = new Date();
        const expiryDate = new Date(subscription.expiry_date);

        if (expiryDate > currentDate) {
            return NextResponse.json({ msg: 'Subscription is valid', valid: true }, { status: 200 });
        } else {
            return NextResponse.json({ msg: 'Subscription has expired', valid: false }, { status: 200 });
        }
    } catch (error) {
        console.error('Error checking subscription validity:', error);
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}
