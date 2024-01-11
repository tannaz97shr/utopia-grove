import Image from "next/image";

export default function MainBanner() {
  return (
    <div className="w-full aspect-video xl:aspect-[8/3] relative">
      <Image alt="Grove" src="/assets/grove.jpg" fill className="absolute" />
      <div className="relavtive z-10 text-3xl xl:text-5xl font-semibold text-bg-primary top-10 lg:top-20 left-10 w-72">
        The Utopia Grove Surf Club
      </div>
    </div>
  );
}
