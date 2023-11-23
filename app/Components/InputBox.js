import React from "react";
import MicrophoneIcon from "./MicrophoneIcon";
import SearchIcon from "./SearchIcon";

function InputBox({ searchInputRef }) {
  return (
    <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full items-center  px-5 py-3 sm:max-w-xl inputSection  lg:max-w-2xl ">
      <SearchIcon />
      <input
        ref={searchInputRef}
        type="text"
        className="focus:outline-none flex-grow "
      />
      <MicrophoneIcon />
    </div>
  );
}

export default InputBox;
