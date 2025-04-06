
import { FC } from "react";
import TeamMember from "./TeamMember";

const TeamSection: FC = () => (
  <section className="py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-agro-darkgray">
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <TeamMember 
          name="George Strapatsas"
          role="Founder & CEO"
          description="With over 40 years of experience in the industry, George leads our company with passion and dedication."
          imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <TeamMember 
          name="Maria Strapatsas"
          role="Operations Manager"
          description="Maria oversees our day-to-day operations, ensuring efficiency and customer satisfaction."
          imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
        />
        <TeamMember 
          name="Nikos Papadopoulos"
          role="Technical Expert"
          description="Nikos brings 25 years of mechanical expertise to help customers find the perfect parts."
          imageUrl="https://randomuser.me/api/portraits/men/55.jpg"
        />
        <TeamMember 
          name="Elena Dimitriou"
          role="Customer Service"
          description="Elena ensures all customers receive excellent service and support with their orders."
          imageUrl="https://randomuser.me/api/portraits/women/68.jpg"
        />
      </div>
    </div>
  </section>
);

export default TeamSection;
