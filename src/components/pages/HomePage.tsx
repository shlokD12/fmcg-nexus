// HPI 1.7-G
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Package, Truck, Shield, Users, CheckCircle, Factory, ChevronRight, Globe, Zap, Briefcase, TrendingUp, Warehouse, CreditCard } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- Canonical Data Sources ---
const STATS = [
  { icon: Factory, value: "500+", label: "Products Manufactured", color: "text-manufacturer-accent", border: "border-manufacturer-accent" },
  { icon: Package, value: "1000+", label: "Stocked Products", color: "text-stockist-accent", border: "border-stockist-accent" },
  { icon: Users, value: "200+", label: "Active Distributors", color: "text-primary", border: "border-primary" },
  { icon: Truck, value: "15+", label: "States Covered", color: "text-foreground", border: "border-foreground" }
];

const CATEGORIES = [
  { title: "HERBAL TOBACCO", desc: "Nicotine-free herbal tobacco products manufactured in-house", link: "/products/manufactured", color: "border-manufacturer-accent", textAccent: "text-manufacturer-accent" },
  { title: "SWEET SUPARI", desc: "Premium quality sweet supari manufactured with finest ingredients", link: "/products/manufactured", color: "border-manufacturer-accent", textAccent: "text-manufacturer-accent" },
  { title: "PAN MASALA", desc: "Wide range of branded pan masala variants in stock", link: "/products/stockist", color: "border-stockist-accent", textAccent: "text-stockist-accent" },
  { title: "MOUTH FRESHENERS", desc: "Baba elaichi and premium mouth freshener brands", link: "/products/stockist", color: "border-stockist-accent", textAccent: "text-stockist-accent" },
  { title: "FMCG PRODUCTS", desc: "Fast-moving consumer goods from trusted brands", link: "/products/stockist", color: "border-stockist-accent", textAccent: "text-stockist-accent" },
  { title: "TRADE PRODUCTS", desc: "Bulk trade items for wholesale distribution", link: "/products/stockist", color: "border-stockist-accent", textAccent: "text-stockist-accent" }
];

const TRUST_FACTORS = [
  { icon: Shield, title: "QUALITY ASSURED", desc: "Rigorous quality control for manufactured products and verified sourcing for stocked items", color: "text-primary", bg: "bg-primary/10", border: "border-primary" },
  { icon: Truck, title: "RELIABLE SUPPLY", desc: "Consistent inventory management and timely delivery across India", color: "text-manufacturer-accent", bg: "bg-manufacturer-accent/10", border: "border-manufacturer-accent" },
  { icon: Warehouse, title: "BULK AVAILABILITY", desc: "Large inventory capacity for immediate fulfillment of bulk orders", color: "text-stockist-accent", bg: "bg-stockist-accent/10", border: "border-stockist-accent" },
  { icon: TrendingUp, title: "PARTNER GROWTH", desc: "Dedicated account management and business growth assistance for partners", color: "text-primary", bg: "bg-primary/10", border: "border-primary" }
];

// --- Animation Variants ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
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
        .architectural-grid {
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
        .architectural-grid-dark {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 4rem 4rem;
        }
        .text-stroke {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }
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

      {/* 1. HERO SECTION - Cinematic & Structural */}
      <section ref={heroRef} className="relative w-full h-[100vh] min-h-[800px] bg-gradient-to-br from-accent-dark via-accent-dark to-secondary overflow-hidden flex flex-col justify-end pb-24">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/92c2a1_4579c87bb8b34eda9573438f27ed1c5f~mv2.png?originWidth=1920&originHeight=1024"
            alt="Trisha Agency Industrial Facility"
            width={1920}
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-accent-dark via-accent-dark/70 to-transparent" />
          <div className="absolute inset-0 architectural-grid-dark opacity-20" />
        </motion.div>

        <div className="relative z-10 w-full max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div style={{ opacity: opacityText }} className="max-w-6xl">
            <div className="flex items-center gap-4 mb-8 overflow-hidden">
              <motion.div 
                initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1, delay: 0.2 }}
                className="h-1 w-16 bg-gradient-to-r from-primary to-manufacturer-accent origin-left"
              />
              <motion.span 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="font-paragraph text-xs md:text-sm text-primary tracking-[0.3em] uppercase font-bold"
              >
                Premium Distribution Network
              </motion.span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="font-heading text-[11vw] leading-[0.9] text-secondary-foreground tracking-tighter mb-6"
            >
              TRISHA<br />
              <span className="bg-gradient-to-r from-primary to-manufacturer-accent bg-clip-text text-transparent">AGENCY</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}
              className="font-paragraph text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mb-12 border-l-2 border-primary/40 pl-6"
            >
              Industrial-grade FMCG distribution. Manufacturing excellence meets strategic wholesale reach across India.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/distributor-enquiry">
                <button className="group relative px-8 py-5 bg-primary text-primary-foreground font-heading text-lg uppercase tracking-wider overflow-hidden border-2 border-primary hover:border-secondary-foreground">
                  <span className="relative z-10 flex items-center gap-3">
                    Become a Distributor <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-secondary-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                  <span className="absolute inset-0 z-0 flex items-center justify-center gap-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    Become a Distributor <ArrowRight className="w-5 h-5" />
                  </span>
                </button>
              </Link>
              <Link to="/products/manufactured">
                <button className="px-8 py-5 border-2 border-secondary-foreground text-secondary-foreground font-heading text-lg uppercase tracking-wider hover:bg-secondary-foreground hover:text-accent-dark transition-all duration-300">
                  View Products
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. MARQUEE - Dynamic Energy */}
      <div className="w-full bg-primary py-4 overflow-hidden border-y-2 border-secondary">
        <div className="marquee-container font-heading text-2xl md:text-4xl text-primary-foreground uppercase tracking-widest whitespace-nowrap">
          <span className="mx-8">FMCG Distribution</span> <span className="mx-8">•</span>
          <span className="mx-8">Premium Manufacturing</span> <span className="mx-8">•</span>
          <span className="mx-8">Wholesale Supply</span> <span className="mx-8">•</span>
          <span className="mx-8">Retail Network</span> <span className="mx-8">•</span>
          <span className="mx-8">FMCG Distribution</span> <span className="mx-8">•</span>
          <span className="mx-8">Premium Manufacturing</span> <span className="mx-8">•</span>
          <span className="mx-8">Wholesale Supply</span> <span className="mx-8">•</span>
          <span className="mx-8">Retail Network</span> <span className="mx-8">•</span>
        </div>
      </div>

      {/* 3. INTRODUCTION - Sticky Narrative */}
      <section className="w-full bg-background relative architectural-grid">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Sticky Left Column */}
            <div className="lg:col-span-5 py-24 lg:py-32">
              <div className="sticky top-32">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                  <h2 className="font-heading text-5xl lg:text-7xl text-foreground leading-[0.9] mb-8 uppercase">
                    Powering<br />
                    <span className="text-primary">India's</span><br />
                    Network
                  </h2>
                  <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
                    Trisha Agency operates at the intersection of manufacturing excellence and strategic wholesale distribution. We produce premium in-house FMCG products while maintaining extensive inventory of trusted brands for rapid distribution.
                  </p>
                  <Link to="/about" className="inline-flex items-center gap-2 font-heading text-lg text-foreground hover:text-primary transition-colors group">
                    <span className="border-b-2 border-foreground group-hover:border-primary pb-1">DISCOVER OUR STORY</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>

            {/* Scrolling Right Column - Stats */}
            <div className="lg:col-span-7 py-12 lg:py-32">
              <div className="grid sm:grid-cols-2 gap-6">
                {STATS.map((stat, index) => (
                  <motion.div 
                    key={index}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-white p-8 border-2 ${stat.border} shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200`}
                  >
                    <stat.icon className={`w-12 h-12 ${stat.color} mb-6`} />
                    <h3 className="font-heading text-5xl text-foreground mb-2">{stat.value}</h3>
                    <p className="font-paragraph text-sm text-foreground/70 uppercase tracking-wider font-bold">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="mt-12 relative h-[400px] border-2 border-foreground overflow-hidden"
              >
                <Image
                  src="https://static.wixstatic.com/media/92c2a1_8ef7ced56b2e4e129514abbba5a0e32e~mv2.png?originWidth=768&originHeight=768"
                  alt="Distribution Network"
                  width={800}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. DIVISIONS - Split Screen Architectural */}
      <section className="w-full bg-accent-dark border-y-2 border-secondary relative overflow-hidden">
        <div className="absolute inset-0 architectural-grid-dark opacity-50" />
        
        <div className="max-w-[120rem] mx-auto">
          <div className="grid lg:grid-cols-2 min-h-[80vh]">
            
            {/* Wholesale Division */}
            <div className="relative p-12 lg:p-24 border-b-2 lg:border-b-0 lg:border-r-2 border-secondary-foreground/10 group flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-2 bg-manufacturer-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-manufacturer-accent/10 border-2 border-manufacturer-accent mb-8">
                  <Truck className="w-10 h-10 text-manufacturer-accent" />
                </div>
                
                <h3 className="font-heading text-5xl lg:text-6xl text-secondary-foreground mb-6 uppercase">
                  Wholesale<br />
                  <span className="text-manufacturer-accent">Division</span>
                </h3>
                
                <p className="font-paragraph text-lg text-secondary-foreground/70 mb-10 max-w-md">
                  Bulk orders for distributors and retailers. Competitive pricing, minimum order quantities, and reliable supply chain management.
                </p>
                
                <ul className="space-y-4 mb-12">
                  {["Bulk order discounts", "MOQ flexibility", "Dedicated account management", "Pan-India network"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-manufacturer-accent" />
                      <span className="font-paragraph text-sm text-secondary-foreground/90 uppercase tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/wholesale">
                  <button className="px-8 py-4 bg-manufacturer-accent text-accent-dark font-heading text-lg uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-3">
                    Explore Wholesale <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Retail Division */}
            <div className="relative p-12 lg:p-24 group flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-2 bg-stockist-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-stockist-accent/10 border-2 border-stockist-accent mb-8">
                  <Package className="w-10 h-10 text-stockist-accent" />
                </div>
                
                <h3 className="font-heading text-5xl lg:text-6xl text-secondary-foreground mb-6 uppercase">
                  Retail<br />
                  <span className="text-stockist-accent">Division</span>
                </h3>
                
                <p className="font-paragraph text-lg text-secondary-foreground/70 mb-10 max-w-md">
                  Direct product access for smaller buyers and shop owners. Browse our complete catalog and receive prompt delivery.
                </p>
                
                <ul className="space-y-4 mb-12">
                  {["No minimum order", "Easy online ordering", "Fast delivery tracking", "Secure payments"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-stockist-accent" />
                      <span className="font-paragraph text-sm text-secondary-foreground/90 uppercase tracking-wide">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/retail">
                  <button className="px-8 py-4 bg-stockist-accent text-accent-dark font-heading text-lg uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-3">
                    Browse Retail <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CATEGORIES - The Inventory Grid */}
      <section className="w-full bg-background py-24 lg:py-32">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="font-heading text-5xl lg:text-7xl text-foreground uppercase leading-none">
                Product<br />
                <span className="text-primary">Categories</span>
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="font-paragraph text-lg text-foreground/70 max-w-md border-l-2 border-primary pl-4">
                Explore our diverse range of manufactured and stocked products, engineered for market demand.
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CATEGORIES.map((cat, index) => (
              <motion.div key={index} variants={fadeUp} className="group relative h-[450px] bg-accent-dark overflow-hidden border-2 border-transparent hover:border-foreground transition-colors duration-300">
                <Image
                  src="https://static.wixstatic.com/media/92c2a1_e07dac4af2e14a70806d24658a590a2c~mv2.png?originWidth=576&originHeight=448"
                  alt={cat.title}
                  width={600}
                  className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700"
                />
                <div className={`absolute top-0 left-0 w-full h-2 bg-current ${cat.textAccent}`} />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-heading text-3xl text-secondary-foreground mb-3 uppercase">{cat.title}</h3>
                    <p className="font-paragraph text-sm text-secondary-foreground/80 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {cat.desc}
                    </p>
                    <Link to={cat.link} className={`inline-flex items-center gap-2 font-heading text-sm uppercase tracking-wider ${cat.textAccent} hover:text-white transition-colors`}>
                      View Catalog <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* 6. WHY CHOOSE US - Trust Architecture */}
      <section className="w-full bg-accent-dark py-24 lg:py-32 border-t-2 border-secondary relative">
        <div className="absolute inset-0 architectural-grid-dark opacity-30" />
        
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <h2 className="font-heading text-5xl lg:text-7xl text-secondary-foreground uppercase">
              Why Choose<br />
              <span className="text-primary">Trisha Agency</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_FACTORS.map((factor, index) => (
              <motion.div 
                key={index}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className="bg-background p-8 border-t-4 border-transparent hover:border-current transition-colors duration-300 group"
                style={{ color: factor.color === 'text-primary' ? '#FF005C' : factor.color === 'text-manufacturer-accent' ? '#00C49F' : '#FFC107' }}
              >
                <div className={`w-16 h-16 ${factor.bg} border-2 ${factor.border} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300`}>
                  <factor.icon className={`w-8 h-8 ${factor.color}`} />
                </div>
                <h3 className="font-heading text-2xl text-foreground mb-4 uppercase">{factor.title}</h3>
                <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                  {factor.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BUSINESS SEGMENTS - Clear Differentiation */}
      <section className="w-full bg-background py-24 lg:py-32 border-t-2 border-foreground/10">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-20">
            <h2 className="font-heading text-5xl lg:text-7xl text-foreground uppercase">
              Our<br />
              <span className="text-primary">Business Segments</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl mx-auto mt-6">
              Tailored solutions for every buyer type—from large distributors to individual retailers.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Manufactured Products */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-manufacturer-accent/5 border-2 border-manufacturer-accent p-12 lg:p-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-manufacturer-accent/10 border-2 border-manufacturer-accent flex items-center justify-center">
                  <Factory className="w-8 h-8 text-manufacturer-accent" />
                </div>
                <h3 className="font-heading text-3xl text-foreground uppercase">In-House<br />Manufacturing</h3>
              </div>
              <p className="font-paragraph text-lg text-foreground/70 mb-8">
                Premium FMCG and mouth-freshener products manufactured with strict quality control and compliance standards.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0" />
                  <span className="font-paragraph text-sm text-foreground/80">Herbal Tobacco & Sweet Supari</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0" />
                  <span className="font-paragraph text-sm text-foreground/80">Custom formulations available</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0" />
                  <span className="font-paragraph text-sm text-foreground/80">Bulk manufacturing capacity</span>
                </li>
              </ul>
              <Link to="/products/manufactured">
                <button className="px-8 py-4 bg-manufacturer-accent text-accent-dark font-heading text-lg uppercase tracking-wider hover:bg-manufacturer-accent/90 transition-colors flex items-center gap-3">
                  View Manufactured <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

            {/* Stockist Products */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-stockist-accent/5 border-2 border-stockist-accent p-12 lg:p-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-stockist-accent/10 border-2 border-stockist-accent flex items-center justify-center">
                  <Warehouse className="w-8 h-8 text-stockist-accent" />
                </div>
                <h3 className="font-heading text-3xl text-foreground uppercase">Stocked<br />Brands</h3>
              </div>
              <p className="font-paragraph text-lg text-foreground/70 mb-8">
                Extensive inventory of trusted national and regional brands for immediate distribution and retail access.
              </p>
              <ul className="space-y-3 mb-10">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0" />
                  <span className="font-paragraph text-sm text-foreground/80">Pan Masala & Mouth Fresheners</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0" />
                  <span className="font-paragraph text-sm text-foreground/80">FMCG & Trade Products</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0" />
                  <span className="font-paragraph text-sm text-foreground/80">Ready-to-ship inventory</span>
                </li>
              </ul>
              <Link to="/products/stockist">
                <button className="px-8 py-4 bg-stockist-accent text-accent-dark font-heading text-lg uppercase tracking-wider hover:bg-stockist-accent/90 transition-colors flex items-center gap-3">
                  View Stockist <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Buyer Types */}
          <div className="mt-20 grid md:grid-cols-2 gap-8">
            {/* Wholesale Buyers */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-accent-dark p-12 border-2 border-foreground/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-8 h-8 text-manufacturer-accent" />
                <h3 className="font-heading text-2xl text-secondary-foreground uppercase">Wholesale Buyers</h3>
              </div>
              <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6">
                Bulk orders with competitive pricing, flexible MOQ, and dedicated account management for large-scale distribution.
              </p>
              <Link to="/wholesale">
                <button className="px-6 py-3 bg-manufacturer-accent text-accent-dark font-heading text-sm uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2">
                  Wholesale Info <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>

            {/* Retail Buyers */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-accent-dark p-12 border-2 border-foreground/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <Package className="w-8 h-8 text-stockist-accent" />
                <h3 className="font-heading text-2xl text-secondary-foreground uppercase">Retail Buyers</h3>
              </div>
              <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6">
                No minimum orders, easy online purchasing, fast delivery, and secure payment options for shop owners and retailers.
              </p>
              <Link to="/retail">
                <button className="px-6 py-3 bg-stockist-accent text-accent-dark font-heading text-sm uppercase tracking-wider hover:bg-white transition-colors flex items-center gap-2">
                  Retail Info <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. QUICK ACTION SECTION - Conversion Focused */}
      <section className="w-full bg-foreground py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-6">
            {/* Distributor Enquiry CTA */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="bg-primary p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <Briefcase className="w-12 h-12 text-primary-foreground mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl text-primary-foreground mb-3 uppercase">Distributor<br />Enquiry</h3>
              <p className="font-paragraph text-sm text-primary-foreground/80 mb-6">
                Become a partner and grow your business with us.
              </p>
              <Link to="/distributor-enquiry" className="inline-block">
                <button className="px-6 py-2 bg-primary-foreground text-primary font-heading text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
                  Enquire Now
                </button>
              </Link>
            </motion.div>

            {/* Wholesale CTA */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-manufacturer-accent p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <Truck className="w-12 h-12 text-accent-dark mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl text-accent-dark mb-3 uppercase">Wholesale<br />Orders</h3>
              <p className="font-paragraph text-sm text-accent-dark/80 mb-6">
                Bulk pricing and dedicated support.
              </p>
              <Link to="/wholesale" className="inline-block">
                <button className="px-6 py-2 bg-accent-dark text-manufacturer-accent font-heading text-sm uppercase tracking-wider hover:bg-white transition-colors">
                  Learn More
                </button>
              </Link>
            </motion.div>

            {/* Retail CTA */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-stockist-accent p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <Package className="w-12 h-12 text-accent-dark mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl text-accent-dark mb-3 uppercase">Retail<br />Buyers</h3>
              <p className="font-paragraph text-sm text-accent-dark/80 mb-6">
                No minimum orders, fast delivery.
              </p>
              <Link to="/retail" className="inline-block">
                <button className="px-6 py-2 bg-accent-dark text-stockist-accent font-heading text-sm uppercase tracking-wider hover:bg-white transition-colors">
                  Shop Now
                </button>
              </Link>
            </motion.div>

            {/* Payments CTA */}
            <motion.div 
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-secondary p-8 text-center group hover:shadow-xl transition-all duration-300"
            >
              <CreditCard className="w-12 h-12 text-secondary-foreground mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-xl text-secondary-foreground mb-3 uppercase">Payments &<br />Invoicing</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/80 mb-6">
                Flexible payment options available.
              </p>
              <Link to="/payments" className="inline-block">
                <button className="px-6 py-2 bg-secondary-foreground text-secondary font-heading text-sm uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-colors">
                  Details
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA - The Catalyst */}
      <section className="w-full bg-primary py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-foreground rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-foreground rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-[120rem] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="font-heading text-5xl lg:text-7xl text-primary-foreground mb-8 uppercase leading-none">
              Ready to Partner<br />with Trisha Agency?
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
              Join hundreds of successful distributors and retailers across India who trust us for reliable FMCG supply.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/distributor-enquiry">
                <button className="px-10 py-6 bg-secondary-foreground text-foreground font-heading text-lg uppercase tracking-wider hover:bg-accent-dark hover:text-secondary-foreground transition-colors flex items-center gap-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
                  Get Started <ArrowRight className="w-6 h-6" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-10 py-6 border-4 border-primary-foreground text-primary-foreground font-heading text-lg uppercase tracking-wider hover:bg-primary-foreground hover:text-primary transition-colors">
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
