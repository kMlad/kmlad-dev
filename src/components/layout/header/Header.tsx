"use client";
import { useState } from "react";
import NavLeft from "./desktop/navLeft";
import NavRight from "./desktop/navRight";
import NavMenu from "./mobile/navMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="container mx-auto bg-background p-4 flex items-start justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

export default Header;
