import AnnouncementBanner from "@/components/shared/announcement-banner";
import Hero from "@/components/shared/hero";
import NewsSidebar from "@/components/shared/news-sidebar";
import ElectionTracker from "@/modules/election/sections/election-tracker";
import Image from "next/image";

export default function Home() {
  return (
    <div className="  ">
      <AnnouncementBanner />
      <Hero />
      <div className="container-brand flex-col-reverse md:flex-row space-y-[30px] flex gap-x-[46px]">
<ElectionTracker />
      <NewsSidebar />
      </div>
    </div>
  );
}
