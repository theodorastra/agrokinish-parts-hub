
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-agro-green to-agro-brown">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Quality Spare Parts for <br className="hidden md:block" />
          <span className="text-agro-orange">Every Machine</span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-lg">
          Your trusted supplier of high-quality spare parts for cars, tractors, and agricultural machinery since 1985.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-agro-orange hover:bg-agro-orange/90">
            <Link to="/products">
              Browse Products <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-agro-darkgray">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
