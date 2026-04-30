type ImageModule = {
  default: string;
};

export interface GalleryEvent {
  id: string;
  title: string;
  category: string;
  eventDateLabel: string;
  placeholder: string;
  description: string;
  routePath: string;
  folderPath: string;
}

export interface GalleryEventWithImages extends GalleryEvent {
  highlightImage: string;
  images: string[];
}

export const galleryEvents: GalleryEvent[] = [
  {
    id: "wedding-reception-rd",
    title: "Wedding Reception",
    category: "Wedding Reception",
    eventDateLabel: "Recent Event",
    placeholder: "Warm lights, joyful dancing, and heartfelt toasts.",
    description:
      "A romantic wedding reception setup with elegant details and candid moments from the celebration.",
    routePath: "wedding-reception-rd",
    folderPath: "weddingReception/rd",
  },
  {
    id: "garden-venue-zumba",
    title: "Garden Venue",
    category: "Garden Venue",
    eventDateLabel: "Recent Event",
    placeholder: "Dance. Sweat. Enjoy nature.",
    description:
      "Garden Venue for your wedding, birthday, anniversary, zumba, or any special occasion.",
    routePath: "garden-venue-zumba",
    folderPath: "gardenVenue/zumba",
  },
];

const galleryImageModules = import.meta.glob<ImageModule>(
  "../assets/gallery/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

const normalizeFileName = (path: string) =>
  path.split("/").pop()?.toLowerCase() ?? "";

const buildImageMap = () => {
  const imageMap = new Map<string, string[]>();

  for (const [path, module] of Object.entries(galleryImageModules)) {
    const marker = "/assets/gallery/";
    const markerIndex = path.indexOf(marker);
    if (markerIndex < 0) continue;

    const relativePath = path.slice(markerIndex + marker.length);
    const imageParts = relativePath.split("/");
    if (imageParts.length < 3) continue;

    const folderPath = `${imageParts[0]}/${imageParts[1]}`;
    const currentImages = imageMap.get(folderPath) ?? [];
    currentImages.push(module.default);
    imageMap.set(folderPath, currentImages);
  }

  for (const [key, images] of imageMap.entries()) {
    imageMap.set(
      key,
      images.sort((first, second) =>
        normalizeFileName(first).localeCompare(normalizeFileName(second), undefined, {
          numeric: true,
        })
      )
    );
  }

  return imageMap;
};

const imageMap = buildImageMap();

const getHighlightImage = (images: string[]) => {
  const highlightsImage = images.find((imagePath) =>
    normalizeFileName(imagePath).includes("highlight")
  );

  return highlightsImage ?? images[0] ?? "";
};

export const galleryEventsWithImages: GalleryEventWithImages[] = galleryEvents.map((event) => {
  const images = imageMap.get(event.folderPath) ?? [];

  return {
    ...event,
    images,
    highlightImage: getHighlightImage(images),
  };
});

export const getGalleryEventByRoute = (routePath: string) =>
  galleryEventsWithImages.find((event) => event.routePath === routePath);
