import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Package, ShoppingBag, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { formatPrice } from '@/integrations';
import { PRODUCT_CHANNELS, RETAIL_CATALOG } from '@/lib/productCatalog';
import { useRetailCart } from '@/lib/retailCart';

export default function ManufacturedProductsPage() {
  const categories = ['All', 'Herbal Tobacco', 'Sweet Supari'] as const;
  const { items, addItem, updateQuantity } = useRetailCart();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-5 py-1.5 bg-manufacturer-accent/10 border border-manufacturer-accent mb-6">
            <span className="font-paragraph text-xs text-manufacturer-accent uppercase tracking-[0.04em] font-medium">
              Retail Products
            </span>
          </div>

          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            IN-HOUSE RETAIL
            <span className="text-manufacturer-accent block">PRODUCTS</span>
          </h1>

          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
            This section is only for Trisha Agency&apos;s own manufactured retail lines. Retail buyers can purchase herbal tobacco and sweet supari in small pack quantities priced in Indian Rupees.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-8">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {PRODUCT_CHANNELS.map((channel) => {
                const isActive = channel.id === 'retail';
                return (
                  <Link key={channel.id} to={channel.link}>
                    <button
                      className={`px-5 py-3 font-heading text-xs uppercase tracking-[0.08em] transition-colors ${
                        isActive
                          ? 'bg-manufacturer-accent text-manufacturer-accent-foreground'
                          : 'bg-background text-foreground hover:bg-background/80'
                      }`}
                    >
                      {channel.title}
                    </button>
                  </Link>
                );
              })}
            </div>

            <p className="font-paragraph text-sm text-secondary-foreground/70">
              Retail pricing is shown per pack for direct buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-manufacturer-accent/10 text-manufacturer-accent font-paragraph text-xs uppercase tracking-[0.08em] font-semibold"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {RETAIL_CATALOG.map((product, index) => {
            const cartItem = items.find((item) => item.productId === product.id);
            const quantity = cartItem?.quantity ?? 0;

            return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-accent-dark border-t-4 border-manufacturer-accent overflow-hidden"
            >
              <div className="aspect-[5/3] bg-manufacturer-accent/8 border-b border-secondary-foreground/10 overflow-hidden">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={product.itemName}
                    width={640}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center px-8 text-center">
                    <div>
                      <p className="font-heading text-3xl text-manufacturer-accent font-black uppercase">
                        {product.category}
                      </p>
                      <p className="font-paragraph text-xs text-secondary-foreground/60 mt-3 uppercase tracking-[0.08em]">
                        Add real product imagery from Wix Vibe or GitHub sync
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 bg-manufacturer-accent/10 font-paragraph text-xs text-manufacturer-accent uppercase tracking-[0.08em] mb-4">
                      {product.category}
                    </span>
                    <h2 className="font-heading text-3xl text-secondary-foreground font-black mb-2">
                      {product.itemName}
                    </h2>
                    <p className="font-paragraph text-sm text-secondary-foreground/60">
                      Pack Size: {product.packSize}
                    </p>
                  </div>
                  <div className="w-14 h-14 bg-manufacturer-accent/10 border border-manufacturer-accent flex items-center justify-center flex-shrink-0">
                    <Factory className="w-7 h-7 text-manufacturer-accent" />
                  </div>
                </div>

                <p className="font-paragraph text-base text-secondary-foreground/75 leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="space-y-3 mb-8">
                  {product.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3">
                      <Package className="w-4 h-4 text-manufacturer-accent flex-shrink-0" />
                      <span className="font-paragraph text-sm text-secondary-foreground/85">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-end justify-between gap-4 pt-6 border-t border-secondary-foreground/10">
                  <div>
                    <p className="font-paragraph text-xs uppercase tracking-[0.08em] text-secondary-foreground/55 mb-2">
                      Retail Price
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-3xl text-secondary-foreground font-black">
                        {formatPrice(product.price, 'INR')}
                      </span>
                      <span className="font-paragraph text-sm text-secondary-foreground/60">{product.pricingUnit}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {quantity > 0 ? (
                      <div className="flex items-center border border-manufacturer-accent">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-4 py-3 text-manufacturer-accent hover:bg-manufacturer-accent hover:text-manufacturer-accent-foreground transition-colors"
                        >
                          -
                        </button>
                        <span className="px-5 py-3 font-heading text-sm text-secondary-foreground min-w-14 text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-4 py-3 text-manufacturer-accent hover:bg-manufacturer-accent hover:text-manufacturer-accent-foreground transition-colors"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addItem(product, 1)}
                        className="px-6 py-3 border border-manufacturer-accent text-manufacturer-accent font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold hover:bg-manufacturer-accent hover:text-manufacturer-accent-foreground transition-colors"
                      >
                        Add to Cart
                        <ShoppingCart className="w-4 h-4" />
                      </button>
                    )}

                    <Link to="/checkout">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="px-6 py-3 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold"
                      >
                        Checkout
                        <ShoppingBag className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </section>

      <section className="w-full bg-accent-dark py-20">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl lg:text-7xl text-secondary-foreground mb-6">
              RETAIL
              <span className="text-manufacturer-accent block">ORDER NOTES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 border-l-4 border-manufacturer-accent">
              <h3 className="font-heading text-2xl text-foreground mb-4">Small Quantity Buying</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Retail buyers can purchase smaller pack quantities of Trisha Agency&apos;s own manufactured products.
              </p>
            </div>

            <div className="bg-background p-8 border-l-4 border-manufacturer-accent">
              <h3 className="font-heading text-2xl text-foreground mb-4">Cart to Payments Flow</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Add items to cart first, then continue to the payments page for gateway, bank transfer, and checkout information.
              </p>
            </div>

            <div className="bg-background p-8 border-l-4 border-manufacturer-accent">
              <h3 className="font-heading text-2xl text-foreground mb-4">Only In-House Lines</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                The retail catalog only contains Trisha Agency manufactured herbal tobacco and sweet supari products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-manufacturer-accent p-16 lg:p-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-4xl lg:text-6xl text-manufacturer-accent-foreground mb-5">
                Need Distributor Quantities Instead?
              </h2>
              <p className="font-paragraph text-lg text-manufacturer-accent-foreground/90 leading-relaxed">
                Retail is for direct pack-level buying. If you need distributor-facing bulk stock of pan masala or elaichi mouth fresheners, move to the wholesale catalog.
              </p>
            </div>

            <Link to="/products/stockist">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 bg-foreground text-background font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold"
              >
                View Wholesale Products
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
