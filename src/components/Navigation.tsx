import { useState, useEffect } from "react";
import { Menu, X, Heart, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { galleryEventsWithImages } from "../data/galleryEvents";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGalleryDropdownOpen, setIsGalleryDropdownOpen] = useState(false);
  const isHomeRoute = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (!isHomeRoute) {
      navigate(`/#${sectionId}`);
      setIsMobileMenuOpen(false);
      return;
    }

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

  const getLinkClassName = (sectionId: string) =>
    `text-sm font-medium transition-colors duration-200 ${
      activeSection === sectionId && isHomeRoute
        ? isScrolled
          ? "text-rose-500"
          : "text-white border-b-2 border-white"
        : isScrolled
          ? "text-gray-700 hover:text-rose-500"
          : "text-white hover:text-rose-200"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            className="flex items-center space-x-2 cursor-pointer"
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Heart
              className={`h-8 w-8 ${isScrolled ? "text-rose-500" : "text-white"} fill-current`}
            />
            <span
              className={`text-2xl font-serif font-bold ${isScrolled ? "text-gray-900" : "text-white"}`}
            >
              Naguilian Fairytale
            </span>
          </Link>

          <div className="hidden space-x-8 md:flex">
            {navLinks
              .filter((link) => link.id !== "gallery")
              .map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={getLinkClassName(link.id)}
                >
                  {link.label}
                </button>
              ))}

            <div
              className="relative"
              onMouseEnter={() => setIsGalleryDropdownOpen(true)}
              onMouseLeave={() => setIsGalleryDropdownOpen(false)}
            >
              <button
                className={`inline-flex items-center gap-1 ${getLinkClassName("gallery")}`}
                onClick={() => navigate("/gallery")}
              >
                Gallery
                <ChevronDown className="w-4 h-4" />
              </button>

              {isGalleryDropdownOpen && (
                <div className="absolute left-0 w-64 p-2 mt-2 bg-white border border-gray-100 shadow-xl rounded-xl">
                  <Link
                    to="/gallery"
                    className="block px-3 py-2 text-sm font-medium text-gray-800 rounded-lg hover:bg-rose-50 hover:text-rose-500"
                  >
                    All Events
                  </Link>
                  {galleryEventsWithImages.map((event) => (
                    <Link
                      key={event.id}
                      to={`/gallery/${event.routePath}`}
                      className="block px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-rose-50 hover:text-rose-500"
                    >
                      {event.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
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
              link.id === "gallery" ? (
                <div key={link.id} className="space-y-1">
                  <button
                    onClick={() => {
                      navigate("/gallery");
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full px-4 py-3 font-medium text-left transition-colors rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Gallery
                  </button>
                  <div className="pl-4">
                    {galleryEventsWithImages.map((event) => (
                      <button
                        key={event.id}
                        onClick={() => {
                          navigate(`/gallery/${event.routePath}`);
                          setIsMobileMenuOpen(false);
                        }}
                        className="block w-full px-4 py-2 text-sm text-left text-gray-600 rounded-lg hover:bg-gray-50 hover:text-rose-500"
                      >
                        {event.title}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === link.id && isHomeRoute
                      ? "bg-rose-50 text-rose-500 font-medium"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
