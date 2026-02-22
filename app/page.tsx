import HeroSection from "@/components/hero/hero1";
import StatsSection from "@/components/statssection/statssection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
    </div>
  );
}
