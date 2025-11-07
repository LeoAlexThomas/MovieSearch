import { createContext, useContext, useEffect, useState } from "react";

const MovieFilterContext = createContext();

export const MovieFilterProvider = ({ children }) => {
  const [movieSearch, setMovieSearch] = useState("");
  const [movieType, setMovieType] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <MovieFilterContext.Provider
      value={{
        movieSearch,
        setMovieSearch,
        movieType,
        setMovieType,
        pageNumber,
        setPageNumber,
      }}
    >
      {children}
    </MovieFilterContext.Provider>
  );
};

export const useMovieFilter = () => useContext(MovieFilterContext);
