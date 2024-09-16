import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Subscription from '../../../models/subscriptionModel'; // Ensure the path is correct
import connect from '../../../Database/config'; // Ensure the path is correct

// CREATE (POST): Create a new subscription
export async function POST(req: Request) {
    try {
        await connect(); // Ensure the database connection is established

        const body = await req.json();
        const { user_id, transaction_id, plan, start_date, expiry_date } = body;

        console.log('Received subscription data:', {
            user_id,
            transaction_id,
            plan,
            start_date,
            expiry_date
        });

        // Validate input
        if (!user_id || !transaction_id || !plan || !start_date || !expiry_date) {
            return NextResponse.json({ msg: 'All fields are required' }, { status: 400 });
        }

        // Create a new subscription
        const newSubscription = new Subscription({
            user_id,
            transaction_id,
            plan,
            start_date: new Date(start_date),
            expiry_date: new Date(expiry_date)
        });

        // Save the subscription to the database
        const savedSubscription = await newSubscription.save();

        console.log('Subscription successfully created:', savedSubscription);

        return NextResponse.json({ msg: 'Subscription successfully created', subscription: savedSubscription }, { status: 201 });
    } catch (error) {
        console.error('Error creating subscription:', error);
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}

// READ (GET): Get all subscriptions or a specific subscription by ID
export async function GET(req: Request) {
    try {
        await connect(); // Ensure the database connection is established

        const { searchParams } = new URL(req.url);
        const subscriptionId = searchParams.get('id');

        if (subscriptionId) {
            // Fetch a specific subscription by ID
            const subscription = await Subscription.findById(subscriptionId);
            if (!subscription) {
                return NextResponse.json({ msg: 'Subscription not found' }, { status: 404 });
            }
            return NextResponse.json({ subscription }, { status: 200 });
        } else {
            // Fetch all subscriptions
            const subscriptions = await Subscription.find();
            return NextResponse.json({ subscriptions }, { status: 200 });
        }
    } catch (error) {
        console.error('Error fetching subscriptions:', error);
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}

// UPDATE (PUT): Update a subscription by ID
export async function PUT(req: Request) {
    try {
        await connect(); // Ensure the database connection is established

        const body = await req.json();
        const { id, user_id, transaction_id, plan, start_date, expiry_date } = body;

        // Validate input
        if (!id || !user_id || !transaction_id || !plan || !start_date || !expiry_date) {
            return NextResponse.json({ msg: 'All fields are required' }, { status: 400 });
        }

        // Find the subscription by ID and update it
        const updatedSubscription = await Subscription.findByIdAndUpdate(
            id,
            { user_id, transaction_id, plan, start_date, expiry_date },
            { new: true }
        );

        if (!updatedSubscription) {
            return NextResponse.json({ msg: 'Subscription not found' }, { status: 404 });
        }

        return NextResponse.json({ msg: 'Subscription successfully updated', subscription: updatedSubscription }, { status: 200 });
    } catch (error) {
        console.error('Error updating subscription:', error);
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}

// DELETE (DELETE): Delete a subscription by ID
export async function DELETE(req: Request) {
    try {
        await connect(); // Ensure the database connection is established

        const { searchParams } = new URL(req.url);
        const subscriptionId = searchParams.get('id');

        if (!subscriptionId) {
            return NextResponse.json({ msg: 'Subscription ID is required' }, { status: 400 });
        }

        // Find the subscription by ID and delete it
        const deletedSubscription = await Subscription.findByIdAndDelete(subscriptionId);

        if (!deletedSubscription) {
            return NextResponse.json({ msg: 'Subscription not found' }, { status: 404 });
        }

        return NextResponse.json({ msg: 'Subscription successfully deleted' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting subscription:', error);
        return NextResponse.json({ msg: 'Internal server error' }, { status: 500 });
    }
}
