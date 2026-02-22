import AboutSection from "@/components/aboutsection/aboutsection";
import BlogSection from "@/components/blogsection/blogsection";
import DeveloperSection from "@/components/developersection/developersection";
import {
  TechStackSection,
  SubscribeSection,
  TestimonialsSection,
  ProcessSection,
} from "@/components/extrasections/extrasections";
import HeroSection from "@/components/hero/hero1";
import ServicesSection from "@/components/servicessection/servicessection";
import SolutionsSection from "@/components/solutionssection/solutionssection";
import StatsSection from "@/components/statssection/statssection";
import WordIsOutSection from "@/components/wordisoutsection/wordisoutsection";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <DeveloperSection />
      <SolutionsSection />
      <ServicesSection />
      <WordIsOutSection />
      <TechStackSection />
      <ProcessSection />
      <BlogSection />

      <SubscribeSection />
      <TestimonialsSection />
    </div>
  );
}
