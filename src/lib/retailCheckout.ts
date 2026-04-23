import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PaymentMethod, PaymentResponse } from '@/lib/payment-gateway';

export interface RetailCheckoutCustomer {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
}

export interface RetailCheckoutSession {
  orderId: string;
  amount: number;
  method: PaymentMethod;
  customer: RetailCheckoutCustomer;
  response?: PaymentResponse;
}

interface RetailCheckoutState {
  session: RetailCheckoutSession | null;
  setSession: (session: RetailCheckoutSession) => void;
  clearSession: () => void;
}

export const useRetailCheckoutStore = create<RetailCheckoutState>()(
  persist(
    (set) => ({
      session: null,
      setSession: (session) => set({ session }),
      clearSession: () => set({ session: null }),
    }),
    {
      name: 'trisha-retail-checkout',
    }
  )
);
