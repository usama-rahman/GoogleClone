import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  return (
    <div>
      <Image
        alt="Goolge"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      <form className="flex border border-gray-200 rounded-full px-6 py-3 shadow-lg max-w-3xl items-center ">
        <input
          ref={searchInputRef}
          className="w-full  focus:outline-none "
          type="text"
        />
        {/* Cancle X */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 sm:mr-3 h-7 text-gray-500 cursor-pointer 
          transition duration-100 transform hover:scale-125  "
          onClick={() => {
            searchInputRef.current.value = "";
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        {/* Microphone */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-2 border-gray-300 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
          />
        </svg>
        {/* Search */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-blue-500 hidden sm:inline-flex  "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </form>
    </div>
  );
}

export default SearchHeader;
