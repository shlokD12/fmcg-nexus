import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRetailCheckoutStore } from '@/lib/retailCheckout';

export default function PaymentConfirmationPage() {
  const [searchParams] = useSearchParams();
  const session = useRetailCheckoutStore((state) => state.session);
  const method = searchParams.get('method') || session?.method || 'bank_transfer';
  const orderId = searchParams.get('orderId') || session?.orderId;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-block px-5 py-1.5 bg-primary/10 border border-primary mb-6">
            <span className="font-paragraph text-xs text-primary uppercase tracking-[0.04em] font-medium">
              Payment Confirmation
            </span>
          </div>

          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            NEXT
            <span className="text-primary block">PAYMENT STEP</span>
          </h1>

          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed font-medium">
            Your checkout request has been prepared. Use this page as the next action reference for non-gateway payment methods.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-16">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <div className="bg-background p-10 lg:p-12 border-l-4 border-primary">
            <CheckCircle className="w-12 h-12 text-primary mb-6" />
            <h2 className="font-heading text-3xl text-foreground mb-4 font-black">Order {orderId}</h2>
            <p className="font-paragraph text-base text-foreground/75 leading-relaxed mb-8">
              {method === 'credit_terms'
                ? 'This order is marked for credit-term review. Final approval and commercial confirmation should happen through your business support workflow.'
                : 'This order is set for bank transfer. Share bank details, invoice instructions, and payment reference handling from the operations side.'}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/payments">
                <button className="px-8 py-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold">
                  View Payment Details
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/cart">
                <button className="px-8 py-4 border border-foreground/15 text-foreground font-heading text-sm uppercase tracking-[0.08em] font-bold hover:bg-accent-dark transition-colors">
                  Back to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
