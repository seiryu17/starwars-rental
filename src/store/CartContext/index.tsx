import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  CartContextType,
  CartItem,
  CartProviderProps,
} from "../../types/cartContextTypes";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (newItem: CartItem) => {
    setCartItems((prevItems) => {
      const foundIndex = prevItems.findIndex(
        (item) => item.episode_id === newItem.episode_id
      );
      if (foundIndex !== -1) {
        return prevItems.map((item, index) => {
          if (index === foundIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }];
      }
    });
    toast.success(`${newItem.title} added to cart!`);
  };

  const increaseQuantity = (itemId: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.episode_id === itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (itemId: number) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (item) => item.episode_id === itemId
      );
      if (itemIndex !== -1 && prevItems[itemIndex].quantity === 1) {
        return prevItems.filter((item) => item.episode_id !== itemId);
      } else {
        return prevItems.map((item) =>
          item.episode_id === itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
