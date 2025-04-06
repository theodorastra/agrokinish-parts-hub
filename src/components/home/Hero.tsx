
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-agro-green to-agro-darkgreen">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Quality Spare Parts for <br className="hidden md:block" />
          <span className="text-agro-lightgreen">Every Machine</span>
        </h1>
        <p className="text-xl text-white mb-4 max-w-lg">
          Your trusted supplier of high-quality spare parts for cars, tractors, and agricultural machinery since 1985.
        </p>
        <div className="flex items-center text-white mb-8">
          <MapPin className="h-5 w-5 mr-2" />
          <a 
            href="https://www.google.com/maps?ll=39.562054,21.781983&z=19&t=m&hl=el-GR&gl=US&mapclient=embed&cid=14693062615977998788" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-agro-lightgreen transition-colors"
          >
            Αγροκίνηση Στραπάτσας Ι.Κ.Ε, Τρίκαλα
          </a>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-agro-orange hover:bg-agro-orange/90">
            <Link to="/products">
              Browse Products <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-agro-darkgreen">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
