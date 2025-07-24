import Hero from "@/components/Hero";
import ImageGrid from "@/components/ImageGrid";
import Link from "next/link";
import { getFeaturedImages, categories } from "@/lib/portfolio-data";

export default function Home() {
  const featuredImages = getFeaturedImages();

  return (
    <>
      <Hero />

      {/* Featured Work Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-darkGray/80 max-w-2xl mx-auto">
              A curated selection of my favorite photographs, showcasing the beauty in everyday moments
            </p>
          </div>
          
          <ImageGrid images={featuredImages} columns={3} />
          
          <div className="text-center mt-12">
            <Link href="/portfolio" className="btn-secondary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-cream/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4">
              Photography Services
            </h2>
            <p className="text-lg text-darkGray/80 max-w-2xl mx-auto">
              Specializing in various photography styles to capture your unique story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/portfolio?category=${category.id}`}
                className="group text-center"
              >
                <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-2xl font-serif mb-3 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-darkGray/70">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
                About Mayoko Photos
              </h2>
              <p className="text-lg text-darkGray/80 mb-6 leading-relaxed">
                With a passion for capturing authentic moments and emotions, I specialize in creating 
                timeless photographs that tell your unique story. My approach combines technical 
                expertise with an artistic eye for composition and lighting.
              </p>
              <p className="text-lg text-darkGray/80 mb-8 leading-relaxed">
                Based in the heart of the city, I draw inspiration from urban landscapes, 
                architectural elements, and the beautiful chaos of everyday life. Each session 
                is tailored to bring out the best in my subjects while maintaining a natural, 
                unforced aesthetic.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More About Me
              </Link>
            </div>
            <div className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-sm" />
              <img
                src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=800&h=600&fit=crop"
                alt="Photographer at work"
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-secondary">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Let&apos;s Create Something Beautiful
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Ready to capture your special moments? I&apos;d love to hear about your vision 
            and discuss how we can bring it to life through photography.
          </p>
          <Link href="/contact" className="btn-primary bg-secondary text-primary hover:bg-cream">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
