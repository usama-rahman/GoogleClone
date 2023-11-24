import Image from "next/image";
import { useRouter } from "next/navigation";

function GoogleSearchImg() {
  const router = useRouter();
  return (
    <div>
      <Image
        alt="Goolge"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
    </div>
  );
}

export default GoogleSearchImg;
