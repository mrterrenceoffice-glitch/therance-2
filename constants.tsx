
import React from 'react';
import { 
  Palette, 
  Globe, 
  Share2, 
  Search, 
  Layers, 
  Video, 
  Smartphone, 
  Briefcase 
} from 'lucide-react';
import { Service, PortfolioItem, PricingPackage } from './types';

export interface DetailedPortfolioItem extends PortfolioItem {
  client: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
  }[];
  longDescription: string;
  tags: string[];
}

export const SERVICES: Service[] = [
  {
    id: 'graphic-design',
    title: 'Graphic Design',
    description: 'Bespoke visual identities that capture your brand essence and engage your target audience.',
    icon: 'Palette'
  },
  {
    id: 'web-design',
    title: 'Web Design',
    description: 'High-converting, visually stunning websites tailored to your business goals and user needs.',
    icon: 'Globe'
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Strategic social campaigns that build community, increase brand awareness, and drive results.',
    icon: 'Share2'
  },
  {
    id: 'seo',
    title: 'SEO - Lead Generation',
    description: 'Data-driven search engine optimization to boost visibility and attract qualified organic leads.',
    icon: 'Search'
  }
];

export const ALL_SERVICES = [
  ...SERVICES,
  { id: 'web-dev', title: 'Web Development', description: '', icon: 'Layers' },
  { id: 'video', title: 'Explainer Videos', description: '', icon: 'Video' },
  { id: 'linkedin', title: 'LinkedIn Social Selling', description: '', icon: 'Smartphone' },
  { id: 'business-reg', title: 'Business Registration', description: '', icon: 'Briefcase' }
];

export const PORTFOLIO: DetailedPortfolioItem[] = [
  { 
    id: '1', 
    title: 'Solar Surge: Lead Explosion', 
    client: 'Zenith Energy South Africa',
    category: 'SEO', 
    imageUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800&h=600',
    challenge: 'Zenith Energy was struggling with invisible organic presence and a high Customer Acquisition Cost (CAC) through paid ads.',
    solution: 'We implemented a multi-layered SEO strategy focusing on technical speed optimization, high-intent localized keywords for "Solar Installation Johannesburg", and a bespoke ROI calculator to capture leads early in the funnel.',
    results: [
      { metric: 'Monthly Qualified Leads', value: '+240%' },
      { metric: 'Organic Traffic Growth', value: '+180%' },
      { metric: 'CAC Reduction', value: '-45%' }
    ],
    longDescription: 'By focusing on the search intent of high-value residential and commercial clients, we transformed Zeniths website into a lead-generating powerhouse. The campaign resulted in a sustained 3.5x increase in pipeline value within 6 months.',
    tags: ['SEO', 'Lead Generation', 'Conversion Optimization']
  },
  { id: '2', title: 'Zenith Brand Identity', client: 'Zenith Corp', category: 'Branding', imageUrl: 'https://picsum.photos/seed/zenith/800/600', challenge: '', solution: '', results: [], longDescription: '', tags: [] },
  { id: '3', title: 'EcoTrack Mobile App', client: 'EcoTrack', category: 'Mobile App Development', imageUrl: 'https://picsum.photos/seed/eco/800/600', challenge: '', solution: '', results: [], longDescription: '', tags: [] },
  { id: '4', title: 'Lumina Digital Hub', client: 'Lumina', category: 'Web Development', imageUrl: 'https://picsum.photos/seed/lumina/800/600', challenge: '', solution: '', results: [], longDescription: '', tags: [] },
  { id: '5', title: 'Urban Pulse Campaign', client: 'Urban Pulse', category: 'Social Media', imageUrl: 'https://picsum.photos/seed/urban/800/600', challenge: '', solution: '', results: [], longDescription: '', tags: [] },
  { id: '6', title: 'Vortex Illustrations', client: 'Vortex', category: 'Illustration', imageUrl: 'https://picsum.photos/seed/vortex/800/600', challenge: '', solution: '', results: [], longDescription: '', tags: [] },
  { id: '7', title: 'Quantum Logo System', client: 'Quantum', category: 'Logo Design', imageUrl: 'https://picsum.photos/seed/quantum/800/600', challenge: '', solution: '', results: [], longDescription: '', tags: [] },
  { id: '8', title: 'Stellar Landing Page', client: 'Stellar', category: 'Web Design', imageUrl: 'https://picsum.photos/seed/stellar/800/600', challenge: '', solution: '', results: [], longDescription: '', tags: [] },
  { id: '9', title: 'Growth Copy Series', client: 'Growth', category: 'Copywriting', imageUrl: 'https://picsum.photos/seed/growth/800/600', challenge: '', solution: '', results: [], longDescription: '', tags: [] },
];

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: 'silver',
    name: 'Silver Package',
    price: 'R1,250',
    description: 'Best suited for startups and small businesses needing basic compliance.',
    features: [
      'CIPC Company Registration',
      'BEE Certificate',
      'Share Certificate',
      'Tax Clearance',
      'CSD Registration',
      'Beneficial Ownership Registration'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Package',
    price: 'R1,950',
    popular: true,
    description: 'Ideal for growing businesses planning to apply for tenders.',
    features: [
      'CIPC Company Registration',
      'BEE Certificate',
      'Share Certificate',
      'Tax Clearance',
      'CSD Registration',
      'CIDB Registration (Grade 1)',
      'Beneficial Ownership Registration'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    price: 'R2,400',
    description: 'Complete solution for established businesses seeking comprehensive readiness.',
    features: [
      'CIPC Company Registration',
      'BEE Certificate',
      'Share Certificate',
      'Tax Clearance',
      'CSD Registration',
      'CIDB Registration (Grade 1)',
      'Business Profile',
      'Beneficial Ownership Registration'
    ]
  }
];

export const CLIENT_LOGOS = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/2/21/Zillow_logo.svg'
];
