import CartItem from "./Item";
import { useCart } from "../../store/CartContext";

function CartList() {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCart();
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-8">Your Cart</h2>
      <div>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
        {cartItems.length < 1 && (
          <div className="text-center my-4">Your cart is empty</div>
        )}
      </div>
    </div>
  );
}

export default CartList;
