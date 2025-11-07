import { MdErrorOutline } from "react-icons/md";

const ErrorMessage = ({ message }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center fixed top-1/2 left-1/2 -translate-1/2">
      <MdErrorOutline className="text-error w-10 h-10" />
      <p className="text-base font-medium text-center text-error">
        {message ?? "Something went wrong"}
      </p>
    </div>
  );
};

export default ErrorMessage;
