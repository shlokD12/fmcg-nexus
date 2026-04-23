// TRISHA AGENCY - PREMIUM INDUSTRIAL REDESIGN
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Package, Truck, Shield, Users, CheckCircle, Factory, ChevronRight, Briefcase, TrendingUp, Warehouse, CreditCard, Zap, Award, Globe } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Canonical Data Sources ---
const STATS = [
  { icon: Factory, value: "500+", label: "Products Manufactured", color: "text-manufacturer-accent" },
  { icon: Package, value: "1000+", label: "Stocked Products", color: "text-stockist-accent" },
  { icon: Users, value: "200+", label: "Active Distributors", color: "text-primary" },
  { icon: Truck, value: "15+", label: "States Covered", color: "text-foreground" }
];

const CATEGORIES = [
  { title: "HERBAL TOBACCO", desc: "Nicotine-free herbal tobacco products manufactured in-house", link: "/products/manufactured", textAccent: "text-manufacturer-accent", division: "MANUFACTURED" },
  { title: "SWEET SUPARI", desc: "Premium quality sweet supari manufactured with finest ingredients", link: "/products/manufactured", textAccent: "text-manufacturer-accent", division: "MANUFACTURED" },
  { title: "PAN MASALA", desc: "Wide range of branded pan masala variants in stock", link: "/products/stockist", textAccent: "text-stockist-accent", division: "STOCKIST" },
  { title: "MOUTH FRESHENERS", desc: "Baba elaichi and premium mouth freshener brands", link: "/products/stockist", textAccent: "text-stockist-accent", division: "STOCKIST" },
  { title: "FMCG PRODUCTS", desc: "Fast-moving consumer goods from trusted brands", link: "/products/stockist", textAccent: "text-stockist-accent", division: "STOCKIST" },
  { title: "TRADE PRODUCTS", desc: "Bulk trade items for wholesale distribution", link: "/products/stockist", textAccent: "text-stockist-accent", division: "STOCKIST" }
];

const TRUST_FACTORS = [
  { icon: Shield, title: "QUALITY ASSURED", desc: "Rigorous quality control for manufactured products and verified sourcing for stocked items", color: "text-primary" },
  { icon: Truck, title: "RELIABLE SUPPLY", desc: "Consistent inventory management and timely delivery across India", color: "text-manufacturer-accent" },
  { icon: Warehouse, title: "BULK AVAILABILITY", desc: "Large inventory capacity for immediate fulfillment of bulk orders", color: "text-stockist-accent" },
  { icon: TrendingUp, title: "PARTNER GROWTH", desc: "Dedicated account management and business growth assistance for partners", color: "text-primary" }
];

const CAPABILITIES = [
  { icon: Zap, title: "RAPID DEPLOYMENT", desc: "Fast-track order fulfillment with optimized logistics" },
  { icon: Award, title: "CERTIFIED QUALITY", desc: "Industry-standard compliance and quality certifications" },
  { icon: Globe, title: "NATIONAL REACH", desc: "Established distribution network across 15+ states" }
];

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const opacityText = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-clip">
      <Header />
      
      <style>{`
        .marquee-container {
          display: flex;
          width: 200%;
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* 1. HERO SECTION - Cinematic, Layered Industrial Statement */}
      <section ref={heroRef} className="relative w-full h-[100vh] min-h-[1000px] bg-gradient-to-br from-accent-dark via-[#0f1419] to-secondary overflow-hidden flex flex-col justify-between pt-24 pb-12">
        {/* Multi-layered background with depth */}
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/92c2a1_4579c87bb8b34eda9573438f27ed1c5f~mv2.png?originWidth=1920&originHeight=1024"
            alt="Trisha Agency Industrial Facility"
            width={1920}
            className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-dark via-accent-dark/50 to-transparent" />
          {/* Larger, more dramatic accent elements */}
          <div className="absolute top-0 -right-40 w-[1200px] h-[1200px] bg-manufacturer-accent/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-60 left-1/3 w-[900px] h-[900px] bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-60 w-[800px] h-[800px] bg-stockist-accent/6 rounded-full blur-3xl" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div style={{ opacity: opacityText }} className="max-w-6xl">
            {/* Premium badge - refined */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-3 mb-16 overflow-hidden"
            >
              <motion.div 
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className="h-1.5 w-20 bg-gradient-to-r from-primary via-manufacturer-accent to-stockist-accent origin-left"
              />
              <motion.span 
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
                className="font-paragraph text-xs md:text-sm text-primary tracking-[0.12em] uppercase font-bold"
              >
                Industrial FMCG Distribution
              </motion.span>
            </motion.div>

            {/* Main headline - ultra-bold, cinematic */}
            <motion.h1 
              initial={{ opacity: 0, y: 120 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading text-[14vw] leading-[0.75] text-secondary-foreground tracking-tighter mb-12 font-black"
            >
              TRISHA<br />
              <span className="bg-gradient-to-r from-primary via-manufacturer-accent to-primary bg-clip-text text-transparent">AGENCY</span>
            </motion.h1>

            {/* Subheading - editorial, premium */}
            <motion.div
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }}
              className="max-w-5xl mb-20"
            >
              <p className="font-heading text-xl md:text-3xl text-secondary-foreground/95 leading-tight font-bold mb-6">
                Manufacturing Excellence. Strategic Distribution. Uncompromising Quality.
              </p>
              <p className="font-paragraph text-base md:text-lg text-secondary-foreground/75 leading-relaxed max-w-3xl">
                Powering India's FMCG supply chain with 500+ manufactured products, 1000+ stocked brands, and a trusted network of 200+ distributors across 15 states.
              </p>
            </motion.div>

            {/* CTA Buttons - premium, confident */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap gap-6 items-center"
            >
              <Link to="/distributor-enquiry">
                <button className="group relative px-12 py-5 bg-primary text-primary-foreground font-heading text-sm uppercase tracking-[0.12em] overflow-hidden border border-primary hover:border-secondary-foreground transition-all duration-300 font-bold">
                  <span className="relative z-10 flex items-center gap-2.5 font-bold">
                    Become a Distributor <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-secondary-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-400 ease-out" />
                  <span className="absolute inset-0 z-0 flex items-center justify-center gap-2.5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 font-bold">
                    Become a Distributor <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </Link>
              <Link to="/products/manufactured">
                <button className="px-12 py-5 border border-secondary-foreground text-secondary-foreground font-heading text-sm uppercase tracking-[0.12em] hover:bg-secondary-foreground hover:text-accent-dark transition-all duration-300 font-bold">
                  Explore Products
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator - refined */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12 flex justify-center"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-paragraph text-xs text-secondary-foreground/50 uppercase tracking-[0.15em]">Scroll to explore</span>
            <div className="w-5 h-10 border-1.5 border-secondary-foreground/30 rounded-full flex justify-center">
              <motion.div className="w-1 h-2 bg-secondary-foreground/50 rounded-full mt-2" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. MARQUEE - Editorial, Cinematic */}
      <div className="w-full bg-gradient-to-r from-primary via-manufacturer-accent to-primary py-6 overflow-hidden border-y-2 border-secondary">
        <div className="marquee-container font-heading text-2xl md:text-3xl text-primary-foreground uppercase tracking-[0.12em] whitespace-nowrap font-black">
          <span className="mx-16">MANUFACTURING EXCELLENCE</span> <span className="mx-16">•</span>
          <span className="mx-16">STRATEGIC DISTRIBUTION</span> <span className="mx-16">•</span>
          <span className="mx-16">NATIONAL REACH</span> <span className="mx-16">•</span>
          <span className="mx-16">TRUSTED PARTNERS</span> <span className="mx-16">•</span>
          <span className="mx-16">MANUFACTURING EXCELLENCE</span> <span className="mx-16">•</span>
          <span className="mx-16">STRATEGIC DISTRIBUTION</span> <span className="mx-16">•</span>
          <span className="mx-16">NATIONAL REACH</span> <span className="mx-16">•</span>
          <span className="mx-16">TRUSTED PARTNERS</span> <span className="mx-16">•</span>
        </div>
      </div>

      {/* 3. CAPABILITIES - Large Confident Blocks */}
      <section className="w-full bg-background py-28 lg:py-36 border-b border-foreground/5">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-20">
            <h2 className="font-heading text-6xl lg:text-8xl text-foreground uppercase leading-tight font-black">
              Why We<br />
              <span className="text-primary">Lead</span>
            </h2>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-10 lg:gap-14"
          >
            {CAPABILITIES.map((cap, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="group relative bg-accent-dark border-3 border-foreground/10 p-16 lg:p-20 hover:border-primary transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-primary/15 border-3 border-primary flex items-center justify-center mb-10 group-hover:scale-125 transition-transform duration-300">
                    <cap.icon className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="font-heading text-4xl text-secondary-foreground mb-8 uppercase font-black leading-tight">{cap.title}</h3>
                  <p className="font-paragraph text-lg text-secondary-foreground/75 leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. STATS & NETWORK - Full Width Impact with Premium Spacing */}
      <section className="w-full bg-accent-dark py-28 lg:py-36 border-y-2 border-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-8">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-manufacturer-accent rounded-full blur-3xl" />
        </div>

        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
            <h2 className="font-heading text-6xl lg:text-8xl text-secondary-foreground uppercase leading-tight font-black mb-6">
              By The Numbers
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/70 max-w-3xl mx-auto">
              Proven scale and reliability across India's FMCG distribution network.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {STATS.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                className="bg-background/60 backdrop-blur-sm p-14 border-2 border-secondary-foreground/15 hover:border-primary transition-all duration-300 group text-center"
              >
                <div className="flex justify-center mb-10">
                  <div className="w-28 h-28 bg-primary/12 border-3 border-primary flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <stat.icon className={`w-14 h-14 ${stat.color}`} />
                  </div>
                </div>
                <h3 className="font-heading text-7xl text-secondary-foreground mb-6 font-black">{stat.value}</h3>
                <p className="font-paragraph text-sm text-secondary-foreground/70 uppercase tracking-[0.1em] font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="w-full bg-accent-dark border-y border-secondary relative overflow-hidden">
        <div className="max-w-[120rem] mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[85vh]">
            
            {/* Wholesale Division - Large, Confident */}
            <div className="relative p-12 lg:p-28 border-b-2 lg:border-b-0 lg:border-r-2 border-secondary-foreground/10 group flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-2.5 bg-manufacturer-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-manufacturer-accent/12 border-3 border-manufacturer-accent mb-12">
                  <Truck className="w-12 h-12 text-manufacturer-accent" />
                </div>
                
                <h3 className="font-heading text-6xl lg:text-7xl text-secondary-foreground mb-8 uppercase font-black leading-tight">
                  Wholesale<br /><span className="text-manufacturer-accent">Division</span>
                </h3>
                
                <p className="font-paragraph text-xl text-secondary-foreground/75 mb-12 max-w-lg leading-relaxed">
                  Bulk orders for distributors and retailers. Competitive pricing, minimum order quantities, and reliable supply chain management.
                </p>
                
                <ul className="space-y-5 mb-16">
                  {["Bulk order discounts", "MOQ flexibility", "Dedicated account management", "Pan-India network"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-manufacturer-accent flex-shrink-0" />
                      <span className="font-paragraph text-base text-secondary-foreground/90 uppercase tracking-wide font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/wholesale">
                  <button className="px-10 py-5 bg-manufacturer-accent text-accent-dark font-heading text-lg uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-3 font-bold">
                    Explore Wholesale <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Retail Division - Large, Confident */}
            <div className="relative p-12 lg:p-28 group flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-2.5 bg-stockist-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-stockist-accent/12 border-3 border-stockist-accent mb-12">
                  <Package className="w-12 h-12 text-stockist-accent" />
                </div>
                
                <h3 className="font-heading text-6xl lg:text-7xl text-secondary-foreground mb-8 uppercase font-black leading-tight">
                  Retail<br /><span className="text-stockist-accent">Division</span>
                </h3>
                
                <p className="font-paragraph text-xl text-secondary-foreground/75 mb-12 max-w-lg leading-relaxed">
                  Direct product access for smaller buyers and shop owners. Browse our complete catalog and receive prompt delivery.
                </p>
                
                <ul className="space-y-5 mb-16">
                  {["No minimum order", "Easy online ordering", "Fast delivery tracking", "Secure payments"].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-stockist-accent flex-shrink-0" />
                      <span className="font-paragraph text-base text-secondary-foreground/90 uppercase tracking-wide font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/retail">
                  <button className="px-10 py-5 bg-stockist-accent text-accent-dark font-heading text-lg uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-3 font-bold">
                    Browse Retail <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CATEGORIES - Large Editorial Showcase */}
      <section className="w-full bg-background py-28 lg:py-36">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-heading text-5xl lg:text-7xl text-foreground uppercase leading-tight font-black">
                Product<br /><span className="text-primary">Categories</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="font-paragraph text-base text-foreground/70 max-w-lg border-l-2 border-primary pl-6 leading-relaxed">
                Explore our diverse range of manufactured and stocked products, engineered for market demand.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CATEGORIES.map((cat, index) => (
              <motion.div key={index} variants={fadeUp} className="group relative h-[520px] bg-accent-dark overflow-hidden border-2 border-transparent hover:border-foreground transition-all duration-300">
                <Image
                  src="https://static.wixstatic.com/media/92c2a1_e07dac4af2e14a70806d24658a590a2c~mv2.png?originWidth=576&originHeight=448"
                  alt={cat.title}
                  width={600}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-25 group-hover:scale-125 transition-all duration-700"
                />
                <div className={`absolute top-0 left-0 w-full h-3 bg-current ${cat.textAccent}`} />
                
                {/* Division Badge */}
                <div className="absolute top-8 right-8 z-20">
                  <span className={`inline-block px-4 py-2 font-paragraph text-xs uppercase tracking-[0.15em] font-bold ${cat.textAccent} bg-accent-dark/85 border-2 border-current`}>
                    {cat.division}
                  </span>
                </div>
                
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                  <div className="transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading text-4xl text-secondary-foreground mb-4 uppercase font-black leading-tight">{cat.title}</h3>
                    <p className="font-paragraph text-base text-secondary-foreground/80 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">
                      {cat.desc}
                    </p>
                    <Link to={cat.link} className={`inline-flex items-center gap-3 font-heading text-base uppercase tracking-wider ${cat.textAccent} hover:text-white transition-colors font-bold`}>
                      View Catalog <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 6. WHY CHOOSE US - Premium Trust Section */}
      <section className="w-full bg-accent-dark py-28 lg:py-36 border-t border-secondary relative">
        
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
            <h2 className="font-heading text-5xl lg:text-7xl text-secondary-foreground uppercase font-black">
              Why Choose<br /><span className="text-primary">Trisha Agency</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_FACTORS.map((factor, index) => (
              <motion.div 
                key={index}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-background p-10 border-t-4 border-transparent hover:border-current transition-all duration-300 group"
                style={{ color: factor.color === 'text-primary' ? '#FF005C' : factor.color === 'text-manufacturer-accent' ? '#00C49F' : '#FFC107' }}
              >
                <div className="w-20 h-20 bg-background/50 border-3 border-current flex items-center justify-center mb-10 group-hover:scale-125 transition-transform duration-300">
                  <factor.icon className={`w-10 h-10 ${factor.color}`} />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-6 uppercase font-black">{factor.title}</h3>
                <p className="font-paragraph text-base text-foreground/75 leading-relaxed">
                  {factor.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BUSINESS SEGMENTS - Confident, Editorial Layout */}
      <section className="w-full bg-background py-28 lg:py-36 border-t border-foreground/5">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-24">
            <h2 className="font-heading text-5xl lg:text-7xl text-foreground uppercase font-black">
              Our<br /><span className="text-primary">Business Segments</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto mt-6 leading-relaxed">
              Tailored solutions for every buyer type—from large distributors to individual retailers.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 mb-14">
            {/* Manufactured Products */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-manufacturer-accent/8 border-3 border-manufacturer-accent p-16 lg:p-20"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 bg-manufacturer-accent/15 border-3 border-manufacturer-accent flex items-center justify-center">
                  <Factory className="w-10 h-10 text-manufacturer-accent" />
                </div>
                <h3 className="font-heading text-4xl text-foreground uppercase font-black">In-House<br />Manufacturing</h3>
              </div>
              <p className="font-paragraph text-xl text-foreground/75 mb-10 leading-relaxed">
                Premium FMCG and mouth-freshener products manufactured with strict quality control and compliance standards.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-manufacturer-accent flex-shrink-0" />
                  <span className="font-paragraph text-base text-foreground/85 font-semibold">Herbal Tobacco & Sweet Supari</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-manufacturer-accent flex-shrink-0" />
                  <span className="font-paragraph text-base text-foreground/85 font-semibold">Custom formulations available</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-manufacturer-accent flex-shrink-0" />
                  <span className="font-paragraph text-base text-foreground/85 font-semibold">Bulk manufacturing capacity</span>
                </li>
              </ul>
              <Link to="/products/manufactured">
                <button className="px-10 py-5 bg-manufacturer-accent text-accent-dark font-heading text-lg uppercase tracking-wider hover:bg-manufacturer-accent/90 transition-colors flex items-center gap-3 font-bold">
                  View Manufactured <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

            {/* Stockist Products */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-stockist-accent/8 border-3 border-stockist-accent p-16 lg:p-20"
            >
              <div className="flex items-center gap-6 mb-12">
                <div className="w-20 h-20 bg-stockist-accent/15 border-3 border-stockist-accent flex items-center justify-center">
                  <Warehouse className="w-10 h-10 text-stockist-accent" />
                </div>
                <h3 className="font-heading text-4xl text-foreground uppercase font-black">Stocked<br />Brands</h3>
              </div>
              <p className="font-paragraph text-xl text-foreground/75 mb-10 leading-relaxed">
                Extensive inventory of trusted national and regional brands for immediate distribution and retail access.
              </p>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-stockist-accent flex-shrink-0" />
                  <span className="font-paragraph text-base text-foreground/85 font-semibold">Pan Masala & Mouth Fresheners</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-stockist-accent flex-shrink-0" />
                  <span className="font-paragraph text-base text-foreground/85 font-semibold">FMCG & Trade Products</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-stockist-accent flex-shrink-0" />
                  <span className="font-paragraph text-base text-foreground/85 font-semibold">Ready-to-ship inventory</span>
                </li>
              </ul>
              <Link to="/products/stockist">
                <button className="px-10 py-5 bg-stockist-accent text-accent-dark font-heading text-lg uppercase tracking-wider hover:bg-stockist-accent/90 transition-colors flex items-center gap-3 font-bold">
                  View Stockist <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Buyer Types - Asymmetric */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Wholesale Buyers */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-accent-dark p-14 border-3 border-foreground/15 hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <Briefcase className="w-10 h-10 text-manufacturer-accent" />
                <h3 className="font-heading text-3xl text-secondary-foreground uppercase font-black">Wholesale Buyers</h3>
              </div>
              <p className="font-paragraph text-lg text-secondary-foreground/75 mb-8 leading-relaxed">
                Bulk orders with competitive pricing, flexible MOQ, and dedicated account management for large-scale distribution.
              </p>
              <Link to="/wholesale">
                <button className="px-8 py-4 bg-manufacturer-accent text-accent-dark font-heading text-base uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 font-bold">
                  Wholesale Info <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            {/* Retail Buyers */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-accent-dark p-14 border-3 border-foreground/15 hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <Package className="w-10 h-10 text-stockist-accent" />
                <h3 className="font-heading text-3xl text-secondary-foreground uppercase font-black">Retail Buyers</h3>
              </div>
              <p className="font-paragraph text-lg text-secondary-foreground/75 mb-8 leading-relaxed">
                No minimum orders, easy online purchasing, fast delivery, and secure payment options for shop owners and retailers.
              </p>
              <Link to="/retail">
                <button className="px-8 py-4 bg-stockist-accent text-accent-dark font-heading text-base uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2 font-bold">
                  Retail Info <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. QUICK ACTION SECTION - Premium CTA Grid */}
      <section className="w-full bg-foreground py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Distributor Enquiry CTA */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-primary p-12 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <Briefcase className="w-14 h-14 text-primary-foreground mx-auto mb-6 group-hover:scale-125 transition-transform" />
              <h3 className="font-heading text-2xl text-primary-foreground mb-4 uppercase font-black">Distributor<br />Enquiry</h3>
              <p className="font-paragraph text-base text-primary-foreground/85 mb-8 leading-relaxed">
                Become a partner and grow your business with us.
              </p>
              <Link to="/distributor-enquiry" className="inline-block">
                <button className="px-8 py-3 bg-primary-foreground text-primary font-heading text-base uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors font-bold">
                  Enquire Now
                </button>
              </Link>
            </motion.div>

            {/* Wholesale CTA */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-manufacturer-accent p-12 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <Truck className="w-14 h-14 text-accent-dark mx-auto mb-6 group-hover:scale-125 transition-transform" />
              <h3 className="font-heading text-2xl text-accent-dark mb-4 uppercase font-black">Wholesale<br />Orders</h3>
              <p className="font-paragraph text-base text-accent-dark/85 mb-8 leading-relaxed">
                Bulk pricing and dedicated support.
              </p>
              <Link to="/wholesale" className="inline-block">
                <button className="px-8 py-3 bg-accent-dark text-manufacturer-accent font-heading text-base uppercase tracking-wider hover:bg-white transition-colors font-bold">
                  Learn More
                </button>
              </Link>
            </motion.div>

            {/* Retail CTA */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-stockist-accent p-12 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <Package className="w-14 h-14 text-accent-dark mx-auto mb-6 group-hover:scale-125 transition-transform" />
              <h3 className="font-heading text-2xl text-accent-dark mb-4 uppercase font-black">Retail<br />Buyers</h3>
              <p className="font-paragraph text-base text-accent-dark/85 mb-8 leading-relaxed">
                No minimum orders, fast delivery.
              </p>
              <Link to="/retail" className="inline-block">
                <button className="px-8 py-3 bg-accent-dark text-stockist-accent font-heading text-base uppercase tracking-wider hover:bg-white transition-colors font-bold">
                  Shop Now
                </button>
              </Link>
            </motion.div>

            {/* Payments CTA */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-secondary p-12 text-center group hover:shadow-2xl transition-all duration-300"
            >
              <CreditCard className="w-14 h-14 text-secondary-foreground mx-auto mb-6 group-hover:scale-125 transition-transform" />
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4 uppercase font-black">Payments &<br />Invoicing</h3>
              <p className="font-paragraph text-base text-secondary-foreground/85 mb-8 leading-relaxed">
                Flexible payment options available.
              </p>
              <Link to="/payments" className="inline-block">
                <button className="px-8 py-3 bg-secondary-foreground text-secondary font-heading text-base uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors font-bold">
                  Details
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA - Premium, Cinematic Closing */}
      <section className="w-full bg-primary py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-secondary-foreground rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-secondary-foreground rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-heading text-6xl lg:text-8xl text-primary-foreground mb-12 uppercase leading-none font-black">
              Ready to Partner<br />with Trisha Agency?
            </h2>
            <p className="font-paragraph text-2xl text-primary-foreground/90 mb-16 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of successful distributors and retailers across India who trust us for reliable FMCG supply.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/distributor-enquiry">
                <button className="px-12 py-7 bg-secondary-foreground text-foreground font-heading text-lg uppercase tracking-wider hover:bg-accent-dark hover:text-secondary-foreground transition-all duration-300 flex items-center gap-3 shadow-2xl hover:shadow-3xl font-bold">
                  Get Started <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-12 py-7 border-4 border-primary-foreground text-primary-foreground font-heading text-lg uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-all duration-300 font-bold">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
