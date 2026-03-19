import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Get In Touch
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Ready to start planning your perfect event? Contact us today for a consultation
            and let's bring your vision to life
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-rose-100">
                  <MapPin className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">Address</h4>
                  <p className="text-gray-600">Lioac Norte , Naguilian, La Union, <br />Naguilian, Philippines, 2511</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-rose-100">
                  <Phone className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">+63 916 695 7947</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 mr-4 rounded-lg bg-rose-100">
                  <Mail className="w-6 h-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">delisreyes@icloud.com</p>
                </div>
              </div>

              <a
                href="https://www.facebook.com/marivic.delosreyes.5070"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 transition-colors rounded-lg cursor-pointer bg-rose-100 hover:bg-rose-200"
              >
                <div className="flex items-center justify-center w-10 h-10 mr-4 text-white rounded-full bg-rose-500">
                  <span className="text-sm font-semibold">M</span>
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-gray-900">Messenger</h4>
                  <p className="text-gray-600">Marivic Delos Reyes</p>
                </div>
              </a>
            </div>

            <div className="p-6 mt-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl">
              <h4 className="mb-3 font-bold text-gray-900">Office Hours</h4>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-medium">Sunday:</span> By Appointment</p>
              </div>
            </div>
          </div>

          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="event-type" className="block mb-2 text-sm font-medium text-gray-700">
                  Event Type *
                </label>
                <select
                  id="event-type"
                  name="event-type"
                  required
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding Planning</option>
                  <option value="corporate">Garden Venue</option>
                  <option value="social">Social Celebrations</option>
                  <option value="destination">Destination Events</option>
                  <option value="consultation">Event Consultation</option>
                  <option value="coordination">Day-of Coordination</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              {formSubmitted && (
                <div className="px-4 py-3 text-green-800 border border-green-200 rounded-lg bg-green-50">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="flex items-center justify-center w-full px-8 py-4 text-lg font-medium text-white transition-all duration-300 transform rounded-lg shadow-lg bg-rose-500 hover:bg-rose-600 hover:scale-105 hover:shadow-xl"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
