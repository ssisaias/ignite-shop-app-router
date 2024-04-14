import { ImageContainer } from "@/components/imageContainer";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Purchase completed",
};

export default async function successPage() {
  return (
    <main className="m-auto flex flex-col items-center justify-center">
      <h1 className="text-xxl text-gray-100 font-bold mb-14">Compra efetuada!</h1>

      <ImageContainer
        imageUrl={""}
        alt=""
        width={125}
        height={125}
        className="flex items-center justify-center rounded-lg p-1 max-w-48"
      />

      <p className="text-lg text-gray-300 mt-10 mb-6 text-center leading-5">
        Uhul, <strong>Fulano</strong>, sua{" "}
        <strong>&lt;nome do producto&gt;</strong> já ta chegando, pucto!
      </p>

      <Link href="/" className="text-violet-500 hover:text-violet-300">
        Voltar para a página inicial
      </Link>
    </main>
  );
}
