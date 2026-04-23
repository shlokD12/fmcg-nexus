import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CreditCard, Factory, Package, Shield, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RetailPage() {
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
              Retail Division
            </span>
          </div>

          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            DIRECT RETAIL
            <span className="text-manufacturer-accent block">BUYING</span>
          </h1>

          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed mb-10 font-medium">
            Retail buyers can order only Trisha Agency’s own manufactured product lines: herbal tobacco and sweet supari. This channel is meant for smaller pack quantities priced in INR.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link to="/products/manufactured">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold"
              >
                Browse Retail Products
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            <Link to="/payments">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 border border-foreground text-foreground font-heading text-sm uppercase tracking-[0.08em] hover:bg-foreground hover:text-background transition-colors font-bold"
              >
                Payment Options
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-20">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="font-heading text-4xl lg:text-6xl text-secondary-foreground mb-4 font-black">
              RETAIL
              <span className="text-manufacturer-accent block">ORDER PROCESS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ['1', 'CHOOSE', 'Select herbal tobacco or sweet supari in the retail catalog.'],
              ['2', 'QUANTITY', 'Pick the pack size and quantity that suits your direct purchase requirement.'],
              ['3', 'PAY', 'Proceed with INR-based payment through the listed payment methods.'],
              ['4', 'DELIVERY', 'Receive your order through the scheduled dispatch and delivery process.'],
            ].map(([step, title, desc], index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-manufacturer-accent flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-3xl text-manufacturer-accent-foreground">{step}</span>
                </div>
                <h3 className="font-heading text-2xl text-secondary-foreground mb-4">{title}</h3>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
            RETAIL
            <span className="text-manufacturer-accent block">PRODUCT LINES</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-accent-dark p-10 border-t-4 border-manufacturer-accent">
            <div className="w-16 h-16 bg-manufacturer-accent/10 border border-manufacturer-accent flex items-center justify-center mb-6">
              <Factory className="w-8 h-8 text-manufacturer-accent" />
            </div>
            <h3 className="font-heading text-3xl text-secondary-foreground mb-4">Herbal Tobacco</h3>
            <p className="font-paragraph text-base text-secondary-foreground/75 leading-relaxed mb-6">
              Trisha Agency’s own in-house manufactured herbal tobacco line for direct retail buying in pack quantities.
            </p>
            <Link to="/products/manufactured" className="font-paragraph text-sm text-manufacturer-accent hover:underline flex items-center gap-2">
              View Retail Packs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-accent-dark p-10 border-t-4 border-manufacturer-accent">
            <div className="w-16 h-16 bg-manufacturer-accent/10 border border-manufacturer-accent flex items-center justify-center mb-6">
              <Package className="w-8 h-8 text-manufacturer-accent" />
            </div>
            <h3 className="font-heading text-3xl text-secondary-foreground mb-4">Sweet Supari</h3>
            <p className="font-paragraph text-base text-secondary-foreground/75 leading-relaxed mb-6">
              Trisha Agency sweet supari manufactured for pack-level retail purchase rather than distributor bulk trading.
            </p>
            <Link to="/products/manufactured" className="font-paragraph text-sm text-manufacturer-accent hover:underline flex items-center gap-2">
              View Retail Packs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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
              <span className="text-manufacturer-accent block">ADVANTAGES</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              [Package, 'Pack-Level Buying', 'Buy single packs or small direct quantities.'],
              [CreditCard, 'INR Pricing', 'Retail prices are shown in Indian Rupees.'],
              [Truck, 'Direct Delivery', 'Retail orders move through the normal delivery flow.'],
              [Shield, 'Own Manufactured Products', 'Only Trisha Agency-made lines appear in retail.'],
            ].map(([Icon, title, desc], index) => (
              <motion.div
                key={title as string}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-manufacturer-accent/10 border-2 border-manufacturer-accent flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-manufacturer-accent" />
                </div>
                <h3 className="font-heading text-2xl text-secondary-foreground mb-4">{title as string}</h3>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">{desc as string}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-manufacturer-accent p-16 lg:p-20 text-center"
        >
          <h2 className="font-heading text-4xl lg:text-6xl text-manufacturer-accent-foreground mb-6">
            Need Distributor or Bulk Supply?
          </h2>
          <p className="font-paragraph text-lg text-manufacturer-accent-foreground/90 mb-12 max-w-3xl mx-auto">
            Switch to the wholesale side if you need box or dozen-based brand supply for distribution instead of retail pack purchases.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/products/manufactured">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-foreground text-background font-heading text-lg flex items-center gap-3"
              >
                Retail Catalog
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <Link to="/products/stockist">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-manufacturer-accent-foreground text-manufacturer-accent-foreground font-heading text-lg hover:bg-manufacturer-accent-foreground hover:text-manufacturer-accent transition-colors"
              >
                Wholesale Catalog
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
