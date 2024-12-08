// MobileMenu.tsx
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  navItems: { name: string; href: string }[];
  onToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  navItems,
  onToggle,
}) => {
  return (
    <>
      <button
        onClick={onToggle}
        aria-label="Toggle mobile menu"
        className="absolute top-4 right-4 z-50 w-[70px] h-[70px] bg-white rounded-full
         shadow-lg flex items-center justify-center hover:scale-105 transition-transform">
        <div className="relative w-[34px] flex flex-col items-center justify-center">
          <motion.span
            animate={
              isOpen
                ? { rotate: 45, y: 11.5, width: "32px" }
                : { rotate: 0, y: 0, width: "28px" }
            }
            transition={{ duration: 0.2 }}
            className="block h-[2px] bg-gray-800 rounded-sm mb-[11px] ml-[3px] origin-center transition-all"
          />
          <motion.span
            animate={
              isOpen ? { opacity: 0, width: 0 } : { opacity: 1, width: "32px" }
            }
            transition={{ duration: 0.2 }}
            className="block h-[2px] bg-gray-800 rounded-sm"
          />
          <motion.span
            animate={
              isOpen
                ? { rotate: -45, y: -11.5, width: "32px" }
                : { rotate: 0, y: 0, width: "22px", marginLeft: "6px" }
            }
            transition={{ duration: 0.2 }}
            className="block h-[2px] bg-gray-800 rounded-sm mt-[11px] origin-center"
          />
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(30px at 40px 40%)" }}
            animate={{ clipPath: "circle(100%)" }}
            exit={{ clipPath: "circle(30px at 40px 40%)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 z-10">
            {" "}
            {/* inset-0 is shorthand for top:0, right:0, bottom:0, left:0 - makes element fill entire viewport */}
            <nav className="h-full">
              <div className="flex flex-col items-center justify-center h-full">
                {navItems.map((item) => (
                  <Link
                    onClick={onToggle}
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-2 text-white text-xl hover:text-primary-500 transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
