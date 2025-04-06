
import { FC } from "react";
import ValueCard from "./ValueCard";

const MissionValues: FC = () => (
  <section className="py-16 bg-agro-lightgray">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-agro-darkgray">
        Our Mission & Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ValueCard 
          title="Quality" 
          description="We are committed to providing only high-quality spare parts that meet or exceed manufacturer specifications, ensuring reliability and longevity."
          icon={
            <svg className="w-8 h-8 text-agro-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          }
        />
        <ValueCard 
          title="Expertise" 
          description="Our team brings decades of technical knowledge to help customers find the right parts for their specific needs, providing guidance and support."
          icon={
            <svg className="w-8 h-8 text-agro-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          }
        />
        <ValueCard 
          title="Value" 
          description="We strive to offer competitive pricing without compromising on quality, ensuring our customers receive the best value for their investment."
          icon={
            <svg className="w-8 h-8 text-agro-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          }
        />
      </div>
    </div>
  </section>
);

export default MissionValues;
