import React from "react";
import { motion } from "framer-motion";
import { FaShareAlt } from "react-icons/fa";

const Card = ({ title, link, description, i, img }) => {
  const handleShare = () => {
    const tweetText =
      "Hey guys, I found a cool resource which can help you excel in your development career! -";
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      link
    )}&text=${encodeURIComponent(`${tweetText} ${title}`)}`;

    window.open(tweetUrl, "_blank");
  };

  return (
    <a href={link} target="_blank" rel="noreferrer">
      <motion.div
        className="card border-b-2 bg-gradient-to-r from-[#545454] to-[#807f7f] border-b-[#000000] flex flex-col rounded-lg gap-4 p-4 shadow-3xl h-[16rem] w-[24rem] hover:shadow-4xl relative"
        key={i}
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.2, delay: i * 0.2 }}
      >
        <button
        className="absolute top-2 right-2 p-2 hover:text-blue-500 hover:scale-110 duration-500"
        onClick={handleShare}
      >
        <FaShareAlt />
      </button>

        <div className="img img-container self-center">
          <img className="rounded-sm w-40 h-20" src={img} alt="img" />
        </div>

        <div className="content flex flex-col gap-4 items-center">
          <h2 className="text-[#e5e5e5] hover:text-[#fff] text-lg font-bold hover:text-orange-500">
            {title}
          </h2>

          <p className="text-[0.9rem] text-[#e2e1e1] w-4/5 font-inter tracking-wide leading-5">
            {description.slice(0, 120) + "..."}
          </p>
        </div>
      </motion.div>
    </a>
  );
};

export default Card;
