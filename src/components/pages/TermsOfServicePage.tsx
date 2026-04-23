import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TERMS_SECTIONS = [
  {
    title: 'Retail Orders',
    body:
      'Retail purchases on the website are intended for smaller-quantity buying of Trisha Agency manufactured products. Pricing, availability, and dispatch timing are subject to confirmation at the time of order processing.',
  },
  {
    title: 'Wholesale Enquiries',
    body:
      'Wholesale catalog listings are indicative and intended for distributor and trade-channel enquiries. Final commercial terms, stock availability, transport scope, and payment conditions are confirmed through quotation and order acceptance.',
  },
  {
    title: 'Pricing & Payments',
    body:
      'All displayed prices, payment routes, and invoicing information may be revised for operational, market, or logistical reasons. Payments must be completed through approved business channels before dispatch, unless separate credit terms are agreed in writing.',
  },
  {
    title: 'Intellectual Property & Content',
    body:
      'Website branding, content, product presentation, and associated materials remain the property of Trisha Agency or their respective brand owners where applicable. Brand references in the wholesale section are used for legitimate product identification and trade communication.',
  },
  {
    title: 'Liability & Contact',
    body:
      'Trisha Agency aims to maintain accurate information but does not guarantee uninterrupted availability of every product, route, or payment method. For any contractual or operational clarification, customers should contact the company directly before placing high-value or distributor-scale orders.',
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-14">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-block px-5 py-1.5 bg-primary/10 border border-primary mb-6">
            <span className="font-paragraph text-xs text-primary uppercase tracking-[0.04em] font-medium">
              Legal
            </span>
          </div>
          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            TERMS OF
            <span className="text-primary block">SERVICE</span>
          </h1>
          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed font-medium">
            These terms outline the commercial use of Trisha Agency&apos;s website for retail purchases, wholesale enquiries, payment handling, and related customer interactions.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-16">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <div className="grid gap-6">
            {TERMS_SECTIONS.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="bg-background p-8 lg:p-10 border-l-4 border-primary"
              >
                <h2 className="font-heading text-3xl text-foreground mb-4 font-black">{section.title}</h2>
                <p className="font-paragraph text-base text-foreground/75 leading-relaxed">{section.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
