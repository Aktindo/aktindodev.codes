import { Badge, Button, Tooltip } from "@nextui-org/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import { FiGithub, FiTwitter, FiInstagram } from "react-icons/fi";

interface FooterProps {}

const footerNavLinks = [
  {
    name: "GitHub",
    link: "https://github.com/Aktindo",
    icon: <FiGithub size="20" />,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Aktindo",
    icon: <FiTwitter size="20" />,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/akshxsingla",
    icon: <FiInstagram size="20" />,
  },
  {
    name: "Blogs",
    link: "https://blogs.aktindodev.codes",
    icon: <FiGithub size="20" />,
  },
];

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <div className="md:absolute mt-5 md:mt-0 w-screen flex flex-shrink md:bottom-0 p-2">
      <div className="flex-1">
        <span className="opacity-50 font-fira m-3">
          Aktindo &copy; {new Date().getFullYear()}{" "}
          <Tooltip
            color="invert"
            content="Some components/pages are yet to come."
          >
            <Badge color="primary">BETA</Badge>
          </Tooltip>
        </span>
      </div>
      <div className="hidden md:flex">
        {footerNavLinks.map((link, i) => (
          <Link href={link.link} target="_blank" key={i}>
            <Button className="mr-2 bg-tertiary font-fira" key={i} auto>
              {link.name.toLowerCase() !== "blogs" ? link.icon : link.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
