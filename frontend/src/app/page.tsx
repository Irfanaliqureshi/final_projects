import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoriesSection from "@/components/CategoriesSection";
import CountDownSection from "@/components/CountDownSection";
import PopularSubjects from "@/components/PopularSubjects";
// import AboutSection from "@/components/AboutSection";
// import ServicesSection from "@/components/ServicesSection";
// import TestimonialSection from "@/components/TestimonialSection";
// import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Adding components back one by one for debugging */}
      <Header />
      <HeroSection />
      <CategoriesSection />
      <CountDownSection />
      <PopularSubjects />
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
      {/* <TestimonialSection /> */}
      {/* <TeamSection /> */}
      <Footer />
    </main>
  );
}

