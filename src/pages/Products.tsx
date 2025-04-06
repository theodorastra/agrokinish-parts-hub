
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductGrid from "@/components/product/ProductGrid";
import { ProductProps } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Check, ChevronDown, Filter, SlidersHorizontal } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Sample product data
const allProducts: ProductProps[] = [
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
  },
  {
    id: "3",
    name: "Hydraulic Oil Filter",
    price: 18.95,
    image: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?auto=format&fit=crop&w=500&h=300",
    category: "Machinery Parts",
    inStock: true,
    isFeatured: true
  },
  {
    id: "4",
    name: "Premium Fuel Filter",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1619725557513-9e353609f20b?auto=format&fit=crop&w=500&h=300",
    category: "Car Parts",
    inStock: false,
    isFeatured: true,
    isNew: true
  },
  {
    id: "5",
    name: "Tractor Hydraulic Pump",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1620716571877-f1bf5b892b9f?auto=format&fit=crop&w=500&h=300",
    category: "Tractor Parts",
    inStock: true,
  },
  {
    id: "6",
    name: "Oil Pressure Sensor",
    price: 32.50,
    image: "https://images.unsplash.com/photo-1497491249088-11e2d137b3f9?auto=format&fit=crop&w=500&h=300",
    category: "Car Parts",
    inStock: true,
  },
  {
    id: "7",
    name: "Alternator Belt",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?auto=format&fit=crop&w=500&h=300",
    category: "Machinery Parts",
    inStock: true,
    isNew: true
  },
  {
    id: "8",
    name: "Starter Motor Assembly",
    price: 89.95,
    image: "https://images.unsplash.com/photo-1619725557513-9e353609f20b?auto=format&fit=crop&w=500&h=300",
    category: "Car Parts",
    inStock: true,
  }
];

const categories = ["Car Parts", "Tractor Parts", "Machinery Parts"];

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [priceRange, setPriceRange] = useState<number[]>([0, 150]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categoryParam ? [categoryParam] : []
  );
  const [stockFilter, setStockFilter] = useState<boolean>(false);

  // Filter products based on selected filters
  const filteredProducts = allProducts.filter((product) => {
    // Price filter
    const priceInRange = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    // Category filter
    const categoryMatch = selectedCategories.length === 0 || 
      selectedCategories.some(cat => product.category.toLowerCase().includes(cat));
    
    // Stock filter
    const stockMatch = !stockFilter || product.inStock;
    
    return priceInRange && categoryMatch && stockMatch;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((cat) => cat !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Filter component - shared between desktop and mobile
  const FilterControls = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox 
                id={`category-${category}`}
                checked={selectedCategories.includes(category.toLowerCase().replace(' ', '-'))}
                onCheckedChange={() => toggleCategory(category.toLowerCase().replace(' ', '-'))}
              />
              <label 
                htmlFor={`category-${category}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
  
      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Price Range</h3>
        <div className="px-2">
          <Slider
            defaultValue={[0, 150]}
            max={150}
            step={1}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value)}
          />
          <div className="flex justify-between mt-2 text-sm">
            <span>€{priceRange[0]}</span>
            <span>€{priceRange[1]}</span>
          </div>
        </div>
      </div>
  
      {/* Stock Status */}
      <div>
        <h3 className="font-semibold text-lg mb-2">Stock Status</h3>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="in-stock"
            checked={stockFilter}
            onCheckedChange={() => setStockFilter(!stockFilter)}
          />
          <label 
            htmlFor="in-stock"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            In Stock Only
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">All Products</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="sticky top-8 border rounded-lg p-6 bg-white shadow-sm">
                <h2 className="font-bold text-xl mb-4 flex items-center">
                  <Filter className="mr-2 h-5 w-5" /> Filters
                </h2>
                <FilterControls />
              </div>
            </aside>
            
            {/* Products Content */}
            <div className="flex-grow">
              {/* Filter Bar - Mobile */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">{filteredProducts.length} products found</p>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden">
                      <SlidersHorizontal className="mr-2 h-4 w-4" /> 
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <h2 className="font-bold text-xl mt-4 mb-6">Filters</h2>
                    <FilterControls />
                  </SheetContent>
                </Sheet>
              </div>
              
              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} />
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold mb-2">No products found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search term</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
