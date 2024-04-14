import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

import SuccessClientPage from "./checkout-success";
import { useRouter } from "next/navigation";
import { log } from "console";
/* localhost:3000/checkout-success?session_id=cs_test_a1NRUJ8NynPulaThUlv4vCTuh54db7UUK7gLADT5lgizNutcCA1HJkjqsI */

type ProductData = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: string;
  defaultPriceId: string;
};

async function getCheckoutDetails(sessionId: string) {
  if (!sessionId) return;

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
}: {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const checkoutDetails = await getCheckoutDetails(
    searchParams?.session_id as string,
  );
  console.log(checkoutDetails?.line_items?.data[0].price?.product);

  return <SuccessClientPage checkoutDetails={checkoutDetails!} />;
}
