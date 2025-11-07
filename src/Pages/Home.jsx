import React from "react";
import MovieFilters from "../Components/MovieFilters";
import MovieList from "../Components/MovieList";

const Home = () => {
  return (
    <div className="max-w-[1440px] mx-auto my-8">
      <MovieFilters />
      <MovieList />
    </div>
  );
};

export default Home;
