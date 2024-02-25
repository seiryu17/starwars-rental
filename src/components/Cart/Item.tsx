import { CartItemProps } from "../../types/components/cartItem";

function CartItem({ item, increaseQuantity, decreaseQuantity }: CartItemProps) {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <img src={item.image} alt={item.title} className="w-20 h-20 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">
              {item.title}{" "}
              <span className="text-green-400">$ {item.price}</span>
            </h3>
            <span>Quantity: {item.quantity}</span>
            <p className="line-clamp-1">{item.opening_crawl}</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="bg-red-500 hover:bg-yellow-700 text-white font-bold py-1 px-3 rounded"
            onClick={() => decreaseQuantity(item.episode_id)}
          >
            -
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 mr-2 rounded"
            onClick={() => increaseQuantity(item.episode_id)}
          >
            +
          </button>
        </div>
      </div>
      <hr className="mb-4" />
    </>
  );
}

export default CartItem;
