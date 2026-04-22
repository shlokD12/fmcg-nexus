import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Package, Filter, CheckCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService, useCurrency, formatPrice, DEFAULT_CURRENCY } from '@/integrations';
import { StockistProducts } from '@/entities';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function StockistProductsPage() {
  const [products, setProducts] = useState<StockistProducts[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const { currency } = useCurrency();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setIsLoading(true);
    const result = await BaseCrudService.getAll<StockistProducts>('stockistproducts');
    setProducts(result.items);
    setIsLoading(false);
  };

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category).filter(Boolean)))];
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

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
          <div className="inline-block px-6 py-2 bg-stockist-accent/10 border-2 border-stockist-accent mb-8">
            <span className="font-paragraph text-sm text-stockist-accent-foreground uppercase tracking-wider">
              Stockist Division
            </span>
          </div>
          
          <h1 className="font-heading text-6xl lg:text-8xl text-foreground mb-8 leading-none">
            STOCKIST
            <span className="text-stockist-accent block">PRODUCTS</span>
          </h1>
          
          <p className="font-paragraph text-xl text-foreground/70 max-w-4xl leading-relaxed">
            Premium branded FMCG products from trusted manufacturers. Pan masala, mouth fresheners, and fast-moving consumer goods available in bulk quantities.
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
                      ? 'bg-stockist-accent text-stockist-accent-foreground'
                      : 'bg-background text-foreground hover:bg-stockist-accent/10'
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
                      src={product.itemImage || 'https://static.wixstatic.com/media/92c2a1_359fca198b2e490c87730ac73eb2b116~mv2.png?originWidth=384&originHeight=384'}
                      alt={product.itemName || 'Product'}
                      width={400}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8 border-t-4 border-stockist-accent">
                    <div className="flex items-center gap-3 mb-4">
                      {product.category && (
                        <span className="inline-block px-3 py-1 bg-stockist-accent/10 font-paragraph text-xs text-stockist-accent-foreground uppercase tracking-wider">
                          {product.category}
                        </span>
                      )}
                      {product.bulkAvailability && (
                        <span className="inline-block px-3 py-1 bg-manufacturer-accent/10 font-paragraph text-xs text-manufacturer-accent uppercase tracking-wider">
                          BULK AVAILABLE
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-heading text-2xl text-secondary-foreground mb-2">
                      {product.itemName}
                    </h3>
                    
                    {product.brandName && (
                      <p className="font-paragraph text-sm text-secondary-foreground/60 mb-4">
                        Brand: {product.brandName}
                      </p>
                    )}
                    
                    {product.itemDescription && (
                      <p className="font-paragraph text-sm text-secondary-foreground/70 mb-4 leading-relaxed line-clamp-3">
                        {product.itemDescription}
                      </p>
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
                        className="w-full px-6 py-4 bg-stockist-accent text-stockist-accent-foreground font-heading text-sm flex items-center justify-center gap-3"
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

      {/* Bulk Availability */}
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
              BULK ORDER
              <span className="text-stockist-accent block">BENEFITS</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-background p-8 border-l-4 border-stockist-accent"
            >
              <CheckCircle className="w-12 h-12 text-stockist-accent mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-4">Competitive Pricing</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Volume-based discounts ensure better margins for distributors and retailers ordering in bulk quantities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-8 border-l-4 border-stockist-accent"
            >
              <CheckCircle className="w-12 h-12 text-stockist-accent mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-4">Trusted Brands</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                We stock products from established manufacturers with proven market demand and brand recognition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-background p-8 border-l-4 border-stockist-accent"
            >
              <CheckCircle className="w-12 h-12 text-stockist-accent mb-4" />
              <h3 className="font-heading text-2xl text-foreground mb-4">Immediate Availability</h3>
              <p className="font-paragraph text-sm text-foreground/70 leading-relaxed">
                Large inventory ensures quick dispatch and minimal waiting time for your orders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands We Stock */}
      <section className="w-full max-w-[100rem] mx-auto px-8 lg:px-16 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-5xl lg:text-7xl text-foreground mb-6">
            BRANDS
            <span className="text-stockist-accent block">WE STOCK</span>
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
            We maintain partnerships with leading FMCG manufacturers to ensure product authenticity and consistent supply
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['Pan Masala Brands', 'Mouth Fresheners', 'Elaichi Products', 'FMCG Brands'].map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-accent-dark p-8 text-center border-t-4 border-stockist-accent"
            >
              <Package className="w-12 h-12 text-stockist-accent mx-auto mb-4" />
              <h3 className="font-heading text-xl text-secondary-foreground">{brand}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-stockist-accent py-24">
        <div className="max-w-[100rem] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl lg:text-6xl text-stockist-accent-foreground mb-6">
              NEED BULK QUANTITIES?
            </h2>
            <p className="font-paragraph text-lg text-stockist-accent-foreground/90 mb-12 max-w-3xl mx-auto">
              Contact our team for wholesale pricing and availability
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
                  className="px-10 py-5 border-2 border-stockist-accent-foreground text-stockist-accent-foreground font-heading text-lg hover:bg-stockist-accent-foreground hover:text-stockist-accent transition-colors"
                >
                  CONTACT SALES
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
