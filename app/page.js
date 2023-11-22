import GoogleImg from "./Components/GoogleImg";
import SearchIcon from "./Components/SearchIcon";
import LeftNavItems from "./Components/LeftNavItems";
import RightNavItems from "./Components/RightNavItems";

export default function Home() {
  return (
    <div>
      <header className="p-5 flex justify-between text-gray-700">
        <LeftNavItems />
        <RightNavItems />
      </header>
      <form>
        <GoogleImg />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 ">
          <SearchIcon />
          <input type="text" className="focus:outline-none flex-grow  " />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
        </div>
      </form>
    </div>
  );
}
