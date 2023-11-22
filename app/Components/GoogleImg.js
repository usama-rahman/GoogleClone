import React from "react";
import Image from "next/image";

function GoogleImg() {
  return (
    <div>
      <Image
        alt="Goolge"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={100}
        width={300}
      />
    </div>
  );
}

export default GoogleImg;
