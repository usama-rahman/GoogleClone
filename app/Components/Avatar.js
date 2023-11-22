import React from "react";
import Image from "next/image";

function Avatar({ url }) {
  return (
    <Image
      loading="lazy"
      className="rounded-full h-10 cursor-pointer  "
      src={url}
      alt="Profile Picture"
      width={40}
      height={40}
    />
  );
}

export default Avatar;
