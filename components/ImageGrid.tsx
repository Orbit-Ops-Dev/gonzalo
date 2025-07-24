"use client";

import { useState } from "react";
import Image from "next/image";
import { Image as ImageType } from "@/types";

interface ImageGridProps {
  images: ImageType[];
  columns?: 1 | 2 | 3 | 4;
}

export default function ImageGrid({ images, columns = 3 }: ImageGridProps) {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const gridCols = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-4 md:gap-6`}>
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-sm cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes={`(max-width: 768px) 100vw, (max-width: 1200px) ${100 / columns}vw, ${1200 / columns}px`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-white text-center p-4">
                  <h3 className="text-xl font-serif mb-2">{image.title}</h3>
                  <p className="text-sm uppercase tracking-wider opacity-80">
                    {image.category}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-5xl max-h-[90vh] relative">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="object-contain w-full h-full"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-white text-center">
              <h3 className="text-2xl font-serif mb-2">{selectedImage.title}</h3>
              {selectedImage.description && (
                <p className="text-sm opacity-80">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
