import GoogleImg from "./Components/GoogleImg";
import LeftNavItems from "./Components/LeftNavItems";
import RightNavItems from "./Components/RightNavItems";
import HeroBtn from "./Components/HeroBtn";
import InputBox from "./Components/InputBox";

export default function Home() {
  return (
    <div>
      <header className="p-5 flex justify-between text-gray-700">
        <LeftNavItems />
        <RightNavItems />
      </header>

      <form className="flex flex-col mt-44 items-center flex-grow">
        <GoogleImg />
        <InputBox />
        <HeroBtn />
      </form>
    </div>
  );
}
