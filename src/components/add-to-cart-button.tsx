"use client";

import { CartContext } from "@/contexts/CartContext";
import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

interface ButtonProps {
  priceId?: string;
  price: number;
  productName: string;
  productImgUrl?: string;
  mode: "icon" | "text" | "both";
}

export function AddToCartButton(props: ButtonProps) {
  const cart = useContext(CartContext);
  const [buttonClicked, setButtonClicked] = useState(false);

  async function handleBuyProduct() {
    setButtonClicked(true);
    console.log(props?.priceId);
    try {
      cart.addItemToCart({
        priceId: props?.priceId!,
        price: props.price,
        name: props.productName,
        imgUrl: props.productImgUrl,
        quantity: 1,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setButtonClicked(false);
      }, 250);
    }
  }

  const mode = props.mode || "both";

  return (
    <button
      onClick={handleBuyProduct}
      className="mt-auto flex cursor-pointer items-center justify-center rounded-lg border-0 bg-green-600 p-5 font-bold text-white hover:bg-opacity-75 disabled:cursor-wait disabled:bg-gray-500"
      disabled={buttonClicked}
    >
      {mode === "both" && (
        <>
          {"Add to cart"}
          <ShoppingCart className="ml-2" size={24} />
        </>
      )}
      {mode === "text" && "Add to cart"}
      {mode === "icon" && <ShoppingCart size={24} />}
    </button>
  );
}
