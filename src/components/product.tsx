"use client";

import Image from "next/image";
import Link from "next/link";
import { ImageContainer } from "./imageContainer";

interface productCardProps {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
}

export function ProductCard(props: productCardProps) {
  return (
    <div className="keen-slider__slide">
      <Link
        className="group relative left-2 top-2 flex cursor-pointer items-center justify-center overflow-hidden rounded-lg"
        href={`/product/${props.id}`}
        prefetch={false}
      >
        <ImageContainer
          imageUrl={props.imageUrl}
          alt=""
          width={520}
          height={520}
        />
        <footer className="duration-400 absolute bottom-[0.25rem] flex w-[98%] translate-y-[110%] items-center justify-between rounded bg-[rgba(0,0,0,0.6)] p-[1rem] opacity-0 transition-all ease-in-out group-hover:translate-y-[0%] group-hover:opacity-100">
          <strong className="ml-2 flex-col text-lg">{props.name}</strong>
          <span className="mr-2 flex-col text-xl font-bold text-green-300">
            {props.price.toLocaleString("en-US", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </footer>
      </Link>
    </div>
  );
}
