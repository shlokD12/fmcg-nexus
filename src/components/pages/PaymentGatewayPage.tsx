import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CreditCard, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatPrice } from '@/integrations';
import { useRetailCheckoutStore } from '@/lib/retailCheckout';

export default function PaymentGatewayPage() {
  const [searchParams] = useSearchParams();
  const session = useRetailCheckoutStore((state) => state.session);

  const orderId = searchParams.get('orderId') || session?.orderId;
  const txnId = searchParams.get('txnId') || session?.response?.transactionId;
  const method = searchParams.get('method') || session?.method || 'online_gateway';
  const amount = Number(searchParams.get('amount') || session?.amount || 0);
  const temporaryGatewayLink = `/gateway/pay?orderId=${orderId}&txnId=${txnId}&amount=${amount}&method=${method}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-block px-5 py-1.5 bg-primary/10 border border-primary mb-6">
            <span className="font-paragraph text-xs text-primary uppercase tracking-[0.04em] font-medium">
              Temporary Gateway Link
            </span>
          </div>

          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            SECURE PAYMENT
            <span className="text-primary block">HANDOFF</span>
          </h1>

          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed font-medium">
            Your temporary payment gateway link is ready. Use it to continue the retail payment flow for this order.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-16">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-8">
            <div className="bg-background p-8 lg:p-10 border-l-4 border-primary">
              <CreditCard className="w-12 h-12 text-primary mb-6" />
              <h2 className="font-heading text-3xl text-foreground mb-5 font-black">Gateway Link Generated</h2>
              <p className="font-paragraph text-base text-foreground/75 leading-relaxed mb-6">
                This is a temporary handoff link generated from the current retail checkout session. Once you connect a live payment provider in Wix Vibe, this flow can be replaced with the real processor redirect.
              </p>

              <div className="bg-accent-dark p-5 border border-foreground/10 mb-6 break-all">
                <p className="font-paragraph text-sm text-secondary-foreground/80">{temporaryGatewayLink}</p>
              </div>

              <a
                href={temporaryGatewayLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex"
              >
                <button className="px-8 py-4 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold">
                  Open Temporary Gateway Link
                  <ExternalLink className="w-4 h-4" />
                </button>
              </a>
            </div>

            <div className="bg-background p-8 lg:p-10 border-t-4 border-primary h-fit">
              <h2 className="font-heading text-3xl text-foreground mb-8 font-black">Payment Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-paragraph text-sm text-foreground/70">Order ID</span>
                  <span className="font-paragraph text-sm text-foreground">{orderId}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-paragraph text-sm text-foreground/70">Transaction ID</span>
                  <span className="font-paragraph text-sm text-foreground">{txnId}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-paragraph text-sm text-foreground/70">Payment Method</span>
                  <span className="font-paragraph text-sm text-foreground uppercase">{String(method).replace('_', ' ')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-paragraph text-sm text-foreground/70">Amount</span>
                  <span className="font-heading text-2xl text-foreground font-black">{formatPrice(amount, 'INR')}</span>
                </div>
              </div>

              <div className="mt-8">
                <Link to="/cart">
                  <button className="w-full px-8 py-4 border border-foreground/15 text-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center justify-center gap-2.5 font-bold hover:bg-accent-dark transition-colors">
                    Back to Cart
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
