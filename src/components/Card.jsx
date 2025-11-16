import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as FaIcons from "react-icons/fa";

const Card = ({ title, link, description, i, img }) => {
  const [fav, setFav] = useState(false);

  useEffect(() => {
    try {
      const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
      const exists = favs.some((f) => f.link === link);
      setFav(exists);
    } catch (e) {
      setFav(false);
    }
  }, [link]);

  const toggleFav = (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const raw = localStorage.getItem("favorites") || "[]";
      const favs = JSON.parse(raw);
      const exists = favs.findIndex((f) => f.link === link);
      if (exists > -1) {
        favs.splice(exists, 1);
        localStorage.setItem("favorites", JSON.stringify(favs));
        setFav(false);
      } else {
        favs.unshift({ title, link, description, img });
        localStorage.setItem("favorites", JSON.stringify(favs));
        setFav(true);
      }
    } catch (err) {
      console.error("favorite toggle error", err);
    }
  };

  return (
    <a href={link} target={"_blank"} rel="noreferrer">
      <motion.div
        className="card relative border-b-2 bg-gradient-to-r from-[#545454] to-[#807f7f]  border-b-[#000000] flex flex-col rounded-lg  gap-4 p-4 shadow-3xl h-[16rem] w-[24rem] hover:shadow-4xl "
        key={i}
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.2, delay: i * 0.2 }}
      >
        <button
          onClick={toggleFav}
          title={fav ? "Remove favorite" : "Add favorite"}
          className="absolute top-2 right-2 text-white bg-transparent p-1 rounded-full hover:scale-110"
        >
          {fav ? (
            <FaIcons.FaStar className="text-yellow-400 text-xl" />
          ) : (
            <FaIcons.FaRegStar className="text-white text-xl" />
          )}
        </button>

        <div className="img img-container self-center">
          {img ? (
            <img className="rounded-sm w-40 h-20" src={img} alt={title} />
          ) : (
            <div className="rounded-sm w-40 h-20 bg-gray-400" />
          )}
        </div>

        <div className="content flex flex-col gap-4 items-center">
          <h2 className="text-[#e5e5e5] hover:text-[#fff] text-lg font-bold hover:text-orange-500">
            {title}
          </h2>

          <p className="text-[0.9rem] text-[#e2e1e1] w-4/5 font-inter tracking-wide leading-5">
            {(description && description.slice ? description.slice(0, 120) : description || "").concat("...")}
          </p>
        </div>
      </motion.div>
    </a>
  );
};

export default Card;
