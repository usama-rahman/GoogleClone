import React from "react";

function Footer() {
  return (
    <footer className="grid w-full">
      <div className="px-8 py-3">
        <p>Bangladesh</p>
      </div>

      <div className="grid grid-cols-1">
        <div className="flex justify-center space-x-8 whitespace-nowrap ">
          <ul className="flex">
            <li>About</li>
            <li>Advertising</li>
            <li>Business</li>
            <li>How Search Works </li>
          </ul>
        </div>
        <div className="flex justify-center space-x-8  ">
          <ul className="flex">
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
