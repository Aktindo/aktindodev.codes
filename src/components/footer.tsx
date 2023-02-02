import { Button } from "@nextui-org/react";
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
    <div className="absolute w-screen flex flex-shrink bottom-0 p-2">
      <div className="flex-1">
        <span className="opacity-50 font-fira m-3">
          Aktindo &copy; {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex">
        {footerNavLinks.map((link, i) => (
          <Button
            className="mr-2 bg-tertiary font-fira"
            key={i}
            href={link.link}
            target="_blank"
            auto
          >
            {link.name.toLowerCase() !== "blogs" ? link.icon : link.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Footer;
