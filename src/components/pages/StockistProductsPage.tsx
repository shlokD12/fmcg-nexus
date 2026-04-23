import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Package, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';
import { formatPrice } from '@/integrations';
import { PRODUCT_CHANNELS, WHOLESALE_CATALOG } from '@/lib/productCatalog';

export default function StockistProductsPage() {
  const categories = ['All', 'Pan Masala', 'Elaichi & Mouth Fresheners'] as const;

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
          <div className="inline-block px-5 py-1.5 bg-stockist-accent/10 border border-stockist-accent mb-6">
            <span className="font-paragraph text-xs text-stockist-accent uppercase tracking-[0.04em] font-medium">
              Wholesale Products
            </span>
          </div>

          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            WHOLESALE STOCKIST
            <span className="text-stockist-accent block">PRODUCTS</span>
          </h1>

          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
            This catalog is for distributor and trade buyers. Trisha Agency procures branded pan masala and elaichi mouth freshener products in volume and supplies them further in box or dozen-based trade units.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-8">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              {PRODUCT_CHANNELS.map((channel) => {
                const isActive = channel.id === 'wholesale';
                return (
                  <Link key={channel.id} to={channel.link}>
                    <button
                      className={`px-5 py-3 font-heading text-xs uppercase tracking-[0.08em] transition-colors ${
                        isActive
                          ? 'bg-stockist-accent text-stockist-accent-foreground'
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
              Wholesale prices are shown as indicative INR trade rates.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-stockist-accent/10 text-stockist-accent font-paragraph text-xs uppercase tracking-[0.08em] font-semibold"
            >
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {WHOLESALE_CATALOG.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-accent-dark border-t-4 border-stockist-accent p-8 lg:p-10"
            >
              {product.imageUrl && (
                <div className="mb-6 aspect-[4/3] overflow-hidden border border-secondary-foreground/10 bg-background">
                  <Image
                    src={product.imageUrl}
                    alt={product.itemName}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-stockist-accent/10 font-paragraph text-xs text-stockist-accent uppercase tracking-[0.08em]">
                      {product.category}
                    </span>
                    <span className="inline-block px-3 py-1 bg-background text-foreground font-paragraph text-xs uppercase tracking-[0.08em]">
                      {product.packFormat}
                    </span>
                  </div>
                  <h2 className="font-heading text-3xl text-secondary-foreground font-black mb-2">
                    {product.itemName}
                  </h2>
                  <p className="font-paragraph text-sm text-secondary-foreground/60">
                    Company: {product.companyName}
                  </p>
                </div>
                <div className="w-14 h-14 bg-stockist-accent/10 border border-stockist-accent flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-stockist-accent" />
                </div>
              </div>

              <p className="font-paragraph text-base text-secondary-foreground/75 leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="space-y-3 mb-8">
                {product.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <Package className="w-4 h-4 text-stockist-accent flex-shrink-0" />
                    <span className="font-paragraph text-sm text-secondary-foreground/85">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-end justify-between gap-4 pt-6 border-t border-secondary-foreground/10">
                <div>
                  <p className="font-paragraph text-xs uppercase tracking-[0.08em] text-secondary-foreground/55 mb-2">
                    {product.pricingNote}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-heading text-3xl text-secondary-foreground font-black">
                      {formatPrice(product.price, 'INR')}
                    </span>
                    <span className="font-paragraph text-sm text-secondary-foreground/60">{product.pricingUnit}</span>
                  </div>
                </div>

                <Link to="/wholesale">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-6 py-3 bg-stockist-accent text-stockist-accent-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold"
                  >
                    Wholesale Enquiry
                    <Truck className="w-4 h-4" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
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
              WHOLESALE
              <span className="text-stockist-accent block">ORDER NOTES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 border-l-4 border-stockist-accent">
              <h3 className="font-heading text-2xl text-foreground mb-4">Distributor Supply</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                The wholesale side is meant for distributor and larger channel orders, not single-retail buying.
              </p>
            </div>

            <div className="bg-background p-8 border-l-4 border-stockist-accent">
              <h3 className="font-heading text-2xl text-foreground mb-4">Box / Dozen Pricing</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Prices are displayed in INR using trade units such as per box or per dozen packs, which better fits wholesale transactions.
              </p>
            </div>

            <div className="bg-background p-8 border-l-4 border-stockist-accent">
              <h3 className="font-heading text-2xl text-foreground mb-4">Brand-Based Catalog</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                The catalog now focuses on real Indian brands relevant to the business instead of invented AI-generated wholesale products.
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
          className="bg-stockist-accent p-16 lg:p-20"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-4xl lg:text-6xl text-stockist-accent-foreground mb-5">
                Need Direct Retail Buying Instead?
              </h2>
              <p className="font-paragraph text-lg text-stockist-accent-foreground/90 leading-relaxed">
                Retail buyers looking for Trisha Agency’s own manufactured packs should switch to the dedicated retail catalog.
              </p>
            </div>

            <Link to="/products/manufactured">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 bg-foreground text-background font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold"
              >
                View Retail Products
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
