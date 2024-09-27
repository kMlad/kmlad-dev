import { motion } from "framer-motion";
import NavLink from "./navLink";

const NavRight = () => {
  return (
    <div className="flex items-center gap-4 pt-4">
      <NavLink text="Solutions" />
      <NavLink text="Community" />
      <NavLink text="Pricing" />
      <NavLink text="Company" />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium rounded-md whitespace-nowrap"
      >
        Sign in
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-background font-medium rounded-md whitespace-nowrap"
      >
        Sign up
      </motion.button>
    </div>
  );
};

export default NavRight;
