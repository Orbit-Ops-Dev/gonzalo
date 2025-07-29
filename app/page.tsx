"use client";

import Hero from "@/components/Hero";
import ImageGrid from "@/components/ImageGrid";
import AnimatedSection from "@/components/AnimatedSection";
import Link from "next/link";
import { getFeaturedImages } from "@/lib/portfolio-data";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();
  const featuredImages = getFeaturedImages();

  return (
    <>
      <Hero />

      {/* Featured Work Section */}
      <section className="section-padding">
        <div className="container">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12 language-transition">
            <h2 className="brand-header-large mb-4">
              {t('featured.title')}
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              {t('featured.subtitle')}
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={200}>
            <ImageGrid images={featuredImages} columns={3} />
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={300} className="text-center mt-12">
            <Link href="/portfolio" className="btn-secondary focus-ring">
              {t('featured.cta')}
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection animation="fadeInUp" className="text-center mb-12 language-transition">
            <h2 className="brand-header-large mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="fadeInUp" delay={100} className="group text-center">
              <Link href="/portfolio" className="block">
                <div className="bg-secondary p-8 rounded-sm interactive-card-subtle cursor-pointer">
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-accent transition-colors brand-header">
                    {t('services.portraits.title')}
                  </h3>
                  <p className="text-sm text-primary/70">
                    {t('services.portraits.desc')}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={200} className="group text-center">
              <Link href="/portfolio" className="block">
                <div className="bg-secondary p-8 rounded-sm interactive-card-subtle cursor-pointer">
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-accent transition-colors brand-header">
                    {t('services.weddings.title')}
                  </h3>
                  <p className="text-sm text-primary/70">
                    {t('services.weddings.desc')}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={300} className="group text-center">
              <Link href="/portfolio" className="block">
                <div className="bg-secondary p-8 rounded-sm interactive-card-subtle cursor-pointer">
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-accent transition-colors brand-header">
                    {t('services.artistic.title')}
                  </h3>
                  <p className="text-sm text-primary/70">
                    {t('services.artistic.desc')}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={400} className="group text-center">
              <Link href="/portfolio" className="block">
                <div className="bg-secondary p-8 rounded-sm interactive-card-subtle cursor-pointer">
                  <h3 className="text-2xl font-medium mb-3 group-hover:text-accent transition-colors brand-header">
                    {t('services.events.title')}
                  </h3>
                  <p className="text-sm text-primary/70">
                    {t('services.events.desc')}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft" className="language-transition">
              <h2 className="brand-header-large mb-6">
                {t('about.greeting')}
              </h2>
              <p className="text-lg text-primary/80 mb-6 leading-relaxed">
                {t('about.bio1')}
              </p>
              <p className="text-lg text-primary/80 mb-8 leading-relaxed">
                {t('about.bio2')}
              </p>
              <Link href="/about" className="btn-primary focus-ring">
                {t('about.cta')}
              </Link>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight" className="relative h-[500px] lg:h-[600px]">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-sm" />
              <img
                src="https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?w=800&h=600&fit=crop"
                alt="Photographer at work"
                className="w-full h-full object-cover rounded-sm image-hover-scale"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section-padding bg-white">
        <div className="container text-center">
          <AnimatedSection animation="scaleIn" className="language-transition">
            <blockquote className="text-3xl md:text-4xl font-light text-primary mb-4 max-w-4xl mx-auto leading-relaxed">
              &ldquo;{t('quote.text')}&rdquo;
            </blockquote>
            <cite className="text-lg text-accent font-medium tracking-wider">
              — {t('quote.author')}
            </cite>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-secondary">
        <div className="container text-center">
          <AnimatedSection animation="fadeInUp" className="language-transition">
            <h2 className="brand-header-large mb-6 text-secondary">
              {t('contact.title')}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              {t('contact.subtitle')}
            </p>
            <Link href="/contact" className="btn-primary bg-secondary text-primary hover:bg-cream focus-ring">
              {t('contact.cta')}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
