import { Button, theme } from "@nextui-org/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { FiHome, FiBox, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "Home",
    href: "/",
    icon: <FiHome size="24" />,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: <FiBox size="24" />,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: <FiMail size="24" />,
  },
];

interface NavProps {
  active: string;
}

const Nav: FunctionComponent<NavProps> = ({ active }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mt-10">
        {navLinks.map((link, i) => (
          <Link href={link.href} key={i}>
            <Button
              className={`bg-tertiary font-fira flex items-center justify-center mr-2 text-lg border-opacity-0 ${
                active == link.name.toLowerCase()
                  ? "rounded-l-sm border-opacity-100 transition-opacity ease-in duration-300 border-solid border-l-4 border-l-base-primary border-t-0 border-b-0 border-r-0"
                  : ""
              }`}
              size="lg"
              auto
            >
              <span className="mr-2 mt-2">{link.icon}</span> {link.name}
            </Button>
          </Link>
        ))}{" "}
      </div>
    </motion.div>
  );
};

export default Nav;
