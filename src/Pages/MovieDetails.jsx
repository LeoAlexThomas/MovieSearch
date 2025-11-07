import React from "react";
import useApiCall from "../Hooks/useApiCall";
import { Link, useLocation } from "react-router-dom";
import Loading from "../Components/Loading";
import ErrorMessage from "../Components/ErrorMessage";
import EmptyMessage from "../Components/EmptyMessage";
import { IoIosStar } from "react-icons/io";

const MovieDetails = () => {
  const location = useLocation();
  const movieId = location.pathname.split("/").pop();
  const { item, isLoading, error } = useApiCall({
    url: `https://www.omdbapi.com/?apikey=7717d87d&i=${movieId}`,
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
    return <EmptyMessage message={item?.Error ?? `Movie data not found`} />;
  }

  return (
    <div className="text-primary-text">
      <div className="relative">
        <object
          data={
            item.Poster === "N/A"
              ? "https://www.shutterstock.com/image-vector/film-clapper-3d-cartoon-icon-600nw-2239181291.jpg"
              : item.Poster
          }
          className="h-[450px] sm:h-[650px] w-full object-contain"
        >
          <img
            src="https://www.shutterstock.com/image-vector/film-clapper-3d-cartoon-icon-600nw-2239181291.jpg"
            className="h-[450px] sm:h-[650px] w-full object-contain"
          />
        </object>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#33333340] z-20">
          <div className="max-w-[1440px] mx-auto flex flex-col justify-end items-start gap-4 p-4 h-full">
            <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 items-start sm:items-end">
              <h2 className="text-4xl font-bold">{item.Title}</h2>
              <div className="flex gap-1">
                <IoIosStar className="w-5 h-5 my-0.5 text-amber-300" />
                <p>
                  Rating: {item.imdbRating} ({item.imdbVotes})
                </p>
              </div>
            </div>
            <p className="text-base text-secondary-text">{item.Plot}</p>
            {item.Website === "N/A" ? (
              <button className=" w-full max-w-full sm:max-w-[180px] text-black bg-secondary-button rounded-md py-3 font-medium text-center cursor-not-allowed">
                Play Movie
              </button>
            ) : (
              <Link
                to={item.Website}
                className=" w-full max-w-[180px] text-black bg-highlight hover:bg-secondary-button rounded-md py-3 font-medium cursor-pointer text-center"
              >
                Play Movie
              </Link>
            )}
          </div>
        </div>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-linear-to-b from-transparent to-black z-10 opacity-60" />
      </div>
      <div className="px-4 mt-4 mb-40 max-w-[1440px] mx-auto flex flex-col gap-6 ">
        <div className="bg-black-secondary rounded-lg overflow-hidden p-4">
          <SectionHead title="More Ratings" />
          <div className="grid grid-cols-3 gap-4">
            {item.Ratings.map((rating, index) => {
              return (
                <React.Fragment key={index}>
                  <RatingCard rating={rating} />
                </React.Fragment>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <SectionHead title="Casting" />
          <SectionPara content={item.Actors} />
        </div>
        <div className="flex flex-col gap-1">
          <SectionHead title="Duration" />
          <SectionPara content={item.Runtime} />
        </div>
        <div className="flex flex-col gap-1">
          <SectionHead title="Release Year" />
          <SectionPara content={item.Released} />
        </div>
        <div className="flex flex-col gap-1">
          <SectionHead title="Genre" />
          <SectionPara content={item.Genre} />
        </div>
        <div className="flex flex-col gap-1">
          <SectionHead title="Director" />
          <SectionPara content={item.Director} />
        </div>
        <div className="flex flex-col gap-1">
          <SectionHead title="Language" />
          <SectionPara content={item.Language} />
        </div>
      </div>
    </div>
  );
};

const RatingCard = ({ rating }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-700 my-4 px-4 py-2 w-full rounded-lg">
      <h6 className="text-lg font-medium">{rating.Source}</h6>
      <p className="text-3xl font-bold">{rating.Value}</p>
    </div>
  );
};

const SectionHead = ({ title }) => {
  return <h5 className="text-2xl font-bold">{title}</h5>;
};

const SectionPara = ({ content }) => {
  return <h5 className="text-lg font-medium">{content}</h5>;
};

export default MovieDetails;
