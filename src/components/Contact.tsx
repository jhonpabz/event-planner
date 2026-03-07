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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start planning your perfect event? Contact us today for a consultation
            and let's bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600">123 Event Plaza, Suite 456<br />New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-rose-100 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-rose-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">hello@eleganceevents.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Office Hours</h4>
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="event-type" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Type *
                </label>
                <select
                  id="event-type"
                  name="event-type"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                >
                  <option value="">Select an event type</option>
                  <option value="wedding">Wedding Planning</option>
                  <option value="corporate">Corporate Events</option>
                  <option value="social">Social Celebrations</option>
                  <option value="destination">Destination Events</option>
                  <option value="consultation">Event Consultation</option>
                  <option value="coordination">Day-of Coordination</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your event..."
                ></textarea>
              </div>

              {formSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-rose-500 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-rose-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
