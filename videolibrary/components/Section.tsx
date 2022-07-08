import React from "react";

const Section = ({ genre, videos }) => {
  console.log(videos);
  return <div className="text-4xl text-center mt-16">{genre}</div>;
};
export default Section;
