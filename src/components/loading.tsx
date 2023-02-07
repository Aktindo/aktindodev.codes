import { Loading as Loader } from "@nextui-org/react";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="grid items-center justify-center h-screen">
      <Loader size="md" />
    </div>
  );
};

export default Loading;
