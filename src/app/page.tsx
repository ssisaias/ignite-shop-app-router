import { ProductContainer } from "@/components/productContainer";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

type ProductData = {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
};

async function getProducts() {
  const response = await stripe.products.list({
    limit: 10,
    expand: ['data.default_price']
  });

  if (response) {
    const productData: ProductData[] = response.data.map((product) => {
      const price = product.default_price as Stripe.Price;
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: (price?.unit_amount || 0) / 100,
      };
    });
    return JSON.parse(JSON.stringify(productData));
  }
}
export default async function Home() {
  const productData = await getProducts();
  
  return (
    <main className={`ml-auto flex min-h-[440px] w-[calc(100vw-((100vw-1180px)/2))]`}>
      <ProductContainer productData={productData} />
    </main>
  );
}
