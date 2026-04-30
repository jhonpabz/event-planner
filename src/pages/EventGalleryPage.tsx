import { Link, Navigate, useParams } from "react-router-dom";
import { getGalleryEventByRoute } from "../data/galleryEvents";

export default function EventGalleryPage() {
  const { eventRoute } = useParams<{ eventRoute: string }>();

  if (!eventRoute) {
    return <Navigate to="/gallery" replace />;
  }

  const event = getGalleryEventByRoute(eventRoute);
  if (!event) {
    return <Navigate to="/gallery" replace />;
  }

  return (
    <main className="min-h-screen pt-28 pb-16 bg-white">
      <section className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link
            to="/gallery"
            className="inline-flex items-center mb-5 text-sm font-medium text-rose-500 hover:text-rose-600"
          >
            ← Back to events
          </Link>
          <p className="text-sm font-semibold tracking-[0.3em] uppercase text-rose-500">
            {event.category}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
            {event.title}
          </h1>
          <p className="max-w-3xl mt-4 text-lg text-gray-600">{event.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {event.images.length > 0 ? (
            event.images.map((imageUrl, index) => (
              <article
                key={`${event.id}-${index}`}
                className="overflow-hidden bg-gray-100 shadow-sm rounded-xl"
              >
                <div className="aspect-square">
                  <img
                    src={imageUrl}
                    alt={`${event.title} ${index + 1}`}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </article>
            ))
          ) : (
            <p className="col-span-full p-6 text-center text-gray-600 border border-dashed rounded-xl">
              No images found in this event folder yet.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
