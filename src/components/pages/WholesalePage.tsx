import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, Package, TrendingUp, CheckCircle, ArrowRight, Shield, Users } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { DistributorEnquiries } from '@/entities';

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phoneNumber: '',
    emailAddress: '',
    cityState: '',
    productInterest: '',
    expectedVolume: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const enquiry: DistributorEnquiries = {
      _id: crypto.randomUUID(),
      ...formData
    };

    await BaseCrudService.create('distributorenquiries', enquiry);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      businessName: '',
      contactPerson: '',
      phoneNumber: '',
      emailAddress: '',
      cityState: '',
      productInterest: '',
      expectedVolume: '',
      message: ''
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

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
          <div className="inline-block px-6 py-2 bg-manufacturer-accent/10 border-2 border-manufacturer-accent mb-8">
            <span className="font-paragraph text-sm text-manufacturer-accent uppercase tracking-wider">
              Wholesale Division
            </span>
          </div>
          
          <h1 className="font-heading text-6xl lg:text-8xl text-foreground mb-8 leading-none">
            BULK ORDERS
            <span className="text-manufacturer-accent block">FOR DISTRIBUTORS</span>
          </h1>
          
          <p className="font-paragraph text-xl text-foreground/70 max-w-4xl leading-relaxed mb-12">
            Partner with Trisha Agency for competitive wholesale pricing, flexible MOQ terms, and reliable supply of FMCG and mouth-freshener products across India.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a href="#enquiry-form">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-lg flex items-center gap-3"
              >
                REQUEST QUOTE
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </a>
            
            <Link to="/products/manufactured">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-foreground text-foreground font-heading text-lg hover:bg-foreground hover:text-background transition-colors"
              >
                VIEW PRODUCTS
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Bulk Order Process */}
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
              WHOLESALE
              <span className="text-manufacturer-accent block">ORDER PROCESS</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-manufacturer-accent flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-manufacturer-accent-foreground">1</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">ENQUIRY</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Submit your business details and product requirements through our enquiry form
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-manufacturer-accent flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-manufacturer-accent-foreground">2</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">QUOTATION</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Receive detailed pricing, MOQ terms, and product availability within 24 hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-manufacturer-accent flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-manufacturer-accent-foreground">3</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">ORDER</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Confirm your order and complete payment through secure gateway or bank transfer
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center relative"
            >
              <div className="w-20 h-20 bg-manufacturer-accent flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-manufacturer-accent-foreground">4</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">DELIVERY</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Track your shipment and receive products at your location with proper documentation
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MOQ & Terms */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl text-foreground mb-8 leading-tight">
              ORDER TERMS &
              <span className="text-manufacturer-accent block">CONDITIONS</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-accent-dark p-6 border-l-4 border-manufacturer-accent">
                <h4 className="font-heading text-xl text-secondary-foreground mb-3">Minimum Order Quantity</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  Flexible MOQ based on product category. Manufactured products: 500 units minimum. Stockist products: Varies by brand and item.
                </p>
              </div>
              
              <div className="bg-accent-dark p-6 border-l-4 border-manufacturer-accent">
                <h4 className="font-heading text-xl text-secondary-foreground mb-3">Payment Terms</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  Advance payment for first orders. Credit terms available for verified distributors after initial transactions.
                </p>
              </div>
              
              <div className="bg-accent-dark p-6 border-l-4 border-manufacturer-accent">
                <h4 className="font-heading text-xl text-secondary-foreground mb-3">Delivery Timeline</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  7-14 days for manufactured products. 3-7 days for stocked items. Express delivery available on request.
                </p>
              </div>
              
              <div className="bg-accent-dark p-6 border-l-4 border-manufacturer-accent">
                <h4 className="font-heading text-xl text-secondary-foreground mb-3">Volume Discounts</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  Tiered pricing structure. Higher volumes receive better rates. Special pricing for long-term contracts.
                </p>
              </div>
            </div>
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
                src="https://static.wixstatic.com/media/92c2a1_5b25f6da54f74255956686fc4e0df4d5~mv2.png?originWidth=576&originHeight=576"
                alt="Wholesale Operations"
                width={600}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="w-full bg-accent-dark py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-heading text-5xl lg:text-7xl text-secondary-foreground mb-6">
              WHOLESALE
              <span className="text-manufacturer-accent block">CATEGORIES</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-8 border-l-4 border-manufacturer-accent"
            >
              <Package className="w-12 h-12 text-manufacturer-accent mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-3">Manufactured Products</h3>
              <p className="font-paragraph text-sm text-foreground/70 mb-4 leading-relaxed">
                Herbal tobacco, sweet supari, and custom formulations
              </p>
              <Link to="/products/manufactured" className="font-paragraph text-sm text-manufacturer-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-8 border-l-4 border-stockist-accent"
            >
              <Package className="w-12 h-12 text-stockist-accent mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-3">Pan Masala</h3>
              <p className="font-paragraph text-sm text-foreground/70 mb-4 leading-relaxed">
                Premium branded pan masala variants in bulk quantities
              </p>
              <Link to="/products/stockist" className="font-paragraph text-sm text-stockist-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background p-8 border-l-4 border-stockist-accent"
            >
              <Package className="w-12 h-12 text-stockist-accent mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-3">Mouth Fresheners</h3>
              <p className="font-paragraph text-sm text-foreground/70 mb-4 leading-relaxed">
                Baba elaichi and premium mouth freshener brands
              </p>
              <Link to="/products/stockist" className="font-paragraph text-sm text-stockist-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background p-8 border-l-4 border-stockist-accent"
            >
              <Package className="w-12 h-12 text-stockist-accent mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-3">FMCG Products</h3>
              <p className="font-paragraph text-sm text-foreground/70 mb-4 leading-relaxed">
                Fast-moving consumer goods from trusted brands
              </p>
              <Link to="/products/stockist" className="font-paragraph text-sm text-stockist-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-background p-8 border-l-4 border-stockist-accent"
            >
              <Package className="w-12 h-12 text-stockist-accent mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-3">Trade Products</h3>
              <p className="font-paragraph text-sm text-foreground/70 mb-4 leading-relaxed">
                Bulk trade items for wholesale distribution
              </p>
              <Link to="/products/stockist" className="font-paragraph text-sm text-stockist-accent hover:underline flex items-center gap-2">
                VIEW PRODUCTS <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-background p-8 border-l-4 border-manufacturer-accent"
            >
              <Package className="w-12 h-12 text-manufacturer-accent mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-3">Custom Orders</h3>
              <p className="font-paragraph text-sm text-foreground/70 mb-4 leading-relaxed">
                Custom formulations and private label manufacturing
              </p>
              <a href="#enquiry-form" className="font-paragraph text-sm text-manufacturer-accent hover:underline flex items-center gap-2">
                ENQUIRE NOW <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Distributor Benefits */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
            DISTRIBUTOR
            <span className="text-manufacturer-accent block">BENEFITS</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-manufacturer-accent/10 border-2 border-manufacturer-accent flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-10 h-10 text-manufacturer-accent" />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-4">Competitive Margins</h3>
            <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
              Volume-based pricing ensures healthy profit margins for distributors
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
            <h3 className="font-heading text-2xl text-foreground mb-4">Quality Assurance</h3>
            <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
              Consistent product quality with proper certifications and compliance
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-manufacturer-accent/10 border-2 border-manufacturer-accent flex items-center justify-center mx-auto mb-6">
              <Truck className="w-10 h-10 text-manufacturer-accent" />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-4">Reliable Delivery</h3>
            <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
              Timely shipments with proper packaging and tracking support
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-manufacturer-accent/10 border-2 border-manufacturer-accent flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-manufacturer-accent" />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-4">Dedicated Support</h3>
            <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
              Personal account manager for order assistance and business growth
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-manufacturer-accent/10 border-2 border-manufacturer-accent flex items-center justify-center mx-auto mb-6">
              <Package className="w-10 h-10 text-manufacturer-accent" />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-4">Wide Product Range</h3>
            <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
              One-stop solution for manufactured and branded products
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-manufacturer-accent/10 border-2 border-manufacturer-accent flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-manufacturer-accent" />
            </div>
            <h3 className="font-heading text-2xl text-foreground mb-4">Flexible Terms</h3>
            <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
              Credit facilities and payment options for verified partners
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="w-full bg-accent-dark py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-heading text-5xl lg:text-7xl text-secondary-foreground mb-6">
                WHOLESALE
                <span className="text-manufacturer-accent block">ENQUIRY FORM</span>
              </h2>
              <p className="font-paragraph text-lg text-secondary-foreground/70">
                Submit your details and we'll get back to you within 24 hours
              </p>
            </div>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-manufacturer-accent/10 border-2 border-manufacturer-accent p-6 mb-8"
              >
                <p className="font-paragraph text-sm text-secondary-foreground text-center">
                  Thank you! Your enquiry has been submitted successfully. We'll contact you soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="bg-background p-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-paragraph text-sm text-foreground mb-2 block">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-paragraph text-sm text-foreground mb-2 block">
                    Contact Person *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-paragraph text-sm text-foreground mb-2 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-paragraph text-sm text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-paragraph text-sm text-foreground mb-2 block">
                    City / State *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-paragraph text-sm text-foreground mb-2 block">
                    Product Interest *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    placeholder="e.g., Pan Masala, Herbal Tobacco"
                    className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-paragraph text-sm text-foreground mb-2 block">
                  Expected Volume *
                </label>
                <input
                  type="text"
                  required
                  value={formData.expectedVolume}
                  onChange={(e) => setFormData({ ...formData, expectedVolume: e.target.value })}
                  placeholder="e.g., 1000 units per month"
                  className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="font-paragraph text-sm text-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Additional details about your requirements"
                  className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-lg disabled:opacity-50"
              >
                {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
