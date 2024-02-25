import { ReactNode } from "react";
import { Movie } from "./movie";

export type CartItem = Movie;

export type CartContextType = {
  cartItems: CartItem[];
  addToCart: (newItem: CartItem) => void;
  clearCart: () => void;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
};

export type CartProviderProps = {
  children?: ReactNode;
};
