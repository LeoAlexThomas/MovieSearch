import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useMovieFilter } from "../Context/movieContext";

const Pagination = ({ totalItems }) => {
  const { pageNumber, setPageNumber } = useMovieFilter();
  const totalPages = Math.ceil(totalItems / 10);

  const handlePageNext = () => {
    setPageNumber(pageNumber + 1);
  };
  const handlePagePrevious = () => setPageNumber(pageNumber - 1);

  return (
    <div className="flex flex-col gap-2 items-center justify-center self-center mt-10">
      <div className="flex gap-3 items-center">
        <IoIosArrowBack
          className={
            pageNumber === 1
              ? "text-secondary-text w-6 h-6 cursor-not-allowed"
              : "text-primary-text w-6 h-6 cursor-pointer"
          }
          onClick={handlePagePrevious}
        />
        <p className="text-base font-medium text-secondary-text">
          Pages: {pageNumber} of {totalPages}
        </p>
        <IoIosArrowForward
          className={
            pageNumber === totalPages
              ? "text-secondary-text w-6 h-6 cursor-not-allowed"
              : "text-primary-text w-6 h-6 cursor-pointer"
          }
          onClick={handlePageNext}
        />
      </div>
    </div>
  );
};

export default Pagination;
