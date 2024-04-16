"use client";

import { CartContext } from "@/contexts/CartContext";
import { ShoppingBag } from "lucide-react";
import { useContext } from "react";

export function BotaoSacola() {
  const cartContext = useContext(CartContext);
  const quantity = cartContext.getItemQuantity();
  return (
    <button
      className="rounded-lg bg-gradient-to-b from-[#1ea483] to-[#7465d4] p-1 hover:bg-gradient-to-t"
      onClick={() => cartContext.toggleCartHidden()}
    >
      <div>
        {quantity > 0 && (
          <span className="absolute -mt-2 ml-4 flex h-5 w-5 items-center justify-center rounded-full bg-purple-500 text-md font-bold text-white">
            {quantity}
          </span>
        )}
        <ShoppingBag />
      </div>
    </button>
  );
}
