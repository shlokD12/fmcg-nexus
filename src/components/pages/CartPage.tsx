import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { formatPrice } from '@/integrations';
import { useRetailCart } from '@/lib/retailCart';

export default function CartPage() {
  const { items, itemCount, subtotal, updateQuantity, removeItem, clearCart } = useRetailCart();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-5 py-1.5 bg-manufacturer-accent/10 border border-manufacturer-accent mb-6">
            <span className="font-paragraph text-xs text-manufacturer-accent uppercase tracking-[0.04em] font-medium">
              Retail Cart
            </span>
          </div>

          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            YOUR
            <span className="text-manufacturer-accent block">SHOPPING CART</span>
          </h1>

          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
            Review your retail selection, adjust quantities, and proceed to checkout to choose a payment method and generate the next payment step.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-16">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          {items.length === 0 ? (
            <div className="bg-background p-12 lg:p-16 text-center">
              <ShoppingCart className="w-16 h-16 text-manufacturer-accent mx-auto mb-6" />
              <h2 className="font-heading text-3xl text-foreground mb-4 font-black">Your cart is empty</h2>
              <p className="font-paragraph text-base text-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed">
                Add herbal tobacco or sweet supari retail packs first, then return here to continue to payment.
              </p>
              <Link to="/products/manufactured">
                <button className="px-8 py-4 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-sm uppercase tracking-[0.08em] font-bold">
                  Browse Retail Products
                </button>
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-[1.5fr_0.9fr] gap-8">
              <div className="space-y-6">
                {items.map((item) => (
                  <div
                    key={item.productId}
                    className="bg-background p-6 lg:p-8 border-l-4 border-manufacturer-accent"
                  >
                    <div className="grid md:grid-cols-[160px_1fr] gap-6 items-start">
                      <div className="aspect-square bg-manufacturer-accent/8 border border-manufacturer-accent/25 overflow-hidden">
                        {item.imageUrl ? (
                          <Image
                            src={item.imageUrl}
                            alt={item.itemName}
                            width={320}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center p-5 text-center">
                            <div>
                              <p className="font-heading text-lg text-manufacturer-accent font-black uppercase">
                                {item.category}
                              </p>
                              <p className="font-paragraph text-xs text-foreground/60 mt-2 uppercase tracking-[0.08em]">
                                Image can be added from Wix Vibe
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-col gap-5">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <span className="inline-block px-3 py-1 bg-manufacturer-accent/10 font-paragraph text-xs text-manufacturer-accent uppercase tracking-[0.08em] mb-3">
                              {item.category}
                            </span>
                            <h2 className="font-heading text-2xl text-foreground font-black mb-2">
                              {item.itemName}
                            </h2>
                            <p className="font-paragraph text-sm text-foreground/60">
                              {item.packSize} • {formatPrice(item.price, 'INR')} {item.pricingUnit}
                            </p>
                          </div>

                          <button
                            onClick={() => removeItem(item.productId)}
                            className="text-foreground/55 hover:text-primary transition-colors"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <div className="flex items-center border border-foreground/12">
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                              className="px-3 py-3 text-foreground hover:bg-accent-dark"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-5 py-3 font-heading text-sm text-foreground min-w-14 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                              className="px-3 py-3 text-foreground hover:bg-accent-dark"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <div className="text-right">
                            <p className="font-paragraph text-xs uppercase tracking-[0.08em] text-foreground/55 mb-2">
                              Line Total
                            </p>
                            <p className="font-heading text-2xl text-foreground font-black">
                              {formatPrice(item.price * item.quantity, 'INR')}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-background p-8 lg:p-10 h-fit border-t-4 border-manufacturer-accent">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-heading text-3xl text-foreground font-black">Cart Summary</h2>
                  <span className="font-paragraph text-sm text-foreground/60">{itemCount} items</span>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="font-paragraph text-sm text-foreground/70">Subtotal</span>
                    <span className="font-heading text-xl text-foreground font-bold">
                      {formatPrice(subtotal, 'INR')}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-paragraph text-sm text-foreground/70">Payment route</span>
                    <span className="font-paragraph text-sm text-foreground">Retail checkout</span>
                  </div>
                </div>

                <p className="font-paragraph text-sm text-foreground/65 leading-relaxed mb-8">
                  Continue to checkout to enter customer details, choose the payment method, and generate the temporary payment handoff.
                </p>

                <div className="space-y-4">
                  <Link to="/checkout">
                    <button className="w-full px-6 py-4 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center justify-center gap-2.5 font-bold">
                      Proceed to Checkout
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>

                  <button
                    onClick={clearCart}
                    className="w-full px-6 py-4 border border-foreground/15 text-foreground font-heading text-sm uppercase tracking-[0.08em] hover:bg-accent-dark transition-colors font-bold"
                  >
                    Clear Cart
                  </button>
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
