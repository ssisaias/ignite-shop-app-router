"use client";

import Image, { StaticImageData } from "next/image";

interface productCardProps {
  image: StaticImageData;
}

export function ProductCard(props: productCardProps) {
  return (
    <div className="keen-slider__slide">
      <a className="group relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4] transition delay-150 ease-in-out hover:scale-105 hover:bg-gradient-to-t">
        <Image
          src={props.image}
          alt=""
          width={520}
          height={480}
          className="object-cover"
        />
        <footer className="duration-400 absolute bottom-[0.25rem] flex w-[98%] translate-y-[110%] items-center justify-between rounded bg-[rgba(0,0,0,0.6)] p-[1rem] opacity-0 transition-all ease-in-out group-hover:translate-y-[0%] group-hover:opacity-100">
          <strong className="ml-2 flex-col text-lg">Camiseta X</strong>
          <span className="mr-2 flex-col text-xl font-bold text-green-300">
            R$ 129,90
          </span>
        </footer>
      </a>
    </div>
  );
}
