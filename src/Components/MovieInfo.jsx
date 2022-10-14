import React, { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

const MovieInfo = ({ movie }) => {
  const { price, setIsOpen, isOpen, rentMovie, buyMovie } =
    useContext(MovieContext);
  // const genres = movie.genres?.map(({ name }) => name).join(", ");

  return <div>MovieInfo</div>;
};

export default MovieInfo;
