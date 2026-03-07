import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & Michael Chen',
      event: 'Wedding',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Elegance Events made our wedding day absolutely perfect. Every detail was meticulously planned and executed. They turned our vision into reality and exceeded all our expectations. We couldn\'t have asked for a better team!',
      rating: 5,
    },
    {
      name: 'Jennifer Martinez',
      event: 'Corporate Conference',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Our annual corporate conference was a huge success thanks to Elegance Events. Their professionalism and attention to detail impressed both our clients and team. They handled everything seamlessly from start to finish.',
      rating: 5,
    },
    {
      name: 'David Thompson',
      event: '50th Birthday Celebration',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'They organized the most incredible 50th birthday party for my wife. The venue, decorations, and entertainment were all spectacular. Every guest was amazed, and my wife was over the moon. Truly unforgettable!',
      rating: 5,
    },
    {
      name: 'Emily & James Wilson',
      event: 'Destination Wedding',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Planning a destination wedding seemed daunting, but Elegance Events made it effortless. They coordinated everything remotely and on-site with such grace. Our beach wedding in Bali was absolutely magical!',
      rating: 5,
    },
    {
      name: 'Robert Anderson',
      event: 'Product Launch Event',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The product launch event they organized for our company was phenomenal. Creative, engaging, and perfectly executed. The buzz it created exceeded our marketing goals. Highly recommend their services!',
      rating: 5,
    },
    {
      name: 'Lisa & Mark Johnson',
      event: '25th Anniversary',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Our 25th anniversary celebration was everything we dreamed of and more. The team listened to our wishes and brought them to life beautifully. Thank you for making our special milestone so memorable!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it—hear from the clients who trusted us
            to make their special moments unforgettable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 h-12 w-12 text-rose-100" />

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
                {testimonial.text}
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
