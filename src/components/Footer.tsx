import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-accent-dark text-secondary-foreground border-t border-secondary/15">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-14 mb-14">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-11 h-11 bg-primary flex items-center justify-center">
                <span className="font-heading text-lg text-primary-foreground font-bold">T</span>
              </div>
              <div>
                <h2 className="font-heading text-base text-secondary-foreground leading-tight font-bold tracking-tight">
                  TRISHA
                </h2>
                <p className="font-paragraph text-xs text-secondary-foreground/55 tracking-[0.08em] font-medium">
                  AGENCY
                </p>
              </div>
            </div>
            <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed mb-6">
              Leading manufacturer and stockist of FMCG and mouth-freshener products across India.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-manufacturer-accent/10 border border-manufacturer-accent flex items-center justify-center">
                <span className="font-paragraph text-xs text-manufacturer-accent font-medium">MFG</span>
              </div>
              <span className="font-paragraph text-xs text-secondary-foreground/70 font-medium">Manufacturing Division</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-stockist-accent/10 border border-stockist-accent flex items-center justify-center">
                <span className="font-paragraph text-xs text-stockist-accent-foreground font-medium">STK</span>
              </div>
              <span className="font-paragraph text-xs text-secondary-foreground/70 font-medium">Stockist Division</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-secondary-foreground mb-6 border-b border-primary pb-2 inline-block font-bold tracking-tight">
              QUICK LINKS
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">
                  Wholesale
                </Link>
              </li>
              <li>
                <Link to="/retail" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">
                  Retail
                </Link>
              </li>
              <li>
                <Link to="/distributor-enquiry" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">
                  Distributor Enquiry
                </Link>
              </li>
              <li>
                <Link to="/payments" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">
                  Payments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading text-lg text-secondary-foreground mb-6 border-b border-primary pb-2 inline-block font-bold tracking-tight">
              PRODUCTS
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link to="/products/manufactured" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-manufacturer-accent transition-colors font-medium">
                  Manufactured Products
                </Link>
              </li>
              <li>
                <Link to="/products/stockist" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-stockist-accent transition-colors font-medium">
                  Stockist Products
                </Link>
              </li>
              <li>
                <span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Herbal Tobacco</span>
              </li>
              <li>
                <span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Sweet Supari</span>
              </li>
              <li>
                <span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Pan Masala</span>
              </li>
              <li>
                <span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">Mouth Fresheners</span>
              </li>
              <li>
                <span className="font-paragraph text-sm text-secondary-foreground/70 font-medium">FMCG Products</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
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
                  <p className="font-paragraph text-sm text-secondary-foreground/70 font-medium">info@trishaagency.com</p>
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

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-xs text-secondary-foreground/60 font-medium">
              © 2026 Trisha Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <Link to="/contact" className="font-paragraph text-xs text-secondary-foreground/60 hover:text-primary transition-colors font-medium">
                Privacy Policy
              </Link>
              <Link to="/contact" className="font-paragraph text-xs text-secondary-foreground/60 hover:text-primary transition-colors font-medium">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
