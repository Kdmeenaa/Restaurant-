export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  spiceLevel: number; // 1-5
  image: string;
  tagline?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: number;
  isSpecial?: boolean;
}

export interface GeneratedContent {
  text: string;
}
