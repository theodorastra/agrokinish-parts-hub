
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartIcon from "../cart/CartIcon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-agro-green shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="logo-container">
              <div className="flex items-center">
                <div className="mr-2 relative">
                  <div className="absolute -left-1 -top-1">
                    <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M80,60 A20,20 0 1,1 120,60" stroke="#a0a0a0" strokeWidth="15" fill="none" />
                      <path d="M60,80 A20,20 0 1,1 60,120" stroke="#a0a0a0" strokeWidth="15" fill="none" />
                      <path d="M80,140 A20,20 0 1,1 120,140" stroke="#a0a0a0" strokeWidth="15" fill="none" />
                      <path d="M140,80 A20,20 0 1,1 140,120" stroke="#a0a0a0" strokeWidth="15" fill="none" />
                      <circle cx="100" cy="100" r="10" fill="#8eb255" />
                      <path d="M90,80 Q100,60 110,80 L100,100 Z" fill="#8eb255" />
                      <path d="M120,90 Q140,100 120,110 L100,100 Z" fill="#8eb255" />
                    </svg>
                  </div>
                </div>
                <span className="text-2xl font-bold text-white logo-text">ΑΓΡΟΚΙΝΗΣΗ<br/>ΣΤΡΑΠΑΤΣΑΣ</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-agro-lightgreen font-medium">
              Home
            </Link>
            <Link to="/products" className="text-white hover:text-agro-lightgreen font-medium">
              Products
            </Link>
            <Link to="/about" className="text-white hover:text-agro-lightgreen font-medium">
              About Us
            </Link>
            <Link to="/contact" className="text-white hover:text-agro-lightgreen font-medium">
              Contact
            </Link>
          </div>

          {/* Phone number, Search and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-white mr-4">
              <Phone className="h-4 w-4 mr-2" />
              <span>24310 74804</span>
            </div>
            <Button variant="ghost" className="rounded-full w-10 h-10 p-0 text-white hover:bg-agro-lightgreen/20">
              <Search className="h-5 w-5" />
            </Button>
            <CartIcon />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center text-white mr-4">
              <Phone className="h-4 w-4 mr-1" />
              <span className="text-sm">24310 74804</span>
            </div>
            <CartIcon />
            <Button variant="ghost" onClick={toggleMenu} className="rounded-full w-10 h-10 p-0 text-white hover:bg-agro-lightgreen/20">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-2 pb-4 px-4 space-y-4 bg-agro-green text-white">
            <Link to="/" className="block py-2 text-white hover:text-agro-lightgreen font-medium">
              Home
            </Link>
            <Link to="/products" className="block py-2 text-white hover:text-agro-lightgreen font-medium">
              Products
            </Link>
            <Link to="/about" className="block py-2 text-white hover:text-agro-lightgreen font-medium">
              About Us
            </Link>
            <Link to="/contact" className="block py-2 text-white hover:text-agro-lightgreen font-medium">
              Contact
            </Link>
            <div className="pt-2 flex items-center">
              <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-agro-green">
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
