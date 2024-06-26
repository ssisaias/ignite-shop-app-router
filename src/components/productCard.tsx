"use client";

import Link from "next/link";
import { ImageContainer } from "./imageContainer";
import { AddToCartButton } from "./add-to-cart-button";

interface productCardProps {
  id: string;
  name: string;
  priceId: string;
  imageUrl: string;
  price: number;
}

export function ProductCard(props: productCardProps) {
  return (
    <div className="keen-slider__slide">
      <div className="group relative left-2 top-2 flex cursor-pointer items-center justify-center overflow-hidden rounded-lg">
        <Link className="" href={`/product/${props.id}`} prefetch={false}>
          <ImageContainer
            imageUrl={props.imageUrl}
            alt=""
            width={520}
            height={520}
          />
        </Link>
        <footer className="duration-400 absolute bottom-[0.25rem] flex w-[98%] translate-y-[110%] items-center justify-between rounded bg-[rgba(0,0,0,0.6)] p-[1rem] opacity-0 transition-all ease-in-out group-hover:translate-y-[0%] group-hover:opacity-100">
          <div className="flex flex-col">
            <strong className="flex-col text-md">{props.name}</strong>
            <span className="flex-col text-lg font-bold text-green-300">
              {props.price.toLocaleString("en-US", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <div>
            <AddToCartButton
              priceId={props.priceId}
              price={props.price}
              mode="icon"
              productName={props.name}
              productImgUrl={props.imageUrl}
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
