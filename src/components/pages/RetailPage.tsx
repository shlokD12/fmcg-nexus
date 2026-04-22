import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Package, CreditCard, Truck, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 bg-stockist-accent/10 border-2 border-stockist-accent mb-8">
            <span className="font-paragraph text-sm text-stockist-accent-foreground uppercase tracking-wider">
              Retail Division
            </span>
          </div>
          
          <h1 className="font-heading text-6xl lg:text-8xl text-foreground mb-8 leading-none">
            DIRECT RETAIL
            <span className="text-stockist-accent block">PRODUCT ACCESS</span>
          </h1>
          
          <p className="font-paragraph text-xl text-foreground/70 max-w-4xl leading-relaxed mb-12">
            Browse our complete catalog of FMCG and mouth-freshener products. Easy ordering, secure payments, and fast delivery for retailers and shop owners.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Link to="/products/stockist">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-stockist-accent text-stockist-accent-foreground font-heading text-lg flex items-center gap-3"
              >
                BROWSE PRODUCTS
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link to="/payments">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-foreground text-foreground font-heading text-lg hover:bg-foreground hover:text-background transition-colors"
              >
                PAYMENT OPTIONS
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="w-full bg-accent-dark py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl lg:text-7xl text-secondary-foreground mb-6">
              RETAIL
              <span className="text-stockist-accent block">ORDER PROCESS</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-stockist-accent flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-stockist-accent-foreground">1</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">BROWSE</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Explore our product catalog and select items you need
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-stockist-accent flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-stockist-accent-foreground">2</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">ENQUIRE</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Contact us with your product list and quantity requirements
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-stockist-accent flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-stockist-accent-foreground">3</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">PAY</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Complete payment through our secure gateway or bank transfer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-stockist-accent flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-stockist-accent-foreground">4</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">RECEIVE</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Get your products delivered to your location
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
            RETAIL
            <span className="text-stockist-accent block">PRODUCT RANGE</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden bg-accent-dark"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/92c2a1_4a16cb1a731946a89848cddc13568826~mv2.png?originWidth=384&originHeight=256"
                alt="Manufactured Products"
                width={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 border-t-4 border-manufacturer-accent">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-3">
                MANUFACTURED PRODUCTS
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6">
                Our in-house herbal tobacco and sweet supari products
              </p>
              <Link to="/products/manufactured" className="font-paragraph text-sm text-manufacturer-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden bg-accent-dark"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/92c2a1_f5f42bc912a54b64b55f832942353738~mv2.png?originWidth=384&originHeight=256"
                alt="Pan Masala"
                width={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 border-t-4 border-stockist-accent">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-3">
                PAN MASALA
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6">
                Premium branded pan masala variants
              </p>
              <Link to="/products/stockist" className="font-paragraph text-sm text-stockist-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden bg-accent-dark"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/92c2a1_bdc1fa6fd11a4759a86dfe9bc1eb0f71~mv2.png?originWidth=384&originHeight=256"
                alt="Mouth Fresheners"
                width={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 border-t-4 border-stockist-accent">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-3">
                MOUTH FRESHENERS
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6">
                Baba elaichi and premium freshener brands
              </p>
              <Link to="/products/stockist" className="font-paragraph text-sm text-stockist-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="group relative overflow-hidden bg-accent-dark"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/92c2a1_f88dace8cf6645238d6d8ea45e02c21f~mv2.png?originWidth=384&originHeight=256"
                alt="FMCG Products"
                width={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 border-t-4 border-stockist-accent">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-3">
                FMCG PRODUCTS
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6">
                Fast-moving consumer goods
              </p>
              <Link to="/products/stockist" className="font-paragraph text-sm text-stockist-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="group relative overflow-hidden bg-accent-dark"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/92c2a1_31ac4088f90348fa98e9ab1f82cc0a44~mv2.png?originWidth=384&originHeight=256"
                alt="Trade Products"
                width={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 border-t-4 border-stockist-accent">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-3">
                TRADE PRODUCTS
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6">
                Bulk trade items for retail shops
              </p>
              <Link to="/products/stockist" className="font-paragraph text-sm text-stockist-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="group relative overflow-hidden bg-accent-dark"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src="https://static.wixstatic.com/media/92c2a1_914357bac1c64d679fc3eb8ccb242414~mv2.png?originWidth=384&originHeight=256"
                alt="Branded Products"
                width={400}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-8 border-t-4 border-stockist-accent">
              <h3 className="font-heading text-2xl text-secondary-foreground mb-3">
                BRANDED PRODUCTS
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6">
                Trusted brands from major companies
              </p>
              <Link to="/products/stockist" className="font-paragraph text-sm text-stockist-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retail Benefits */}
      <section className="w-full bg-accent-dark py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl lg:text-7xl text-secondary-foreground mb-6">
              RETAIL
              <span className="text-stockist-accent block">ADVANTAGES</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-stockist-accent/10 border-2 border-stockist-accent flex items-center justify-center mx-auto mb-6">
                <Package className="w-10 h-10 text-stockist-accent" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">No Minimum Order</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Order any quantity based on your needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-stockist-accent/10 border-2 border-stockist-accent flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-10 h-10 text-stockist-accent" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Secure Payments</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Multiple payment options with gateway integration
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-stockist-accent/10 border-2 border-stockist-accent flex items-center justify-center mx-auto mb-6">
                <Truck className="w-10 h-10 text-stockist-accent" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Fast Delivery</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Quick dispatch and tracking support
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-stockist-accent/10 border-2 border-stockist-accent flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-stockist-accent" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Quality Products</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Authentic products with proper certifications
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-stockist-accent p-16 lg:p-24 text-center"
        >
          <h2 className="font-heading text-4xl lg:text-6xl text-stockist-accent-foreground mb-6">
            START ORDERING TODAY
          </h2>
          <p className="font-paragraph text-lg text-stockist-accent-foreground/90 mb-12 max-w-3xl mx-auto">
            Browse our complete product catalog and place your first order
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/products/manufactured">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-foreground text-background font-heading text-lg flex items-center gap-3"
              >
                MANUFACTURED PRODUCTS
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link to="/products/stockist">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-foreground text-background font-heading text-lg flex items-center gap-3"
              >
                STOCKIST PRODUCTS
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
