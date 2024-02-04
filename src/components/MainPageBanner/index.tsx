import Image from "next/image";
import BannerButtons from "./Buttons";

export default function MainBanner() {
  return (
    <div className="w-[100vw] aspect-video xl:aspect-[2/1] relative">
      <Image alt="Grove" src="/assets/grove.jpg" fill className="absolute" />
      <div className="absolute z-10 top-10 lg:top-20 left-10 w-96 lg:mt-24">
        <div className="text-3xl xl:text-5xl font-semibold text-bg-primary">
          The Utopia Grove Surf Club
        </div>
        <BannerButtons />
      </div>
    </div>
  );
}
