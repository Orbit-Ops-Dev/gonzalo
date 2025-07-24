"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getHeroImages } from "@/lib/portfolio-data";

export default function Hero() {
  const heroImages = getHeroImages();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        <div className="container">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-6 animate-fadeIn">
            Capturing Life&apos;s Beautiful Moments
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-slideUp">
            Moody, atmospheric photography with dramatic lighting and warm, earthy tones
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slideUp animation-delay-200">
            <Link href="/portfolio" className="btn-primary bg-white text-primary hover:bg-gray-100">
              View Portfolio
            </Link>
            <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
