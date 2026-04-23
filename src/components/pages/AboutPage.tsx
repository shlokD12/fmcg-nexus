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
      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-5 py-1.5 bg-primary/10 border border-primary mb-6">
            <span className="font-paragraph text-xs text-primary uppercase tracking-[0.04em] font-medium">
              About Us
            </span>
          </div>
          
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            BUILDING TRUST
            <span className="text-primary block">IN DISTRIBUTION</span>
          </h1>
          
          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed font-medium">
            Trisha Agency stands at the forefront of India's FMCG distribution network, combining manufacturing excellence with strategic wholesale operations to serve distributors and retailers nationwide.
          </p>
        </motion.div>
      </section>

      {/* Company Overview */}
      <section className="w-full bg-accent-dark py-20">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-4xl text-secondary-foreground mb-6 leading-tight font-black">
                WHO WE ARE
              </h2>
              
              <p className="font-paragraph text-base text-secondary-foreground/80 mb-5 leading-relaxed font-medium">
                Established as a dual-model business, Trisha Agency operates both as a manufacturer of premium FMCG products and as a strategic stockist for leading brands in the mouth-freshener and fast-moving consumer goods sector.
              </p>
              
              <p className="font-paragraph text-base text-secondary-foreground/80 mb-5 leading-relaxed font-medium">
                Our manufacturing division produces high-quality herbal tobacco without nicotine and sweet supari, maintaining strict quality control and consistent supply. Our stockist division procures bulk quantities from major companies, ensuring competitive pricing and reliable availability for our distribution partners.
              </p>
              
              <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed font-medium">
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
      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-6xl text-foreground mb-4 font-black">
            OUR BUSINESS
            <span className="text-primary block">MODEL</span>
          </h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Manufacturing Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-accent-dark p-10 border-l-4 border-manufacturer-accent"
          >
            <Factory className="w-14 h-14 text-manufacturer-accent mb-5" />
            
            <h3 className="font-heading text-3xl text-secondary-foreground mb-5 font-black">
              MANUFACTURING
            </h3>
            
            <p className="font-paragraph text-sm text-secondary-foreground/80 mb-6 leading-relaxed font-medium">
              Our in-house manufacturing facility produces premium FMCG products with strict quality control, consistent formulations, and reliable supply chains.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-manufacturer-accent flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-xs text-secondary-foreground/80 font-medium">Herbal tobacco without nicotine</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-manufacturer-accent flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-xs text-secondary-foreground/80 font-medium">Premium sweet supari products</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-manufacturer-accent flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-xs text-secondary-foreground/80 font-medium">Custom formulations available</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-manufacturer-accent flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-xs text-secondary-foreground/80 font-medium">Quality certifications and compliance</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-manufacturer-accent flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-xs text-secondary-foreground/80 font-medium">Scalable production capacity</span>
              </li>
            </ul>
          </motion.div>

          {/* Stockist Model */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-accent-dark p-10 border-l-4 border-stockist-accent"
          >
            <Package className="w-14 h-14 text-stockist-accent mb-5" />
            
            <h3 className="font-heading text-3xl text-secondary-foreground mb-5 font-black">
              STOCKIST
            </h3>
            
            <p className="font-paragraph text-sm text-secondary-foreground/80 mb-6 leading-relaxed font-medium">
              Strategic bulk procurement from leading brands enables us to offer competitive pricing and immediate availability for high-demand products.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-stockist-accent flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-xs text-secondary-foreground/80 font-medium">Pan masala from trusted brands</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-stockist-accent flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-xs text-secondary-foreground/80 font-medium">Baba elaichi and mouth fresheners</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-stockist-accent flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-xs text-secondary-foreground/80 font-medium">Fast-moving FMCG products</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-stockist-accent flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-xs text-secondary-foreground/80 font-medium">Bulk quantity availability</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4.5 h-4.5 text-stockist-accent flex-shrink-0 mt-0.5" />
                <span className="font-paragraph text-xs text-secondary-foreground/80 font-medium">Competitive wholesale pricing</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="w-full bg-accent-dark py-16">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-18 h-18 bg-primary/10 border border-primary flex items-center justify-center mx-auto mb-5">
                <Target className="w-9 h-9 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-3 font-black">
                MISSION
              </h3>
              <p className="font-paragraph text-xs text-secondary-foreground/80 leading-relaxed font-medium">
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
              <div className="w-18 h-18 bg-manufacturer-accent/10 border border-manufacturer-accent flex items-center justify-center mx-auto mb-5">
                <Shield className="w-9 h-9 text-manufacturer-accent" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-3 font-black">
                VALUES
              </h3>
              <p className="font-paragraph text-xs text-secondary-foreground/80 leading-relaxed font-medium">
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
              <div className="w-18 h-18 bg-stockist-accent/10 border border-stockist-accent flex items-center justify-center mx-auto mb-5">
                <Award className="w-9 h-9 text-stockist-accent" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-3 font-black">
                COMMITMENT
              </h3>
              <p className="font-paragraph text-xs text-secondary-foreground/80 leading-relaxed font-medium">
                Consistent supply, competitive pricing, and dedicated support to ensure our distributors and retailers succeed in their markets.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Supply Capacity */}
      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-foreground mb-6 leading-tight font-black">
              SUPPLY CAPACITY &
              <span className="text-primary block">NETWORK STRENGTH</span>
            </h2>
            
            <p className="font-paragraph text-base text-foreground/70 mb-6 leading-relaxed font-medium">
              Our dual infrastructure enables us to maintain consistent inventory levels, handle large-volume orders, and ensure rapid fulfillment across multiple states.
            </p>
            
            <div className="grid grid-cols-2 gap-5">
              <div className="bg-accent-dark p-5 border-l-4 border-primary">
                <h4 className="font-heading text-2xl text-secondary-foreground mb-1 font-black">15+</h4>
                <p className="font-paragraph text-xs text-secondary-foreground/70 font-medium">States Covered</p>
              </div>
              
              <div className="bg-accent-dark p-5 border-l-4 border-manufacturer-accent">
                <h4 className="font-heading text-2xl text-secondary-foreground mb-1 font-black">500+</h4>
                <p className="font-paragraph text-xs text-secondary-foreground/70 font-medium">Products Available</p>
              </div>
              
              <div className="bg-accent-dark p-5 border-l-4 border-stockist-accent">
                <h4 className="font-heading text-2xl text-secondary-foreground mb-1 font-black">200+</h4>
                <p className="font-paragraph text-xs text-secondary-foreground/70 font-medium">Active Partners</p>
              </div>
              
              <div className="bg-accent-dark p-5 border-l-4 border-primary">
                <h4 className="font-heading text-2xl text-secondary-foreground mb-1 font-black">24/7</h4>
                <p className="font-paragraph text-xs text-secondary-foreground/70 font-medium">Order Processing</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="bg-background p-6 border-l-4 border-manufacturer-accent">
              <TrendingUp className="w-11 h-11 text-manufacturer-accent mb-3" />
              <h4 className="font-heading text-xl text-foreground mb-2 font-black">Scalable Operations</h4>
              <p className="font-paragraph text-xs text-foreground/70 leading-relaxed font-medium">
                Our manufacturing and warehousing infrastructure can scale to meet growing demand without compromising quality or delivery timelines.
              </p>
            </div>
            
            <div className="bg-background p-6 border-l-4 border-stockist-accent">
              <Users className="w-11 h-11 text-stockist-accent mb-3" />
              <h4 className="font-heading text-xl text-foreground mb-2 font-black">Partner Network</h4>
              <p className="font-paragraph text-xs text-foreground/70 leading-relaxed font-medium">
                Strong relationships with major brands and distributors ensure product availability and competitive pricing for our partners.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Distributors Choose Us */}
      <section className="w-full bg-primary py-16">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl lg:text-6xl text-primary-foreground mb-4 font-black">
              WHY DISTRIBUTORS
              <span className="block">CHOOSE US</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-primary-foreground p-6 text-center"
            >
              <div className="w-14 h-14 bg-primary flex items-center justify-center mx-auto mb-3">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <h4 className="font-heading text-lg text-foreground mb-2 font-black">Quality Guarantee</h4>
              <p className="font-paragraph text-xs text-foreground/70 font-medium">Consistent product quality across all orders</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-foreground p-6 text-center"
            >
              <div className="w-14 h-14 bg-manufacturer-accent flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-7 h-7 text-manufacturer-accent-foreground" />
              </div>
              <h4 className="font-heading text-lg text-foreground mb-2 font-black">Competitive Pricing</h4>
              <p className="font-paragraph text-xs text-foreground/70 font-medium">Volume discounts and flexible payment terms</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-primary-foreground p-6 text-center"
            >
              <div className="w-14 h-14 bg-stockist-accent flex items-center justify-center mx-auto mb-3">
                <Package className="w-7 h-7 text-stockist-accent-foreground" />
              </div>
              <h4 className="font-heading text-lg text-foreground mb-2 font-black">Wide Product Range</h4>
              <p className="font-paragraph text-xs text-foreground/70 font-medium">Comprehensive portfolio from one supplier</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary-foreground p-6 text-center"
            >
              <div className="w-14 h-14 bg-primary flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7 text-primary-foreground" />
              </div>
              <h4 className="font-heading text-lg text-foreground mb-2 font-black">Dedicated Support</h4>
              <p className="font-paragraph text-xs text-foreground/70 font-medium">Account managers for personalized service</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
