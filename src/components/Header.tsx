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
    <header className="w-full bg-background border-b-2 border-foreground/8 sticky top-0 z-50 backdrop-blur-md shadow-sm">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary flex items-center justify-center">
              <span className="font-heading text-2xl text-primary-foreground">T</span>
            </div>
            <div>
              <h1 className="font-heading text-2xl text-foreground leading-none">
                TRISHA
              </h1>
              <p className="font-paragraph text-xs text-foreground/60 tracking-wider">
                AGENCY
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-paragraph text-sm tracking-wider transition-colors ${
                isActive('/') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              HOME
            </Link>
            
            <Link
              to="/about"
              className={`font-paragraph text-sm tracking-wider transition-colors ${
                isActive('/about') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              ABOUT
            </Link>
            
            <Link
              to="/wholesale"
              className={`font-paragraph text-sm tracking-wider transition-colors ${
                isActive('/wholesale') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              WHOLESALE
            </Link>
            
            <Link
              to="/retail"
              className={`font-paragraph text-sm tracking-wider transition-colors ${
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
              <button className="font-paragraph text-sm tracking-wider text-foreground hover:text-primary transition-colors flex items-center gap-1">
                PRODUCTS
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-background border-2 border-foreground/10 shadow-xl"
                  >
                    <Link
                      to="/products/manufactured"
                      className="block px-6 py-4 font-paragraph text-sm text-foreground hover:bg-manufacturer-accent hover:text-manufacturer-accent-foreground transition-colors border-b border-foreground/10"
                    >
                      MANUFACTURED PRODUCTS
                    </Link>
                    <Link
                      to="/products/stockist"
                      className="block px-6 py-4 font-paragraph text-sm text-foreground hover:bg-stockist-accent hover:text-stockist-accent-foreground transition-colors"
                    >
                      STOCKIST PRODUCTS
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              to="/distributor-enquiry"
              className={`font-paragraph text-sm tracking-wider transition-colors ${
                isActive('/distributor-enquiry') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              DISTRIBUTOR ENQUIRY
            </Link>
            
            <Link
              to="/payments"
              className={`font-paragraph text-sm tracking-wider transition-colors ${
                isActive('/payments') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              PAYMENTS
            </Link>
            
            <Link
              to="/contact"
              className={`font-paragraph text-sm tracking-wider transition-colors ${
                isActive('/contact') ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              CONTACT
            </Link>
          </nav>

          {/* CTA Button */}
          <Link to="/distributor-enquiry" className="hidden lg:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 bg-primary text-primary-foreground font-heading text-xs uppercase tracking-widest font-bold shadow-md hover:shadow-lg transition-shadow"
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="lg:hidden mt-6 pt-6 border-t border-foreground/10"
            >
              <div className="flex flex-col gap-4">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-sm tracking-wider ${
                    isActive('/') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  HOME
                </Link>
                
                <Link
                  to="/about"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-sm tracking-wider ${
                    isActive('/about') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  ABOUT
                </Link>
                
                <Link
                  to="/wholesale"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-sm tracking-wider ${
                    isActive('/wholesale') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  WHOLESALE
                </Link>
                
                <Link
                  to="/retail"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-sm tracking-wider ${
                    isActive('/retail') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  RETAIL
                </Link>

                <div className="pl-4 border-l-2 border-primary">
                  <p className="font-paragraph text-xs text-foreground/60 mb-2 tracking-wider">PRODUCTS</p>
                  <Link
                    to="/products/manufactured"
                    onClick={() => setIsMenuOpen(false)}
                    className="block font-paragraph text-sm tracking-wider text-foreground mb-2"
                  >
                    MANUFACTURED PRODUCTS
                  </Link>
                  <Link
                    to="/products/stockist"
                    onClick={() => setIsMenuOpen(false)}
                    className="block font-paragraph text-sm tracking-wider text-foreground"
                  >
                    STOCKIST PRODUCTS
                  </Link>
                </div>
                
                <Link
                  to="/distributor-enquiry"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-sm tracking-wider ${
                    isActive('/distributor-enquiry') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  DISTRIBUTOR ENQUIRY
                </Link>
                
                <Link
                  to="/payments"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-sm tracking-wider ${
                    isActive('/payments') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  PAYMENTS
                </Link>
                
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-paragraph text-sm tracking-wider ${
                    isActive('/contact') ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  CONTACT
                </Link>

                <Link to="/distributor-enquiry" onClick={() => setIsMenuOpen(false)}>
                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground font-heading text-xs uppercase tracking-widest font-bold mt-4">
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
