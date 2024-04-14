import { ImageContainer } from "@/components/imageContainer";
import type { Metadata } from "next";
import Link from "next/link";
import Stripe from "stripe";

export const metadata: Metadata = {
  title: "Purchase completed",
};

interface SuccessClientPageProps {
  checkoutDetails: Stripe.Response<Stripe.Checkout.Session>
}

export default async function SuccessClientPage({ checkoutDetails }: SuccessClientPageProps) {
  const customerName = checkoutDetails.customer_details?.name;
  const product = checkoutDetails.line_items?.data[0].price?.product as Stripe.Product

  return (
    <main className="m-auto flex flex-col items-center justify-center">
      <h1 className="text-xxl text-gray-100 font-bold mb-14">Compra efetuada!</h1>

      <ImageContainer
        imageUrl={product.images[0]}
        alt=""
        width={125}
        height={125}
        className="flex items-center justify-center rounded-lg p-1 max-w-48"
      />

      <p className="text-lg text-gray-300 mt-10 mb-6 text-center leading-5">
      ¡¡Uhul, <strong>{customerName}</strong>, sua{" "}
        <strong>{product.name}</strong> já ta chegando!!
      </p>

      <Link href="/" className="text-violet-500 hover:text-violet-300">
        Voltar para a página inicial
      </Link>
    </main>
  );
}
