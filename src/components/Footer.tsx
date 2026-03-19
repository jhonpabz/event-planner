import { Heart, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="text-gray-300 bg-gray-900">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 mb-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4 space-x-2">
              <Heart className="w-8 h-8 fill-current text-rose-500" />
              <span className="font-serif text-2xl font-bold text-white">
              Naguilian Fairytale
              </span>
            </div>
            <p className="mb-4 leading-relaxed text-gray-400">
            Wedding Parties, birthdays, Anniversary's make it magic & memorable - will tailor made to your taste.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 transition-colors bg-gray-800 rounded-lg hover:bg-rose-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 transition-colors bg-gray-800 rounded-lg hover:bg-rose-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 transition-colors bg-gray-800 rounded-lg hover:bg-rose-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 transition-colors bg-gray-800 rounded-lg hover:bg-rose-500">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="transition-colors hover:text-rose-400">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="transition-colors hover:text-rose-400">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="transition-colors hover:text-rose-400">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="transition-colors hover:text-rose-400">
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold text-white">Services</h3>
            <ul className="space-y-2">
              <li className="transition-colors cursor-pointer hover:text-rose-400">Wedding Planning</li>
              <li className="transition-colors cursor-pointer hover:text-rose-400">Corporate Events</li>
              <li className="transition-colors cursor-pointer hover:text-rose-400">Social Celebrations</li>
              <li className="transition-colors cursor-pointer hover:text-rose-400">Destination Events</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center border-t border-gray-800">
          <p className="text-gray-400">
            {currentYear} Naguilian Fairytale Events & Services. All rights reserved. Made with{' '}
            <Heart className="inline w-4 h-4 fill-current text-rose-500" /> for unforgettable moments
          </p>
        </div>
      </div>
    </footer>
  );
}
