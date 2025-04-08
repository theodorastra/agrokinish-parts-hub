
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import GoogleMap from "../common/GoogleMap";

const Footer = () => {
  return (
    <footer className="bg-agro-darkgray text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="mr-2 relative">
                <div>
                  <svg width="30" height="30" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <h3 className="text-xl font-bold logo-text">ΑΓΡΟΚΙΝΗΣΗ ΣΤΡΑΠΑΤΣΑΣ</h3>
            </div>
            <p className="mb-4">
              Ο αξιόπιστος προμηθευτής σας για ανταλλακτικά αυτοκινήτων, τρακτέρ και
              γεωργικών μηχανημάτων από το 1985.
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
            <h3 className="text-xl font-bold mb-4">Γρήγοροι Σύνδεσμοι</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="hover:text-agro-lightgreen transition-colors">
                  Όλα τα Προϊόντα
                </Link>
              </li>
              <li>
                <Link to="/products?category=car-parts" className="hover:text-agro-lightgreen transition-colors">
                  Ανταλλακτικά Αυτοκινήτων
                </Link>
              </li>
              <li>
                <Link to="/products?category=tractor-parts" className="hover:text-agro-lightgreen transition-colors">
                  Ανταλλακτικά Τρακτέρ
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-agro-lightgreen transition-colors">
                  Σχετικά με εμάς
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-agro-lightgreen transition-colors">
                  Επικοινωνία
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Επικοινωνία</h3>
            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5" />
                <span>Αγροκίνηση Στραπάτσας Ι.Κ.Ε, Τρίκαλα</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <span>24310 74804</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <span>info@agrokinish.gr</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Map */}
        <div className="mt-8 mb-8">
          <GoogleMap className="max-h-[300px]" />
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center">
          <p>© {new Date().getFullYear()} Αγροκίνηση Στραπατσάς. Με επιφύλαξη παντός δικαιώματος.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
