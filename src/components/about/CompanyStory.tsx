
import { FC } from "react";

const CompanyStory: FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-agro-darkgray">Η Ιστορία μας</h2>
          <p className="text-gray-600 mb-4">
            Ιδρύθηκε το 1985, η Αγροκίνηση Στραπατσάς ξεκίνησε ως μια μικρή οικογενειακή 
            επιχείρηση αφοσιωμένη στην παροχή ανταλλακτικών ποιότητας σε τοπικούς αγρότες και μηχανικούς.
          </p>
          <p className="text-gray-600 mb-4">
            Με το πέρασμα των δεκαετιών, έχουμε εξελιχθεί σε έναν αξιόπιστο προμηθευτή 
            ανταλλακτικών για αυτοκίνητα, τρακτέρ και γεωργικά μηχανήματα σε όλη την Ελλάδα, 
            χτίζοντας τη φήμη μας στα ποιοτικά προϊόντα, την αξιόπιστη εξυπηρέτηση και την τεχνική εξειδίκευση.
          </p>
          <p className="text-gray-600">
            Σήμερα, συνεχίζουμε να διατηρούμε τις ίδιες αξίες που μας καθοδηγούν από την αρχή:
            παροχή γνήσιων ανταλλακτικών ποιότητας, άριστη εξυπηρέτηση πελατών και υποστήριξη των
            πελατών μας με τα κατάλληλα ανταλλακτικά για τις ανάγκες τους.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=600" 
            alt="Κατάστημα Αγροκίνηση Στραπατσάς" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CompanyStory;
