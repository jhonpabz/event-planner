import { Award, Users, Sparkles, Clock } from 'lucide-react';
import about from '../assets/home/about.jpg';


export default function About() {
  const stats = [
    { icon: Award, value: '5+', label: 'Events Completed' },
    { icon: Users, value: '10+', label: 'Happy Clients' },
    { icon: Sparkles, value: '2+', label: 'Years Experience' },
    { icon: Clock, value: '100%', label: 'On-Time Delivery' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
              About Naguilian Fairytale
            </h2>
            <div className="space-y-4 leading-relaxed text-gray-600">
              <p className="text-lg">
                Naguilian Fairytale Events & Services in Naguilian, La Union has been transforming visions into extraordinary experiences.
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
                src={about}
                alt="Event planning"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute p-8 text-white shadow-xl -bottom-6 -left-6 bg-rose-500 rounded-xl">
              <p className="mb-1 text-5xl font-bold">2+</p>
              <p className="text-sm font-medium">Years of Excellence</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-20 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-rose-100">
                <stat.icon className="w-8 h-8 text-rose-500" />
              </div>
              <div className="mb-2 text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm font-medium text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
