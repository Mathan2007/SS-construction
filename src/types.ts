export interface Project {
  id: string;
  title: string;
  category: 'Modern House' | 'Luxury Villa' | 'Duplex House' | 'Apartment' | 'Commercial Building';
  image: string;
  location: string;
  area: string; // e.g., "4,500 Sq.ft"
  completionYear: string;
  description: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  category: 'Exterior' | 'Interior' | 'Foundation' | 'Roofing' | 'Painting' | 'Finished Houses' | 'House Exterior' | 'House Interior' | 'House Elevation' | 'Luxury Villa';
  image: string;
  title: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  description: string;
  features: string[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}
