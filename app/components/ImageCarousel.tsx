"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CarouselImage } from "@/app/utils/carouselImages";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

interface ImageCarouselProps {
  className?: string;
  images: CarouselImage[];
  autoPlayInterval?: number;
}

export default function ImageCarousel({
  className = "",
  images,
  autoPlayInterval = 3000, // 3 seconds default
}: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) {
    return <div className={className}>No images available</div>;
  }

  return (
    <div className={`${className} relative overflow-hidden`}>
      {/* Current Image */}
      <div className="w-full h-full transition-transform duration-500">
        <Image
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          fill
          priority={currentImageIndex === 0}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "15px",
          }}
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors"
        aria-label="Previous image"
      >
        <FaAngleLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white rounded-full p-2 hover:bg-black/50 transition-colors"
        aria-label="Next image"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}
