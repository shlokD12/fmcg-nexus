import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, TrendingUp, Package, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { DistributorEnquiries } from '@/entities';

export default function DistributorEnquiryPage() {
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
      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-5 py-1.5 bg-primary/10 border border-primary mb-6">
            <span className="font-paragraph text-xs text-primary uppercase tracking-[0.04em] font-medium">
              Become a Partner
            </span>
          </div>
          
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            DISTRIBUTOR
            <span className="text-primary block">ENQUIRY</span>
          </h1>
          
          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed font-medium">
            Join our growing network of distributors and retailers. Submit your business details and we'll connect you with the right products and pricing for your market.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-accent-dark py-16">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-4xl lg:text-6xl text-secondary-foreground mb-4 font-black">
              PARTNERSHIP
              <span className="text-primary block">BENEFITS</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Competitive Margins
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Volume-based pricing ensures healthy profit margins for your business
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
                <Package className="w-10 h-10 text-manufacturer-accent" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Wide Product Range
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Access to both manufactured and branded products from one supplier
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
                <Shield className="w-10 h-10 text-stockist-accent" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Quality Assurance
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Consistent product quality with proper certifications and compliance
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary/10 border-2 border-primary flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
                Dedicated Support
              </h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Personal account manager for order assistance and business growth
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
              SUBMIT YOUR
              <span className="text-primary block">ENQUIRY</span>
            </h2>
            <p className="font-paragraph text-lg text-foreground/70">
              Fill in your business details and we'll get back to you within 24 hours
            </p>
          </div>

          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-primary/10 border-2 border-primary p-6 mb-8"
            >
              <div className="flex items-center gap-3 justify-center">
                <CheckCircle className="w-6 h-6 text-primary" />
                <p className="font-paragraph text-sm text-foreground">
                  Thank you! Your enquiry has been submitted successfully. Our team will contact you soon.
                </p>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="bg-accent-dark p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none"
                  placeholder="Enter your business name"
                />
              </div>

              <div>
                <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none"
                  placeholder="Your name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.emailAddress}
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                  City / State *
                </label>
                <input
                  type="text"
                  required
                  value={formData.cityState}
                  onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none"
                  placeholder="Mumbai, Maharashtra"
                />
              </div>

              <div>
                <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                  Product Interest *
                </label>
                <input
                  type="text"
                  required
                  value={formData.productInterest}
                  onChange={(e) => setFormData({ ...formData, productInterest: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none"
                  placeholder="e.g., Pan Masala, Herbal Tobacco"
                />
              </div>
            </div>

            <div>
              <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                Expected Volume *
              </label>
              <input
                type="text"
                required
                value={formData.expectedVolume}
                onChange={(e) => setFormData({ ...formData, expectedVolume: e.target.value })}
                className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none"
                placeholder="e.g., 1000 units per month"
              />
            </div>

            <div>
              <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                Additional Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none resize-none"
                placeholder="Tell us more about your business requirements..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-5 bg-primary text-primary-foreground font-heading text-lg disabled:opacity-50"
            >
              {isSubmitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
            </motion.button>

            <p className="font-paragraph text-xs text-secondary-foreground/60 text-center">
              By submitting this form, you agree to be contacted by our sales team regarding your enquiry.
            </p>
          </form>
        </motion.div>
      </section>

      {/* What Happens Next */}
      <section className="w-full bg-accent-dark py-20">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl lg:text-7xl text-secondary-foreground mb-6">
              WHAT HAPPENS
              <span className="text-primary block">NEXT?</span>
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
              <div className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-primary-foreground">1</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Review</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Our team reviews your enquiry and business requirements
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-primary-foreground">2</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Contact</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                We reach out within 24 hours to discuss your needs
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-primary-foreground">3</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Proposal</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Receive customized pricing and product recommendations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-3xl text-primary-foreground">4</span>
              </div>
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Partnership</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Start ordering and grow your business with us
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
