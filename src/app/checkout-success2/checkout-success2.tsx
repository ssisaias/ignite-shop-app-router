import { ImageContainer } from "@/components/imageContainer";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessClientPageProps {
  customerName: string;
  products: {
    name: string;
    imgUrl: string;
  }[];
}

export default function SuccessClientPage({
  customerName,
  products,
}: SuccessClientPageProps) {
  const noData = products.length === 0;
  return (
    <main className="m-auto flex flex-col items-center justify-center">
      {noData ? (
        <>
          <h1 className="mb-14 text-xxl font-bold text-gray-100">
            Compra não efetuada!
          </h1>
          <h1 className="mb-14 flex items-center justify-center text-lg text-gray-100">
            Encontramos um erro, e já estamos trabalhando para resolver! Tente
            de novo mais tarde.
          </h1>
        </>
      ) : (
        <>
          <h1 className="mb-14 text-xxl font-bold text-gray-100">
            Compra efetuada!
          </h1>

          <div className="mb-10 flex flex-row justify-center rounded-full">
            {products.map((product, index) => {
              return (
                <div key={product.imgUrl} className={`relative -mr-6`}>
                  <ImageContainer
                    imageUrl={product.imgUrl}
                    alt=""
                    width={125}
                    height={125}
                    perfectCircle={true}
                    className={`max-w-24 items-center justify-center p-1`}
                  />
                </div>
              );
            })}
          </div>

          <p className="mb-6 mt-10 text-center text-lg leading-5 text-gray-300">
            ¡¡Uhul, <strong>{customerName}</strong>, sua compra de{" "}
            <strong>{products?.length}</strong> camisetas já ta chegando!!
          </p>

          <Link href="/" className="text-violet-500 hover:text-violet-300">
            Voltar para a página inicial
          </Link>
        </>
      )}
    </main>
  );
}
