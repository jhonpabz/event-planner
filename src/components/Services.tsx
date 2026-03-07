import { Heart, Briefcase, Gift, Plane, MessageCircle, Calendar } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Planning',
      description: 'Complete wedding coordination from engagement to \'I do,\' ensuring your special day is flawlessly executed and unforgettable.',
      image: 'https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional corporate gatherings that impress clients and inspire teams, from conferences to company celebrations.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Gift,
      title: 'Social Celebrations',
      description: 'Birthday parties, anniversaries, and milestone celebrations designed to reflect your personality and create lasting memories.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Plane,
      title: 'Destination Events',
      description: 'Exotic locations and dreamy destinations brought to life with seamless coordination and local expertise.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: MessageCircle,
      title: 'Event Consultation',
      description: 'Expert guidance and personalized advice to help you plan the perfect event within your budget and timeline.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Calendar,
      title: 'Day-of Coordination',
      description: 'Professional coordination on your event day, ensuring everything runs smoothly while you enjoy your celebration.',
      image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we offer comprehensive event planning services
            tailored to your unique vision and needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-rose-500" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
