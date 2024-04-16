import { stripe } from "@/lib/stripe";
import { log } from "console";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

interface LineItem {
  priceId: string;
  quantity: number;
}

export async function POST(request: NextApiRequest) {
  log('api v2 request ', request);
  
  const products = request.body.products;
  
  if (!products || products.length === 0) {
    return NextResponse.json(new Error('no products provided'), {status: 400});
  }

  const sucessUrl = process.env.NEXT_URL + "/checkout-success2?session_id={CHECKOUT_SESSION_ID}";
  const cancelUrl = process.env.NEXT_URL + "/";

  const lineItems = products.map((p: LineItem) => {
    return {
      price: p.priceId,
      quantity: p.quantity,
    };
  });

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    success_url: sucessUrl,
    cancel_url: cancelUrl,
    line_items: lineItems
  });

  console.log(checkoutSession);
  
  return NextResponse.json({
    checkoutUrl: checkoutSession.url,
  }, {status: 201, headers: {'Content-Type': 'application/json'}});
}
