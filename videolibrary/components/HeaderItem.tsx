import React from "react";

export default function HeaderItem({ title, Icon }) {
  return (
    <div className="flex flex-col items-center group cursor-pointer w-12 sm:w-20 hover:text-white my-auto">
      <Icon className="h-8 group-hover:animate-bounce " />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
}
