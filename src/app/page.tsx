import SiteHeader from "@/components/Navbar";
import Hero from "@/components/Hero";
import GamesSection from "@/components/GamesSection";
import InfoSection from "@/components/InfoSection";
import ResponsibleSection from "@/components/ResponsibleSection";
import SiteFooter from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <GamesSection />
        <InfoSection />
        <ResponsibleSection />
      </main>
      <SiteFooter />
    </>
  );
}
