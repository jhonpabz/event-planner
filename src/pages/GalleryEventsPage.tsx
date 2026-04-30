import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryEventsWithImages } from "../data/galleryEvents";

export default function GalleryEventsPage() {
  return (
    <main className="min-h-screen pt-28 pb-16 bg-rose-50/40">
      <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-rose-500">
            Gallery
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            Event Highlights
          </h1>
          <p className="max-w-3xl mx-auto mt-5 text-lg text-gray-600">
            Choose a specific event to view its highlight and full photo collection.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {galleryEventsWithImages.map((event) => (
            <Link
              key={event.id}
              to={`/gallery/${event.routePath}`}
              className="relative block overflow-hidden transition-shadow duration-300 shadow-lg group rounded-2xl hover:shadow-2xl"
            >
              <div className="relative h-80 bg-gray-200">
                {event.highlightImage ? (
                  <img
                    src={event.highlightImage}
                    alt={`${event.title} highlight`}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-center text-gray-500 bg-gray-100">
                    Images for this event will appear once you add files.
                  </div>
                )}

                <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/60 group-hover:opacity-100">
                  <div className="absolute inset-x-0 p-6 text-white bottom-6">
                    <p className="text-sm font-medium tracking-wide uppercase text-rose-200">
                      {event.category}
                    </p>
                    <h2 className="mt-1 text-2xl font-semibold">{event.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-gray-100">
                      {event.placeholder}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 bg-white">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
                  <p className="mt-1 text-sm text-gray-500">{event.eventDateLabel}</p>
                </div>
                <span className="inline-flex items-center gap-2 font-medium text-rose-500">
                  Open gallery
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
