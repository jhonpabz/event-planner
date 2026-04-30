import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const homeSections = ["home", "about", "services", "gallery", "contact"];

interface HomePageProps {
  onActiveSectionChange: Dispatch<SetStateAction<string>>;
}

export default function HomePage({ onActiveSectionChange }: HomePageProps) {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const current = homeSections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (!current) return;
      onActiveSectionChange((previousSection) =>
        previousSection === current ? previousSection : current
      );
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [onActiveSectionChange]);

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const targetId = location.hash.replace("#", "");
    const element = document.getElementById(targetId);
    if (!element) {
      return;
    }

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }, [location.hash]);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </main>
  );
}
