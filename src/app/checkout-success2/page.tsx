import { stripe } from "@/lib/stripe";

import SuccessClientPage from "./checkout-success2";
import { ServerPageParamProps } from "../../interfaces/server-page-props";
import { Metadata } from "next";
import Stripe from "stripe";

async function getCheckoutDetails(sessionId: string) {
  if (!sessionId) return null;

  const response = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["customer", "line_items.data.price.product"],
  });

  console.log(response);
  if (response) {
    return response;
  }
}

export const metadata: Metadata = {
  title: "Purchase completed",
  robots: "noindex",
};

export default async function CheckoutSuccess({
  params,
  searchParams,
}: ServerPageParamProps) {
  const checkoutDetails = await getCheckoutDetails(
    searchParams?.session_id as string,
  );
  console.log(checkoutDetails?.line_items?.data[0].price?.product);

  const products = checkoutDetails?.line_items?.data.map((item) => {
    return {
      name: (item.price?.product as Stripe.Product).name,
      imgUrl: (item.price?.product as Stripe.Product).images[0],
    };
  });

  return (
    <SuccessClientPage
      customerName={checkoutDetails?.customer_details?.name!}
      products={products!}
    />
  );
}
