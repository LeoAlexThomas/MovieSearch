import React, { useEffect, useState } from "react";
import { useMovieFilter } from "../Context/movieContext";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const MovieFilters = () => {
  const { movieSearch, setMovieSearch, movieType, setMovieType } =
    useMovieFilter();
  //   Local state for handling movie name input
  const [movieName, setMovieName] = useState("");

  useEffect(() => {
    setMovieName(movieSearch);
  }, []);

  // Changing movieSearch value only when search is pressed
  const handleSearch = () => {
    setMovieSearch(movieName);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between px-4">
      <MovieNameSearchInput
        movieName={movieName}
        onMovieNameChange={setMovieName}
        onSearchPressed={handleSearch}
      />
      <MovieTypeSelect movieType={movieType} onMovieTypeChange={setMovieType} />
    </div>
  );
};

const MovieTypeSelect = ({ movieType, onMovieTypeChange }) => {
  return (
    <div className="flex gap-2 items-center relative w-full md:w-fit">
      <select
        value={movieType}
        onChange={(e) => onMovieTypeChange(e.target.value)}
        className="font-Body appearance-none pr-12 pl-3 py-2 border outline-none text-lg bg-black-secondary w-full max-w-full md:max-w-[250px] rounded-md text-primary-text"
      >
        <option
          value=""
          className="font-Body bg-black-secondary hover:bg-highlight cursor-pointer text-primary-text"
        >
          All
        </option>
        <option
          value="movie"
          className="font-Body  bg-black-secondary hover:bg-highlight cursor-pointer text-primary-text"
        >
          Movie
        </option>
        <option
          value="series"
          className="font-Body  bg-black-secondary hover:bg-highlight cursor-pointer text-primary-text"
        >
          Series
        </option>
        <option
          value="episode"
          className="font-Body  bg-black-secondary hover:bg-highlight cursor-pointer text-primary-text"
        >
          Episode
        </option>
      </select>
      <MdOutlineKeyboardArrowDown className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-text w-6 h-6" />
    </div>
  );
};

const MovieNameSearchInput = ({
  movieName,
  onMovieNameChange,
  onSearchPressed,
}) => {
  return (
    <div className="flex-1 rounded-lg relative overflow-hidden w-full max-w-[700px]">
      <input
        type="text"
        id="movieSearch"
        value={movieName}
        onChange={(e) => onMovieNameChange(e.target.value)}
        className="font-SubTitle bg-black-secondary text-xl p-3 pl-4 pr-[110px] sm:pr-40 text-primary-text w-full outline-none"
        placeholder="Search movies by name"
      />
      <button
        className="font-Body font-medium text-xl absolute right-0 top-px bottom-px px-4 py-2 bg-highlight w-full max-w-[100px] sm:max-w-[150px] cursor-pointer"
        onClick={onSearchPressed}
      >
        Search
      </button>
    </div>
  );
};

export default MovieFilters;
