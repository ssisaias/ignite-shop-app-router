"use client";

import { ProductCard } from "@/components/product";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

export type ProductContainerProps = {
  productData?: {
    id: string;
    name: string;
    imageUrl: string;
    priceId: string;
    price: number;
  }[];
};

export function ProductContainer({ productData }: ProductContainerProps) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 44,
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
      {productData &&
        productData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            imageUrl={product.imageUrl}
            name={product.name}
            priceId={product.priceId}
            price={product.price}
          ></ProductCard>
        ))}
    </div>
  );
}
