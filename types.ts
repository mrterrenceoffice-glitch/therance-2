
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  features: string[];
  description: string;
  popular?: boolean;
}

// Added 'SEO' to fix assignment error in Portfolio component
export type PortfolioCategory = 
  | 'All' 
  | 'Animation' 
  | 'Branding' 
  | 'Copywriting' 
  | 'Corporate Identity' 
  | 'Illustration' 
  | 'Logo Design' 
  | 'Mobile App Development' 
  | 'Print' 
  | 'SEO' 
  | 'Social Media' 
  | 'UX/UI' 
  | 'Web Design' 
  | 'Web Development';