import Link from "next/link";
import { Linkedin, Facebook, Mail, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-[#303131] text-white py-2">
      <div className="flex flex-col md:flex-row justify-between w-5/6 mx-auto items-center">
        <Link href="/">
          <Image
            src="/transparentLogo.png"
            alt="Sinergia Logo"
            width={280}
            height={280}
            priority
            className="mb-4 md:mb-0"
          />
        </Link>
        <p className="text-2xl font-semibold text-center md:text-left">
          לפרטים : ארזה בן עמי ארמה
        </p>
        <p className="text-2xl flex items-center gap-2 px-5 ">
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
            href="https://www.linkedin.com/company/sinergia-group/"
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
      <div className="flex flex-col md:flex-row justify-between w-1/3 mx-auto items-center">
        <p className="text-center text-sm">
          כל הזכויות שמורות לסינרגיה &copy; {new Date().getFullYear()}
        </p>
        <p className="text-center text-sm ">
          <Link href="/accessability" className="underline">
            הצהרת נגישות
          </Link>
        </p>
        <p className="text-center text-sm">Developed by nadav galili</p>
      </div>
    </div>
  );
};

export default Footer;
