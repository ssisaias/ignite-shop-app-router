"use client";

import axios from "axios";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ButtonProps {
  priceId?: string;
  mode: "icon" | "text" | "both";
}

export function AddToCartButton(props: ButtonProps) {
  const router = useRouter();
  const [buttonClicked, setButtonClicked] = useState(false);

  async function handleBuyProduct() {
    setButtonClicked(true);
    console.log(props?.priceId);
    try {
      /* const checkoutSessionResponse = await axios.get("/api/checkout", {
        params: {
          priceId: props?.priceId,
        },
      });
      const checkoutUrl = await checkoutSessionResponse.data;
      router.push(checkoutUrl.checkoutUrl); */
    } catch (error) {
      console.log(error);
      setButtonClicked(false);
    }
  }

  const mode = props.mode || "both";

  return (
    <button
      onClick={handleBuyProduct}
      className="mt-auto flex cursor-pointer items-center justify-center rounded-lg border-0 bg-green-600 p-5 font-bold text-white hover:bg-opacity-75 disabled:cursor-not-allowed disabled:bg-gray-500"
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
