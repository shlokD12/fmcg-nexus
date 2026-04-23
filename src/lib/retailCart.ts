import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { RetailCatalogItem } from '@/lib/productCatalog';

export interface RetailCartItem {
  productId: string;
  itemName: string;
  category: RetailCatalogItem['category'];
  packSize: string;
  price: number;
  pricingUnit: string;
  quantity: number;
  imageUrl?: string;
}

interface RetailCartState {
  items: RetailCartItem[];
  addItem: (product: RetailCatalogItem, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
}

const mapProductToCartItem = (product: RetailCatalogItem, quantity: number): RetailCartItem => ({
  productId: product.id,
  itemName: product.itemName,
  category: product.category,
  packSize: product.packSize,
  price: product.price,
  pricingUnit: product.pricingUnit,
  quantity,
  imageUrl: product.imageUrl,
});

export const useRetailCartStore = create<RetailCartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product, quantity = 1) =>
        set((state) => {
          const existing = state.items.find((item) => item.productId === product.id);

          if (existing) {
            return {
              items: state.items.map((item) =>
                item.productId === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }

          return {
            items: [...state.items, mapProductToCartItem(product, quantity)],
          };
        }),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => item.productId !== productId)
              : state.items.map((item) =>
                  item.productId === productId ? { ...item, quantity } : item
                ),
        })),
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'trisha-retail-cart',
    }
  )
);

export const useRetailCart = () => {
  const items = useRetailCartStore((state) => state.items);
  const addItem = useRetailCartStore((state) => state.addItem);
  const updateQuantity = useRetailCartStore((state) => state.updateQuantity);
  const removeItem = useRetailCartStore((state) => state.removeItem);
  const clearCart = useRetailCartStore((state) => state.clearCart);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return {
    items,
    itemCount,
    subtotal,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
  };
};
