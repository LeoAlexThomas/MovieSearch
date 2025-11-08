import { BiSolidMoviePlay } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-black-secondary shadow-md shadow-secondary-button sticky top-0 z-30">
      <div
        className="flex gap-2 max-w-[1440px] mx-auto items-center px-4 py-4 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <BiSolidMoviePlay className="w-10 h-10 text-primary-text" />
        <p className="font-Title text-2xl font-bold text-primary-text">
          Movies Search
        </p>
      </div>
    </div>
  );
};

export default Header;
