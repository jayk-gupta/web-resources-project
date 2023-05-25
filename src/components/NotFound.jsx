import React from "react";
import { Link } from "react-router-dom";
import Image from "../assets/404.svg";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen ">
      <img
        className="mb-4
        w-1/3
      "
        src={Image}
        alt="404 Not Found"
      />
      <h3 className="text-center text-xl">
        Opps! Page not found
        <br /> Sorry, the page you're looking for doesn't exist.
      </h3>
      <Link
        className="h-10 w-50 mt-4 text-[#fff] font-bold bg-grape-200 hover:bg-grape-300 rounded-md px-4 py-2 "
        to="/"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
