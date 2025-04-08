
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    id: "car-parts",
    title: "Ανταλλακτικά Αυτοκινήτων",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=500&h=300",
    description: "Ανταλλακτικά για όλα τα μοντέλα αυτοκινήτων",
  },
  {
    id: "tractor-parts",
    title: "Ανταλλακτικά Τρακτέρ",
    image: "https://images.unsplash.com/photo-1620209858114-dfefe5c170bf?auto=format&fit=crop&w=500&h=300",
    description: "Βασικά εξαρτήματα για γεωργικά τρακτέρ",
  },
  {
    id: "machinery-parts",
    title: "Ανταλλακτικά Μηχανημάτων",
    image: "https://images.unsplash.com/photo-1629405422262-9aeb6f734dad?auto=format&fit=crop&w=500&h=300",
    description: "Εξαρτήματα για βιομηχανικά και αγροτικά μηχανήματα",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-agro-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-agro-darkgray">
          Κατηγορίες Προϊόντων
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Περιηγηθείτε στη μεγάλη γκάμα ανταλλακτικών υψηλής ποιότητας
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.id} to={`/products?category=${category.id}`}>
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-agro-darkgray">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex items-center text-agro-green font-medium">
                    Δείτε Προϊόντα <ChevronRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
