import { Heart, Briefcase, Gift, Plane, MessageCircle, Calendar } from 'lucide-react';
import weddingPlanningImg from '../assets/services/wedding-planning.jpg';
import gardenVenueImg from '../assets/services/venue.jpg';
import socialCelebrationsImg from '../assets/services/social-celebrations.jpg';
import destinationEventsImg from '../assets/services/destination-events.jpg';
import eventConsultationImg from '../assets/services/event-consultation.jpg';
import foodCateringImg from '../assets/services/food-catering.jpg';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding coordination from engagement to \'I do,\' ensuring your special day is flawlessly executed and unforgettable.',
      image: weddingPlanningImg,
    },
    {
      icon: Briefcase,
      title: 'Garden Venue',
      description: 'Garden Venue for your wedding, birthday, anniversary, zumba, or any special occasion.',
      image: gardenVenueImg,
    },
    {
      icon: Gift,
      title: 'Social Celebrations',
      description: 'Birthday parties, anniversaries, and milestone celebrations designed to reflect your personality and create lasting memories.',
      image: socialCelebrationsImg,
    },
    {
      icon: Plane,
      title: 'Destination Events',
      description: 'Exotic locations and dreamy destinations brought to life with seamless coordination and local expertise.',
      image: destinationEventsImg,
    },
    {
      icon: MessageCircle,
      title: 'Event Consultation',
      description: 'Expert guidance and personalized advice to help you plan the perfect event within your budget and timeline.',
      image: eventConsultationImg,
    },
    {
      icon: Calendar,
      title: 'Food Catering',
      description: 'We offer catering assistance through our trusted partners, providing a variety of food options perfect for any occasion.',
      image: foodCateringImg,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Our Services
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            From intimate gatherings to grand celebrations, we offer comprehensive event planning services
            tailored to your unique vision and needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg group rounded-xl hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute flex items-center bottom-4 left-4">
                  <div className="p-3 rounded-lg bg-white/90 backdrop-blur-sm">
                    <service.icon className="w-6 h-6 text-rose-500" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                <p className="leading-relaxed text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
