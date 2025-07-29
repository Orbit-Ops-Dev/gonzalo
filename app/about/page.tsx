"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 language-transition">
              <h1 className="brand-header-large mb-6">
                {t('about.greeting')}
              </h1>
              <p className="text-lg text-primary/80 mb-6 leading-relaxed">
                {t('about.bio1')}
              </p>
              <p className="text-lg text-primary/80 mb-6 leading-relaxed">
                {t('about.bio2')}
              </p>
              <p className="text-lg text-primary/80 leading-relaxed">
                {t('about.bio3')}
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] lg:h-[600px]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-sm" />
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
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="language-transition">
              <h2 className="brand-header-large mb-6">
                {t('about.philosophy.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div>
                  <h3 className="text-xl font-medium mb-3 brand-header">
                    {t('about.philosophy.authentic.title')}
                  </h3>
                  <p className="text-primary/70">
                    {t('about.philosophy.authentic.desc')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 brand-header">
                    {t('about.philosophy.artistic.title')}
                  </h3>
                  <p className="text-primary/70">
                    {t('about.philosophy.artistic.desc')}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3 brand-header">
                    {t('about.philosophy.connection.title')}
                  </h3>
                  <p className="text-primary/70">
                    {t('about.philosophy.connection.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-12 language-transition">
            <h2 className="brand-header-large mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-primary/80 max-w-2xl mx-auto">
              {t('about.services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-secondary p-8 rounded-sm shadow-sm">
              <h3 className="text-2xl font-medium mb-4 brand-header">
                {t('services.portraits.title')}
              </h3>
              <p className="text-primary/70 mb-6">
                {t('services.portraits.desc')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
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
                  <span className="text-sm text-primary/70">{t('about.services.portraits.feature1')}</span>
                </li>
                <li className="flex items-start">
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
                  <span className="text-sm text-primary/70">{t('about.services.portraits.feature2')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary p-8 rounded-sm shadow-sm">
              <h3 className="text-2xl font-medium mb-4 brand-header">
                {t('services.weddings.title')}
              </h3>
              <p className="text-primary/70 mb-6">
                {t('services.weddings.desc')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
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
                  <span className="text-sm text-primary/70">{t('about.services.weddings.feature1')}</span>
                </li>
                <li className="flex items-start">
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
                  <span className="text-sm text-primary/70">{t('about.services.weddings.feature2')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary p-8 rounded-sm shadow-sm">
              <h3 className="text-2xl font-medium mb-4 brand-header">
                {t('services.artistic.title')}
              </h3>
              <p className="text-primary/70 mb-6">
                {t('services.artistic.desc')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
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
                  <span className="text-sm text-primary/70">{t('about.services.artistic.feature1')}</span>
                </li>
                <li className="flex items-start">
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
                  <span className="text-sm text-primary/70">{t('about.services.artistic.feature2')}</span>
                </li>
              </ul>
            </div>

            <div className="bg-secondary p-8 rounded-sm shadow-sm">
              <h3 className="text-2xl font-medium mb-4 brand-header">
                {t('services.events.title')}
              </h3>
              <p className="text-primary/70 mb-6">
                {t('services.events.desc')}
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
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
                  <span className="text-sm text-primary/70">{t('about.services.events.feature1')}</span>
                </li>
                <li className="flex items-start">
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
                  <span className="text-sm text-primary/70">{t('about.services.events.feature2')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="section-padding bg-primary text-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="language-transition">
              <h2 className="brand-header-large mb-6 text-secondary">
                {t('about.equipment.title')}
              </h2>
              <p className="text-lg mb-8 opacity-90">
                {t('about.equipment.subtitle')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-xl font-medium mb-4 brand-header text-secondary">
                    {t('about.equipment.cameras')}
                  </h3>
                  <ul className="space-y-2 opacity-80">
                    <li>• Canon R5 Full Frame Mirrorless</li>
                    <li>• Canon 5D Mark IV (Backup)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-4 brand-header text-secondary">
                    {t('about.equipment.lenses')}
                  </h3>
                  <ul className="space-y-2 opacity-80">
                    <li>• Canon RF 24-70mm f/2.8L</li>
                    <li>• Canon RF 85mm f/1.2L</li>
                    <li>• Canon RF 70-200mm f/2.8L</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
