import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, link, description, i, img }) => {
  console.log(img);
  return (
    <motion.div
      className="card border-b-2 bg-[#eebefa] border-b-[#2a1600] flex flex-col rounded-lg  gap-4 p-4 shadow-3xl h-[16rem] w-[24rem] hover:shadow-4xl "
      key={i}
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.2, delay: i * 0.2 }}
    >
      <div className="img w-40  self-center">
        {/* src={`'${img}'`} */}
        <img className="rounded-sm" src={img} alt="html" />
      </div>

      <div className="content flex flex-col gap-4 items-center">
        <a href={link} target={"_blank"} rel="noreferrer">
          <h2 className="text-grape-200 hover:text-grape-300 text-lg font-bold hover:text-orange-500">
            {title}
          </h2>{" "}
        </a>
        <p className="text-[0.9rem] text-[#402E32] w-4/5 font-inter tracking-wide leading-5">
          {description.slice(0, 120) + "..."}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
