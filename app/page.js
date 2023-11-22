import GoogleImg from "./Components/GoogleImg";
import SearchIcon from "./Components/SearchIcon";
import LeftNavItems from "./Components/LeftNavItems";
import RightNavItems from "./Components/RightNavItems";
import MicrophoneIcon from "./Components/MicrophoneIcon";

export default function Home() {
  return (
    <div>
      <header className="p-5 flex justify-between text-gray-700">
        <LeftNavItems />
        <RightNavItems />
      </header>

      <form className="flex flex-col mt-44 items-center flex-grow">
        <GoogleImg />

        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full items-center  px-5 py-3 sm:max-w-xl inputSection  lg:max-w-2xl ">
          <SearchIcon />
          <input type="text" className="focus:outline-none flex-grow " />
          <MicrophoneIcon />
        </div>
      </form>
    </div>
  );
}
