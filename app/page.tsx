import { HomeHero } from "@/components/home-hero";
import { HomePillars } from "@/components/home-pillars";
import { HomeOpportunities } from "@/components/home-open-positions";
import { HomeCTA } from "@/components/home-cta";

export default function Home() {
  return (
    <>
      <main>
        <HomeHero />
        <HomePillars />
        <HomeOpportunities />
        <HomeCTA />
      </main>
    </>
  );
}
