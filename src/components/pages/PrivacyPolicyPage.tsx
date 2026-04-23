import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const POLICY_SECTIONS = [
  {
    title: 'Information We Collect',
    body:
      'We collect the details required to process retail purchases, wholesale enquiries, payment confirmations, and customer support requests. This may include name, phone number, email address, business details, delivery information, and order history.',
  },
  {
    title: 'How We Use Your Data',
    body:
      'Your information is used to respond to enquiries, process orders, coordinate dispatch, share invoices and payment instructions, and maintain account records for repeat business and compliance requirements.',
  },
  {
    title: 'Payments & Security',
    body:
      'Payment-related data is handled through secure payment systems and operational workflows. Trisha Agency does not intentionally expose sensitive payment details publicly and uses commercial safeguards appropriate to the website and business process.',
  },
  {
    title: 'Sharing With Service Providers',
    body:
      'Operational information may be shared with payment processors, logistics partners, communication providers, and internal business tools where necessary to complete orders, customer support, or statutory compliance.',
  },
  {
    title: 'Retention & Contact',
    body:
      'We retain business and transaction records for operational, accounting, and compliance purposes. For privacy-related questions, customers may contact Trisha Agency through the contact details listed on the website.',
  },
];

export default function PrivacyPolicyPage() {
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
            PRIVACY
            <span className="text-primary block">POLICY</span>
          </h1>
          <p className="font-paragraph text-lg text-foreground/70 max-w-4xl leading-relaxed font-medium">
            This policy explains how Trisha Agency handles customer, distributor, and payment-related information across retail and wholesale interactions on the website.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-16">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <div className="grid gap-6">
            {POLICY_SECTIONS.map((section, index) => (
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
