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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-rose-500 fill-current" />
              <span className="text-2xl font-serif font-bold text-white">
                Elegance Events
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Creating unforgettable moments and extraordinary experiences for over 15 years.
              Let us transform your dreams into reality with our expert event planning services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-rose-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-rose-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-rose-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-rose-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="hover:text-rose-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-rose-400 transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="hover:text-rose-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('gallery')} className="hover:text-rose-400 transition-colors">
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="hover:text-rose-400 transition-colors cursor-pointer">Wedding Planning</li>
              <li className="hover:text-rose-400 transition-colors cursor-pointer">Corporate Events</li>
              <li className="hover:text-rose-400 transition-colors cursor-pointer">Social Celebrations</li>
              <li className="hover:text-rose-400 transition-colors cursor-pointer">Destination Events</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            {currentYear} Elegance Events. All rights reserved. Made with{' '}
            <Heart className="inline h-4 w-4 text-rose-500 fill-current" /> for unforgettable moments
          </p>
        </div>
      </div>
    </footer>
  );
}
