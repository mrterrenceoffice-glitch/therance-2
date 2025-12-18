
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

export const PORTFOLIO: PortfolioItem[] = [
  { id: '1', title: 'NeoBank UI Redesign', category: 'UX/UI', imageUrl: 'https://picsum.photos/seed/neo/800/600' },
  { id: '2', title: 'Zenith Brand Identity', category: 'Branding', imageUrl: 'https://picsum.photos/seed/zenith/800/600' },
  { id: '3', title: 'EcoTrack Mobile App', category: 'Mobile App Development', imageUrl: 'https://picsum.photos/seed/eco/800/600' },
  { id: '4', title: 'Lumina Digital Hub', category: 'Web Development', imageUrl: 'https://picsum.photos/seed/lumina/800/600' },
  { id: '5', title: 'Urban Pulse Campaign', category: 'Social Media', imageUrl: 'https://picsum.photos/seed/urban/800/600' },
  { id: '6', title: 'Vortex Illustrations', category: 'Illustration', imageUrl: 'https://picsum.photos/seed/vortex/800/600' },
  { id: '7', title: 'Quantum Logo System', category: 'Logo Design', imageUrl: 'https://picsum.photos/seed/quantum/800/600' },
  { id: '8', title: 'Stellar Landing Page', category: 'Web Design', imageUrl: 'https://picsum.photos/seed/stellar/800/600' },
  { id: '9', title: 'Growth Copy Series', category: 'Copywriting', imageUrl: 'https://picsum.photos/seed/growth/800/600' },
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
