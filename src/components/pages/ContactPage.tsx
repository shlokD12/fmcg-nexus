import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { ContactEnquiries } from '@/entities';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    senderName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const enquiry: ContactEnquiries = {
      _id: crypto.randomUUID(),
      ...formData,
      submissionDateTime: new Date().toISOString()
    };

    await BaseCrudService.create('contactenquiries', enquiry);
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      senderName: '',
      email: '',
      phoneNumber: '',
      subject: '',
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
              Get In Touch
            </span>
          </div>
          
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            CONTACT
            <span className="text-primary block">US</span>
          </h1>
          
          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed font-medium">
            Have questions about our products or services? Our team is here to help. Reach out through any of the channels below or fill out the contact form.
          </p>
        </motion.div>
      </section>

      {/* Contact Info & Form */}
      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl text-foreground mb-10 leading-tight font-black">
              CONTACT
              <span className="text-primary block">INFORMATION</span>
            </h2>
            
            <div className="space-y-6">
              <div className="bg-accent-dark p-6 border-l-4 border-primary">
                <div className="flex items-start gap-3">
                  <Phone className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg text-secondary-foreground mb-2 font-black">Phone</h3>
                    <p className="font-paragraph text-sm text-secondary-foreground/80 mb-1 font-medium">
                      Sales: +91 98765 43210
                    </p>
                    <p className="font-paragraph text-sm text-secondary-foreground/80 font-medium">
                      Support: +91 98765 43211
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent-dark p-6 border-l-4 border-manufacturer-accent">
                <div className="flex items-start gap-3">
                  <Mail className="w-7 h-7 text-manufacturer-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading text-lg text-secondary-foreground mb-2 font-black">Email</h3>
                    <p className="font-paragraph text-sm text-secondary-foreground/80 mb-1 font-medium">
                      Sales: sales@trishaagency.com
                    </p>
                    <p className="font-paragraph text-sm text-secondary-foreground/80 mb-1 font-medium">
                      Info: info@trishaagency.com
                    </p>
                    <p className="font-paragraph text-sm text-secondary-foreground/80 font-medium">
                      Accounts: accounts@trishaagency.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent-dark p-8 border-l-4 border-stockist-accent">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-stockist-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-secondary-foreground mb-3">Address</h3>
                    <p className="font-paragraph text-base text-secondary-foreground/80 leading-relaxed">
                      Trisha Agency<br />
                      Industrial Area, Phase 2<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-accent-dark p-8 border-l-4 border-primary">
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-secondary-foreground mb-3">Business Hours</h3>
                    <p className="font-paragraph text-base text-secondary-foreground/80 mb-2">
                      Monday - Saturday: 9:00 AM - 7:00 PM
                    </p>
                    <p className="font-paragraph text-base text-secondary-foreground/80">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-primary p-8">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-8 h-8 text-primary-foreground flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-xl text-primary-foreground mb-3">WhatsApp</h3>
                    <p className="font-paragraph text-base text-primary-foreground/90 mb-4">
                      Quick queries? Message us on WhatsApp
                    </p>
                    <a
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 bg-primary-foreground text-primary font-heading text-sm hover:bg-primary-foreground/90 transition-colors"
                    >
                      CHAT ON WHATSAPP
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl text-foreground mb-12 leading-tight">
              SEND US A
              <span className="text-primary block">MESSAGE</span>
            </h2>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-primary/10 border-2 border-primary p-6 mb-8"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <p className="font-paragraph text-sm text-foreground">
                    Thank you! Your message has been sent successfully. We'll respond within 24 hours.
                  </p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="bg-accent-dark p-10 space-y-6">
              <div>
                <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.senderName}
                  onChange={(e) => setFormData({ ...formData, senderName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

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
              </div>

              <div>
                <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none"
                  placeholder="What is this regarding?"
                />
              </div>

              <div>
                <label className="font-paragraph text-sm text-secondary-foreground mb-2 block">
                  Message *
                </label>
                <textarea
                  rows={6}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-secondary-foreground/10 bg-background font-paragraph text-sm focus:border-primary focus:outline-none resize-none"
                  placeholder="Tell us more about your enquiry..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-primary text-primary-foreground font-heading text-lg disabled:opacity-50"
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full bg-accent-dark py-20">
        <div className="max-w-[88rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-5xl lg:text-7xl text-secondary-foreground mb-6">
              VISIT OUR
              <span className="text-primary block">OFFICE</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-background p-4 aspect-video"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.082177513865436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Trisha Agency Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full max-w-[88rem] mx-auto px-6 lg:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
            NEED SOMETHING
            <span className="text-primary block">SPECIFIC?</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-accent-dark p-10 text-center border-t-4 border-manufacturer-accent"
          >
            <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
              Wholesale Enquiry
            </h3>
            <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6 leading-relaxed">
              For bulk orders and distributor partnerships
            </p>
            <a
              href="/wholesale"
              className="inline-block px-6 py-3 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-sm hover:bg-manufacturer-accent/90 transition-colors"
            >
              WHOLESALE PAGE
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-accent-dark p-10 text-center border-t-4 border-stockist-accent"
          >
            <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
              Product Catalogue
            </h3>
            <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6 leading-relaxed">
              Browse our complete product range
            </p>
            <a
              href="/products/manufactured"
              className="inline-block px-6 py-3 bg-stockist-accent text-stockist-accent-foreground font-heading text-sm hover:bg-stockist-accent/90 transition-colors"
            >
              VIEW PRODUCTS
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-accent-dark p-10 text-center border-t-4 border-primary"
          >
            <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
              Payment Information
            </h3>
            <p className="font-paragraph text-sm text-secondary-foreground/70 mb-6 leading-relaxed">
              Learn about payment options
            </p>
            <a
              href="/payments"
              className="inline-block px-6 py-3 bg-primary text-primary-foreground font-heading text-sm hover:bg-primary/90 transition-colors"
            >
              PAYMENT OPTIONS
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
