import React from "react";
import Slugcard from "./Slugcard";

const Section = ({ genre, videos }) => {
  return (
    <div className="relative flex-col space-y-2 my-5 px-8 max-w-[408px] inset-y-0 right-0 hidden md:flex mr-5">
      <h2 className="font-semibold text-2xl">{genre}</h2>
      <div className="space-x-6 overflow-y-hidden overflow-x-scroll scrollbar-hide p-2 -m-2">
        {videos.map((video) => (
          <a key={video.id} href={`/video/${video.slug}`}>
            <Slugcard video={video} />
          </a>
        ))}
      </div>
    </div>
  );
};
export default Section;
