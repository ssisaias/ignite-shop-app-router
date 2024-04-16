"use client";

import { CartContext } from "@/contexts/CartContext";
import { Trash2, X } from "lucide-react";
import { useContext } from "react";
import clsx from "clsx";

export function CartOverlay() {
  const cart = useContext(CartContext);
  const mainClass = clsx({
    "fixed right-0 top-0 h-[100%] w-[40%] bg-gray-800 p-4 transition-all duration-500":
      true,
    "-right-80 w-80": cart.cart.cartHidden,
    "right-0 w-80": !cart.cart.cartHidden,
  });
  return (
    <>
      {!cart.cart.cartHidden && (
        <div className={mainClass}>
          <div className="flex flex-row content-between">
            <h1 className="text-xl font-bold text-gray-300">
              Sacola de Compras
            </h1>
            <button
              className="absolute right-4 top-6 rounded"
              onClick={() => cart.toggleCartHidden()}
            >
              <X className="text-gray-400" size="24px" />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {cart.cart.items.map((item) => (
              <div
                className="flex items-center justify-between"
                key={item.priceId}
              >
                <div className="flex gap-4">
                  <div>
                    <h1 className="font-bold text-white">{item.priceId}</h1>
                    <h1 className="font-bold text-white">
                      {`${item.quantity} x ${item.price.toLocaleString(
                        "pt-BR",
                        {
                          style: "currency",
                          currency: "BRL",
                        },
                      )}`}
                    </h1>
                  </div>
                </div>
                <button
                  className="rounded"
                  onClick={() => cart.removeItem(item.priceId)}
                >
                  <Trash2></Trash2>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h1 className="font-bold text-white">Total:</h1>
            <h1 className="font-bold text-white">
              {cart.cart.totalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <button className="absolute bottom-4 mt-4 w-10/12 rounded bg-green-500 p-2 text-md font-bold text-gray-100 hover:opacity-85">
              Finalizar Compra
            </button>
          </div>
        </div>
      )}
    </>
  );
}
