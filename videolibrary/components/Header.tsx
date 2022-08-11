import React from "react";
import Image from "next/image";
import watchout from "../public/Watchout.png";
import HeaderItem from "./HeaderItem";

import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
} from "@heroicons/react/outline";

export const Header = () => {
  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex flex-col sm:flex-row items-center px-10 md:px-12 h-[85px] ">
      <Image
        className="object-contain"
        width={250}
        height={100}
        src={watchout}
        alt="Logo"
      />
      <div className="hidden ml-10 md:flex items-center space-x-6">
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <LightningBoltIcon className="h-4" />
          <span className="span">Search</span>
        </a>
        <a className="header-link group">
          <BadgeCheckIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="header-link group">
          <CollectionIcon className="h-4" />
          <span className="span">Originals</span>
        </a>
      </div>

      <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200 items-center hidden md:block">
        Login
      </button>
    </header>
  );
};

export default Header;
