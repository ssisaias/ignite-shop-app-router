'use client'

import { ProductCard } from "@/components/product";

import { useKeenSlider } from "keen-slider/react";

import camiseta1 from "../assets/shirts/1.png";
import camiseta2 from "../assets/shirts/2.png";
import camiseta3 from "../assets/shirts/3.png";
import "keen-slider/keen-slider.min.css";

export function ProductContainer() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })
  return (
    <div className="flex min-h-[440px]" ref={sliderRef}>
      {/* Home container */}
      <ProductCard image={camiseta1}></ProductCard>
      <ProductCard image={camiseta2}></ProductCard>
      <ProductCard image={camiseta3}></ProductCard>
      <ProductCard image={camiseta1}></ProductCard>
    </div>
  );
}
