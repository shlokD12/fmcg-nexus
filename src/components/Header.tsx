import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-background border-b border-foreground/6 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-11 h-11 bg-primary flex items-center justify-center">
              <span className="font-heading text-lg text-primary-foreground font-bold">T</span>
            </div>
            <div>
              <h1 className="font-heading text-base text-foreground leading-tight font-bold tracking-tight">
                TRISHA
              </h1>
              <p className="font-paragraph text-xs text-foreground/55 tracking-[0.08em] font-medium">
                AGENCY
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <Link
              to="/"
              className={`font-paragraph text-xs tracking-[0.08em] transition-colors font-medium ${
                isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              HOME
            </Link>
            
            <Link
              to="/about"
              className={`font-paragraph text-xs tracking-[0.08em] transition-colors font-medium ${
                isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              ABOUT
            </Link>
            
            <Link
              to="/wholesale"
              className={`font-paragraph text-xs tracking-[0.08em] transition-colors font-medium ${
                isActive('/wholesale') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              WHOLESALE
            </Link>
            
            <Link
              to="/retail"
              className={`font-paragraph text-xs tracking-[0.08em] transition-colors font-medium ${
                isActive('/retail') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              RETAIL
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="font-paragraph text-xs tracking-[0.08em] text-foreground hover:text-primary transition-colors flex items-center gap-1.5 font-medium">
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
                    className="absolute top-full left-0 mt-1.5 w-56 bg-background border border-foreground/10"
                  >
                    <Link
                      to="/products/manufactured"
                      className="block px-5 py-3.5 font-paragraph text-xs text-foreground hover:bg-manufacturer-accent hover:text-manufacturer-accent-foreground transition-colors border-b border-foreground/10 tracking-[0.08em] font-medium"
                    >
                      MANUFACTURED PRODUCTS
                    </Link>
                    <Link
                      to="/products/stockist"
                      className="block px-5 py-3.5 font-paragraph text-xs text-foreground hover:bg-stockist-accent hover:text-stockist-accent-foreground transition-colors tracking-[0.08em] font-medium"
                    >
                      STOCKIST PRODUCTS
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              to="/distributor-enquiry"
              className={`font-paragraph text-xs tracking-[0.08em] transition-colors font-medium ${
                isActive('/distributor-enquiry') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              DISTRIBUTOR ENQUIRY
            </Link>
            
            <Link
              to="/payments"
              className={`font-paragraph text-xs tracking-[0.08em] transition-colors font-medium ${
                isActive('/payments') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              PAYMENTS
            </Link>
            
            <Link
              to="/contact"
              className={`font-paragraph text-xs tracking-[0.08em] transition-colors font-medium ${
                isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* CTA Button */}
          <Link to="/distributor-enquiry" className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-2.5 bg-primary text-primary-foreground font-heading text-xs uppercase tracking-[0.12em] font-bold transition-all"
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
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
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-xs tracking-[0.08em] font-medium ${
                    isActive('/') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  HOME
                </Link>
                
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-xs tracking-[0.08em] font-medium ${
                    isActive('/about') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  ABOUT
                </Link>
                
                <Link
                  to="/wholesale"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-xs tracking-[0.08em] font-medium ${
                    isActive('/wholesale') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  WHOLESALE
                </Link>
                
                <Link
                  to="/retail"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-xs tracking-[0.08em] font-medium ${
                    isActive('/retail') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  RETAIL
                </Link>

                <div className="pl-3.5 border-l-2 border-primary">
                  <p className="font-paragraph text-xs text-foreground/55 mb-2 tracking-[0.08em] font-medium">PRODUCTS</p>
                  <Link
                    to="/products/manufactured"
                    onClick={() => setIsMenuOpen(false)}
                    className="block font-paragraph text-xs tracking-[0.08em] text-foreground mb-2 font-medium"
                  >
                    MANUFACTURED PRODUCTS
                  </Link>
                  <Link
                    to="/products/stockist"
                    onClick={() => setIsMenuOpen(false)}
                    className="block font-paragraph text-xs tracking-[0.08em] text-foreground font-medium"
                  >
                    STOCKIST PRODUCTS
                  </Link>
                </div>
                
                <Link
                  to="/distributor-enquiry"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-xs tracking-[0.08em] font-medium ${
                    isActive('/distributor-enquiry') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  DISTRIBUTOR ENQUIRY
                </Link>
                
                <Link
                  to="/payments"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-xs tracking-[0.08em] font-medium ${
                    isActive('/payments') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  PAYMENTS
                </Link>
                
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-xs tracking-[0.08em] font-medium ${
                    isActive('/contact') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  CONTACT
                </Link>

                <Link to="/distributor-enquiry" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full px-6 py-2.5 bg-primary text-primary-foreground font-heading text-xs uppercase tracking-[0.12em] font-bold mt-3">
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
