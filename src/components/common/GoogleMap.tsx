
import { MapPin } from "lucide-react";

interface GoogleMapProps {
  className?: string;
}

const GoogleMap = ({ className }: GoogleMapProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="aspect-video w-full rounded-lg overflow-hidden border shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d767.3370311774926!2d21.781339748840804!3d39.5620513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13591f44d1c6322b%3A0xcc31b570b1cacdc4!2z4oi04oi24oy-4oi64oi_4oi64oi_4oi94oi64oi24oi9IOCIgeCInOCItOCIv-CIvuCIvuCIt-CIv-CIs-CIvOCIvSDOkS7Oms7FIM6V!5e0!3m2!1sel!2sgr!4v1712442911334!5m2!1sel!2sgr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="mt-3 flex items-center text-sm text-agro-darkgray">
        <MapPin className="h-4 w-4 mr-1 text-agro-green" />
        <a 
          href="https://www.google.com/maps?ll=39.562054,21.781983&z=19&t=m&hl=el-GR&gl=US&mapclient=embed&cid=14693062615977998788" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-agro-green transition-colors"
        >
          Αγροκίνηση Στραπάτσας Ι.Κ.Ε, Τρίκαλα
        </a>
      </div>
    </div>
  );
};

export default GoogleMap;
