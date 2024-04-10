'use client'

export default function Product() {
  
  function btnClick() {
    console.log("btnClick");
  }

  return (
    <>
      <div className="text-2xl">Product</div>
      <button className="bg-green-500 text-white p-2 rounded hover:bg-opacity-75" onClick={btnClick}>SEU BOTAO</button>{/* see tailwind.config.ts */}
    </>
  );
}
