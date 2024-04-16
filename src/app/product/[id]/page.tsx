import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { AddToCartButton } from "../../../components/add-to-cart-button";
import { ImageContainer } from "@/components/imageContainer";
import type { Metadata, ResolvingMetadata } from "next";
import { ServerPageParamProps } from "@/interfaces/server-page-props";

type ProductIdProps = {
  params: {
    id: string;
  };
};

type ProductData = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: string;
  defaultPriceId: string;
};

async function getProductDetails(pId: string) {
  if (!pId) return;

  const response = await stripe.products.retrieve(pId, {
    expand: ["default_price"],
  });

  if (response) {
    const pPrice = response.default_price as Stripe.Price;
    const productData: ProductData = {
      id: response.id,
      name: response.name,
      imageUrl: response.images[0] || "",
      description: response.description || "",
      price: ((pPrice.unit_amount || 0) / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: pPrice.currency as string,
      }),
      defaultPriceId: pPrice.id,
    };

    return productData;
  }
}

export async function generateMetadata(
  { params, searchParams }: ServerPageParamProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const productData = await getProductDetails(params.id);
  return {
    title: productData?.name + " | Shop",
  };
}

//className={`${roboto.className} `}
export default async function ProductById({ params }: ProductIdProps) {
  /* Here we achieve what Diego shows around the 5 minute mark at the class "Criando rotas da aplicação" */
  /* It is how we do dynamic routing in next */
  /* <div> */
  /* and this is how we see the params (remember this is a Server Side Component - this makes difference) */
  /* Product: {JSON.stringify(params)} */
  /* </div> */
  const productDetails = await getProductDetails(params.id);

  return (
    <>
      <main
        id="productContainer"
        className="m-auto grid max-w-5xl grid-flow-col grid-cols-2 items-stretch gap-[4rem]"
      >
        <div
          id="imgContainer"
          className="flex h-[calc(450px-0.5rem)] w-[100%] min-w-[426px] max-w-[576px] items-center justify-center p-[0.25rem]"
        >
          <ImageContainer
            imageUrl={productDetails?.imageUrl || ""}
            alt=""
            width={520}
            height={440}
            className="max-h-[calc(450px-0.5rem)]"
          />
        </div>

        <div id="producDetails" className="flex flex-col">
          <h1 className="text-xxl text-gray-300">{productDetails?.name}</h1>
          <span className="mt-4 text-xxl text-green-500">
            {productDetails?.price}
          </span>
          <p className="mt-10 text-md leading-6 text-gray-300">
            {productDetails?.description}
          </p>
          <AddToCartButton
            priceId={productDetails?.defaultPriceId}
            mode="both"
          ></AddToCartButton>
        </div>
      </main>
    </>
  );
}
