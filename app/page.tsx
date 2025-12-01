import AnnouncementBanner from "@/components/shared/announcement-banner";
import { Footer } from "@/components/shared/footer";
import Hero from "@/components/shared/hero";
import NewsSidebar from "@/components/shared/news-sidebar";
import ElectionTracker from "@/modules/election/sections/election-tracker";

export default function Home() {
  return (
    <div className="  ">
      <AnnouncementBanner />
      <Hero />
      <div className="brand-container flex-col-reverse md:flex-row space-y-[30px] gap-y-[20px] flex gap-x-[46px]">
        <ElectionTracker />
        <NewsSidebar />
      </div>
      <Footer />
    </div>
  );
}
