import React, { useState } from "react";

const index = ({ onStateChange }) => {
  const [filter, setFilter] = useState("html");

  const handleFilterChange = (target) => {
    setFilter(target);
    onStateChange(target);
  };

  return (
    <div className="flex md:space-x-6 space-x-2 items-center mb-10">
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer bg-[#ddd] text-xs lg:text-base ${
          filter === "html" ? "border" : ""
        }`}
        onClick={() => handleFilterChange("html")}
      >
        HTML
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer bg-[#ddd] text-xs lg:text-base ${
          filter === "css" ? "border" : ""
        }`}
        onClick={() => handleFilterChange("css")}
      >
        CSS
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer bg-[#ddd] text-xs lg:text-base ${
          filter === "js" ? "border" : ""
        }`}
        onClick={() => handleFilterChange("js")}
      >
        Javascript
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer bg-[#ddd] text-xs lg:text-base ${
          filter === "tailwind" ? "border" : ""
        }`}
        onClick={() => handleFilterChange("tailwind")}
      >
        Tailwind CSS
      </p>
         <p
        className={`px-3 py-1 rounded-xl cursor-pointer bg-[#ddd]  ${
          filter === "nextjs" ? "border" : ""
        }`}
        onClick={() => handleFilterChange("nextjs")}
      >
        NextJS
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer bg-[#ddd] text-xs lg:text-base ${
          filter === "react" ? "border" : ""
        }`}
        onClick={() => handleFilterChange("react")}
      >
        ReactJS
      </p>
      {/* <p
        className={`px-3 py-1 rounded-xl cursor-pointer ${filter === "react" ? 'border':''}`}
        onClick={() => handleFilterChange('next')}
      >
        NextJS
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer ${filter === "react" ? 'border':''}`}
        onClick={() => handleFilterChange('angular')}
      >
        AngularJS
      </p>
      <p
        className={`px-3 py-1 rounded-xl cursor-pointer ${filter === "react" ? 'border':''}`}
        onClick={() => handleFilterChange('threejs')}
      >
        ThreeJS
      </p> */}
    </div>
  );
};

export default index;
