
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-agro-green text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Agrokinish Strapatsas</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Your trusted partner for high-quality spare parts since 1985
            </p>
          </div>
        </div>
        
        {/* Company Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-agro-darkgray">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 1985, Agrokinish Strapatsas began as a small family business 
                  dedicated to providing quality spare parts to local farmers and mechanics.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the decades, we've grown into a trusted supplier of spare parts for cars,
                  tractors, and agricultural machinery across Greece, building our reputation on
                  quality products, reliable service, and technical expertise.
                </p>
                <p className="text-gray-600">
                  Today, we continue to uphold the same values that have guided us from the start:
                  providing genuine quality parts, excellent customer service, and supporting our
                  customers with the right parts for their needs.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=600" 
                  alt="Agrokinish Strapatsas Store" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission & Values */}
        <section className="py-16 bg-agro-lightgray">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-agro-darkgray">
              Our Mission & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="w-16 h-16 bg-agro-green/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-agro-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Quality</h3>
                <p className="text-gray-600">
                  We are committed to providing only high-quality spare parts that meet or exceed 
                  manufacturer specifications, ensuring reliability and longevity.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="w-16 h-16 bg-agro-green/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-agro-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Expertise</h3>
                <p className="text-gray-600">
                  Our team brings decades of technical knowledge to help customers find the right
                  parts for their specific needs, providing guidance and support.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border">
                <div className="w-16 h-16 bg-agro-green/10 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-agro-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Value</h3>
                <p className="text-gray-600">
                  We strive to offer competitive pricing without compromising on quality,
                  ensuring our customers receive the best value for their investment.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-agro-darkgray">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="George Strapatsas" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">George Strapatsas</h3>
                <p className="text-agro-green mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 40 years of experience in the industry, George leads our company with
                  passion and dedication.
                </p>
              </div>
              
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Maria Strapatsas" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">Maria Strapatsas</h3>
                <p className="text-agro-green mb-3">Operations Manager</p>
                <p className="text-gray-600 text-sm">
                  Maria oversees our day-to-day operations, ensuring efficiency and customer satisfaction.
                </p>
              </div>
              
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/men/55.jpg" 
                    alt="Nikos Papadopoulos" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">Nikos Papadopoulos</h3>
                <p className="text-agro-green mb-3">Technical Expert</p>
                <p className="text-gray-600 text-sm">
                  Nikos brings 25 years of mechanical expertise to help customers find the perfect parts.
                </p>
              </div>
              
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src="https://randomuser.me/api/portraits/women/68.jpg" 
                    alt="Elena Dimitriou" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-1">Elena Dimitriou</h3>
                <p className="text-agro-green mb-3">Customer Service</p>
                <p className="text-gray-600 text-sm">
                  Elena ensures all customers receive excellent service and support with their orders.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 bg-agro-green text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Have questions or need assistance finding the right parts?
              Our team of experts is here to help.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
              <div className="flex items-center justify-center">
                <Phone className="h-6 w-6 mr-2" />
                <span>+30 123 456 7890</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 mr-2" />
                <span>info@agrokinish.gr</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 mr-2" />
                <span>123 Agricultural Road, Athens</span>
              </div>
            </div>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agro-green">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
