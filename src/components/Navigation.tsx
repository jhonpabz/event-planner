import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "gallery", label: "Gallery" },
    // { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <Heart
              className={`h-8 w-8 ${isScrolled ? "text-rose-500" : "text-white"} fill-current`}
            />
            <span
              className={`text-2xl font-serif font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              Naguilian Fairytale
            </span>
          </div>

          <div className="hidden space-x-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === link.id
                    ? isScrolled
                      ? "text-rose-500"
                      : "text-white border-b-2 border-white"
                    : isScrolled
                      ? "text-gray-700 hover:text-rose-500"
                      : "text-white hover:text-rose-200"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`}
              />
            ) : (
              <Menu
                className={`h-6 w-6 ${isScrolled ? "text-gray-900" : "text-white"}`}
              />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "bg-rose-50 text-rose-500 font-medium"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
