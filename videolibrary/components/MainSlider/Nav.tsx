import React from "react";
import Image from "next/image";

import watchout from "../../public/Watchout.png";

import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
} from "@heroicons/react/outline";

export const Nav = () => {
  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex flex-col sm:flex-row items-center px-10 md:px-12 h-[85px] justify-between ">
      <Image
        className="object-contain"
        width={250}
        height={100}
        src={watchout}
        alt="Logo"
      />

      <div className="hidden ml-10 md:flex items-center space-x-6 mr-7 object-left">
        <a className="header-link group ">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <LightningBoltIcon className="h-4" />
          <span className="span">Trending</span>
        </a>
        <a className="header-link group">
          <BadgeCheckIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="header-link group">
          <CollectionIcon className="h-4" />
          <span className="span">Originals</span>
        </a>
        <a className="header-link group">
          <SearchIcon className="h-4" />
          <span className="span">Search</span>
        </a>
      </div>
    </header>
  );
};

export default Nav;
