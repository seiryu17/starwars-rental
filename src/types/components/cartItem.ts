import { CartContextType } from "../cartContextTypes";
import { Movie } from "../movie";

export type CartItemProps = {
  item: Movie;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
};
