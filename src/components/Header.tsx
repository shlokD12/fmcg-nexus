import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ShoppingCart } from 'lucide-react';
import { useRetailCart } from '@/lib/retailCart';
import { Image } from '@/components/ui/image';

const SITE_LOGO_URL = 'https://static.wixstatic.com/shapes/92c2a1_b158c75737cf4d0f9d99bfb085a8122f.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();
  const { itemCount } = useRetailCart();

  const isActive = (path: string) => location.pathname === path;
  const isProductsActive = location.pathname.startsWith('/products') || location.pathname === '/retail' || location.pathname === '/wholesale';

  return (
    <header className="w-full bg-background/95 border-b border-foreground/6 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[96rem] mx-auto px-5 lg:px-10 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <Image src={SITE_LOGO_URL} alt="Trisha Agency" className="w-11 h-11 object-contain flex-shrink-0" />
            <div>
              <h1 className="font-heading text-lg text-foreground leading-none font-bold tracking-tight">
                TRISHA
              </h1>
              <p className="font-paragraph text-[11px] text-foreground/55 tracking-[0.08em] font-medium mt-0.5">
                AGENCY
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            <Link
              to="/"
              className={`font-paragraph text-[11px] tracking-[0.04em] transition-colors font-medium ${
                isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              HOME
            </Link>

            <Link
              to="/about"
              className={`font-paragraph text-[11px] tracking-[0.04em] transition-colors font-medium ${
                isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              ABOUT
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className={`font-paragraph text-[11px] tracking-[0.04em] transition-colors flex items-center gap-1.5 font-medium ${
                  isProductsActive ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
              >
                PRODUCTS
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-1.5 w-64 bg-background border border-foreground/10 shadow-xl"
                  >
                    <Link
                      to="/products"
                      className="block px-5 py-3.5 font-paragraph text-[11px] text-foreground hover:bg-accent-dark hover:text-secondary-foreground transition-colors border-b border-foreground/10 tracking-[0.04em] font-medium"
                    >
                      CHOOSE PRODUCT CHANNEL
                    </Link>
                    <Link
                      to="/products/manufactured"
                      className="block px-5 py-3.5 font-paragraph text-[11px] text-foreground hover:bg-manufacturer-accent hover:text-manufacturer-accent-foreground transition-colors border-b border-foreground/10 tracking-[0.04em] font-medium"
                    >
                      RETAIL PRODUCTS
                    </Link>
                    <Link
                      to="/products/stockist"
                      className="block px-5 py-3.5 font-paragraph text-[11px] text-foreground hover:bg-stockist-accent hover:text-stockist-accent-foreground transition-colors border-b border-foreground/10 tracking-[0.04em] font-medium"
                    >
                      WHOLESALE PRODUCTS
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/distributor-enquiry"
              className={`font-paragraph text-[11px] tracking-[0.04em] transition-colors font-medium ${
                isActive('/distributor-enquiry') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              DISTRIBUTOR ENQUIRY
            </Link>

            <Link
              to="/payments"
              className={`font-paragraph text-[11px] tracking-[0.04em] transition-colors font-medium ${
                isActive('/payments') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              PAYMENTS
            </Link>

            <Link
              to="/contact"
              className={`font-paragraph text-[11px] tracking-[0.04em] transition-colors font-medium ${
                isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/cart" className="relative">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="w-11 h-11 border border-foreground/10 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/30 transition-colors"
              >
                <ShoppingCart className="w-4.5 h-4.5" />
              </motion.div>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>

            <Link to="/distributor-enquiry">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-5 py-2.5 bg-primary text-primary-foreground font-heading text-[11px] uppercase tracking-[0.08em] font-bold transition-all"
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-foreground relative">
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 min-w-5 h-5 px-1 bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-5 pt-5 border-t border-foreground/10"
            >
              <div className="flex flex-col gap-3.5">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className={`font-paragraph text-xs tracking-[0.04em] font-medium ${isActive('/') ? 'text-primary' : 'text-foreground'}`}>
                  HOME
                </Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`font-paragraph text-xs tracking-[0.04em] font-medium ${isActive('/about') ? 'text-primary' : 'text-foreground'}`}>
                  ABOUT
                </Link>

                <div className="pl-3.5 border-l-2 border-primary">
                  <p className="font-paragraph text-xs text-foreground/55 mb-2 tracking-[0.04em] font-medium">PRODUCTS</p>
                  <Link to="/products" onClick={() => setIsMenuOpen(false)} className="block font-paragraph text-xs tracking-[0.04em] text-foreground mb-2 font-medium">
                    CHOOSE CHANNEL
                  </Link>
                  <Link to="/products/manufactured" onClick={() => setIsMenuOpen(false)} className="block font-paragraph text-xs tracking-[0.04em] text-foreground mb-2 font-medium">
                    RETAIL PRODUCTS
                  </Link>
                  <Link to="/products/stockist" onClick={() => setIsMenuOpen(false)} className="block font-paragraph text-xs tracking-[0.04em] text-foreground mb-2 font-medium">
                    WHOLESALE PRODUCTS
                  </Link>
                  <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="block font-paragraph text-xs tracking-[0.04em] text-foreground font-medium">
                    CART {itemCount > 0 ? `(${itemCount})` : ''}
                  </Link>
                </div>

                <Link to="/distributor-enquiry" onClick={() => setIsMenuOpen(false)} className={`font-paragraph text-xs tracking-[0.04em] font-medium ${isActive('/distributor-enquiry') ? 'text-primary' : 'text-foreground'}`}>
                  DISTRIBUTOR ENQUIRY
                </Link>
                <Link to="/payments" onClick={() => setIsMenuOpen(false)} className={`font-paragraph text-xs tracking-[0.04em] font-medium ${isActive('/payments') ? 'text-primary' : 'text-foreground'}`}>
                  PAYMENTS
                </Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`font-paragraph text-xs tracking-[0.04em] font-medium ${isActive('/contact') ? 'text-primary' : 'text-foreground'}`}>
                  CONTACT
                </Link>

                <Link to="/distributor-enquiry" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full px-6 py-2.5 bg-primary text-primary-foreground font-heading text-xs uppercase tracking-[0.08em] font-bold mt-3">
                    Get Started
                  </button>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
