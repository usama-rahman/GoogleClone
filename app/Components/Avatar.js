import React from "react";

function Avatar({ url }) {
  return (
    <img
      loading="lazy"
      className="rounded-full h-10 cursor-pointer  "
      src={url}
      alt="Profile Picture"
    />
  );
}

export default Avatar;
