import CreatorSection from "@/components/sections/CreatorSection";
import FollowBrandSection from "@/components/sections/FollowBrandSection";
import FooterSection from "@/components/sections/FooterSection";
import HeaderSection from "@/components/sections/HeaderSection";
import HeroSection from "@/components/sections/HeroSection";
import LearnFromSection from "@/components/sections/LearnFromSection";
import MarkerplaceSection from "@/components/sections/MarketplaceSection";
import NomineeSection from "@/components/sections/NomineeSection";
import ShareWorkSection from "@/components/sections/ShareWorkSection";

export default function Home() {
  return (
    <main className="bg-[#F8F8F8]">
      <HeaderSection />
      <div className="flex flex-col gap-8 md:gap-[100px]">
        <HeroSection />
        <div className="px-4 md:px-[52px] flex flex-col gap-8 md:gap-[100px]">
          <FollowBrandSection />
          <NomineeSection />
          <LearnFromSection />
          <MarkerplaceSection />
          <CreatorSection />
          <ShareWorkSection />
          <FooterSection />
        </div>
      </div>
    </main>
  );
}
