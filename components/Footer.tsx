import Link from "next/link";
import { Linkedin, Facebook, Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#455159] text-white p-6">
      <div className="flex flex-col md:flex-row justify-between min-h-[100px] w-5/6 mx-auto items-center">
        <Link href="/">
          <Image
            src="/transparentLogo.png"
            alt="Sinergia Logo"
            width={350}
            height={350}
            priority
            className="mb-4 md:mb-0"
          />
        </Link>
        <p className="text-2xl font-semibold text-center md:text-left">
          לפרטים : ארזה בן עמי ארמה
        </p>
        <p className="text-2xl flex items-center gap-2 p-5">
          <Link
            href="tel:+972544456103"
            className="text-white  hover:text-success transition-colors flex items-center"
            aria-label="Phone Arza Ben Ami"
            target="_blank">
            054-4456103
            <Phone size={20} className="mr-2" />
          </Link>
        </p>
        <Link
          href="mailto:arza@sinergia-group.co.il"
          className="text-2xl underline flex items-center gap-2 hover:text-success text-center md:text-left"
          aria-label="Email Arza Ben Ami"
          target="_blank">
          arza@sinergia-group.co.il
          <Mail size={24} />
        </Link>
        <div className="flex gap-8 justify-center md:justify-start">
          <Link
            href="https://www.linkedin.com"
            target="_blank"
            className="text-white hover:text-success transition-colors"
            aria-label="LinkedIn">
            <Linkedin size={44} />
          </Link>
          <Link
            href="https://www.facebook.com/sinergiagroup"
            target="_blank"
            className="text-white hover:text-success transition-colors"
            aria-label="Facebook">
            <Facebook size={44} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
