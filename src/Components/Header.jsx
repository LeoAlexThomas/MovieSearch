import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";

const Header = () => {
  return (
    <div className="bg-black-secondary shadow-md shadow-secondary-button sticky top-0 z-10">
      <div className="flex gap-2 max-w-[1440px] mx-auto items-center px-4 py-4">
        <BiSolidMoviePlay className="w-10 h-10 text-primary-text" />
        <p className="font-Title text-2xl font-bold text-primary-text">
          Movies Preview
        </p>
      </div>
    </div>
  );
};

export default Header;
