export const galleryData = {
  beard: Array.from({ length: 11 }, (_, index) => {
    const num = index + 1;
    return {
      src: `src/assets/img/webp/beard-${num}.webp`,
      alt: "beard",
    };
  }),

  boys: Array.from({ length: 12 }, (_, index) => {
    const num = index + 1;
    return {
      src: `src/assets/img/webp/children-${num}.webp`,
      alt: "children",
    };
  }),

  haircut: Array.from({ length: 18 }, (_, index) => {
    const num = index + 1;
    return {
      src: `src/assets/img/webp/hair-${num}.webp`,
      alt: "hair",
    };
  }),

  mustache: Array.from({ length: 10 }, (_, index) => {
    const num = index + 1;
    return {
      src: `src/assets/img/webp/mustache-${num}.webp`,
      alt: "mustache",
    };
  }),
};
