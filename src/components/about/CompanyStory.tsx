
import { FC } from "react";

const CompanyStory: FC = () => (
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
);

export default CompanyStory;
