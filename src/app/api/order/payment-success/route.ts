import { prismaClient } from "@/lib/prisma";
import Stripe from "stripe";

import { NextResponse } from "next/server";
import { buffer } from "node:stream/consumers";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req: any) {
  const rawBody = await buffer(req.body);
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      req.headers.get("stripe-signature") as string,
      process.env.STRIPE_WEBHOOK_SECRET_KEY as string,
    );

    if (event.type === "checkout.session.completed") {
      const session = event.data.object as any;

      const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
        event.data.object.id,
        {
          expand: ["line_items"],
        },
      );
      const lineItems = sessionWithLineItems.line_items;

      // ATUALIZAR PEDIDO
      await prismaClient.order.update({
        where: {
          id: session.metadata.orderId,
        },
        data: {
          status: "PAYMENT_CONFIRMED",
        },
      });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {
        message: "Webhook signature verification failed",
      },
      {
        status: 400,
      },
    );
  }
}
