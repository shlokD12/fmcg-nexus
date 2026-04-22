import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Filter } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService, useCurrency, formatPrice, DEFAULT_CURRENCY } from '@/integrations';
import { ManufacturedProducts } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function ManufacturedProductsPage() {
  const [products, setProducts] = useState<ManufacturedProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { currency } = useCurrency();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setIsLoading(true);
    const result = await BaseCrudService.getAll<ManufacturedProducts>('manufacturedproducts');
    setProducts(result.items);
    setIsLoading(false);
  };

  const categories = ['all', ...Array.from(new Set(products.map(p => p.productCategory).filter(Boolean)))];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.productCategory === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-6 py-2 bg-manufacturer-accent/10 border-2 border-manufacturer-accent mb-8">
            <span className="font-paragraph text-sm text-manufacturer-accent uppercase tracking-wider">
              Manufacturing Division
            </span>
          </div>
          
          <h1 className="font-heading text-6xl lg:text-8xl text-foreground mb-8 leading-none">
            MANUFACTURED
            <span className="text-manufacturer-accent block">PRODUCTS</span>
          </h1>
          
          <p className="font-paragraph text-xl text-foreground/70 max-w-4xl leading-relaxed">
            Premium quality in-house manufactured FMCG products including herbal tobacco without nicotine and sweet supari, crafted with strict quality control.
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="w-full bg-accent-dark py-8">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-secondary-foreground" />
              <span className="font-paragraph text-sm text-secondary-foreground">FILTER BY CATEGORY:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 font-paragraph text-sm uppercase tracking-wider transition-colors ${
                    selectedCategory === category
                      ? 'bg-manufacturer-accent text-manufacturer-accent-foreground'
                      : 'bg-background text-foreground hover:bg-manufacturer-accent/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <div className="min-h-[600px]">
          {isLoading ? (
            <div className="flex items-center justify-center py-24">
              <LoadingSpinner />
            </div>
          ) : filteredProducts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-accent-dark group"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.itemImage || 'https://static.wixstatic.com/media/92c2a1_851977b1766c4a9ca0b9dd4ec9a3bfc5~mv2.png?originWidth=384&originHeight=384'}
                      alt={product.itemName || 'Product'}
                      width={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8 border-t-4 border-manufacturer-accent">
                    {product.productCategory && (
                      <span className="inline-block px-3 py-1 bg-manufacturer-accent/10 font-paragraph text-xs text-manufacturer-accent uppercase tracking-wider mb-4">
                        {product.productCategory}
                      </span>
                    )}
                    
                    <h3 className="font-heading text-2xl text-secondary-foreground mb-3">
                      {product.itemName}
                    </h3>
                    
                    {product.itemDescription && (
                      <p className="font-paragraph text-sm text-secondary-foreground/70 mb-4 leading-relaxed line-clamp-3">
                        {product.itemDescription}
                      </p>
                    )}
                    
                    {product.qualityHighlights && (
                      <div className="mb-4">
                        <p className="font-paragraph text-xs text-manufacturer-accent uppercase tracking-wider mb-2">
                          Quality Highlights:
                        </p>
                        <p className="font-paragraph text-sm text-secondary-foreground/70 leading-relaxed line-clamp-2">
                          {product.qualityHighlights}
                        </p>
                      </div>
                    )}
                    
                    {product.itemPrice !== undefined && (
                      <div className="mb-6">
                        <span className="font-heading text-3xl text-secondary-foreground">
                          {formatPrice(product.itemPrice, currency ?? DEFAULT_CURRENCY)}
                        </span>
                        <span className="font-paragraph text-sm text-secondary-foreground/60 ml-2">per unit</span>
                      </div>
                    )}
                    
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full px-6 py-4 bg-manufacturer-accent text-manufacturer-accent-foreground font-heading text-sm flex items-center justify-center gap-3"
                      >
                        ENQUIRE NOW
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-24">
              <Package className="w-16 h-16 text-foreground/20 mx-auto mb-6" />
              <h3 className="font-heading text-3xl text-foreground mb-4">No Products Found</h3>
              <p className="font-paragraph text-base text-foreground/70">
                No products available in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance */}
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
              QUALITY
              <span className="text-manufacturer-accent block">ASSURANCE</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-8 border-l-4 border-manufacturer-accent"
            >
              <h3 className="font-heading text-2xl text-foreground mb-4">Strict Quality Control</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Every batch undergoes rigorous testing to ensure consistent quality and compliance with industry standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-8 border-l-4 border-manufacturer-accent"
            >
              <h3 className="font-heading text-2xl text-foreground mb-4">Premium Ingredients</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                We source the finest raw materials to ensure superior taste, aroma, and product consistency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background p-8 border-l-4 border-manufacturer-accent"
            >
              <h3 className="font-heading text-2xl text-foreground mb-4">Certified Manufacturing</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Our facility maintains all necessary certifications and follows best practices in manufacturing.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-manufacturer-accent p-16 lg:p-24 text-center"
        >
          <h2 className="font-heading text-4xl lg:text-6xl text-manufacturer-accent-foreground mb-6">
            INTERESTED IN BULK ORDERS?
          </h2>
          <p className="font-paragraph text-lg text-manufacturer-accent-foreground/90 mb-12 max-w-3xl mx-auto">
            Contact our sales team for wholesale pricing and custom manufacturing options
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/wholesale">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-foreground text-background font-heading text-lg flex items-center gap-3"
              >
                WHOLESALE ENQUIRY
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 border-2 border-manufacturer-accent-foreground text-manufacturer-accent-foreground font-heading text-lg hover:bg-manufacturer-accent-foreground hover:text-manufacturer-accent transition-colors"
              >
                CONTACT SALES
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
