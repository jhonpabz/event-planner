import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryEventsWithImages } from "../data/galleryEvents";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Our Gallery
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            Explore featured events, then open each gallery to view all event photos.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {galleryEventsWithImages.map((event) => (
            <Link
              key={event.id}
              to={`/gallery/${event.routePath}`}
              className="overflow-hidden transition-all duration-300 shadow-lg group rounded-xl hover:shadow-2xl"
            >
              <div className="relative aspect-[4/3] bg-gray-200">
                {event.highlightImage ? (
                  <img
                    src={event.highlightImage}
                    alt={`${event.title} highlight`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full p-4 text-center text-gray-500 bg-gray-100">
                    Add images in this event folder to preview them here.
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              <div className="p-6 bg-white">
                <p className="text-sm font-semibold tracking-wide uppercase text-rose-500">
                  {event.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-gray-900">{event.title}</h3>
                <p className="mt-2 text-gray-600">{event.placeholder}</p>
                <span className="inline-flex items-center gap-2 mt-4 font-medium text-rose-500">
                  View event gallery
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
