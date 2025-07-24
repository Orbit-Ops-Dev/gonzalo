import { Image, CategoryInfo, Service } from "@/types";

// Portfolio categories
export const categories: CategoryInfo[] = [
  {
    id: "portraits",
    name: "Portraits",
    description: "Intimate portraits capturing personality and emotion",
  },
  {
    id: "lifestyle",
    name: "Lifestyle",
    description: "Candid moments and natural beauty in everyday life",
  },
  {
    id: "architecture",
    name: "Architecture",
    description: "Urban landscapes and structural beauty",
  },
  {
    id: "events",
    name: "Events",
    description: "Special moments from weddings and celebrations",
  },
];

// Sample portfolio images - replace with actual images
export const portfolioImages: Image[] = [
  // Portraits
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&h=1200&fit=crop",
    alt: "Portrait of a woman in natural light",
    title: "Natural Beauty",
    category: "portraits",
    width: 800,
    height: 1200,
    featured: true,
    description: "A moody portrait capturing the essence of natural beauty with dramatic lighting",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1200&fit=crop",
    alt: "Professional male portrait",
    title: "Urban Professional",
    category: "portraits",
    width: 800,
    height: 1200,
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop",
    alt: "Woman portrait with warm tones",
    title: "Golden Hour Portrait",
    category: "portraits",
    width: 800,
    height: 1000,
    featured: true,
  },
  
  // Lifestyle
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1200&h=800&fit=crop",
    alt: "Coffee shop lifestyle moment",
    title: "Morning Rituals",
    category: "lifestyle",
    width: 1200,
    height: 800,
    featured: true,
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
    alt: "Creative workspace lifestyle",
    title: "Creative Space",
    category: "lifestyle",
    width: 1200,
    height: 800,
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
    alt: "Team collaboration lifestyle",
    title: "Collaboration",
    category: "lifestyle",
    width: 1200,
    height: 800,
  },
  
  // Architecture
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&h=1200&fit=crop",
    alt: "Modern architecture with dramatic shadows",
    title: "Shadow Play",
    category: "architecture",
    width: 800,
    height: 1200,
    featured: true,
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=1200&h=800&fit=crop",
    alt: "Urban architecture at golden hour",
    title: "Urban Sunset",
    category: "architecture",
    width: 1200,
    height: 800,
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=800&h=1200&fit=crop",
    alt: "Minimalist architectural lines",
    title: "Minimal Lines",
    category: "architecture",
    width: 800,
    height: 1200,
  },
  
  // Events
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
    alt: "Wedding ceremony moment",
    title: "Sacred Moments",
    category: "events",
    width: 1200,
    height: 800,
    featured: true,
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&h=800&fit=crop",
    alt: "Event celebration with warm lighting",
    title: "Celebration",
    category: "events",
    width: 1200,
    height: 800,
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=1200&fit=crop",
    alt: "Corporate event photography",
    title: "Corporate Excellence",
    category: "events",
    width: 800,
    height: 1200,
  },
];

// Photography services
export const services: Service[] = [
  {
    id: "portrait",
    title: "Portrait Photography",
    description: "Professional portrait sessions capturing your unique personality",
    features: [
      "2-hour photo session",
      "Multiple outfit changes",
      "Professional retouching",
      "20 high-resolution images",
      "Online gallery for downloads",
    ],
  },
  {
    id: "lifestyle",
    title: "Lifestyle Photography",
    description: "Natural, candid photography for brands and individuals",
    features: [
      "Half-day or full-day sessions",
      "On-location shooting",
      "Lifestyle direction and planning",
      "50+ edited images",
      "Commercial usage rights",
    ],
  },
  {
    id: "event",
    title: "Event Photography",
    description: "Comprehensive coverage of your special events",
    features: [
      "Full event coverage",
      "Multiple photographers available",
      "Same-day preview images",
      "Complete edited gallery",
      "Print-ready files included",
    ],
  },
];

// Get featured images for homepage
export const getFeaturedImages = () => {
  return portfolioImages.filter((img) => img.featured);
};

// Get images by category
export const getImagesByCategory = (category: string) => {
  return portfolioImages.filter((img) => img.category === category);
};

// Get hero images (first 3 featured images)
export const getHeroImages = () => {
  return getFeaturedImages().slice(0, 3);
};
