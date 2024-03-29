import React from "react";
import Card from "./Card";

const Section = ({ genre, videos }) => {
  return (
    <div className="relative flex flex-col space-y-2  mt-6 py-3  px-8 max-w-[1400px] mx-auto">
      <h2 className="font-semibold text-2xl">{genre}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {videos.map((video) => (
          <a key={video.id} href={`/video/${video.slug}`}>
            <Card video={video} />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Section;
