import React from "react";
import { motion } from "framer-motion";
import { BiSolidShareAlt } from "react-icons/bi";

const Card = ({ title, link, description, i, img }) => {
  const handleShareClick = () => {
    const tweetText = encodeURIComponent(
      "Just stumbled upon an amazing free resource for learning programming! 🚀 Sharing the wealth of knowledge, check it out! 💻 Link :- https://web-resources-hub-project.vercel.app/" +
        "    " +
        "#Programming #LearningJourney"
    );
    const twitterURL = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterURL, "_blank");
  };

  return (
    <a href={link} target={"_blank"} rel="noreferrer">
      <div className="h-[20rem]">
        <div className="relative w-64 border bg-[#cacaca] border-gray-300 rounded-lg shadow-md shadow-black-100 overflow-hidden transform transition-transform hover:scale-105 hover:bg-[#e2e1e1] hover:shadow-black-100">
          <div className="relative">
            <img
              src={img}
              alt={title}
              className="w-full h-32 object-cover transform transition-transform hover:scale-110"
            />
            <div className="absolute top-2 right-2">
              <BiSolidShareAlt onClick={handleShareClick} className="h-6 w-6 text-[#cacaca] hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-white-600">
              {description.slice(0, 120) + "..."}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
