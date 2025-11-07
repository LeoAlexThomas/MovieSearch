import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col gap-6 justify-center items-center fixed top-1/2 left-1/2 -translate-1/2">
      <i className="fa-solid fa-spinner fa-spin-pulse text-highlight fa-2xl"></i>
      <p className="text-lg font-medium text-center text-primary-text">
        Loading
      </p>
    </div>
  );
};

export default Loading;
