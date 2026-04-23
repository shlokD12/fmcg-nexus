import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CreditCard, Shield, CheckCircle, ArrowRight, FileText, Phone, Lock, Zap, Clock, AlertCircle, Download, HelpCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PAYMENT_CONFIG } from '@/lib/payment-gateway';
import { formatPrice } from '@/integrations';
import { useRetailCart } from '@/lib/retailCart';

export default function PaymentsPage() {
  const { items, itemCount, subtotal } = useRetailCart();

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
              Payment Information
            </span>
          </div>
          
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            SECURE
            <span className="text-primary block">PAYMENTS</span>
          </h1>
          
          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed font-medium">
            Multiple payment options for your convenience. Retail buyers can move from cart to checkout, while wholesale partners can review bank transfer and trade payment terms.
          </p>
        </motion.div>
      </section>

      {items.length > 0 && (
        <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 pb-8">
          <div className="bg-manufacturer-accent/10 border border-manufacturer-accent p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div className="max-w-3xl">
                <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4 font-black">
                  RETAIL CHECKOUT READY
                </h2>
                <p className="font-paragraph text-base text-foreground/75 leading-relaxed">
                  Your retail cart currently contains {itemCount} item{itemCount === 1 ? '' : 's'} with an estimated subtotal of {formatPrice(subtotal, 'INR')}. Use this page as the payment reference before connecting or confirming the live gateway inside Wix Vibe.
                </p>
              </div>
              <Link to="/cart">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-4 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold"
                >
                  Review Cart
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Payment Methods */}
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
              PAYMENT
              <span className="text-primary block">OPTIONS</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-10 border-l-4 border-primary"
            >
              <CreditCard className="w-12 h-12 text-primary mb-6" />
              <h3 className="font-heading text-3xl text-foreground mb-4">
                Online Payment Gateway
              </h3>
              <p className="font-paragraph text-sm text-foreground/70 mb-6 leading-relaxed">
                Secure online payment processing through integrated payment gateway. Accept credit cards, debit cards, UPI, and net banking.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-sm text-foreground/80">Instant payment confirmation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-sm text-foreground/80">SSL encrypted transactions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-sm text-foreground/80">Multiple payment methods</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-10 border-l-4 border-manufacturer-accent"
            >
              <FileText className="w-12 h-12 text-manufacturer-accent mb-6" />
              <h3 className="font-heading text-3xl text-foreground mb-4">
                Bank Transfer
              </h3>
              <p className="font-paragraph text-sm text-foreground/70 mb-6 leading-relaxed">
                Direct bank transfer for bulk orders. Receive bank details after order confirmation and complete payment through NEFT/RTGS/IMPS.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-sm text-foreground/80">Suitable for large orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-sm text-foreground/80">Bank account verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-manufacturer-accent flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-sm text-foreground/80">Transaction reference tracking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background p-10 border-l-4 border-stockist-accent"
            >
              <Shield className="w-12 h-12 text-stockist-accent mb-6" />
              <h3 className="font-heading text-3xl text-foreground mb-4">
                Credit Terms
              </h3>
              <p className="font-paragraph text-sm text-foreground/70 mb-6 leading-relaxed">
                Credit facilities available for verified distributors with established business relationships and good payment history.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-sm text-foreground/80">For verified partners only</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-sm text-foreground/80">Flexible payment schedules</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-stockist-accent flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-sm text-foreground/80">Business documentation required</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Gateway Integration */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl text-foreground mb-8 leading-tight">
              PAYMENT GATEWAY
              <span className="text-primary block">INTEGRATION</span>
            </h2>
            
            <p className="font-paragraph text-lg text-foreground/70 mb-8 leading-relaxed">
              Our website is equipped with secure payment gateway integration, allowing you to complete transactions safely and efficiently. The gateway supports multiple payment methods and provides instant confirmation.
            </p>
            
            <div className="space-y-6">
              <div className="bg-accent-dark p-6 border-l-4 border-primary">
                <h4 className="font-heading text-xl text-secondary-foreground mb-3">Supported Payment Methods</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  Credit Cards (Visa, Mastercard, Amex), Debit Cards, UPI, Net Banking, Digital Wallets
                </p>
              </div>
              
              <div className="bg-accent-dark p-6 border-l-4 border-primary">
                <h4 className="font-heading text-xl text-secondary-foreground mb-3">Security Features</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  256-bit SSL encryption, PCI DSS compliance, Two-factor authentication, Fraud detection
                </p>
              </div>
              
              <div className="bg-accent-dark p-6 border-l-4 border-primary">
                <h4 className="font-heading text-xl text-secondary-foreground mb-3">Transaction Support</h4>
                <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                  24/7 payment processing, Instant confirmation emails, Transaction history tracking
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary p-12 text-center"
          >
            <CreditCard className="w-20 h-20 text-primary-foreground mx-auto mb-8" />
            <h3 className="font-heading text-4xl text-primary-foreground mb-6">
              SECURE CHECKOUT
            </h3>
            <p className="font-paragraph text-base text-primary-foreground/90 mb-8 leading-relaxed">
              All transactions are processed through our secure payment gateway with industry-standard encryption and fraud protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-4 py-2 bg-primary-foreground/10 border border-primary-foreground">
                <span className="font-paragraph text-xs text-primary-foreground">SSL SECURED</span>
              </div>
              <div className="px-4 py-2 bg-primary-foreground/10 border border-primary-foreground">
                <span className="font-paragraph text-xs text-primary-foreground">PCI COMPLIANT</span>
              </div>
              <div className="px-4 py-2 bg-primary-foreground/10 border border-primary-foreground">
                <span className="font-paragraph text-xs text-primary-foreground">ENCRYPTED</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Order Confirmation Process */}
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
              ORDER & PAYMENT
              <span className="text-primary block">PROCESS</span>
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
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Place Order</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Submit your product requirements through enquiry form or contact sales team
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
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Receive Invoice</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Get detailed invoice with product list, pricing, and payment instructions
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
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Make Payment</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Complete payment through gateway, bank transfer, or credit terms
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
              <h3 className="font-heading text-2xl text-secondary-foreground mb-4">Order Dispatch</h3>
              <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed">
                Receive confirmation and tracking details for your shipment
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Support */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
            PAYMENT
            <span className="text-primary block">SUPPORT</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-accent-dark p-10 text-center border-t-4 border-primary"
          >
            <Phone className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
              Phone Support
            </h3>
            <p className="font-paragraph text-sm text-secondary-foreground/70 mb-4 leading-relaxed">
              Call our payment support team for assistance
            </p>
            <p className="font-paragraph text-lg text-primary">+91 98765 43210</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-accent-dark p-10 text-center border-t-4 border-manufacturer-accent"
          >
            <FileText className="w-12 h-12 text-manufacturer-accent mx-auto mb-6" />
            <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
              Email Support
            </h3>
            <p className="font-paragraph text-sm text-secondary-foreground/70 mb-4 leading-relaxed">
              Send payment queries to our accounts team
            </p>
            <p className="font-paragraph text-lg text-manufacturer-accent">accounts@trishaagency.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-accent-dark p-10 text-center border-t-4 border-stockist-accent"
          >
            <Shield className="w-12 h-12 text-stockist-accent mx-auto mb-6" />
            <h3 className="font-heading text-2xl text-secondary-foreground mb-4">
              Secure Transactions
            </h3>
            <p className="font-paragraph text-sm text-secondary-foreground/70 mb-4 leading-relaxed">
              All payments are protected and encrypted
            </p>
            <p className="font-paragraph text-lg text-stockist-accent">100% Secure</p>
          </motion.div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
            SECURITY &<span className="text-primary block">COMPLIANCE</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {PAYMENT_CONFIG.securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-accent-dark p-8 text-center border-l-4 border-primary"
            >
              <Lock className="w-12 h-12 text-primary mx-auto mb-6" />
              <p className="font-paragraph text-lg text-secondary-foreground font-bold">{feature}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
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
              FREQUENTLY ASKED<span className="text-primary block">QUESTIONS</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-8 border-l-4 border-primary"
            >
              <h3 className="font-heading text-2xl text-foreground mb-4 flex items-center gap-3">
                <HelpCircle className="w-6 h-6 text-primary" />
                What payment methods do you accept?
              </h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                We accept online payments through secure gateways, bank transfers, UPI, digital wallets, and credit terms for verified distributors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-8 border-l-4 border-manufacturer-accent"
            >
              <h3 className="font-heading text-2xl text-foreground mb-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-manufacturer-accent" />
                How long does payment processing take?
              </h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Online payments are processed instantly. Bank transfers typically take 1-2 hours. Credit terms are processed within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background p-8 border-l-4 border-stockist-accent"
            >
              <h3 className="font-heading text-2xl text-foreground mb-4 flex items-center gap-3">
                <AlertCircle className="w-6 h-6 text-stockist-accent" />
                Is my payment information secure?
              </h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Yes, all transactions are encrypted with 256-bit SSL and comply with PCI DSS standards. We never store sensitive payment data.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background p-8 border-l-4 border-primary"
            >
              <h3 className="font-heading text-2xl text-foreground mb-4 flex items-center gap-3">
                <Download className="w-6 h-6 text-primary" />
                Can I get an invoice for my payment?
              </h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Yes, invoices are automatically generated and sent to your email after payment confirmation. You can also download them anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Payment Architecture Info */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
            FLEXIBLE PAYMENT<span className="text-primary block">ARCHITECTURE</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
            Our payment system is built to support multiple integration options, ensuring you can choose the payment solution that works best for your business.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-primary/5 p-10 border-2 border-primary"
          >
            <Zap className="w-12 h-12 text-primary mb-6" />
            <h3 className="font-heading text-2xl text-foreground mb-4">Supported Gateways</h3>
            <p className="font-paragraph text-sm text-foreground/70 mb-6 leading-relaxed">
              Ready for integration with Razorpay, PayU, Stripe, and other major payment gateways.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="font-paragraph text-sm text-foreground/80">Razorpay</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="font-paragraph text-sm text-foreground/80">PayU</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="font-paragraph text-sm text-foreground/80">Stripe</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-manufacturer-accent/5 p-10 border-2 border-manufacturer-accent"
          >
            <Shield className="w-12 h-12 text-manufacturer-accent mb-6" />
            <h3 className="font-heading text-2xl text-foreground mb-4">External Integration</h3>
            <p className="font-paragraph text-sm text-foreground/70 mb-6 leading-relaxed">
              Seamlessly connect third-party payment providers and custom gateway solutions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-manufacturer-accent" />
                <span className="font-paragraph text-sm text-foreground/80">API Ready</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-manufacturer-accent" />
                <span className="font-paragraph text-sm text-foreground/80">Webhook Support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-manufacturer-accent" />
                <span className="font-paragraph text-sm text-foreground/80">Custom Routing</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-stockist-accent/5 p-10 border-2 border-stockist-accent"
          >
            <Zap className="w-12 h-12 text-stockist-accent mb-6" />
            <h3 className="font-heading text-2xl text-foreground mb-4">Future Ready</h3>
            <p className="font-paragraph text-sm text-foreground/70 mb-6 leading-relaxed">
              Extensible architecture for emerging payment technologies and custom solutions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-stockist-accent" />
                <span className="font-paragraph text-sm text-foreground/80">Modular Design</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-stockist-accent" />
                <span className="font-paragraph text-sm text-foreground/80">Easy Upgrades</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-stockist-accent" />
                <span className="font-paragraph text-sm text-foreground/80">Scalable</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-primary py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl lg:text-6xl text-primary-foreground mb-6">
              READY TO PLACE AN ORDER?
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/90 mb-12 max-w-3xl mx-auto">
              Contact our sales team to discuss your requirements and payment options
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-secondary-foreground text-foreground font-heading text-lg flex items-center gap-3"
                >
                  CONTACT SALES
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link to="/distributor-enquiry">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-primary-foreground text-primary-foreground font-heading text-lg hover:bg-primary-foreground hover:text-primary transition-colors"
                >
                  DISTRIBUTOR ENQUIRY
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
