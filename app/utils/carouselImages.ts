export interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

const carouselImages: CarouselImage[] = Array.from({ length: 17 }, (_, i) => {
  const imageNumber = i + 1;
  return {
    id: imageNumber,
    src: `/photo/_${imageNumber}.jpeg`,
    alt: `Portfolio image ${imageNumber}`,
  };
});

export default carouselImages;
