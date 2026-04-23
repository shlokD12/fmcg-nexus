import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Truck, Package, TrendingUp, CheckCircle, ArrowRight, Shield, Users } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { DistributorEnquiries } from '@/entities';

const WHOLESALE_CATEGORIES = [
  {
    title: 'Pan Masala Brands',
    description:
      'Wholesale supply for established market-moving lines such as Rajnigandha, Pan Vilas, and Vimal.',
    link: '/products/stockist',
    accent: 'border-manufacturer-accent text-manufacturer-accent',
    action: 'VIEW CATALOG',
  },
  {
    title: 'Elaichi & Mouth Fresheners',
    description:
      'Distributor-focused access to Rajnigandha Silver Pearls, BABA Elaichi, and similar branded mouth fresheners.',
    link: '/products/stockist',
    accent: 'border-stockist-accent text-stockist-accent',
    action: 'VIEW CATALOG',
  },
  {
    title: 'Mixed Trade Loads',
    description:
      'Consolidated multi-brand orders for channel partners who need coordinated dispatch across several SKUs.',
    link: '/products/stockist',
    accent: 'border-stockist-accent text-stockist-accent',
    action: 'VIEW CATALOG',
  },
  {
    title: 'Trisha Agency Manufactured Lines',
    description:
      'Bulk discussions can also include Trisha Agency herbal tobacco and sweet supari for channel distribution.',
    link: '/products/manufactured',
    accent: 'border-manufacturer-accent text-manufacturer-accent',
    action: 'VIEW RETAIL LINE',
  },
  {
    title: 'Trade Unit Pricing',
    description:
      'Commercial quotations are structured in boxes, cartons, and dozen packs rather than single retail units.',
    link: '#enquiry-form',
    accent: 'border-stockist-accent text-stockist-accent',
    action: 'REQUEST QUOTE',
  },
  {
    title: 'Channel Selection',
    description:
      'Need direct retail buying instead of distributor quantities? Use the product selector to choose the correct catalog.',
    link: '/products',
    accent: 'border-manufacturer-accent text-manufacturer-accent',
    action: 'CHOOSE CHANNEL',
  },
];

const BENEFITS = [
  {
    icon: TrendingUp,
    title: 'Competitive Margins',
    description: 'Volume-based pricing supports distributor resale and repeat trade movement.',
  },
  {
    icon: Shield,
    title: 'Reliable Brand Supply',
    description: 'The catalog focuses on real, recognized brands rather than placeholder wholesale products.',
  },
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'Dispatch planning is coordinated around route coverage, order mix, and destination timelines.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Wholesale enquiries are handled around brand mix, target quantities, and ongoing account needs.',
  },
  {
    icon: Package,
    title: 'Trade Unit Pricing',
    description: 'Quotes are shared in commercial formats like per box and per dozen packs.',
  },
  {
    icon: CheckCircle,
    title: 'Flexible Terms',
    description: 'Commercial terms can be discussed based on frequency, order size, and verified channel requirements.',
  },
];

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    phoneNumber: '',
    emailAddress: '',
    cityState: '',
    productInterest: '',
    expectedVolume: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const enquiry: DistributorEnquiries = {
      _id: crypto.randomUUID(),
      ...formData,
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
      message: '',
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[96rem] mx-auto px-4 sm:px-5 lg:px-10 py-12 md:py-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-5 py-1.5 bg-manufacturer-accent/10 border border-manufacturer-accent mb-6">
            <span className="font-paragraph text-xs text-manufacturer-accent uppercase tracking-[0.04em] font-medium">
              Wholesale Division
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            BULK ORDERS
            <span className="text-manufacturer-accent block">FOR DISTRIBUTORS</span>
          </h1>

          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed mb-10 font-medium">
            Source branded pan masala and elaichi mouth freshener lines in distributor quantities, with
            trade-focused pricing, mixed-load support, and reliable dispatch coordination across India.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
            <a href="#enquiry-form">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-8 py-4 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center justify-center gap-2.5 font-bold"
              >
                REQUEST QUOTE
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </a>

            <Link to="/products/stockist">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-full sm:w-auto px-8 py-4 border border-foreground text-foreground font-heading text-sm uppercase tracking-[0.08em] hover:bg-foreground hover:text-background transition-colors font-bold"
              >
                VIEW WHOLESALE CATALOG
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-16 md:py-20 lg:py-24">
        <div className="max-w-[96rem] mx-auto px-4 sm:px-5 md:px-6 lg:px-10">
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

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
            {[
              ['ENQUIRY', 'Share your business details, preferred brands, and target order quantities.'],
              ['QUOTATION', 'Receive a trade quotation based on brand mix, pack format, and destination market.'],
              ['CONFIRMATION', 'Approve the commercial terms, payment mode, and dispatch requirements.'],
              ['DELIVERY', 'We coordinate packing and transport for timely distributor-side receipt.'],
            ].map(([title, description], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 bg-manufacturer-accent flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading text-3xl text-manufacturer-accent-foreground">{index + 1}</span>
                </div>
                <h3 className="font-heading text-2xl text-secondary-foreground mb-4">{title}</h3>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full max-w-[96rem] mx-auto px-4 sm:px-5 md:px-6 lg:px-10 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
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
                  MOQ depends on the brand and packaging format. Pan masala generally moves by box,
                  while elaichi and mouth fresheners are commonly quoted by dozen packs or mixed trade loads.
                </p>
              </div>

              <div className="bg-accent-dark p-6 border-l-4 border-manufacturer-accent">
                <h4 className="font-heading text-xl text-secondary-foreground mb-3">Payment Terms</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  Advance payment is standard for new accounts. Further commercial flexibility depends on
                  account history, order size, and verification status.
                </p>
              </div>

              <div className="bg-accent-dark p-6 border-l-4 border-manufacturer-accent">
                <h4 className="font-heading text-xl text-secondary-foreground mb-3">Delivery Timeline</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  Ready stock usually dispatches faster than made-to-order goods. Final timelines depend on
                  product mix, city, and transport planning for the shipment.
                </p>
              </div>

              <div className="bg-accent-dark p-6 border-l-4 border-manufacturer-accent">
                <h4 className="font-heading text-xl text-secondary-foreground mb-3">Volume Discounts</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  Commercial rates improve with larger volume, repeat purchasing, and multi-brand distributor orders.
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
            {WHOLESALE_CATEGORIES.map((category, index) => {
              const action = (
                <span className="font-paragraph text-sm hover:underline flex items-center gap-2">
                  {category.action}
                  <ArrowRight className="w-4 h-4" />
                </span>
              );

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                  className={`bg-background p-8 border-l-4 ${category.accent.split(' ')[0]}`}
                >
                  <Package className={`w-12 h-12 mb-4 ${category.accent.split(' ')[1]}`} />
                  <h3 className="font-heading text-2xl text-foreground mb-3">{category.title}</h3>
                  <p className="font-paragraph text-sm text-foreground/70 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  {category.link.startsWith('#') ? (
                    <a href={category.link} className={category.accent.split(' ')[1]}>
                      {action}
                    </a>
                  ) : (
                    <Link to={category.link} className={category.accent.split(' ')[1]}>
                      {action}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
          {BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-manufacturer-accent/10 border-2 border-manufacturer-accent flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-10 h-10 text-manufacturer-accent" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-4">{benefit.title}</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

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
                Submit your brand requirements and we&apos;ll reply with a trade-oriented quotation.
              </p>
            </div>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-manufacturer-accent/10 border-2 border-manufacturer-accent p-6 mb-8"
              >
                <p className="font-paragraph text-sm text-secondary-foreground text-center">
                  Thank you! Your enquiry has been submitted successfully. We&apos;ll contact you soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="bg-background p-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-paragraph text-sm text-foreground mb-2 block">Business Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-paragraph text-sm text-foreground mb-2 block">Contact Person *</label>
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
                  <label className="font-paragraph text-sm text-foreground mb-2 block">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-paragraph text-sm text-foreground mb-2 block">Email Address *</label>
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
                  <label className="font-paragraph text-sm text-foreground mb-2 block">City / State *</label>
                  <input
                    type="text"
                    required
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-paragraph text-sm text-foreground mb-2 block">Product Interest *</label>
                  <input
                    type="text"
                    required
                    value={formData.productInterest}
                    onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                    placeholder="e.g., Rajnigandha Pan Masala, Pan Vilas, BABA Elaichi"
                    className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-paragraph text-sm text-foreground mb-2 block">Expected Volume *</label>
                <input
                  type="text"
                  required
                  value={formData.expectedVolume}
                  onChange={(e) => setFormData({ ...formData, expectedVolume: e.target.value })}
                  placeholder="e.g., 50 boxes per month or 30 dozen packs"
                  className="w-full px-4 py-3 border-2 border-foreground/10 font-paragraph text-sm focus:border-manufacturer-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="font-paragraph text-sm text-foreground mb-2 block">Message</label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention target brands, pack formats, destination city, and any mixed-load requirements"
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
