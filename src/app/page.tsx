import { ProductContainer } from "@/components/productContainer";

export default function Home() {
  return (
    <main className="ml-auto flex min-h-[440px] w-[calc(100vw-((100vw-1180px)/2))]">
      <ProductContainer />
    </main>
  );
}
