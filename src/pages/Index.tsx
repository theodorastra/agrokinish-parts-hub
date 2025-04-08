
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-agro-darkgray">
              Γιατί να επιλέξετε την Αγροκίνηση Στραπάτσας
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-agro-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-agro-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Εγγυημένη Ποιότητα</h3>
                <p className="text-gray-600">
                  Όλα τα ανταλλακτικά μας προέρχονται από αξιόπιστους κατασκευαστές και υπόκεινται σε αυστηρούς ελέγχους ποιότητας.
                </p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-agro-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-agro-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Γρήγορη Παράδοση</h3>
                <p className="text-gray-600">
                  Η αποτελεσματική διαδικασία αποστολής εξασφαλίζει την έγκαιρη άφιξη των ανταλλακτικών σας, ελαχιστοποιώντας το χρόνο αδράνειας.
                </p>
              </div>
              
              <div className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-agro-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-agro-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Εξειδικευμένη Υποστήριξη</h3>
                <p className="text-gray-600">
                  Η έμπειρη ομάδα μας παρέχει τεχνική βοήθεια για την εύρεση των κατάλληλων ανταλλακτικών για τις ανάγκες σας.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
