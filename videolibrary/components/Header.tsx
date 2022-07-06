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
      <div className="flex flex-grow justify-evenly max-w-2xl pt-8">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="WATCHLIST" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
      </div>

      <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200 items-center hidden md:block">
        Login
      </button>
    </header>
  );
};

export default Header;
