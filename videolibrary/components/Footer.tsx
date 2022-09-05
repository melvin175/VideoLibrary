import React from "react";
import Image from "next/image";
import watchout from "../public/Watchout.png";

const Footer = () => {
  return (
    <div className="h-36 text-center ">
      <Image width={200} height={80} src={watchout} alt="Logo" />
      <div className="w-[50%] mx-auto">
        <p className="text-center text-xs pb-3">
          © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related
          channel and programming logos are service marks of, and all related
          programming visuals and elements are the property of, Home Box Office,
          Inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
