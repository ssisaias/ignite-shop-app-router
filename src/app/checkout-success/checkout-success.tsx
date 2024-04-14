import { ImageContainer } from "@/components/imageContainer";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessClientPageProps {
  checkoutDetails: Stripe.Response<Stripe.Checkout.Session>;
}

export default async function SuccessClientPage({
  checkoutDetails,
}: SuccessClientPageProps) {
  let customerName;
  let product;
  const noData = !checkoutDetails;
  if (checkoutDetails) {
    customerName = checkoutDetails.customer_details?.name;
    product = checkoutDetails.line_items?.data[0].price
      ?.product as Stripe.Product;
  }

  return (
    <main className="m-auto flex flex-col items-center justify-center">
      {noData ? (
        <>
          <h1 className="mb-14 text-xxl font-bold text-gray-100">
            Compra não efetuada!
          </h1>
          <h1 className="mb-14 flex items-center justify-center text-lg text-gray-100">
            Encontramos um erro, e já estamos trabalhando para resolver! Tente
            de novo mais tarde.
          </h1>
        </>
      ) : (
        <>
          <h1 className="mb-14 text-xxl font-bold text-gray-100">
            Compra efetuada!
          </h1>

          <ImageContainer
            imageUrl={product?.images[0]!}
            alt=""
            width={125}
            height={125}
            className="flex max-w-48 items-center justify-center rounded-lg p-1"
          />

          <p className="mb-6 mt-10 text-center text-lg leading-5 text-gray-300">
            ¡¡Uhul, <strong>{customerName}</strong>, sua{" "}
            <strong>{product?.name}</strong> já ta chegando!!
          </p>

          <Link href="/" className="text-violet-500 hover:text-violet-300">
            Voltar para a página inicial
          </Link>
        </>
      )}
    </main>
  );
}
