type ProductIdProps = {
  params: {
    id: string;
  };
};
//className={`${roboto.className} `}
export default function ProductId({ params }: ProductIdProps) {
  /* Here we achieve what Diego shows around the 5 minute mark at the class "Criando rotas da aplicação" */
  /* It is how we do dynamic routing in next */
  /* <div> */
  /* and this is how we see the params (remember this is a Server Side Component - this makes difference) */
  /* Product: {JSON.stringify(params)} */
  /* </div> */
  return (
    <main
      id="productContainer"
      className="m-auto grid max-w-5xl grid-flow-col grid-cols-2 items-stretch gap-[4rem]"
    >
      <div
        id="imgContainer"
        className="flex h-[calc(450px-0.5rem)] w-[100%] max-w-[576] items-center justify-center rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4] p-[0.25rem]"
      >
        ABABABAB
      </div>

      <div id="producDetails" className="flex flex-col">
        <h1 className="text-xxl text-gray-300">Camiseta X</h1>
        <span className="mt-4 text-xxl text-green-500">R$ 129,90</span>
        <p className="mt-10 text-md leading-6 text-gray-300">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus
          pariatur omnis perspiciatis cupiditate porro mollitia doloremque
          facere asperiores distinctio quae? Error omnis dicta distinctio facere
          maiores animi velit est sequi.
        </p>
        <button className="mt-auto cursor-pointer rounded-lg border-0 bg-green-500 p-5 font-bold text-white hover:bg-opacity-75">
          Comprar agora
        </button>
      </div>
    </main>
  );
}
