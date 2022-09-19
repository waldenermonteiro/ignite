/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";

import { stripe } from "../../services/stripe";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const session = await getSession({ req });

    console.log(session)

    const stripeCustomer = await stripe.customers.create({
      email: session?.user?.email,
    });

    const checkoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ["card"],
      billing_address_collection: "required",
      line_items: [{ price: "price_1Kf6mLL8Z5pBp40NHg85ubDA", quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: true,
      cancel_url: process.env.STRIPE_SUCCESS_URL,
      success_url: process.env.STRIPE_CANCEL_URL,
    });

    return res.status(200).json({ sessionId: checkoutSession.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
