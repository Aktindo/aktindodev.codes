import { Badge, Button, Dropdown, Tooltip, Link } from "@nextui-org/react";
import { FunctionComponent } from "react";
import { FiGithub, FiTwitter, FiInstagram, FiMenu } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { useState } from "react";

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
];

const Footer: FunctionComponent<FooterProps> = () => {
  const [tagCopied, setTagCopied] = useState<boolean>(false);

  const handleCopy = () => {
    if (!tagCopied) {
      navigator.clipboard.writeText("Aktindo#5303");
      setTagCopied(true);
      setTimeout(() => {
        setTagCopied(false);
      }, 2000);
    }
  };

  return (
    <div className="md:absolute mt-5 md:mt-0 w-screen flex items-center flex-shrink md:bottom-0 p-2">
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
              {link.icon}
            </Button>
          </Link>
        ))}
        <Tooltip color="success" content={tagCopied ? "Copied!" : ""}>
          <Button
            className="font-fira bg-blue-600"
            icon={<FaDiscord size="20" />}
            onPress={handleCopy}
            auto
          >
            Aktindo#5303
          </Button>
        </Tooltip>
      </div>
      <div className="md:hidden mr-2">
        <Dropdown>
          <Dropdown.Button color="secondary">Socials</Dropdown.Button>
          <Dropdown.Menu aria-label="Social Handles" className="bg-secondary">
            {footerNavLinks.map((link, i) => (
              <Dropdown.Item key={i} icon={link.icon}>
                <Link className="text-white" href={link.link}>
                  {link.name}
                </Link>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Footer;
