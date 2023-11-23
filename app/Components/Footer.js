import React from "react";

function Footer() {
  return (
    <footer className="grid w-full footerBG text-sm ">
      <div className="px-8 py-3 footerBottomBorder">
        <p>Bangladesh</p>
      </div>

      <div className="grid grid-cols-1 lg:flex justify-between w-9/12		 m-auto py-3">
        <div className="flex justify-center space-x-8 whitespace-nowrap  ">
          <ul className="flex gap-8 ">
            <li>About</li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How Search Works </li>
          </ul>
        </div>

        <div className="flex justify-center space-x-8  ">
          <ul className="flex gap-8">
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
