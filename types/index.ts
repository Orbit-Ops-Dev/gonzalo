export interface Image {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: Category;
  width: number;
  height: number;
  featured?: boolean;
  description?: string;
}

export type Category = 'portraits' | 'lifestyle' | 'architecture' | 'events';

export interface CategoryInfo {
  id: Category;
  name: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectDetails: string;
  preferredContact: 'email' | 'phone';
  phone?: string;
}

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  canonical?: string;
}

export interface NavLink {
  href: string;
  label: string;
}
