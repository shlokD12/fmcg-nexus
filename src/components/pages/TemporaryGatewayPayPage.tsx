import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatPrice } from '@/integrations';
import { useRetailCart } from '@/lib/retailCart';

export default function TemporaryGatewayPayPage() {
  const [searchParams] = useSearchParams();
  const [isPaid, setIsPaid] = useState(false);
  const { clearCart } = useRetailCart();

  const orderId = searchParams.get('orderId') || 'N/A';
  const txnId = searchParams.get('txnId') || 'N/A';
  const amount = Number(searchParams.get('amount') || 0);
  const gateway = searchParams.get('gateway') || 'razorpay';

  const handlePay = () => {
    setIsPaid(true);
    clearCart();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-block px-5 py-1.5 bg-primary/10 border border-primary mb-6">
            <span className="font-paragraph text-xs text-primary uppercase tracking-[0.04em] font-medium">
              Gateway Preview
            </span>
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            SECURE
            <span className="text-primary block">PAYMENT SCREEN</span>
          </h1>
          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed font-medium">
            This preview screen simulates the live {gateway} checkout step for the current retail flow and can be replaced with the real gateway once credentials are connected.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-16">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <div className="max-w-3xl mx-auto bg-background p-10 lg:p-12 border-l-4 border-primary">
            <CreditCard className="w-12 h-12 text-primary mb-6 mx-auto" />
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl text-foreground mb-4 font-black">Order Payment</h2>
              <p className="font-paragraph text-base text-foreground/75 leading-relaxed">
                Order <span className="font-semibold">{orderId}</span> is ready for payment using <span className="font-semibold uppercase">{gateway}</span>.
              </p>
            </div>

            <div className="bg-accent-dark p-6 border border-foreground/10 mb-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-paragraph text-sm text-secondary-foreground/70">Order ID</span>
                <span className="font-paragraph text-sm text-secondary-foreground">{orderId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-paragraph text-sm text-secondary-foreground/70">Transaction ID</span>
                <span className="font-paragraph text-sm text-secondary-foreground">{txnId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-paragraph text-sm text-secondary-foreground/70">Amount</span>
                <span className="font-heading text-2xl text-secondary-foreground font-black">{formatPrice(amount, 'INR')}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-paragraph text-sm text-secondary-foreground/70">Gateway</span>
                <span className="font-paragraph text-sm text-secondary-foreground uppercase">{gateway}</span>
              </div>
            </div>

            {isPaid ? (
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-manufacturer-accent mx-auto mb-4" />
                <h3 className="font-heading text-2xl text-foreground mb-3 font-black">Payment Marked Successful</h3>
                <p className="font-paragraph text-base text-foreground/75 mb-8">
                  The payment preview has been completed and the retail cart has been cleared.
                </p>
                <Link to="/products/manufactured">
                  <button className="px-8 py-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold mx-auto">
                    Continue Shopping
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handlePay}
                  className="flex-1 px-8 py-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-[0.08em] font-bold"
                >
                  Pay {formatPrice(amount, 'INR')}
                </button>
                <Link to="/cart" className="flex-1">
                  <button className="w-full px-8 py-4 border border-foreground/15 text-foreground font-heading text-sm uppercase tracking-[0.08em] font-bold hover:bg-accent-dark transition-colors">
                    Cancel
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
