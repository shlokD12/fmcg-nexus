import { motion } from 'framer-motion';
import { Factory, Package, Shield, TrendingUp, Users, Award, Target, CheckCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
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
          <div className="inline-block px-6 py-2 bg-primary/10 border-2 border-primary mb-8">
            <span className="font-paragraph text-sm text-primary uppercase tracking-wider">
              About Us
            </span>
          </div>
          
          <h1 className="font-heading text-6xl lg:text-8xl text-foreground mb-8 leading-none">
            BUILDING TRUST
            <span className="text-primary block">IN DISTRIBUTION</span>
          </h1>
          
          <p className="font-paragraph text-xl text-foreground/70 max-w-4xl leading-relaxed">
            Trisha Agency stands at the forefront of India's FMCG distribution network, combining manufacturing excellence with strategic wholesale operations to serve distributors and retailers nationwide.
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="w-full bg-accent-dark py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl text-secondary-foreground mb-8 leading-tight">
                WHO WE ARE
              </h2>
              
              <p className="font-paragraph text-lg text-secondary-foreground/80 mb-6 leading-relaxed">
                Established as a dual-model business, Trisha Agency operates both as a manufacturer of premium FMCG products and as a strategic stockist for leading brands in the mouth-freshener and fast-moving consumer goods sector.
              </p>
              
              <p className="font-paragraph text-lg text-secondary-foreground/80 mb-6 leading-relaxed">
                Our manufacturing division produces high-quality herbal tobacco without nicotine and sweet supari, maintaining strict quality control and consistent supply. Our stockist division procures bulk quantities from major companies, ensuring competitive pricing and reliable availability for our distribution partners.
              </p>
              
              <p className="font-paragraph text-lg text-secondary-foreground/80 leading-relaxed">
                This unique combination allows us to offer comprehensive product portfolios, flexible order quantities, and unmatched reliability to distributors and retailers across India.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square relative">
                <Image
                  src="https://static.wixstatic.com/media/92c2a1_41b99e71fe3f49b892acc8c01cd1d793~mv2.png?originWidth=576&originHeight=576"
                  alt="Trisha Agency Operations"
                  width={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent-dark to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
            OUR BUSINESS
            <span className="text-primary block">MODEL</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Manufacturing Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-accent-dark p-12 border-l-4 border-manufacturer-accent"
          >
            <Factory className="w-16 h-16 text-manufacturer-accent mb-6" />
            
            <h3 className="font-heading text-4xl text-secondary-foreground mb-6">
              MANUFACTURING
            </h3>
            
            <p className="font-paragraph text-base text-secondary-foreground/80 mb-8 leading-relaxed">
              Our in-house manufacturing facility produces premium FMCG products with strict quality control, consistent formulations, and reliable supply chains.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">Herbal tobacco without nicotine</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">Premium sweet supari products</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">Custom formulations available</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">Quality certifications and compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">Scalable production capacity</span>
              </li>
            </ul>
          </motion.div>

          {/* Stockist Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-accent-dark p-12 border-l-4 border-stockist-accent"
          >
            <Package className="w-16 h-16 text-stockist-accent mb-6" />
            
            <h3 className="font-heading text-4xl text-secondary-foreground mb-6">
              STOCKIST
            </h3>
            
            <p className="font-paragraph text-base text-secondary-foreground/80 mb-8 leading-relaxed">
              Strategic bulk procurement from leading brands enables us to offer competitive pricing and immediate availability for high-demand products.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">Pan masala from trusted brands</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">Baba elaichi and mouth fresheners</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">Fast-moving FMCG products</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">Bulk quantity availability</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0 mt-1" />
                <span className="font-paragraph text-sm text-secondary-foreground/80">Competitive wholesale pricing</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full bg-accent-dark py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-3xl text-secondary-foreground mb-4">
                MISSION
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
                To provide reliable, high-quality FMCG products through efficient manufacturing and strategic distribution, empowering our partners to grow their businesses.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-manufacturer-accent/10 border-2 border-manufacturer-accent flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-manufacturer-accent" />
              </div>
              <h3 className="font-heading text-3xl text-secondary-foreground mb-4">
                VALUES
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
                Quality assurance, transparent operations, timely delivery, and long-term partnerships built on trust and mutual growth.
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
                <Award className="w-10 h-10 text-stockist-accent" />
              </div>
              <h3 className="font-heading text-3xl text-secondary-foreground mb-4">
                COMMITMENT
              </h3>
              <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
                Consistent supply, competitive pricing, and dedicated support to ensure our distributors and retailers succeed in their markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supply Capacity */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl text-foreground mb-8 leading-tight">
              SUPPLY CAPACITY &
              <span className="text-primary block">NETWORK STRENGTH</span>
            </h2>
            
            <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
              Our dual infrastructure enables us to maintain consistent inventory levels, handle large-volume orders, and ensure rapid fulfillment across multiple states.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-accent-dark p-6 border-l-4 border-primary">
                <h4 className="font-heading text-3xl text-secondary-foreground mb-2">15+</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70">States Covered</p>
              </div>
              
              <div className="bg-accent-dark p-6 border-l-4 border-manufacturer-accent">
                <h4 className="font-heading text-3xl text-secondary-foreground mb-2">500+</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70">Products Available</p>
              </div>
              
              <div className="bg-accent-dark p-6 border-l-4 border-stockist-accent">
                <h4 className="font-heading text-3xl text-secondary-foreground mb-2">200+</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70">Active Partners</p>
              </div>
              
              <div className="bg-accent-dark p-6 border-l-4 border-primary">
                <h4 className="font-heading text-3xl text-secondary-foreground mb-2">24/7</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70">Order Processing</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-background p-8 border-l-4 border-manufacturer-accent">
              <TrendingUp className="w-12 h-12 text-manufacturer-accent mb-4" />
              <h4 className="font-heading text-2xl text-foreground mb-3">Scalable Operations</h4>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Our manufacturing and warehousing infrastructure can scale to meet growing demand without compromising quality or delivery timelines.
              </p>
            </div>
            
            <div className="bg-background p-8 border-l-4 border-stockist-accent">
              <Users className="w-12 h-12 text-stockist-accent mb-4" />
              <h4 className="font-heading text-2xl text-foreground mb-3">Partner Network</h4>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Strong relationships with major brands and distributors ensure product availability and competitive pricing for our partners.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Distributors Choose Us */}
      <section className="w-full bg-primary py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl lg:text-7xl text-primary-foreground mb-6">
              WHY DISTRIBUTORS
              <span className="block">CHOOSE US</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary-foreground p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-heading text-xl text-foreground mb-3">Quality Guarantee</h4>
              <p className="font-paragraph text-sm text-foreground/70">Consistent product quality across all orders</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-foreground p-8 text-center"
            >
              <div className="w-16 h-16 bg-manufacturer-accent flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-manufacturer-accent-foreground" />
              </div>
              <h4 className="font-heading text-xl text-foreground mb-3">Competitive Pricing</h4>
              <p className="font-paragraph text-sm text-foreground/70">Volume discounts and flexible payment terms</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary-foreground p-8 text-center"
            >
              <div className="w-16 h-16 bg-stockist-accent flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-stockist-accent-foreground" />
              </div>
              <h4 className="font-heading text-xl text-foreground mb-3">Wide Product Range</h4>
              <p className="font-paragraph text-sm text-foreground/70">Comprehensive portfolio from one supplier</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary-foreground p-8 text-center"
            >
              <div className="w-16 h-16 bg-primary flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h4 className="font-heading text-xl text-foreground mb-3">Dedicated Support</h4>
              <p className="font-paragraph text-sm text-foreground/70">Account managers for personalized service</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
