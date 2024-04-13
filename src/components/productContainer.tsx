"use client";

import { ProductCard } from "@/components/product";

import { useKeenSlider } from "keen-slider/react";

import camiseta1 from "../assets/shirts/1.png";
import camiseta2 from "../assets/shirts/2.png";
import camiseta3 from "../assets/shirts/3.png";
import "keen-slider/keen-slider.min.css";

export function ProductContainer() {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 48,
    },
    drag: true,
  });

  function nextSlider(e: any) {
    e.preventDefault();
    const delta = Math.max(-1, Math.min(1, e.deltaY || e.deltaX));
    setTimeout(() => {
      if (delta < 0) {
        instanceRef?.current?.prev();
      } else if (delta > 0) {
        instanceRef?.current?.next();
      }
    }, 350);
  }

  return (
    <div
      className="flex min-h-[440px] overflow-hidden"
      ref={sliderRef}
      onWheel={(e) => nextSlider(e)}
    >
      {/* Home container */}
      <ProductCard image={camiseta1}></ProductCard>
      <ProductCard image={camiseta2}></ProductCard>
      <ProductCard image={camiseta1}></ProductCard>
      <ProductCard image={camiseta3}></ProductCard>
    </div>
  );
}
