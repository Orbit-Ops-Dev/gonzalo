import Image from "next/image";
import { services } from "@/lib/portfolio-data";

export default function AboutPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl font-serif font-light mb-6">
                About Mayoko Photos
              </h1>
              <p className="text-lg text-darkGray/80 mb-6 leading-relaxed">
                Hello, I&apos;m a passionate photographer dedicated to capturing life&apos;s most beautiful 
                and authentic moments. With years of experience behind the lens, I specialize in 
                creating timeless images that tell compelling stories.
              </p>
              <p className="text-lg text-darkGray/80 mb-6 leading-relaxed">
                My journey in photography began with a simple desire to freeze moments in time. 
                What started as a hobby quickly evolved into a profession driven by a deep 
                appreciation for light, composition, and human emotion.
              </p>
              <p className="text-lg text-darkGray/80 leading-relaxed">
                I believe that every photograph should evoke emotion and capture the essence 
                of its subject. Whether it&apos;s a portrait session, a lifestyle shoot, or 
                documenting an event, my goal is to create images that you&apos;ll treasure forever.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] lg:h-[600px]">
                <Image
                  src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=800&h=600&fit=crop"
                  alt="Photographer portrait"
                  fill
                  className="object-cover rounded-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-cream/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              My Photography Philosophy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-serif mb-3">Authentic Moments</h3>
                <p className="text-darkGray/70">
                  I focus on capturing genuine emotions and natural interactions, creating 
                  images that truly reflect who you are.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-3">Artistic Vision</h3>
                <p className="text-darkGray/70">
                  Every shot is carefully composed with attention to light, shadow, and 
                  composition to create visually stunning images.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif mb-3">Personal Connection</h3>
                <p className="text-darkGray/70">
                  I believe in building relationships with my clients to ensure a comfortable 
                  and enjoyable photography experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-4">
              Photography Services
            </h2>
            <p className="text-lg text-darkGray/80 max-w-2xl mx-auto">
              I offer a range of photography services tailored to meet your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-sm shadow-sm">
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-darkGray/70 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-darkGray/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding bg-primary text-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-light mb-6">
              Professional Equipment
            </h2>
            <p className="text-lg mb-8 opacity-90">
              I use professional-grade equipment to ensure the highest quality images for my clients
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-medium mb-4">Camera Bodies</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• Canon R5 Full Frame Mirrorless</li>
                  <li>• Canon 5D Mark IV (Backup)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">Lenses</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• Canon RF 24-70mm f/2.8L</li>
                  <li>• Canon RF 85mm f/1.2L</li>
                  <li>• Canon RF 70-200mm f/2.8L</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
