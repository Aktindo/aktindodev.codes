import { Avatar } from "@nextui-org/react";
import Image from "next/image";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="grid items-center justify-center h-screen animate-pulse">
      <Image
        className="rounded-full"
        alt="Aktindo Logo"
        src="/pfp.png"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Loading;
