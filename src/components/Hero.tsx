import { ArrowRight } from 'lucide-react';
import masthead from '../assets/home/masthead.jpg';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
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
    <section
      id="home"
      className="relative flex items-center justify-center h-screen"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${masthead})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
        Naguilian Fairytale 
          <span className="block text-rose-300">Events & Services</span>
        </h1>
        <p className="max-w-2xl mx-auto mb-10 text-xl leading-relaxed text-gray-200 md:text-2xl">
        Wedding Parties, birthdays, Anniversary's make it magic & memorable - will tailor made to your taste.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-300 transform rounded-lg shadow-xl group bg-rose-500 hover:bg-rose-600 hover:scale-105 hover:shadow-2xl"
          >
            Start Planning
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 text-lg font-medium text-white transition-all duration-300 border-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/50"
          >
            Our Services
          </button>
        </div>
      </div>

      <div className="absolute transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <div className="flex justify-center w-6 h-10 border-2 border-white rounded-full">
          <div className="w-1 h-3 mt-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
