import { Button, theme } from "@nextui-org/react";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { FiHome, FiBox, FiMail, FiMenu } from "react-icons/fi";
import { motion } from "framer-motion";
import { redirect, useRouter } from "next/navigation";
import Image from "next/image";

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
    disabled: false,
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
  const [navOpen, setNavOpen] = useState(true);
  const router = useRouter();

  return (
    <div>
      <div className="flex items-center md:hidden mt-0 mx-5">
        <Image
          className="rounded-full"
          alt="Aktindo Logo"
          src="/pfp.png"
          width={55}
          height={55}
        />
        <Button
          className="ml-auto mb-5 justify-end"
          auto
          color={navOpen ? "primary" : "secondary"}
          size="md"
          css={{ px: "$13" }}
          onPress={() => setNavOpen(!navOpen)}
        >
          <FiMenu size="24" />
        </Button>
      </div>

      <motion.div initial={false}>
        <div
          className={`md:flex ${
            navOpen ? "grid" : "md:flex hidden"
          }  ml-2 md:mr-10 mt-10`}
        >
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href}>
              <Button
                disabled={link.disabled}
                className={`ml-auto animate__animated animate__fadeInUp animate__delay-${
                  i == 0 ? "0" : i == 1 ? "1" : "2"
                }s md:ml-0 mt-2 p-6 bg-secondary font-fira opacity-80 flex items-center justify-center mr-3 text-xl border-opacity-0 ${
                  active == link.name.toLowerCase()
                    ? "md:rounded-l-sm md:border-r-0 border-l-0 border-opacity-100 transition-opacity ease-in duration-300 border-solid md:border-l-4 border-r-4 rounded-r-sm border-r-base-primary md:border-l-base-primary border-t-0 border-b-0 md:rounded-r-lg"
                    : ""
                }`}
                size="md"
                auto
              >
                <span className="mr-2 mt-2">{link.icon}</span> /{link.name}
              </Button>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Nav;
