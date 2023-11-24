import React from "react";
import Image from "next/image";

function Avatar({ url }) {
  return (
    <Image
      loading="lazy"
      className="rounded-full h-10 cursor-pointer  "
      src="https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Profile Picture"
      width={40}
      height={40}
    />
  );
}

export default Avatar;
