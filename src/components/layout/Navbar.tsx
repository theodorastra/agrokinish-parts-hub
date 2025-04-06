
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartIcon from "../cart/CartIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-agro-green">
              Agrokinish Strapatsas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-agro-darkgray hover:text-agro-green font-medium">
              Home
            </Link>
            <Link to="/products" className="text-agro-darkgray hover:text-agro-green font-medium">
              Products
            </Link>
            <Link to="/about" className="text-agro-darkgray hover:text-agro-green font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-agro-darkgray hover:text-agro-green font-medium">
              Contact
            </Link>
          </div>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="rounded-full w-10 h-10 p-0">
              <Search className="h-5 w-5" />
            </Button>
            <CartIcon />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <CartIcon />
            <Button variant="ghost" onClick={toggleMenu} className="rounded-full w-10 h-10 p-0">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 px-4 space-y-4 bg-white">
            <Link to="/" className="block py-2 text-agro-darkgray hover:text-agro-green font-medium">
              Home
            </Link>
            <Link to="/products" className="block py-2 text-agro-darkgray hover:text-agro-green font-medium">
              Products
            </Link>
            <Link to="/about" className="block py-2 text-agro-darkgray hover:text-agro-green font-medium">
              About Us
            </Link>
            <Link to="/contact" className="block py-2 text-agro-darkgray hover:text-agro-green font-medium">
              Contact
            </Link>
            <div className="pt-2 flex items-center">
              <Button variant="outline" className="w-full">
                <Search className="h-4 w-4 mr-2" /> Search
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
