export type ProductDivision = 'retail' | 'wholesale';

export interface ProductChannel {
  id: ProductDivision;
  title: string;
  subtitle: string;
  description: string;
  link: string;
  accent: string;
}

export interface RetailCatalogItem {
  id: string;
  division: 'retail';
  category: 'Herbal Tobacco' | 'Sweet Supari';
  itemName: string;
  packSize: string;
  description: string;
  highlights: string[];
  price: number;
  pricingUnit: string;
  imageUrl?: string;
}

export interface WholesaleCatalogItem {
  id: string;
  division: 'wholesale';
  category: 'Pan Masala' | 'Elaichi & Mouth Fresheners';
  brandName: string;
  itemName: string;
  packFormat: string;
  description: string;
  highlights: string[];
  price: number;
  pricingUnit: string;
  pricingNote: string;
  imageUrl?: string;
}

export const PRODUCT_CHANNELS: ProductChannel[] = [
  {
    id: 'retail',
    title: 'Retail Products',
    subtitle: 'In-house manufactured products',
    description:
      'Single-pack and small-quantity buying for Trisha Agency herbal tobacco and sweet supari.',
    link: '/products/manufactured',
    accent: 'manufacturer-accent',
  },
  {
    id: 'wholesale',
    title: 'Wholesale Products',
    subtitle: 'Stockist supply for distributors',
    description:
      'Bulk distribution catalog for pan masala and elaichi mouth freshener brands sourced in trade quantities.',
    link: '/products/stockist',
    accent: 'stockist-accent',
  },
];

export const RETAIL_CATALOG: RetailCatalogItem[] = [
  {
    id: 'retail-herbal-tobacco-25',
    division: 'retail',
    category: 'Herbal Tobacco',
    itemName: 'Herbal Tobacco Retail Pack',
    packSize: '25 g pouch',
    description:
      'In-house manufactured herbal tobacco blend prepared for direct retail purchase in smaller quantities.',
    highlights: ['Nicotine-free herbal blend', 'Single-pack retail format', 'Suitable for repeat household purchase'],
    price: 20,
    pricingUnit: 'per pouch',
  },
  {
    id: 'retail-herbal-tobacco-50',
    division: 'retail',
    category: 'Herbal Tobacco',
    itemName: 'Herbal Tobacco Value Pack',
    packSize: '50 g pouch',
    description:
      'Larger retail pouch for buyers who prefer the same in-house herbal tobacco product in a value quantity.',
    highlights: ['Nicotine-free formulation', 'Better value pack size', 'Manufactured by Trisha Agency'],
    price: 38,
    pricingUnit: 'per pouch',
  },
  {
    id: 'retail-sweet-supari-100',
    division: 'retail',
    category: 'Sweet Supari',
    itemName: 'Sweet Supari Classic Pack',
    packSize: '100 g jar',
    description:
      'Sweet supari manufactured by Trisha Agency for regular retail purchase and everyday consumption.',
    highlights: ['Sweet supari recipe', 'Retail-ready packaging', 'Ideal for single and repeat orders'],
    price: 65,
    pricingUnit: 'per jar',
  },
  {
    id: 'retail-sweet-supari-250',
    division: 'retail',
    category: 'Sweet Supari',
    itemName: 'Sweet Supari Family Pack',
    packSize: '250 g jar',
    description:
      'Higher-quantity sweet supari jar for retail customers who want a more economical pack size.',
    highlights: ['In-house manufactured', 'Larger family-size quantity', 'Retail purchase friendly'],
    price: 150,
    pricingUnit: 'per jar',
  },
];

export const WHOLESALE_CATALOG: WholesaleCatalogItem[] = [
  {
    id: 'wholesale-rajnigandha-pan-masala',
    division: 'wholesale',
    category: 'Pan Masala',
    brandName: 'DS Group',
    itemName: 'Rajnigandha Pan Masala',
    packFormat: 'trade box',
    description:
      'Premium pan masala brand from DS Group supplied for distributor and trade-channel movement.',
    highlights: ['Established premium pan masala brand', 'Strong retail pull in Indian markets', 'Suitable for bulk distribution orders'],
    price: 420,
    pricingUnit: 'per box',
    pricingNote: 'Indicative trade price',
  },
  {
    id: 'wholesale-pan-vilas-pan-masala',
    division: 'wholesale',
    category: 'Pan Masala',
    brandName: 'Godfrey Phillips India',
    itemName: 'Pan Vilas Pan Masala',
    packFormat: 'trade box',
    description:
      'Pan Vilas pan masala stocked for wholesale supply to distributors and larger channel buyers.',
    highlights: ['Known pan masala franchise', 'Distributor-focused stocking', 'Bulk movement friendly packaging'],
    price: 395,
    pricingUnit: 'per box',
    pricingNote: 'Indicative trade price',
  },
  {
    id: 'wholesale-vimal-pan-masala',
    division: 'wholesale',
    category: 'Pan Masala',
    brandName: 'Vimal',
    itemName: 'Vimal Pan Masala',
    packFormat: 'trade box',
    description:
      'Vimal pan masala supplied as a wholesale stockist item for distributors purchasing in larger quantities.',
    highlights: ['Recognized Indian pan masala brand', 'Trade-ready supply format', 'Suitable for distributor resale'],
    price: 390,
    pricingUnit: 'per box',
    pricingNote: 'Indicative trade price',
  },
  {
    id: 'wholesale-rajnigandha-silver-pearls',
    division: 'wholesale',
    category: 'Elaichi & Mouth Fresheners',
    brandName: 'DS Group',
    itemName: 'Rajnigandha Silver Pearls',
    packFormat: 'dozen packs',
    description:
      'Saffron blended, silver-coated cardamom freshener from DS Group for premium mouth freshener counters.',
    highlights: ['Cardamom and saffron profile', 'Premium after-mint format', 'Distributor-friendly premium line'],
    price: 980,
    pricingUnit: 'per dozen packs',
    pricingNote: 'Indicative trade price',
  },
  {
    id: 'wholesale-baba-elaichi',
    division: 'wholesale',
    category: 'Elaichi & Mouth Fresheners',
    brandName: 'DS Group',
    itemName: 'BABA Elaichi',
    packFormat: 'dozen packs',
    description:
      'Green cardamom-based mouth freshener from DS Group stocked for wholesale resale and channel distribution.',
    highlights: ['Refined taste and aroma', 'Silver-coated elaichi style', 'Strong fit for mouth freshener retail counters'],
    price: 840,
    pricingUnit: 'per dozen packs',
    pricingNote: 'Indicative trade price',
  },
  {
    id: 'wholesale-pan-vilas-silver-dewz',
    division: 'wholesale',
    category: 'Elaichi & Mouth Fresheners',
    brandName: 'Godfrey Phillips India',
    itemName: 'Pan Vilas Silver Dewz Elaichi',
    packFormat: 'dozen packs',
    description:
      'Pan Vilas silver-coated elaichi mouth freshener line supplied in wholesale quantities for distributors.',
    highlights: ['Cardamom sourced mouth freshener', 'Pan Vilas franchise extension', 'Suitable for premium counter display'],
    price: 900,
    pricingUnit: 'per dozen packs',
    pricingNote: 'Indicative trade price',
  },
];
