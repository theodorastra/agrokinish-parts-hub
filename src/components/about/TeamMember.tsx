
import { FC } from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}

const TeamMember: FC<TeamMemberProps> = ({ name, role, description, imageUrl }) => (
  <div className="text-center">
    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
      <img 
        src={imageUrl} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="font-bold text-xl mb-1">{name}</h3>
    <p className="text-agro-green mb-3">{role}</p>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default TeamMember;
