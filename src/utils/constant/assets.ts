import logo from "../../assets/images/sawitpro-logo.png";
import altLogo from "../../assets/images/sawitblog-logo.webp";
import StarwarsLogo from "../../assets/images/starwars-logo.png";
import cartIcon from "../../assets/images/cart.png";
import MovieEpisode1 from "../../assets/images/movies/episode_1.jpg";
import MovieEpisode2 from "../../assets/images/movies/episode_2.jpg";
import MovieEpisode3 from "../../assets/images/movies/episode_3.jpg";
import MovieEpisode4 from "../../assets/images/movies/episode_4.jpg";
import MovieEpisode5 from "../../assets/images/movies/episode_5.jpg";
import MovieEpisode6 from "../../assets/images/movies/episode_6.jpg";
import MovieEpisode7 from "../../assets/images/movies/episode_7.jpg";
import PlanetAlderaan from "../../assets/images/planets/alderaan.png";
import PlanetBespin from "../../assets/images/planets/bespin.png";
import PlanetCoruscant from "../../assets/images/planets/coruscant.jpg";
import PlanetDagobah from "../../assets/images/planets/dagobah.jpg";
import PlanetGeonosis from "../../assets/images/planets/geonosis.jpeg";
import PlanetHoths from "../../assets/images/planets/hoths.jpg";
import PlanetKamino from "../../assets/images/planets/kamino.png";
import PlanetNaboo from "../../assets/images/planets/naboo.png";
import PlanetNedor from "../../assets/images/planets/nedor.jpg";
import PlanetYavinIv from "../../assets/images/planets/yavin_iv.jpg";
import CharacterBeruWhitesunLars from "../../assets/images/characters/beru-whitesun-lars.jpg";
import CharacterBiggs from "../../assets/images/characters/biggs.jpeg";
import CharacterC3PO from "../../assets/images/characters/c-3po.jpg";
import CharacterDarthVader from "../../assets/images/characters/darth-vader.jpg";
import CharacterLeiaOrgana from "../../assets/images/characters/leia-organa.jpg";
import CharacterLukeSkywalker from "../../assets/images/characters/luke-skywalker.jpg";
import CharacterObiWanKenobi from "../../assets/images/characters/obi-wan-kenobi.jpg";
import CharacterOwenLars from "../../assets/images/characters/owen-lars.jpg";
import CharacterR2D2 from "../../assets/images/characters/r2-d2.jpg";
import CharacterR5D4 from "../../assets/images/characters/r5-d4.jpg";
import StarshipJediStarfighter from "../../assets/images/starships/jedi-starfighter.jpeg";
import StarshipNabooFighter from "../../assets/images/starships/naboo-fighter.webp";
import StarshipStarDestroyer from "../../assets/images/starships/star-destroyer.jpeg";
import StarshipVWing from "../../assets/images/starships/v-wing.webp";
import StarshipXWing from "../../assets/images/starships/x-wing.webp";
import StarshipYWing from "../../assets/images/starships/y-wing.jpeg";
import ImageNotFound from "../../assets/images/image-not-found.png";

type AssetsType = {
  [key: string]: string;
  LOGO: string;
  ALT_LOGO: string;
  CART: string;
  STARWARS_LOGO: string;
  MOVIE_EPISODE_1: string;
  MOVIE_EPISODE_2: string;
  MOVIE_EPISODE_3: string;
  MOVIE_EPISODE_4: string;
  MOVIE_EPISODE_5: string;
  MOVIE_EPISODE_6: string;
  MOVIE_EPISODE_7: string;
  PLANET_ALDERAAN: string;
  PLANET_BESPIN: string;
  PLANET_CORUSCANT: string;
  PLANET_DAGOBAH: string;
  PLANET_GEONOSIS: string;
  PLANET_HOTHS: string;
  PLANET_KAMINO: string;
  PLANET_NABOO: string;
  PLANET_NEDOR: string;
  PLANET_YAVINIV: string;
  CHARACTER_BERU_WHITESUN_LARS: string;
  CHARACTER_BIGGS: string;
  CHARACTER_C_3PO: string;
  CHARACTER_DARTH_VADER: string;
  CHARACTER_LEIA_ORGANA: string;
  CHARACTER_LUKE_SKYWALKER: string;
  CHARACTER_OBI_WAN_KENOBI: string;
  CHARACTER_OWEN_LARS: string;
  CHARACTER_R2_D2: string;
  CHARACTER_R5_D4: string;
  STARSHIP_JEDI_STARFIGHTER: string;
  STARSHIP_NABOO_FIGHTER: string;
  STARSHIP_STAR_DESTROYER: string;
  STARSHIP_V_WING: string;
  STARSHIP_X_WING: string;
  STARSHIP_Y_WING: string;
  IMAGE_NOT_FOUND: string;
};

const ASSETS: AssetsType = {
  LOGO: logo,
  ALT_LOGO: altLogo,
  CART: cartIcon,
  STARWARS_LOGO: StarwarsLogo,
  MOVIE_EPISODE_1: MovieEpisode1,
  MOVIE_EPISODE_2: MovieEpisode2,
  MOVIE_EPISODE_3: MovieEpisode3,
  MOVIE_EPISODE_4: MovieEpisode4,
  MOVIE_EPISODE_5: MovieEpisode5,
  MOVIE_EPISODE_6: MovieEpisode6,
  MOVIE_EPISODE_7: MovieEpisode7,
  PLANET_ALDERAAN: PlanetAlderaan,
  PLANET_BESPIN: PlanetBespin,
  PLANET_CORUSCANT: PlanetCoruscant,
  PLANET_DAGOBAH: PlanetDagobah,
  PLANET_GEONOSIS: PlanetGeonosis,
  PLANET_HOTHS: PlanetHoths,
  PLANET_KAMINO: PlanetKamino,
  PLANET_NABOO: PlanetNaboo,
  PLANET_NEDOR: PlanetNedor,
  PLANET_YAVINIV: PlanetYavinIv,
  IMAGE_NOT_FOUND: ImageNotFound,
  CHARACTER_BERU_WHITESUN_LARS: CharacterBeruWhitesunLars,
  CHARACTER_BIGGS: CharacterBiggs,
  CHARACTER_C_3PO: CharacterC3PO,
  CHARACTER_DARTH_VADER: CharacterDarthVader,
  CHARACTER_LEIA_ORGANA: CharacterLeiaOrgana,
  CHARACTER_LUKE_SKYWALKER: CharacterLukeSkywalker,
  CHARACTER_OBI_WAN_KENOBI: CharacterObiWanKenobi,
  CHARACTER_OWEN_LARS: CharacterOwenLars,
  CHARACTER_R2_D2: CharacterR2D2,
  CHARACTER_R5_D4: CharacterR5D4,
  STARSHIP_JEDI_STARFIGHTER: StarshipJediStarfighter,
  STARSHIP_NABOO_FIGHTER: StarshipNabooFighter,
  STARSHIP_STAR_DESTROYER: StarshipStarDestroyer,
  STARSHIP_V_WING: StarshipVWing,
  STARSHIP_X_WING: StarshipXWing,
  STARSHIP_Y_WING: StarshipYWing,
};

export default ASSETS;
