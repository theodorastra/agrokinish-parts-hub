
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleMap from "@/components/common/GoogleMap";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-agro-green text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We're here to help with all your spare part needs
            </p>
          </div>
        </div>

        {/* Contact Info & Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Map */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-agro-darkgray">Find Us</h2>
                <GoogleMap className="mb-4" />
                <p className="text-gray-600">
                  Visit our physical store to explore our full range of products and 
                  get expert advice from our team of specialists.
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold mb-6 text-agro-darkgray">Get in Touch</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <MapPin className="h-5 w-5 mr-2 text-agro-green" />
                        Address
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Αγροκίνηση Στραπάτσας Ι.Κ.Ε</p>
                      <p>Τρίκαλα, Greece</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Phone className="h-5 w-5 mr-2 text-agro-green" />
                        Phone
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>24310 74804</p>
                      <p className="text-sm text-gray-500">Monday-Friday: 9am-5pm</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Mail className="h-5 w-5 mr-2 text-agro-green" />
                        Email
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>info@agrokinish.gr</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Business Hours</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Monday-Friday: 9:00 - 17:00</p>
                      <p>Saturday: 9:00 - 14:00</p>
                      <p>Sunday: Closed</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-agro-lightgray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-agro-darkgray">Send Us a Message</h2>
              <p className="text-gray-600">
                Have a question about a specific part or need a custom order?
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm border">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green focus:border-agro-green"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green focus:border-agro-green"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green focus:border-agro-green"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-agro-green focus:border-agro-green"
                  ></textarea>
                </div>
                <div>
                  <Button type="submit" className="w-full bg-agro-green hover:bg-agro-darkgreen">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
