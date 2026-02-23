import { HomeHero } from "@/components/home-hero";
import { HomePillars } from "@/components/home-pillars";
import { HomePrograms } from "@/components/home-programs";
import { HomeCTA } from "@/components/home-cta";

export default function Home() {
  return (
    <>
      <main>
        <HomeHero />
        <HomePillars />
        <HomePrograms />
        <HomeCTA />
      </main>
    </>
  );
}
