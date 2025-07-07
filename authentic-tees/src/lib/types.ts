export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: string[]; // URLs to images
  stock_count: number;
  category: string; // Added category as it's usually important for e-commerce
}

export interface CartItem {
  id: string; // cart item id
  productId: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  image: string; // display image for cart
}
