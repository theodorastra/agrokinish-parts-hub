
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const CartIcon = () => {
  // This would be replaced with actual cart state management
  const itemCount = 0;

  return (
    <Link to="/cart">
      <Button variant="ghost" className="relative rounded-full w-10 h-10 p-0">
        <ShoppingCart className="h-5 w-5" />
        {itemCount > 0 && (
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-agro-orange">
            {itemCount}
          </Badge>
        )}
      </Button>
    </Link>
  );
};

export default CartIcon;
