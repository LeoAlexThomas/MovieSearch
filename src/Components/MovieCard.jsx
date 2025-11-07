import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-black-secondary overflow-hidden pb-4 border border-secondary-button shadow-[0px_0px_10px_2px] hover:shadow-[0px_0px_15px_2px] shadow-secondary-button scale-100 hover:scale-105">
      <div className="bg-gray-700 flex items-center justify-center ">
        <object
          data={
            movie.Poster === "N/A"
              ? "https://www.shutterstock.com/image-vector/film-clapper-3d-cartoon-icon-600nw-2239181291.jpg"
              : movie.Poster
          }
          className="h-80 w-full object-contain"
        >
          <img
            src="https://www.shutterstock.com/image-vector/film-clapper-3d-cartoon-icon-600nw-2239181291.jpg"
            className="h-80 w-full object-contain"
          />
        </object>
      </div>

      <div className="flex flex-col gap-3 px-4 justify-between h-full">
        <h4 className="font-SubTitle text-2xl font-bold text-primary-text line-clamp-1 ">
          {movie.Title}
        </h4>
        <div className="flex gap-4 items-center justify-between font-Body text-base text-secondary-text">
          <p className="w-fit">
            Release Year:<span className="font-bold"> {movie.Year}</span>
          </p>
          <p className="w-fit font-medium bg-secondary-button rounded-md text-primary-text px-4 py-1">
            {movie.Type}
          </p>
        </div>
        <Link
          to={`/movie/${movie.imdbID}`}
          className="w-full bg-highlight hover:bg-secondary-button rounded-md py-3 font-medium cursor-pointer hover:text-primary-text text-center"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
