// components/NavItem.tsx
import { motion } from "framer-motion";
import Link from "next/link";

interface NavItemProps {
  item: { name: string; href: string; target?: string };
  hoveredItem: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  item,
  hoveredItem,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <motion.div
      className="ml-5"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      <Link
        href={item.href}
        className="group relative  py-1"
        target={item.target}>
        <span className="relative text-white transition-colors duration-300 text-[20px] hover:text-primary">
          {item.name}
          {hoveredItem === item.name && (
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 w-full bg-primary-100"
              layoutId="underline"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              exit={{ scaleX: 0 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </span>
      </Link>
    </motion.div>
  );
};

export default NavItem;
