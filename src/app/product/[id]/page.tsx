import { stripe } from "@/lib/stripe";
import { log } from "console";
import Image from "next/image";
import Stripe from "stripe";
import { BuyClientButton } from "./buy-client-button";

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

//className={`${roboto.className} `}
export default async function ProductId({ params }: ProductIdProps) {
  /* Here we achieve what Diego shows around the 5 minute mark at the class "Criando rotas da aplicação" */
  /* It is how we do dynamic routing in next */
  /* <div> */
  /* and this is how we see the params (remember this is a Server Side Component - this makes difference) */
  /* Product: {JSON.stringify(params)} */
  /* </div> */
  const productDetails = await getProductDetails(params.id);
  log(productDetails);

  return (
    <main
      id="productContainer"
      className="m-auto grid max-w-5xl grid-flow-col grid-cols-2 items-stretch gap-[4rem]"
    >
      <div
        id="imgContainer"
        className=" flex h-[calc(450px-0.5rem)] w-[100%] min-w-[446px] max-w-[576px] items-center justify-center rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4] p-[0.25rem]"
      >
        <Image
          src={productDetails?.imageUrl!}
          alt=""
          width={520}
          height={480}
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAMAAAC67D+PAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAELUExURSQkJC8vMDAwMSgoKUxMTTk5OTg4OUVFRkBAQTQ0NRMTExISEignKTg4ODU1NSwsLTExMS4uLgwMDFBQUEJCQzw8PSEhIT09Pf///z9AQB4eHgAAAD09PkJCQrO0tjMzMwgICAAAADg4OSsrLB4eHxgXGDY2NkJCQywsLCYmJjIyMzIyMklJSiIiIigpKSYmJTg4OB4eHhYWFjM7PygpKSYlJTs7PCcnJyYnJ0dHRyUlJSQkJEZGRl1dXSUlJiYmJkhISVJSUyUlJRYWFhQUFCUlJkdHSB8fHxUVFRYWFiEhISgoKS8xMhUVFSYpKkpUWTM4OxYYGS83OxYWFhcYGBMTExcXFxQUFP///4bNLmYAAABLdFJOUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABggEO5qkSwpR4u5mBaSmBgd24u5vBQWYzheOyhUEocoUBHbBwYcMCBISCJR2NosAAAABYktHRBibaYUeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH6AQNBSMDEEKpYgAAAHRJREFUCNdjYGBkYlZQZGFlY2fg4FRSVlFVU2fjYuDg1tD09tHS5uFl4NPR9fXzD9DT52cQMDA0CgwyNjEVZBASNjMPDrGwFBFlEBOXsAoOtbaRlGKQlrG1Cwu3d5CVZpAWdXRydnF14wAyOeXcPTy9WOSlAQBSEAdwdpLuAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDI0LTA0LTEzVDA1OjM0OjQ2KzAwOjAwfYfJCQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyNC0wNC0xM1QwNTozNDo0NiswMDowMAzacbUAAAAodEVYdGRhdGU6dGltZXN0YW1wADIwMjQtMDQtMTNUMDU6MzU6MDMrMDA6MDBifxoJAAAAAElFTkSuQmCC"
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
        <BuyClientButton
          priceId={productDetails?.defaultPriceId}
        ></BuyClientButton>
      </div>
    </main>
  );
}
