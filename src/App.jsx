import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import MovieDetails from "./Pages/MovieDetails";
import { MovieFilterProvider } from "./Context/movieContext";

const App = () => {
  return (
    <div className="bg-black-primary h-screen overflow-y-auto">
      <MovieFilterProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Dynamic page routing */}
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </MovieFilterProvider>
    </div>
  );
};

export default App;
