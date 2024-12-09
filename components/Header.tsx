"use client";

import { ChevronsLeft } from "lucide-react";
import { motion } from "framer-motion";

const Header = ({
  headerText,
  icon,
}: {
  headerText: string;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.h3
      className="font-inter heading text-center mx-auto rounded-lg flex items-center gap-2 justify-center"
      initial={{ opacity: 0, y: -50, scale: 0.5 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.6,
        },
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.95 }}>
      {headerText}
      {icon !== "0" && <ChevronsLeft className="size-8 " />}
    </motion.h3>
  );
};

export default Header;
