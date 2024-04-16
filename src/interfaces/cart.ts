export interface CommonProviderProps {
  children: React.ReactNode;
}

export interface Cart {
  uuid: string;
  createdDate: Date;
  items: CartItem[];
  totalPrice: number;
  selectedPaymentMethod?: string;
  cartHidden: boolean;
}

/**
 * Interface representing a cart item.
 * @interface
 * @property {string} priceId - The Stripe price id of the item.
 * @property {number} price - The price of the item in cents.
 * @property {number} quantity - The quantity of the item.
 */
export interface CartItem {
  priceId: string;
  price: number;
  quantity: number;
}
