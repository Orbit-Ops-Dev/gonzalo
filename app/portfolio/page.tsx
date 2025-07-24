"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ImageGrid from "@/components/ImageGrid";
import { portfolioImages, categories } from "@/lib/portfolio-data";
import { Category } from "@/types";

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as Category | null;
  
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">(
    categoryParam || "all"
  );

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const filteredImages = selectedCategory === "all" 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-light mb-4">
              Portfolio
            </h1>
            <p className="text-lg text-darkGray/80 max-w-2xl mx-auto">
              Explore my complete collection of photography work across various styles and moments
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-6 py-2 rounded-sm transition-all ${
                selectedCategory === "all"
                  ? "bg-primary text-secondary"
                  : "bg-transparent text-primary border border-primary/30 hover:border-primary"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-sm transition-all ${
                  selectedCategory === category.id
                    ? "bg-primary text-secondary"
                    : "bg-transparent text-primary border border-primary/30 hover:border-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <ImageGrid images={filteredImages} columns={3} />

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-darkGray/60">
                No images found in this category.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
