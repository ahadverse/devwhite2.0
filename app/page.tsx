import AboutSection from "@/components/homepage/aboutsection/aboutsection";
import BlogSection from "@/components/homepage/blogsection/blogsection";
import DeveloperSection from "@/components/homepage/developersection/developersection";
import {
  TechStackSection,
  SubscribeSection,
  ProcessSection,
} from "@/components/homepage/extrasections/extrasections";
import HeroSection from "@/components/homepage/hero/hero1";
import ServicesSection from "@/components/homepage/servicessection/servicessection";
import SolutionsSection from "@/components/homepage/solutionssection/solutionssection";
import StatsSection from "@/components/homepage/statssection/statssection";
import TestimonialsSection from "@/components/homepage/testimonialssection/testimonialssection";
import WordIsOutSection from "@/components/homepage/wordisoutsection/wordisoutsection";

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
