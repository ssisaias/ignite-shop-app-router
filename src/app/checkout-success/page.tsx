import { stripe } from "@/lib/stripe";

import SuccessClientPage from "./checkout-success";
import { ServerPageParamProps } from "../interfaces/server-page-props";

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

export default async function CheckoutSuccess({
  params,
  searchParams,
}: ServerPageParamProps) {
  const checkoutDetails = await getCheckoutDetails(
    searchParams?.session_id as string,
  );
  console.log(checkoutDetails?.line_items?.data[0].price?.product);

  return <SuccessClientPage checkoutDetails={checkoutDetails!} />;
}
