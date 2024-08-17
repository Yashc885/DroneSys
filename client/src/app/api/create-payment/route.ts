import { NextRequest, NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
    try {
        const { amount } = await request.json();

        // Ensure amount is provided and is a valid number
        if (!amount || isNaN(amount)) {
            return NextResponse.json(
                { error: "Invalid amount" },
                { status: 400 }
            );
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: "usd",
            automatic_payment_methods: { enabled: true },
        });

        // Return the clientSecret to the frontend
        return NextResponse.json(
            { clientSecret: paymentIntent.client_secret },
            { status: 200 }
        );
    } catch (error) {
        console.error("Internal error:", error);
        return NextResponse.json(
            { error: `Internal server Error: ${error.message}` },
            { status: 500 }
        );
    }
}
