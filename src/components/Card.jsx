import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, link, description, i, img }) => {
  return (
    <a href={link} target={"_blank"} rel="noreferrer">
      <motion.div
        className="card border-b-2 bg-[] border-b-[#2a1600] flex flex-col rounded-lg  gap-4 p-4 shadow-3xl h-[16rem] w-[24rem] hover:shadow-4xl "
        key={i}
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.2, delay: i * 0.2 }}
      >
        <div className="img  self-center">
          {/* src={`'${img}'`} */}
          <img className="rounded-sm w-40 h-20" src={img} alt="img" />
        </div>

        <div className="content flex flex-col gap-4 items-center">
          <h2 className="text-white hover:text-grape-300 text-lg font-bold hover:text-orange-500">
            {title}
          </h2>

          <p className="text-[0.9rem] text-white w-4/5 font-inter tracking-wide leading-5">
            {description.slice(0, 120) + "..."}
          </p>
        </div>
      </motion.div>
    </a>
  );
};

export default Card;
