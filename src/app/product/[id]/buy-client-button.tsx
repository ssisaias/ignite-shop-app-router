"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ButtonProps {
  priceId?: string;
}

export function BuyClientButton(props: ButtonProps) {
  const router = useRouter()
  const [buttonClicked, setButtonClicked] = useState(false);

  async function handleBuyProduct() {
    setButtonClicked(true);
    console.log(props?.priceId);
    try {
      const requestUrl = new URL('/api/checkout');
      const checkoutSessionResponse = await axios.get(requestUrl.toString(), {
        params: {
          priceId: props?.priceId,
        },
      });
      const checkoutUrl = await checkoutSessionResponse.data;
      router.push(checkoutUrl.checkoutUrl);
    } catch (error) {
      console.log(error);
      setButtonClicked(false);
    }
  }

  return (
    <button
      onClick={handleBuyProduct}
      className="mt-auto cursor-pointer rounded-lg border-0 bg-green-600 p-5 font-bold text-white hover:bg-opacity-75 disabled:cursor-not-allowed disabled:bg-gray-500"
      disabled={buttonClicked}
    >
      Comprar agora
    </button>
  );
}
