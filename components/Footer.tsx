import Link from "next/link";
import { Linkedin, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-primary text-white p-6">
      <div className="flex flex-col items-center space-y-2">
        <p className="text-2xl font-semibold">
          לפרטים נוספים: ארזה בן עמי ארמה
        </p>
        <p className="text-2xl flex items-center gap-2 ">
          054-4456103
          <Phone size={24} />
        </p>
        <Link
          href="mailto:arza@sinergia-group.co.il"
          className="text-2xl underline flex items-center gap-2 hover:text-success"
          aria-label="Email Arza Ben Ami">
          arza@sinergia-group.co.il
          <Mail size={24} />
        </Link>
        <div className="flex gap-8 mt-4">
          <Link
            href="https://www.linkedin.com"
            className="text-white hover:text-success transition-colors"
            aria-label="LinkedIn">
            <Linkedin size={28} />
          </Link>
          <Link
            href="https://www.facebook.com/sinergiagroup"
            className="text-white hover:text-success transition-colors"
            aria-label="Facebook">
            <Facebook size={28} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
