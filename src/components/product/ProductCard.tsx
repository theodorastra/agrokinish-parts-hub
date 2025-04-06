
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({ id, name, price, image, category, inStock, isNew, isFeatured }: ProductProps) => {
  return (
    <Card className="product-card overflow-hidden h-full flex flex-col">
      <div className="relative">
        <Link to={`/products/${id}`}>
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        </Link>
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-agro-orange text-white">New</Badge>
          )}
          {isFeatured && (
            <Badge className="bg-agro-green text-white">Featured</Badge>
          )}
        </div>
        <Button 
          size="icon" 
          variant="ghost" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>
      
      <CardContent className="flex-grow p-4">
        <div className="text-sm text-agro-brown font-medium mb-1">
          {category}
        </div>
        <Link to={`/products/${id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-agro-green transition-colors">
            {name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold">
            €{price.toFixed(2)}
          </div>
          {inStock ? (
            <Badge variant="outline" className="text-green-600 border-green-600">
              In stock
            </Badge>
          ) : (
            <Badge variant="outline" className="text-gray-500 border-gray-500">
              Out of stock
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full bg-agro-green hover:bg-agro-green/90"
          disabled={!inStock}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
