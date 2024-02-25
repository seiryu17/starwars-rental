import React from "react";
import { useCart } from "../../store/CartContext";
import Layout from "../../components/Layout";
import CartList from "../../components/Cart/List";

const CartPage = () => {
  const { cartItems, clearCart } = useCart();
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Layout>
      <CartList />
      {cartItems.length > 0 && (
        <>
          <span className="container mx-auto px-4 flex justify-end text-2xl font-extrabold">
            Total: $ {totalPrice}
          </span>
          <div className="container mx-auto px-4 flex gap-4 justify-end">
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <button
              className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => {
                alert("Thank you for shopping!");
                clearCart();
              }}
            >
              Buy Now
            </button>
          </div>
        </>
      )}
    </Layout>
  );
};

export default CartPage;
