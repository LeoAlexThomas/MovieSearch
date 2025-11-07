import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useMovieFilter } from "../Context/movieContext";

const Pagination = ({ totalItems }) => {
  const { pageNumber, setPageNumber } = useMovieFilter();
  const totalPages = Math.ceil(totalItems / 10);
  console.log("Page number: ", pageNumber, totalPages);
  const handlePageNext = () => {
    setPageNumber(pageNumber + 1);
  };
  const handlePagePrevious = () => setPageNumber(pageNumber - 1);

  return (
    <div className="flex flex-col gap-2 items-center justify-center self-center">
      <div className="flex gap-1 ">
        <PageBox disabled={pageNumber === 1} onClick={handlePagePrevious}>
          <IoIosArrowBack className="text-primary-text w-6 h-6" />
        </PageBox>
        <PageBox>{pageNumber}</PageBox>
        <PageBox disabled={pageNumber === totalPages} onClick={handlePageNext}>
          <IoIosArrowForward className="text-primary-text w-6 h-6" />
        </PageBox>
      </div>
      <p className="text-base font-medium text-secondary-text">
        Pages: {pageNumber} of {totalPages}
      </p>
    </div>
  );
};

const PageBox = ({ children, onClick, disabled }) => {
  return (
    <div
      className={`border border-secondary-text ${
        disabled ? "bg-secondary-text" : "bg-black-secondary"
      } px-1 py-2 text-primary-text w-10 text-center flex justify-center items-center rounded-md ${
        onClick === undefined
          ? "cursor-auto"
          : disabled
          ? "cursor-not-allowed"
          : "cursor-pointer"
      }`}
      onClick={disabled ? null : onClick}
    >
      {children}
    </div>
  );
};

export default Pagination;
