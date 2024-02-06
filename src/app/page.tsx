import HomeEventsSection from "@/components/HomeEventsSection";
import MainBanner from "@/components/MainPageBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <MainBanner />
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <HomeEventsSection />
      </div>
    </main>
  );
}
