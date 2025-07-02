import HomeHero from "@/components/home/home-hero";
import { CustomerFeedbacks } from "@/components/home/client-feedback";
import { SkillsMarquee } from "@/components/home/skills-list";
export default function Home() {
  return (
    <div className="gap-y-12">
      {/* <TypingAnimation/> */}
      <HomeHero />
      <SkillsMarquee />
      <CustomerFeedbacks />
    </div>
  );
}
