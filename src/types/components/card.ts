import React from "react";
import { Movie } from "../movie";

export type ButtonProps = {
  text: string;
  action: (movie: Movie) => void;
};

export type CardProps = {
  movie: Movie;
  button?: ButtonProps;
};
