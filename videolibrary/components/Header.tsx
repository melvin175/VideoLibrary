import React from "react";
import Image from "next/image";
import { useState } from "react";
import watchout from "../public/Watchout.png";

import {
  HomeIcon,
  LightningBoltIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
} from "@heroicons/react/outline";

export const Header = ({ account }) => {
  const [logged, setLogged] = useState(false);

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
        <a className="header-link group " href="/">
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

      {!logged && (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-small tracking-wide hover:bg-white hover:text-black transition duration-200 items-center hidden md:block"
          onClick={() => {
            logged ? setLogged(false) : setLogged(true);
          }}
        >
          Login
        </button>
      )}

      {logged && (
        <div className="account-info space-x-2">
          <p className="truncate lg:text-exlipse hidden lg:block  ">
            Welcome {account.username}
          </p>
          <img className="avatar hidden sm:block" src={account.avatar.url} />
          <button
            className="ml-auto border uppercase px-6 rounded font-sm tracking-wide hover:bg-white hover:text-black transition duration-200 items-center hidden lg:block md:text-sm text-center"
            onClick={() => {
              logged ? setLogged(false) : setLogged(true);
            }}
          >
            <p className="truncate lg:text-exlipse">Log out</p>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
