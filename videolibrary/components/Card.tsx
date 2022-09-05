import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Card = ({ video }) => {
  const [url, setUrl] = useState(video.thumbnail.url);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.2,
          },
        },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      className="relative flex min-w-[250px] min-h-[170px] md:min-w-[330px] md:min-h-[210px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
    >
      <a className="absolute inset-0 z-10 flex flex-col justify-end opacity-0 hover:opacity-100 duration-300  ">
        <div className="bg-black bg-opacity-50 h-full">
          <div className="mt-[25%] pl-6 text-xl text-opacity-100">
            <h1 className="tracking-wider text-white-900 font-bold">
              {video.title}
            </h1>
            <p className="line-clamp-2 font-semibold">{video.desription}</p>
            <div className="flex">
              <p className="font-normal">{video.year}</p>
              <motion.button
                whileHover={{ scale: 1 }}
                whileTap={{ scale: 0.8 }}
                className="bg-black ml-4 bg-opacity-75 flex text-xs align-middle rounded-md p-1 pr-2 hover:border-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3 h-3 mt-1 mr-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="mt-0.5">Watch</p>
              </motion.button>
            </div>
          </div>
        </div>
      </a>
      <div className="relative">
        <div className="h-[100%] flex content-center">
          <Image
            src={url}
            width={390}
            height={210}
            className="rounded-lg object-cover flex flex-col justify-end duration-300 hover:opacity-25"
          />
        </div>
      </div>
    </motion.div>
  );
};
export default Card;
