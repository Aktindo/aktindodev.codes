"use client";

import Head from "next/head";
import Nav from "@/components/nav";
import {
  Avatar,
  Badge,
  Button,
  Card,
  Image,
  Link,
  Tooltip,
} from "@nextui-org/react";
import Loading from "@/components/loading";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { getPresence } from "@/handlers/api/presence";
import { Activity } from "@/types/interfaces/Activity";
import { namesSequence } from "@/utils/data/names";
import { FiCalendar, FiClock, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaDiscord, FaGithub } from "react-icons/fa";
export default function Home() {
  const [activity, setActivity] = useState<Activity>({
    presence: "offline",
    status: null,
  });
  const [time, setTime] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPresence(setActivity);
    setLoading(false);
  }, [loading]);

  const getStatusColor = (tooltip?: boolean) => {
    switch (activity.presence) {
      case "online":
        return "success";
      case "idle":
        return "warning";
      case "dnd":
        return "error";

      default:
        return "default";
    }
  };

  const getStatusName = () => {
    switch (activity.presence) {
      case "online":
        return "Online";
      case "idle":
        return "Idle";
      case "dnd":
        return "Do Not Disturb";

      default:
        return "Offline";
    }
  };

  const getISTTime = () => {
    const date = new Date();
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    const ist = new Date(utc + 3600000 * 5.5);

    let currentTime = ist.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
    });

    let currentDate = ist.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });

    setTime(currentTime);
    setDate(currentDate);
  };

  useEffect(() => {
    setInterval(() => {
      getISTTime();
    }, 1000);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      link: "https://github.com/Aktindo",
      icon: <FaGithub size="25" />,
      color: "bg-secondary",
    },
    {
      name: "Instagram",
      link: "https://instagram.com/akshxsingla",
      icon: <FiInstagram size="25" />,
      color: "bg-secondary",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/Aktindo",
      icon: <FiTwitter size="25" />,
      color: "bg-blue-400",
    },
  ];
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

  return !loading ? (
    <>
      <Head>
        <title>Hello World | Aktindo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid bg-primary font-sans justify-center md:mt-0 h-screen tracking-wide">
        <Nav active="home" />

        <div className="hero mb-20 mx-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="grid md:flex justify-center place-items-center">
              <Badge
                content=""
                color={getStatusColor() || ""}
                placement="bottom-right"
                shape="circle"
                variant="dot"
                size="xl"
              >
                <Avatar
                  className="mr-5 w-32 h-32"
                  src={"/pfp.png"}
                  squared
                  color={getStatusColor()}
                />
              </Badge>

              <div className="mt-3 max-w-fit md:max-w-2xl text-elft">
                <p className="md:text-3xl font-fira text-2xl font-medium tracking-normal">
                  Hi there!
                </p>
                <p className="md:text-4xl font-fira text-3xl opacity-90 font-semibold">
                  I&apos;m{" "}
                  <TypeAnimation
                    speed={45}
                    sequence={namesSequence}
                    wrapper="span"
                    cursor={true}
                    className="text-base-primary"
                  />
                </p>
              </div>
            </div>
            <div className="grid justify-center max-w-fit mx-5 md:mx-0 lg:max-w-2xl mt-5 ">
              <p className="md:text-2xl mx-5 font-fira font-inter text-lg opacity-80 tracking-normal">
                A 15y/o self-taught developer on the internet. Making full-stack
                projects, websites and packages sometimes.
                <br />
                <br />
                Feel free to hit me up to collaborate on any project idea you
                have!
              </p>
            </div>
            <div className="mt-10 flex justify-center">
              {socialLinks.map((link) => (
                <Button
                  icon={link.icon}
                  size="lg"
                  as={Link}
                  href={link.link}
                  target="_blank"
                  auto
                  className={`font-fira mr-3 text-lg ${link.color}`}
                >
                  {link.name}
                </Button>
              ))}
              <Tooltip color="success" content={tagCopied ? "Copied!" : ""}>
                <Button
                  size="lg"
                  className="font-fira text-lg bg-blue-600"
                  icon={<FaDiscord size="25" />}
                  onPress={handleCopy}
                  auto
                >
                  Aktindo#5303
                </Button>
              </Tooltip>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex items-center">
        <div className="fixed bottom-0 left-0 m-5">
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
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed bottom-0 right-0 max-w-2xl m-5"
        >
          <p className="md:text-lg text-md font-fira flex items-center opacity-90">
            <span className="mr-2 flex items-center">
              <FiCalendar size="20" />
            </span>
            {date} in New Delhi, India
          </p>
          <p className="md:text-lg text-md font-fira flex items-center opacity-90">
            <span className="mr-2 flex items-center">
              <FiClock size="20" />
            </span>
            At {time}
          </p>
        </motion.div>
      </div>
    </>
  ) : (
    <Loading />
  );
}
