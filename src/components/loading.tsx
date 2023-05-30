"use client";

import { Avatar, Progress } from "@nextui-org/react";
import Image from "next/image";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Progress
        className="rounded-none"
        indeterminated
        striped
        size="sm"
        color="primary"
        status="primary"
      />
      <div className="grid h-full items-center bg-primary justify-center">
        <Image
          className="rounded-full"
          alt="Aktindo Logo"
          src="/pfp.png"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Loading;
