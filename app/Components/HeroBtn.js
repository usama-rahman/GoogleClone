"use client";

import React from "react";

function HeroBtn({ searchFnc }) {
  return (
    <div className="flex justify-center items-center mt-4 gap-2 text-sm  ">
      <button onClick={searchFnc} className=" px-3 py-2 rounded myBtn ">
        Google Search
      </button>
      <button onClick={searchFnc} className=" px-3 py-2 rounded myBtn ">
        I&apos;m Feeling Lucky
      </button>
    </div>
  );
}

export default HeroBtn;
