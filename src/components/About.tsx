import { Award, Users, Sparkles, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, value: '500+', label: 'Events Completed' },
    { icon: Users, value: '10K+', label: 'Happy Clients' },
    { icon: Sparkles, value: '15+', label: 'Years Experience' },
    { icon: Clock, value: '100%', label: 'On-Time Delivery' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              About Elegance Events
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p className="text-lg">
                For over 15 years, Elegance Events has been transforming visions into extraordinary experiences.
                We believe every celebration tells a unique story, and we're passionate about bringing those stories to life
                with creativity, precision, and heart.
              </p>
              <p className="text-lg">
                Our team of dedicated event professionals works tirelessly to ensure that every detail is perfect,
                from the initial concept to the final farewell. Whether it's an intimate gathering or a grand celebration,
                we bring the same level of dedication and expertise to every event.
              </p>
              <p className="text-lg">
                What sets us apart is our commitment to understanding you—your style, your dreams, and your vision.
                We don't just plan events; we create memories that last a lifetime.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Event planning"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-rose-500 text-white p-8 rounded-xl shadow-xl">
              <p className="text-5xl font-bold mb-1">15+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-100 rounded-full mb-4">
                <stat.icon className="h-8 w-8 text-rose-500" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
