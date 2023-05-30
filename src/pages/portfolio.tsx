import Footer from "@/components/footer";
import Nav from "@/components/nav";
import { Avatar } from "@nextui-org/react";
import Head from "next/head";
import Link from "next/link";

interface PortfolioProps {}

const Portfolio: React.FC<PortfolioProps> = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Aktindo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" bg-primary font-sans h-screen">
        <div className="headbar flex items-center max-w-fit mx-auto">
          <p className="fixed font-sans tracking-normal left-0 ml-5">
            <Link
              href="/"
              className="text-white font-medium opacity-50 transition-opacity duration-300 hover:opacity-100"
            >
              {"<"} Back
            </Link>
          </p>
          <div className="bg-secondary p-6 rounded-b-xl">
            <div className="flex items-center">
              <Avatar className="mr-3 w-5 h-5" src={"/pfp.png"} />
              <p className="text-2xl font-bold font-sans tracking-normal">
                /portfolio
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 grid justify-center">
          <p>dam dis lookin empty</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;
