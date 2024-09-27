import Image from "next/image";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { FiMenu } from "react-icons/fi";
import logo from "@/assets/logo.png"

const NavLeft = ({
  setIsOpen,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Image src={logo.src} alt="kmlad.dev logo" width={100} height={100} />
    </div>
  );
};

export default NavLeft;
