import { ProductContainer } from "@/components/product";

import camiseta1 from '../assets/shirts/1.png';
import camiseta2 from '../assets/shirts/2.png';
import camiseta3 from '../assets/shirts/3.png';

export default function Home() {
  return (
    <main className="flex gap-[3rem] w-[calc(100vw-((100vw-1180px)/2))] ml-auto min-h-[440px]">{/* Home container */}
      <ProductContainer image={camiseta1}></ProductContainer>
      <ProductContainer image={camiseta2}></ProductContainer>
      <ProductContainer image={camiseta3}></ProductContainer>
    </main>
  );
}
