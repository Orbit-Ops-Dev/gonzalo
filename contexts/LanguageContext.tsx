"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data for Rio Grande Valley bilingual community
const translations = {
  es: {
    // Navigation
    'nav.home': 'INICIO',
    'nav.portraits': 'RETRATOS',
    'nav.weddings': 'BODA Y COMPROMISOS',
    'nav.artistic': 'FOTOGRAFÍA ARTÍSTICA',
    'nav.events': 'EVENTOS',
    'nav.contact': 'CONTACTO',
    'nav.portfolio': 'PORTAFOLIO',
    'nav.about': 'ACERCA DE',
    
    // Hero Section
    'hero.title': 'AUTENTICIDAD EN RECUERDOS QUE PERDURAN',
    'hero.subtitle': 'MAYOKO PHOTOS',
    'hero.description': 'Fotografía profesional que captura la esencia de momentos únicos con calidez y autenticidad para la comunidad del Valle del Río Grande',
    'hero.cta.portfolio': 'Ver Portafolio',
    'hero.cta.contact': 'Contactar',
    
    // About Section
    'about.greeting': 'HOLA! SOY VALERIA',
    'about.bio1': 'Originaria de McAllen, Texas, y ahora establecida en Matamoros, México, me especializo en fotografía de bodas, retratos y eventos que celebran la rica cultura binacional de nuestra región.',
    'about.bio2': 'Mi enfoque combina la calidez de nuestras tradiciones familiares con un estilo contemporáneo, creando imágenes que honran tanto el lado texano como el mexicano de nuestra hermosa comunidad fronteriza.',
    'about.cta': 'Conoce Más Sobre Mí',
    
    // Quote Section
    'quote.text': 'LA CREATIVIDAD ES LA INTELIGENCIA DIVIRTIÉNDOSE',
    'quote.author': 'ALBERT EINSTEIN',
    
    // Services Section
    'services.title': 'SERVICIOS DE FOTOGRAFÍA',
    'services.subtitle': 'Especializándome en varios estilos fotográficos para capturar tu historia única',
    'services.portraits.title': 'Retratos',
    'services.portraits.desc': 'Sesiones íntimas que capturan tu personalidad auténtica',
    'services.weddings.title': 'Bodas y Compromisos',
    'services.weddings.desc': 'Documentando el amor que trasciende fronteras',
    'services.artistic.title': 'Fotografía Artística',
    'services.artistic.desc': 'Creaciones visuales que cuentan historias profundas',
    'services.events.title': 'Eventos',
    'services.events.desc': 'Celebraciones familiares y corporativas memorables',
    
    // Featured Work
    'featured.title': 'TRABAJO DESTACADO',
    'featured.subtitle': 'Una selección curada de mis fotografías favoritas, mostrando la belleza en momentos cotidianos',
    'featured.cta': 'Ver Portafolio Completo',
    
    // Contact CTA
    'contact.title': 'VAMOS A CONECTARNOS Y CONOCERNOS MEJOR',
    'contact.subtitle': '¿Listos para capturar tus momentos especiales? Me encantaría conocer tu visión y discutir cómo podemos darle vida a través de la fotografía.',
    'contact.cta': 'Ponte en Contacto',
    
    // Footer
    'footer.tagline': 'Capturando momentos auténticos en el Valle del Río Grande',
    'footer.services': 'Servicios disponibles en Matamoros, México y Brownsville, Texas',
    
    // About Page
    'about.bio3': 'Cada sesión está diseñada para resaltar lo mejor de mis sujetos mientras mantengo una estética natural y auténtica, creando recuerdos que atesorarás para siempre.',
    'about.philosophy.title': 'MI FILOSOFÍA FOTOGRÁFICA',
    'about.philosophy.authentic.title': 'MOMENTOS AUTÉNTICOS',
    'about.philosophy.authentic.desc': 'Me enfoco en capturar emociones genuinas e interacciones naturales, creando imágenes que realmente reflejan quién eres.',
    'about.philosophy.artistic.title': 'VISIÓN ARTÍSTICA',
    'about.philosophy.artistic.desc': 'Cada toma está cuidadosamente compuesta con atención a la luz, sombra y composición para crear imágenes visualmente impresionantes.',
    'about.philosophy.connection.title': 'CONEXIÓN PERSONAL',
    'about.philosophy.connection.desc': 'Creo en construir relaciones con mis clientes para asegurar una experiencia fotográfica cómoda y agradable.',
    'about.services.subtitle': 'Ofrezco una gama de servicios fotográficos adaptados para satisfacer tus necesidades específicas',
    'about.services.portraits.feature1': 'Sesiones en locación o estudio',
    'about.services.portraits.feature2': 'Edición profesional incluida',
    'about.services.weddings.feature1': 'Cobertura completa del evento',
    'about.services.weddings.feature2': 'Disponible en ambos lados de la frontera',
    'about.services.artistic.feature1': 'Conceptos creativos únicos',
    'about.services.artistic.feature2': 'Colaboración artística personalizada',
    'about.services.events.feature1': 'Documentación completa del evento',
    'about.services.events.feature2': 'Entrega rápida de imágenes',
    'about.equipment.title': 'EQUIPO PROFESIONAL',
    'about.equipment.subtitle': 'Utilizo equipo de grado profesional para asegurar imágenes de la más alta calidad para mis clientes',
    'about.equipment.cameras': 'CÁMARAS',
    'about.equipment.lenses': 'LENTES',
    
    // Contact Page
    'contact.page.title': 'PONTE EN CONTACTO',
    'contact.page.subtitle': '¿Lista para crear algo hermoso juntos? Me encantaría conocer tu proyecto.',
    'contact.info.email': 'EMAIL',
    'contact.info.location': 'UBICACIÓN',
    'contact.info.location.desc': 'Matamoros, México & Valle del Río Grande',
    'contact.info.response': 'TIEMPO DE RESPUESTA',
    'contact.info.response.desc': 'Dentro de 24-48 horas',
    'contact.form.name': 'Tu Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.preferred': 'Método de Contacto Preferido',
    'contact.form.email.option': 'Correo Electrónico',
    'contact.form.phone.option': 'Teléfono',
    'contact.form.phone': 'Número de Teléfono',
    'contact.form.project': 'Cuéntame sobre tu proyecto',
    'contact.form.placeholder': 'Por favor describe tus necesidades fotográficas, fecha del evento (si aplica), ubicación, y cualquier visión específica que tengas en mente...',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '¡Gracias por tu mensaje! Te responderé dentro de 24-48 horas.',
    'contact.form.error': 'Algo salió mal. Por favor intenta de nuevo o envíame un correo directamente.',
    'contact.social.title': 'Conéctate en redes sociales',
    
    // Meta
    'meta.title': 'Mayoko Photos - Fotografía Profesional Binacional',
    'meta.description': 'Fotografía profesional de bodas, retratos y eventos sirviendo a la comunidad del Valle del Río Grande. Disponible en Matamoros, México y Brownsville, Texas.',
  },
  en: {
    // Navigation
    'nav.home': 'HOME',
    'nav.portraits': 'PORTRAITS',
    'nav.weddings': 'WEDDINGS & ENGAGEMENTS',
    'nav.artistic': 'ARTISTIC PHOTOGRAPHY',
    'nav.events': 'EVENTS',
    'nav.contact': 'CONTACT',
    'nav.portfolio': 'PORTFOLIO',
    'nav.about': 'ABOUT',
    
    // Hero Section
    'hero.title': 'AUTHENTICITY IN MEMORIES THAT LAST',
    'hero.subtitle': 'MAYOKO PHOTOS',
    'hero.description': 'Professional photography capturing the essence of unique moments with warmth and authenticity for the Rio Grande Valley community',
    'hero.cta.portfolio': 'View Portfolio',
    'hero.cta.contact': 'Get in Touch',
    
    // About Section
    'about.greeting': 'HELLO! I\'M VALERIA',
    'about.bio1': 'Originally from McAllen, Texas, and now based in Matamoros, Mexico, I specialize in wedding, portrait, and event photography that celebrates the rich binational culture of our region.',
    'about.bio2': 'My approach combines the warmth of our family traditions with contemporary style, creating images that honor both the Texan and Mexican sides of our beautiful border community.',
    'about.cta': 'Learn More About Me',
    
    // Quote Section
    'quote.text': 'CREATIVITY IS INTELLIGENCE HAVING FUN',
    'quote.author': 'ALBERT EINSTEIN',
    
    // Services Section
    'services.title': 'PHOTOGRAPHY SERVICES',
    'services.subtitle': 'Specializing in various photography styles to capture your unique story',
    'services.portraits.title': 'Portraits',
    'services.portraits.desc': 'Intimate sessions capturing your authentic personality',
    'services.weddings.title': 'Weddings & Engagements',
    'services.weddings.desc': 'Documenting love that transcends borders',
    'services.artistic.title': 'Artistic Photography',
    'services.artistic.desc': 'Visual creations that tell profound stories',
    'services.events.title': 'Events',
    'services.events.desc': 'Memorable family and corporate celebrations',
    
    // Featured Work
    'featured.title': 'FEATURED WORK',
    'featured.subtitle': 'A curated selection of my favorite photographs, showcasing the beauty in everyday moments',
    'featured.cta': 'View Full Portfolio',
    
    // Contact CTA
    'contact.title': 'LET\'S CONNECT AND GET TO KNOW EACH OTHER BETTER',
    'contact.subtitle': 'Ready to capture your special moments? I\'d love to hear about your vision and discuss how we can bring it to life through photography.',
    'contact.cta': 'Get in Touch',
    
    // Footer
    'footer.tagline': 'Capturing authentic moments in the Rio Grande Valley',
    'footer.services': 'Services available in Matamoros, Mexico and Brownsville, Texas',
    
    // About Page
    'about.bio3': 'Each session is designed to bring out the best in my subjects while maintaining a natural, authentic aesthetic, creating memories you\'ll treasure forever.',
    'about.philosophy.title': 'MY PHOTOGRAPHY PHILOSOPHY',
    'about.philosophy.authentic.title': 'AUTHENTIC MOMENTS',
    'about.philosophy.authentic.desc': 'I focus on capturing genuine emotions and natural interactions, creating images that truly reflect who you are.',
    'about.philosophy.artistic.title': 'ARTISTIC VISION',
    'about.philosophy.artistic.desc': 'Every shot is carefully composed with attention to light, shadow, and composition to create visually stunning images.',
    'about.philosophy.connection.title': 'PERSONAL CONNECTION',
    'about.philosophy.connection.desc': 'I believe in building relationships with my clients to ensure a comfortable and enjoyable photography experience.',
    'about.services.subtitle': 'I offer a range of photography services tailored to meet your specific needs',
    'about.services.portraits.feature1': 'Location or studio sessions',
    'about.services.portraits.feature2': 'Professional editing included',
    'about.services.weddings.feature1': 'Full event coverage',
    'about.services.weddings.feature2': 'Available on both sides of the border',
    'about.services.artistic.feature1': 'Unique creative concepts',
    'about.services.artistic.feature2': 'Personalized artistic collaboration',
    'about.services.events.feature1': 'Complete event documentation',
    'about.services.events.feature2': 'Fast image delivery',
    'about.equipment.title': 'PROFESSIONAL EQUIPMENT',
    'about.equipment.subtitle': 'I use professional-grade equipment to ensure the highest quality images for my clients',
    'about.equipment.cameras': 'CAMERAS',
    'about.equipment.lenses': 'LENSES',
    
    // Contact Page
    'contact.page.title': 'GET IN TOUCH',
    'contact.page.subtitle': 'Ready to create something beautiful together? I\'d love to hear about your project.',
    'contact.info.email': 'EMAIL',
    'contact.info.location': 'LOCATION',
    'contact.info.location.desc': 'Matamoros, Mexico & Rio Grande Valley',
    'contact.info.response': 'RESPONSE TIME',
    'contact.info.response.desc': 'Within 24-48 hours',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.preferred': 'Preferred Contact Method',
    'contact.form.email.option': 'Email',
    'contact.form.phone.option': 'Phone',
    'contact.form.phone': 'Phone Number',
    'contact.form.project': 'Tell me about your project',
    'contact.form.placeholder': 'Please describe your photography needs, event date (if applicable), location, and any specific vision you have in mind...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thank you for your message! I\'ll get back to you within 24-48 hours.',
    'contact.form.error': 'Something went wrong. Please try again or email me directly.',
    'contact.social.title': 'Connect on social media',
    
    // Meta
    'meta.title': 'Mayoko Photos - Professional Binational Photography',
    'meta.description': 'Professional wedding, portrait, and event photography serving the Rio Grande Valley community. Available in Matamoros, Mexico and Brownsville, Texas.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es'); // Default to Spanish for primary market

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('mayoko-language') as Language;
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('mayoko-language', lang);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
