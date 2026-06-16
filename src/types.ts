export interface Service {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'systems' | 'glazing' | 'industrial';
  imageUrl: string;
  location: string;
  year: string;
  description: string;
  specs: {
    systemType: string;
    profileColor: string;
    glassSpec: string;
  };
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  fullBody?: string[];
  imageUrl: string;
  publishDate: string;
  author: string;
  authorImage?: string;
  readTime: number;
  likes: number;
  views: number;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  text: string;
  rating: number;
}
