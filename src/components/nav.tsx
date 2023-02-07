import { Button, theme } from "@nextui-org/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { FiHome, FiBox, FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

const navLinks = [
  {
    name: "home",
    href: "/",
    icon: <FiHome size="24" />,
    disabled: false,
  },
  {
    name: "portfolio",
    href: "/portfolio",
    icon: <FiBox size="24" />,
    disabled: true,
  },
  {
    name: "contact",
    href: "/contact",
    icon: <FiMail size="24" />,
    disabled: true,
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
      <div className="grid justify-start mr-10">
        {navLinks.map((link, i) => (
          <Link href={link.href} key={i}>
            <Button
              className={`mt-2 bg-tertiary font-fira opacity-80 flex items-center justify-center mr-2 text-xl border-opacity-0 ${
                active == link.name.toLowerCase()
                  ? "rounded-l-sm border-opacity-100 transition-opacity ease-in duration-300 border-solid border-l-4 border-l-base-primary border-t-0 border-b-0 border-r-0"
                  : ""
              }`}
              size="xl"
              auto
              disabled={link.disabled}
            >
              <span className="mr-2 mt-2">{link.icon}</span> /{link.name}
            </Button>
          </Link>
        ))}{" "}
      </div>
    </motion.div>
  );
};

export default Nav;
