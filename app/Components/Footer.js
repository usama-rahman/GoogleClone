import React from "react";

function Footer() {
  return (
    <footer className="grid w-full footerBG text-sm ">
      <div className="px-8 py-3 footerBottomBorder">
        <p>Bangladesh</p>
      </div>

      <div
        className="grid grid-cols-1 
      md:flex lg:w-11/12 justify-between md:w-4/5			 m-auto py-3"
      >
        <div className="flex justify-center space-x-8 whitespace-nowrap  ">
          <ul className="flex gap-6 lg:md-8 ">
            <li>About</li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How Search Works </li>
          </ul>
        </div>

        <div className="flex justify-center items-center space-x-8 mt-4 md:mt-0 ">
          <ul className="flex gap-6 lg:md-8">
            <li>Privacy</li>
            <li>Terms</li>
            <li>Settings</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
