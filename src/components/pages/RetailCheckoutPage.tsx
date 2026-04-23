import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { formatPrice } from '@/integrations';
import { PaymentGatewayRegistry, PaymentService } from '@/lib/payment-gateway';
import { useRetailCart } from '@/lib/retailCart';
import { useRetailCheckoutStore } from '@/lib/retailCheckout';
import { Image } from '@/components/ui/image';

const GATEWAY_OPTIONS = PaymentGatewayRegistry.getAllProviders().filter(
  (provider) => provider.type === 'external'
);

export default function RetailCheckoutPage() {
  const { items, itemCount, subtotal } = useRetailCart();
  const setSession = useRetailCheckoutStore((state) => state.setSession);
  const [gatewayProvider, setGatewayProvider] = useState('razorpay');
  const [customer, setCustomer] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePayNow = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!items.length) return;

    setIsSubmitting(true);
    const orderId = `RET-${Date.now()}`;
    const response = await PaymentService.initiatePayment({
      method: 'online_gateway',
      amount: subtotal,
      currency: 'INR',
      orderId,
      customerEmail: customer.email,
      customerPhone: customer.phone,
      description: `Retail checkout for ${itemCount} item${itemCount === 1 ? '' : 's'}`,
      metadata: {
        customerName: customer.fullName,
        itemCount,
        gatewayProvider,
      },
    });

    setSession({
      orderId,
      amount: subtotal,
      method: 'online_gateway',
      customer,
      response,
    });

    if (response.redirectUrl && typeof window !== 'undefined') {
      window.location.assign(response.redirectUrl);
      return;
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-block px-5 py-1.5 bg-manufacturer-accent/10 border border-manufacturer-accent mb-6">
            <span className="font-paragraph text-xs text-manufacturer-accent uppercase tracking-[0.04em] font-medium">
              Retail Checkout
            </span>
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            CHECKOUT
            <span className="text-manufacturer-accent block">AND PAYMENT</span>
          </h1>
          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed font-medium">
            Add customer details, choose your payment gateway, and continue directly to the payment screen.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-16">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          {items.length === 0 ? (
            <div className="bg-background p-12 text-center">
              <h2 className="font-heading text-3xl text-foreground mb-4 font-black">Your retail cart is empty</h2>
              <p className="font-paragraph text-base text-foreground/70 mb-8">
                Add retail products before starting checkout.
              </p>
              <Link to="/products/manufactured">
                <button className="px-8 py-4 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-sm uppercase tracking-[0.08em] font-bold">
                  Browse Retail Products
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
              <form onSubmit={handlePayNow} className="bg-background p-8 lg:p-10 space-y-8">
                <div>
                  <h2 className="font-heading text-3xl text-foreground mb-6 font-black">Customer Details</h2>
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      required
                      value={customer.fullName}
                      onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-foreground/12 font-paragraph text-sm focus:border-primary focus:outline-none"
                    />
                    <input
                      type="email"
                      required
                      value={customer.email}
                      onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-foreground/12 font-paragraph text-sm focus:border-primary focus:outline-none"
                    />
                    <input
                      required
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-foreground/12 font-paragraph text-sm focus:border-primary focus:outline-none"
                    />
                    <input
                      required
                      value={customer.city}
                      onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                      placeholder="City"
                      className="w-full px-4 py-3 border border-foreground/12 font-paragraph text-sm focus:border-primary focus:outline-none"
                    />
                  </div>
                  <textarea
                    required
                    value={customer.address}
                    onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    placeholder="Delivery Address"
                    rows={4}
                    className="w-full mt-5 px-4 py-3 border border-foreground/12 font-paragraph text-sm focus:border-primary focus:outline-none resize-none"
                  />
                </div>

                <div>
                  <h2 className="font-heading text-3xl text-foreground mb-6 font-black">Choose Payment Gateway</h2>
                  <div className="grid md:grid-cols-3 gap-5">
                    {GATEWAY_OPTIONS.map((provider) => {
                      const isActive = gatewayProvider === provider.name.toLowerCase();
                      const logoMap: Record<string, string> = {
                        razorpay: 'https://static.wixstatic.com/media/92c2a1_b89d423595524038be739cc0ca0c0f4b~mv2.png?originWidth=128&originHeight=128',
                        payu: 'https://static.wixstatic.com/media/92c2a1_71ee29dd01934c68942441d1a652d324~mv2.png?originWidth=128&originHeight=128',
                        stripe: 'https://static.wixstatic.com/media/92c2a1_153e08a18d934effac03cf6a8083ee6e~mv2.png?originWidth=128&originHeight=128',
                      };
                      const logoUrl = logoMap[provider.name.toLowerCase()];
                      return (
                        <button
                          key={provider.name}
                          type="button"
                          onClick={() => setGatewayProvider(provider.name.toLowerCase())}
                          className={`text-left p-6 border-l-4 transition-colors ${
                            isActive
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'bg-background border-foreground/12 hover:bg-accent-dark'
                          }`}
                        >
                          {logoUrl ? (
                            <Image
                              src={logoUrl}
                              alt={`${provider.name} logo`}
                              width={56}
                              height={56}
                              className="mb-4 rounded-sm"
                            />
                          ) : (
                            <div
                              className="w-14 h-14 flex items-center justify-center rounded-sm mb-4 text-white font-heading text-2xl font-black"
                              style={{ backgroundColor: provider.brandColor || '#111827' }}
                            >
                              {provider.logoText || provider.name.charAt(0)}
                            </div>
                          )}
                          <h3 className={`font-heading text-xl mb-2 font-black ${isActive ? 'text-primary-foreground' : 'text-foreground'}`}>{provider.name}</h3>
                          <p className={`font-paragraph text-sm leading-relaxed ${isActive ? 'text-primary-foreground/85' : 'text-foreground/70'}`}>
                            Temporary checkout route ready for {provider.name}. Live credentials can be connected later.
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-5 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center justify-center gap-2.5 font-bold disabled:opacity-60"
                >
                  {isSubmitting ? 'Redirecting To Gateway...' : 'Pay Now'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="bg-background p-8 lg:p-10 h-fit border-t-4 border-manufacturer-accent">
                <h2 className="font-heading text-3xl text-foreground mb-8 font-black">Order Summary</h2>
                <div className="space-y-5 mb-8">
                  {items.map((item) => (
                    <div key={item.productId} className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-heading text-lg text-foreground font-bold">{item.itemName}</p>
                        <p className="font-paragraph text-sm text-foreground/60">
                          {item.quantity} x {formatPrice(item.price, 'INR')}
                        </p>
                      </div>
                      <p className="font-heading text-lg text-foreground font-bold">
                        {formatPrice(item.quantity * item.price, 'INR')}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-foreground/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-paragraph text-sm text-foreground/70">Items</span>
                    <span className="font-paragraph text-sm text-foreground">{itemCount}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-paragraph text-sm text-foreground/70">Subtotal</span>
                    <span className="font-heading text-2xl text-foreground font-black">{formatPrice(subtotal, 'INR')}</span>
                  </div>
                </div>

                <div className="mt-8 bg-accent-dark p-5 border-l-4 border-primary">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="font-paragraph text-sm text-secondary-foreground/75 leading-relaxed">
                      Retail checkout is now dedicated to online gateway payment only. Bank transfer and credit terms remain informational on the payments page for non-retail flows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
