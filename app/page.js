import GoogleImg from "./Components/GoogleImg";
import LeftNavItems from "./Components/LeftNavItems";
import RightNavItems from "./Components/RightNavItems";
import HeroBtn from "./Components/HeroBtn";
import InputBox from "./Components/InputBox";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-center h-screen items-center ">
      <header className=" w-full p-5 flex items-center justify-between text-gray-700">
        <LeftNavItems />
        <RightNavItems />
      </header>

      <form className="flex flex-col mt-44 items-center flex-grow w-4/5">
        <GoogleImg />
        <InputBox />
        <HeroBtn />
      </form>

      <Footer />
    </div>
  );
}
