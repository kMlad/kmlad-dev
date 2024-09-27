import { motion } from "framer-motion";

const NavLink = ({ text }: { text: string }) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-mono"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-foreground">
          {text}
        </span>
        <span className="flex items-center h-[30px] text-secondary">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

export default NavLink;
