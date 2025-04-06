
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductProps } from "@/components/product/ProductCard";
import { Check, ChevronLeft, Info, Minus, Plus, ShoppingCart, Star, Truck } from "lucide-react";
import ProductGrid from "@/components/product/ProductGrid";

// Sample product data - would come from an API in a real app
const products: ProductProps[] = [
  {
    id: "1",
    name: "Tractor Engine Air Filter",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1620716571877-f1bf5b892b9f?auto=format&fit=crop&w=500&h=300",
    category: "Tractor Parts",
    inStock: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Car Brake Pads Set",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1497491249088-11e2d137b3f9?auto=format&fit=crop&w=500&h=300",
    category: "Car Parts",
    inStock: true,
    isFeatured: true
  }
];

// Sample related products
const relatedProducts: ProductProps[] = [
  {
    id: "3",
    name: "Hydraulic Oil Filter",
    price: 18.95,
    image: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?auto=format&fit=crop&w=500&h=300",
    category: "Machinery Parts",
    inStock: true
  },
  {
    id: "4",
    name: "Premium Fuel Filter",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1619725557513-9e353609f20b?auto=format&fit=crop&w=500&h=300",
    category: "Car Parts",
    inStock: true
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product based on the ID from the URL
  const product = products.find(p => p.id === id);
  
  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <p className="mb-8">Sorry, we couldn't find the product you're looking for.</p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-6">
            <Link to="/products" className="text-agro-green flex items-center hover:underline">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Products
            </Link>
          </div>
          
          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white rounded-lg overflow-hidden border">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-2 text-agro-brown font-medium">
                {product.category}
              </div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating (static for demo) */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5" />
                </div>
                <span className="ml-2 text-gray-600">(4.0) 24 reviews</span>
              </div>
              
              {/* Price */}
              <div className="text-3xl font-bold mb-6">
                €{product.price.toFixed(2)}
              </div>
              
              {/* Stock Status */}
              {product.inStock ? (
                <div className="flex items-center text-green-600 mb-6">
                  <Check className="h-5 w-5 mr-1" />
                  <span>In Stock</span>
                </div>
              ) : (
                <div className="text-gray-500 mb-6">Out of Stock</div>
              )}
              
              {/* Short Description */}
              <p className="text-gray-600 mb-6">
                High-quality {product.name.toLowerCase()} designed for optimal performance and durability.
                Compatible with most models and built to meet or exceed OEM specifications.
              </p>
              
              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="mr-4 font-medium">Quantity:</span>
                <div className="flex items-center border rounded-md">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={decrementQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={incrementQuantity}
                    className="h-10 w-10"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="flex-1 bg-agro-green hover:bg-agro-green/90"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" /> 
                  Add to Cart
                </Button>
              </div>
              
              {/* Shipping Info */}
              <div className="bg-agro-lightgray p-4 rounded-lg">
                <div className="flex items-start mb-2">
                  <Truck className="h-5 w-5 mr-2 mt-0.5 text-agro-green" />
                  <div>
                    <p className="font-medium">Free shipping</p>
                    <p className="text-sm text-gray-600">For orders over €100</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Info className="h-5 w-5 mr-2 mt-0.5 text-agro-green" />
                  <div>
                    <p className="font-medium">Returns</p>
                    <p className="text-sm text-gray-600">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <Tabs defaultValue="description" className="mb-12">
            <TabsList className="w-full border-b justify-start rounded-none">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p className="mb-4">
                This high-quality {product.name.toLowerCase()} is designed to provide reliable performance
                and extended service life. Manufactured using premium materials to ensure optimal
                functionality under various operating conditions.
              </p>
              <p>
                Whether you're a professional mechanic or a DIY enthusiast, this component
                offers easy installation and superior performance. Compatible with a wide range
                of models and built to meet or exceed OEM specifications.
              </p>
            </TabsContent>
            <TabsContent value="specifications" className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Product Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-agro-lightgray p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Dimensions</h4>
                  <p className="text-gray-600">6.5" x 4.2" x 2.1"</p>
                </div>
                <div className="bg-agro-lightgray p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Weight</h4>
                  <p className="text-gray-600">0.8 kg</p>
                </div>
                <div className="bg-agro-lightgray p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Material</h4>
                  <p className="text-gray-600">High-grade polymer with reinforced steel</p>
                </div>
                <div className="bg-agro-lightgray p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Compatibility</h4>
                  <p className="text-gray-600">Most major brands and models</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4" />
                  </div>
                  <span className="ml-2 font-medium">Great product!</span>
                </div>
                <p className="text-gray-600 text-sm">By John D. on March 15, 2024</p>
                <p className="mt-2">
                  This part was exactly what I needed. Perfect fit and works great. Fast shipping too!
                </p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                  <span className="ml-2 font-medium">Excellent quality</span>
                </div>
                <p className="text-gray-600 text-sm">By Maria K. on February 28, 2024</p>
                <p className="mt-2">
                  High quality part, much better than the original one that came with my tractor.
                  Would definitely buy from this store again.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Related Products */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
