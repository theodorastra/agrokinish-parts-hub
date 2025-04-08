
import { FC } from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactCTA: FC = () => (
  <section className="py-16 bg-agro-green text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Επικοινωνήστε μαζί μας</h2>
      <p className="text-xl mb-8 max-w-2xl mx-auto">
        Έχετε ερωτήσεις ή χρειάζεστε βοήθεια για να βρείτε τα κατάλληλα ανταλλακτικά;
        Η ομάδα των ειδικών μας είναι εδώ για να σας βοηθήσει.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
        <div className="flex items-center justify-center">
          <Phone className="h-6 w-6 mr-2" />
          <span>24310 74804</span>
        </div>
        <div className="flex items-center justify-center">
          <Mail className="h-6 w-6 mr-2" />
          <span>info@agrokinish.gr</span>
        </div>
        <div className="flex items-center justify-center">
          <MapPin className="h-6 w-6 mr-2" />
          <span>Αγροκίνηση Στραπάτσας Ι.Κ.Ε, Τρίκαλα</span>
        </div>
      </div>
      <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-agro-green">
        <Link to="/contact">Επικοινωνία</Link>
      </Button>
    </div>
  </section>
);

export default ContactCTA;
