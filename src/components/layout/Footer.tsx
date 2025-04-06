
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-agro-darkgray text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Agrokinish Strapatsas</h3>
            <p className="mb-4">
              Your trusted supplier of spare parts for cars, tractors, and
              agricultural machinery.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/20">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-agro-orange transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=car-parts" className="hover:text-agro-orange transition-colors">
                  Car Parts
                </Link>
              </li>
              <li>
                <Link to="/products?category=tractor-parts" className="hover:text-agro-orange transition-colors">
                  Tractor Parts
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-agro-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-agro-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                <span>123 Agricultural Road, Athens, Greece</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>+30 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@agrokinish.gr</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center">
          <p>© {new Date().getFullYear()} Agrokinish Strapatsas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
