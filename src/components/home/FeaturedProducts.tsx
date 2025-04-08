
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ProductGrid from "../product/ProductGrid";
import { ProductProps } from "../product/ProductCard";

// Sample featured products data
const featuredProducts: ProductProps[] = [
  {
    id: "1",
    name: "Φίλτρο Αέρα Τρακτέρ",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1620716571877-f1bf5b892b9f?auto=format&fit=crop&w=500&h=300",
    category: "Tractor Parts",
    inStock: true,
    isFeatured: true
  },
  {
    id: "2",
    name: "Σετ Τακάκια Φρένων",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1497491249088-11e2d137b3f9?auto=format&fit=crop&w=500&h=300",
    category: "Car Parts",
    inStock: true,
    isFeatured: true
  },
  {
    id: "3",
    name: "Φίλτρο Υδραυλικού Λαδιού",
    price: 18.95,
    image: "https://images.unsplash.com/photo-1615800098779-1be32e60cca3?auto=format&fit=crop&w=500&h=300",
    category: "Machinery Parts",
    inStock: true,
    isFeatured: true
  },
  {
    id: "4",
    name: "Φίλτρο Καυσίμου Premium",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1619725557513-9e353609f20b?auto=format&fit=crop&w=500&h=300",
    category: "Car Parts",
    inStock: false,
    isFeatured: true,
    isNew: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-agro-darkgray">
              Προτεινόμενα Προϊόντα
            </h2>
            <p className="text-lg text-gray-600">
              Τα πιο δημοφιλή ανταλλακτικά υψηλής ποιότητας
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/products">Όλα τα Προϊόντα</Link>
          </Button>
        </div>
        
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
