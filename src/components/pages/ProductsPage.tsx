import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, Truck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { PRODUCT_CHANNELS } from '@/lib/productCatalog';

const CHANNEL_ICONS = {
  retail: Factory,
  wholesale: Truck,
} as const;

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="w-full max-w-[96rem] mx-auto px-5 lg:px-10 py-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="inline-block px-5 py-1.5 bg-primary/10 border border-primary mb-6">
            <span className="font-paragraph text-xs text-primary uppercase tracking-[0.04em] font-medium">
              Product Selection
            </span>
          </div>

          <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-6 leading-tight font-black">
            CHOOSE YOUR
            <span className="text-primary block">PRODUCT CHANNEL</span>
          </h1>

          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
            Trisha Agency handles products through two separate channels: in-house retail products and wholesale stockist supply for distributors. Choose the channel that matches your buying requirement.
          </p>
        </motion.div>
      </section>

      <section className="w-full bg-accent-dark py-20">
        <div className="max-w-[96rem] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-8">
            {PRODUCT_CHANNELS.map((channel, index) => {
              const Icon = CHANNEL_ICONS[channel.id];
              const isRetail = channel.id === 'retail';
              const borderClass = isRetail ? 'border-manufacturer-accent' : 'border-stockist-accent';
              const iconWrapClass = isRetail
                ? 'bg-manufacturer-accent/10 border-manufacturer-accent'
                : 'bg-stockist-accent/10 border-stockist-accent';
              const iconClass = isRetail ? 'text-manufacturer-accent' : 'text-stockist-accent';
              const eyebrowClass = isRetail ? 'text-manufacturer-accent' : 'text-stockist-accent';
              const buttonClass = isRetail
                ? 'bg-manufacturer-accent text-manufacturer-accent-foreground'
                : 'bg-stockist-accent text-stockist-accent-foreground';

              return (
                <motion.div
                  key={channel.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-background border-t-4 ${borderClass} p-10 lg:p-12`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 border flex items-center justify-center ${iconWrapClass}`}>
                      <Icon className={`w-8 h-8 ${iconClass}`} />
                    </div>
                    <div>
                      <p className={`font-paragraph text-xs uppercase tracking-[0.08em] font-semibold ${eyebrowClass}`}>
                        {channel.subtitle}
                      </p>
                      <h2 className="font-heading text-3xl text-foreground font-black">
                        {channel.title}
                      </h2>
                    </div>
                  </div>

                  <p className="font-paragraph text-base text-foreground/70 leading-relaxed mb-8">
                    {channel.description}
                  </p>

                  <Link to={channel.link}>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`px-8 py-4 font-heading text-sm uppercase tracking-[0.08em] flex items-center gap-2.5 font-bold ${buttonClass}`}
                    >
                      Open {channel.title}
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
