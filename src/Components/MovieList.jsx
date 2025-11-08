import React from "react";
import useApiCall from "../Hooks/useApiCall";
import { useMovieFilter } from "../Context/MoviesContext";
import ErrorMessage from "./ErrorMessage";
import Loading from "./Loading";
import EmptyMessage from "./EmptyMessage";
import { TbArrowBigUpLinesFilled } from "react-icons/tb";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const MovieList = () => {
  const { movieSearch, movieType, pageNumber } = useMovieFilter();
  const { item, isLoading, error } = useApiCall({
    url: `https://www.omdbapi.com/?apikey=7717d87d&s=${
      movieSearch.length === 0 ? "abc" : movieSearch
    }&page=${pageNumber}&type=${movieType}`,
  });
  console.log("Items: ", item, error);
  if (error) {
    return (
      <ErrorMessage
        message={error.response?.data?.Error ?? "Something went wrong"}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (item === null || item.Response === "False") {
    return (
      <EmptyMessage
        message={
          item?.Error ??
          `No Movies available for: ${movieSearch} & type: ${movieType}`
        }
      />
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto my-8 px-4 flex flex-col gap-4">
      <h4 className="text-3xl font-bold text-primary-text mt-8 mb-3">Movies</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {item.Search.map((movie) => {
          return (
            <React.Fragment key={movie.imdbID}>
              <MovieCard movie={movie} />
            </React.Fragment>
          );
        })}
      </div>
      <Pagination totalItems={item.totalResults} />
    </div>
  );
};

const InitialMessage = () => {
  return (
    <div className="flex justify-center gap-4 p-4 px-8 items-center flex-col fixed top-1/2 left-1/2 -translate-1/2 w-full">
      <TbArrowBigUpLinesFilled className="w-10 h-10 text-highlight animate-bounce" />
      <p className="font-Body font-medium text-lg text-center text-primary-text">
        Please enter movie name to show movies
      </p>
    </div>
  );
};

export default MovieList;
