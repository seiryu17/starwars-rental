import { useCart } from "../../store/CartContext";
import { Movie } from "../../types/movie";
import Card from "./Card";

function MovieCatalogList({ list }: { list: Movie[] }) {
  const { addToCart } = useCart();
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-8">Movie Catalog</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {(list || []).map((movie: Movie, i: number) => (
          <Card
            key={movie.episode_id}
            movie={movie}
            button={{
              text: "+ Cart",
              action: (movie: Movie) => {
                addToCart(movie);
              },
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieCatalogList;
