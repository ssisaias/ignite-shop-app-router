import { stripe } from "@/lib/stripe";
import { log } from "console";
import { NextRequest, NextResponse } from "next/server";

interface LineItem {
  priceId: string;
  quantity: number;
}

export async function POST(request: NextRequest) {
  const payload = await request.json();

  if (!payload || payload.length === 0) {
    return NextResponse.json(new Error("no products provided"), {
      status: 400,
    });
  }

  const sucessUrl =
    process.env.NEXT_URL +
    "/checkout-success2?session_id={CHECKOUT_SESSION_ID}";
  const cancelUrl = process.env.NEXT_URL + "/";

  const lineItems = payload.products.map((p: LineItem) => {
    return {
      price: p.priceId,
      quantity: p.quantity,
    };
  });
  console.log(lineItems);
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: sucessUrl,
    cancel_url: cancelUrl,
    line_items: lineItems,
  });

  console.log(checkoutSession);

  return NextResponse.json(
    {
      checkoutUrl: checkoutSession.url,
    },
    { status: 201, headers: { "Content-Type": "application/json" } },
  );
}
