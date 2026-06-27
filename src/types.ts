export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  longDescription: string;
  image: string;
  category: 'controllers' | 'audio' | 'smart-home' | 'accessories';
  tag?: string;
  rating: number;
  reviewsCount: number;
  features: string[];
  specs: { [key: string]: string };
  finishes: { name: string; hex: string; priceModifier: number }[];
}

export interface CartItem {
  id: string; // unique key combining product.id and customization details
  product: Product;
  quantity: number;
  selectedFinish: string;
  customEngraving: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}
