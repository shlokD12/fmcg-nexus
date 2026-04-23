import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ShoppingCart } from 'lucide-react';
import { useRetailCart } from '@/lib/retailCart';
import { Image } from '@/components/ui/image';

const SITE_LOGO_URL = 'https://static.wixstatic.com/shapes/92c2a1_b158c75737cf4d0f9d99bfb085a8122f.svg';

export default function Footer() {
  const { itemCount } = useRetailCart();

  return (
    <footer className="w-full bg-accent-dark text-secondary-foreground border-t border-secondary/15">
      <div className="max-w-[96rem] mx-auto px-4 sm:px-5 lg:px-10 py-10 sm:py-12 lg:py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <Image src={SITE_LOGO_URL} alt="Trisha Agency" className="w-10 h-10 sm:w-11 sm:h-11 object-contain flex-shrink-0" />
              <div>
                <h2 className="font-heading text-base sm:text-lg text-secondary-foreground leading-none font-bold tracking-tight">
                  TRISHA
                </h2>
                <p className="font-paragraph text-[11px] text-secondary-foreground/55 tracking-[0.08em] font-medium mt-0.5">
                  AGENCY
                </p>
              </div>
            </div>
            <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed mb-6">
              Manufacturer of in-house herbal tobacco and sweet supari, and stockist supplier of branded pan masala and elaichi lines for distributors across India.
            </p>
            <div className="flex items-start gap-2 mb-3">
              <div className="w-8 h-8 bg-manufacturer-accent/10 border border-manufacturer-accent flex items-center justify-center">
                <span className="font-paragraph text-xs text-manufacturer-accent font-medium">RTL</span>
              </div>
              <span className="font-paragraph text-xs text-secondary-foreground/70 font-medium">Retail: in-house manufactured products</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 bg-stockist-accent/10 border border-stockist-accent flex items-center justify-center">
                <span className="font-paragraph text-xs text-stockist-accent-foreground font-medium">WHL</span>
              </div>
              <span className="font-paragraph text-xs text-secondary-foreground/70 font-medium">Wholesale: stockist supply for distributors</span>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-lg text-secondary-foreground mb-6 border-b border-primary pb-2 inline-block font-bold tracking-tight">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5">
              <li><Link to="/" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">Home</Link></li>
              <li><Link to="/about" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">About Us</Link></li>
              <li><Link to="/products" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">Choose Product Channel</Link></li>
              <li><Link to="/products/manufactured" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">Retail Products</Link></li>
              <li><Link to="/products/stockist" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">Wholesale Products</Link></li>
              <li><Link to="/distributor-enquiry" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">Distributor Enquiry</Link></li>
              <li><Link to="/payments" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">Payments</Link></li>
              <li><Link to="/contact" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg text-secondary-foreground mb-6 border-b border-primary pb-2 inline-block font-bold tracking-tight">
              RETAIL & WHOLESALE
            </h3>
            <ul className="space-y-2.5">
              <li><span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Retail: Herbal Tobacco</span></li>
              <li><span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Retail: Sweet Supari</span></li>
              <li><span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Wholesale: Rajnigandha</span></li>
              <li><span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Wholesale: Pan Vilas</span></li>
              <li><span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Wholesale: Vimal</span></li>
              <li><span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Wholesale: Silver Pearls & Elaichi</span></li>
              <li>
                <Link to="/cart" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium inline-flex items-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Retail Cart {itemCount > 0 ? `(${itemCount})` : ''}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-lg text-secondary-foreground mb-6 border-b border-primary pb-2 inline-block font-bold tracking-tight">
              CONTACT
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <Phone className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-paragraph text-sm text-secondary-foreground/70 font-medium">+91 98765 43210</p>
                  <p className="font-paragraph text-sm text-secondary-foreground/70 font-medium">+91 98765 43211</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-paragraph text-sm text-secondary-foreground/70 font-medium">sales@trishaagency.com</p>
                  <p className="font-paragraph text-sm text-secondary-foreground/70 font-medium">accounts@trishaagency.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                <p className="font-paragraph text-sm text-secondary-foreground/70 font-medium">
                  Industrial Area, Phase 2<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="font-paragraph text-xs text-secondary-foreground/60 font-medium">
              Copyright 2026 Trisha Agency. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 sm:gap-8">
              <Link to="/privacy-policy" className="font-paragraph text-xs text-secondary-foreground/60 hover:text-primary transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="font-paragraph text-xs text-secondary-foreground/60 hover:text-primary transition-colors font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
