import React from "react";
import Image from "next/image";
import { useState } from "react";
import watchout from "../public/Watchout.png";
import { motion } from "framer-motion";

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
      <a href="/">
        <Image
          className="object-contain"
          width={250}
          height={100}
          src={watchout}
          alt="Logo"
        />
      </a>
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
              delay: 0.1,
            },
          },
        }}
        className="hidden ml-10 md:flex items-center space-x-6 mr-7 object-left"
      >
        <a className="header-link group " href="/">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group" href="/trending">
          <LightningBoltIcon className="h-4" />
          <span className="span">Trending</span>
        </a>
        <a className="header-link group" href="/watchlist">
          <BadgeCheckIcon className="h-4" />
          <span className="span">Watchlist</span>
        </a>
        <a className="header-link group" href="/originals">
          <CollectionIcon className="h-4" />
          <span className="span">Originals</span>
        </a>
        <a className="header-link group" href="/search">
          <SearchIcon className="h-4" />
          <span className="span">Search</span>
        </a>
      </motion.div>

      {!logged && (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-small tracking-wide hover:bg-white hover:text-black transition duration-200 items-center hidden md:block"
          onClick={() => {
            logged ? setLogged(false) : setLogged(true);
            localStorage.setItem("accountName", account.username);
            localStorage.setItem("accountUrl", account.avatar.url);
          }}
        >
          Login
        </button>
      )}

      {logged && (
        <div className="account-info space-x-2">
          <p className="truncate lg:text-exlipse hidden lg:block  ">
            Welcome <a href="/dev">{localStorage.getItem("accountName")}</a>
          </p>

          <a href="/dev">
            <img
              className="avatar hidden sm:block"
              src={localStorage.getItem("accountUrl")}
            />
          </a>
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
