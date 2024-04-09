
type ProductIdProps = {
  params: {
    id: string;
  };
};

export default function ProductId({ params }: ProductIdProps) {
  /* Here we achieve what Diego shows around the 5 minute mark at the class "Criando rotas da aplicação" */
  /* It is how we do dynamic routing in next */
  return (
    <div>
      {/* and this is how we see the params (remember this is a Server Side Component - this makes difference) */}
      Product: {JSON.stringify(params)}
    </div>
  );
}
