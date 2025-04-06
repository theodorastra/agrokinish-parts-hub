
import { FC, ReactNode } from "react";

interface ValueCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

const ValueCard: FC<ValueCardProps> = ({ title, description, icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-sm border">
    <div className="w-16 h-16 bg-agro-green/10 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ValueCard;
