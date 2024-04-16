import { stripe } from "@/lib/stripe";
import { log } from "console";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  log(request);
  const priceId = new URL(request.url||'').searchParams.get('priceId');
  if (!priceId) {
    return NextResponse.json(new Error('PriceId is required'), {status: 400});
  }

  const sucessUrl = process.env.NEXT_URL + "/checkout-success?session_id={CHECKOUT_SESSION_ID}";
  const cancelUrl = process.env.NEXT_URL + "/";

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: sucessUrl,
    cancel_url: cancelUrl,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  //console.log(checkoutSession);
  
  return NextResponse.json({
    checkoutUrl: checkoutSession.url,
  }, {status: 201, headers: {'Content-Type': 'application/json'}});
}
