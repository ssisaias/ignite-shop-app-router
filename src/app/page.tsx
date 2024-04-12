'use client'

import { ProductContainer } from "@/components/product";

import { useKeenSlider } from "keen-slider/react";

import camiseta1 from "../assets/shirts/1.png";
import camiseta2 from "../assets/shirts/2.png";
import camiseta3 from "../assets/shirts/3.png";
import "keen-slider/keen-slider.min.css";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  return (
    <main className="ml-auto flex min-h-[440px] w-[calc(100vw-((100vw-1180px)/2))]" ref={sliderRef}>
      {/* Home container */}
      <ProductContainer image={camiseta1}></ProductContainer>
      <ProductContainer image={camiseta2}></ProductContainer>
      <ProductContainer image={camiseta3}></ProductContainer>
      <ProductContainer image={camiseta1}></ProductContainer>
    </main>
  );
}
