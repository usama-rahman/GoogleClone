import GoogleSearchImg from "./GoogleSearchImg";
import MicrophoneIconSerarch from "./MicrophoneIconSerarch";
import Avater from "./Avatar";
import SearchIconSearch from "./SearchIconSearch";
import Xicon from "./Xicon";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function SearchHeader() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex items-center w-full p-6 ">
      <GoogleSearchImg />
      <form className="flex flex-grow border border-gray-200 rounded-full px-6 py-3 shadow-lg max-w-3xl items-center ml-10 mr-5 ">
        <input
          ref={searchInputRef}
          className="w-full  focus:outline-none "
          type="text"
        />
        <Xicon searchInputRef={searchInputRef} />
        <MicrophoneIconSerarch />
        <SearchIconSearch />

        <button hidden type="submit" onClick={search}></button>
      </form>
      <Avater />
    </div>
  );
}

export default SearchHeader;
