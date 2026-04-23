import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-accent-dark text-secondary-foreground border-t-2 border-secondary/20">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary flex items-center justify-center">
                <span className="font-heading text-2xl text-primary-foreground">T</span>
              </div>
              <div>
                <h2 className="font-heading text-2xl text-secondary-foreground leading-none">
                  TRISHA
                </h2>
                <p className="font-paragraph text-xs text-secondary-foreground/60 tracking-wider">
                  AGENCY
                </p>
              </div>
            </div>
            <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed mb-6">
              Leading manufacturer and stockist of FMCG and mouth-freshener products across India.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-manufacturer-accent/10 border border-manufacturer-accent flex items-center justify-center">
                <span className="font-paragraph text-xs text-manufacturer-accent">MFG</span>
              </div>
              <span className="font-paragraph text-xs text-secondary-foreground/70">Manufacturing Division</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-stockist-accent/10 border border-stockist-accent flex items-center justify-center">
                <span className="font-paragraph text-xs text-stockist-accent-foreground">STK</span>
              </div>
              <span className="font-paragraph text-xs text-secondary-foreground/70">Stockist Division</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl text-secondary-foreground mb-6 border-b-2 border-primary pb-2 inline-block">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Wholesale
                </Link>
              </li>
              <li>
                <Link to="/retail" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Retail
                </Link>
              </li>
              <li>
                <Link to="/distributor-enquiry" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Distributor Enquiry
                </Link>
              </li>
              <li>
                <Link to="/payments" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Payments
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-heading text-xl text-secondary-foreground mb-6 border-b-2 border-primary pb-2 inline-block">
              PRODUCTS
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/manufactured" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-manufacturer-accent transition-colors">
                  Manufactured Products
                </Link>
              </li>
              <li>
                <Link to="/products/stockist" className="font-paragraph text-sm text-secondary-foreground/70 hover:text-stockist-accent transition-colors">
                  Stockist Products
                </Link>
              </li>
              <li>
                <span className="font-paragraph text-sm text-secondary-foreground/70">Herbal Tobacco</span>
              </li>
              <li>
                <span className="font-paragraph text-sm text-secondary-foreground/70">Sweet Supari</span>
              </li>
              <li>
                <span className="font-paragraph text-sm text-secondary-foreground/70">Pan Masala</span>
              </li>
              <li>
                <span className="font-paragraph text-sm text-secondary-foreground/70">Mouth Fresheners</span>
              </li>
              <li>
                <span className="font-paragraph text-sm text-secondary-foreground/70">FMCG Products</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-xl text-secondary-foreground mb-6 border-b-2 border-primary pb-2 inline-block">
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-paragraph text-sm text-secondary-foreground/70">+91 98765 43210</p>
                  <p className="font-paragraph text-sm text-secondary-foreground/70">+91 98765 43211</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-paragraph text-sm text-secondary-foreground/70">sales@trishaagency.com</p>
                  <p className="font-paragraph text-sm text-secondary-foreground/70">info@trishaagency.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <p className="font-paragraph text-sm text-secondary-foreground/70">
                  Industrial Area, Phase 2<br />
                  Mumbai, Maharashtra 400001<br />
                  India
                </p>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-paragraph text-sm text-secondary-foreground/70">Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="font-paragraph text-sm text-secondary-foreground/70">Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-secondary-foreground/60">
              © 2026 Trisha Agency. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/contact" className="font-paragraph text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="font-paragraph text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
