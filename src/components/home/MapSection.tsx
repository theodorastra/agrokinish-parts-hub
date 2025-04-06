
import GoogleMap from "@/components/common/GoogleMap";

const MapSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-agro-darkgray">Find Us</h2>
        <div className="max-w-3xl mx-auto">
          <GoogleMap className="h-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
