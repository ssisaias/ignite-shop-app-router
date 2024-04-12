"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface productContainerProps {
  image: StaticImageData;
}

export function ProductContainer(props: productContainerProps) {
  return (
    <a className="relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4] transition delay-150 ease-in-out hover:scale-105 hover:bg-gradient-to-t group keen-slider__slide">
      <Image
        src={props.image}
        alt=""
        width={520}
        height={480}
        className="object-cover"
      />
      <footer className="absolute bottom-[0.25rem] flex w-[98%] translate-y-[110%] items-center justify-between rounded bg-[rgba(0,0,0,0.6)] p-[1rem] opacity-0 transition-all duration-400 ease-in-out group-hover:translate-y-[0%] group-hover:opacity-100">
        <strong className="ml-2 flex-col text-lg">Camiseta X</strong>
        <span className="mr-2 flex-col text-xl font-bold text-green-300">
          R$ 129,90
        </span>
      </footer>
    </a>
  );
}
