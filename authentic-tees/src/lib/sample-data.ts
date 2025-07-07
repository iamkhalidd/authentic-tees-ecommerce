import { Product } from './types';

export const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Classic Crew Neck Tee',
    description: 'A timeless classic, this crew neck tee is made from premium cotton for ultimate comfort and durability. Perfect for everyday wear.',
    price: 25.99,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Navy'],
    images: ['/next.svg', '/vercel.svg'], // Placeholder images
    stock_count: 100,
    category: 'T-Shirts',
  },
  {
    id: '2',
    name: 'Vintage Graphic Tee',
    description: 'Featuring a unique vintage-inspired graphic, this tee adds a touch of retro cool to your wardrobe. Soft-washed for a lived-in feel.',
    price: 35.50,
    sizes: ['M', 'L', 'XL'],
    colors: ['Charcoal', 'Olive Green', 'Faded Blue'],
    images: ['/vercel.svg', '/next.svg'], // Placeholder images
    stock_count: 75,
    category: 'T-Shirts',
  },
  {
    id: '3',
    name: 'AuthenticTees Signature Tee',
    description: 'Our signature tee, embodying the AuthenticTees spirit. Minimalist design with maximum impact. Crafted for those who appreciate quality.',
    price: 40.00,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Optic White', 'Jet Black', 'Heather Grey'],
    images: ['/next.svg', '/vercel.svg', '/next.svg'], // Placeholder images
    stock_count: 120,
    category: 'T-Shirts',
  },
  {
    id: '4',
    name: 'Long Sleeve Performance Tee',
    description: 'Stay comfortable and stylish with our long sleeve performance tee. Moisture-wicking fabric makes it ideal for active lifestyles or layering.',
    price: 45.00,
    sizes: ['S', 'M', 'L'],
    colors: ['Graphite', 'Deep Ocean', 'Burgundy'],
    images: ['/vercel.svg', '/next.svg'], // Placeholder images
    stock_count: 60,
    category: 'Round-Neck Shirts',
  },
  {
    id: '5',
    name: 'Essential Pocket Tee',
    description: 'An everyday essential, this pocket tee combines practicality with understated style. Made from soft, breathable cotton.',
    price: 29.99,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Khaki', 'White', 'Light Grey'],
    images: ['/next.svg', '/vercel.svg'], // Placeholder images
    stock_count: 90,
    category: 'T-Shirts',
  },
];
