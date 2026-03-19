import { useState } from 'react';
import { X } from 'lucide-react';
import socialCelebrationsImg from '../assets/services/social-celebrations.jpg';
import eventConsultationImg from '../assets/services/event-consultation.jpg';
import gardenVenueImg from '../assets/services/venue.jpg';
import weddingReception from '../assets/gallery/wedding-reception.jpg';
import weddingCeremony from '../assets/gallery/wedding-ceremony.jpg';
import weddingVenue from '../assets/gallery/wedding-venue.jpg';
import tableSetting from '../assets/gallery/table-setting.jpg';
import setup from '../assets/gallery/setup.jpg';
import destination from '../assets/gallery/destination.jpg';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: weddingCeremony,
      alt: 'Wedding ceremony',
    },
    {
      url: weddingReception,
      alt: 'Wedding reception',
    },
    {
      url: gardenVenueImg,
      alt: 'Event Venue',
    },
    {
      url: eventConsultationImg,
      alt: 'Event decoration',
    },
    {
      url: tableSetting,
      alt: 'Table setting',
    },
    {
      url: socialCelebrationsImg,
      alt: 'Party celebration',
    },
    {
      url: setup,
      alt: 'Event setup',
    },
    {
      url: weddingVenue,
      alt: 'Wedding venue',
    },
    {
      url: destination,
      alt: 'Destination wedding',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Our Gallery
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Explore our portfolio of stunning events and celebrations that showcase our commitment
            to excellence and attention to detail
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all duration-300 shadow-lg cursor-pointer group rounded-xl hover:shadow-2xl"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-square">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex items-end transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-100">
                <p className="p-6 text-lg font-medium text-white transition-transform duration-300 transform translate-y-4 group-hover:translate-y-0">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute text-white transition-colors top-4 right-4 hover:text-rose-400"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery image"
            className="object-contain max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
