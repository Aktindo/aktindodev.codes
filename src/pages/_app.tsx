import "@/styles/globals.css";
import "animate.css";
import type { AppProps } from "next/app";

import { createTheme, NextUIProvider, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Loading from "@/components/loading";

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "#96d4e8",
      primaryLightHover: "#6dc2df",
      primaryLightActive: "#6dc2df",
      primaryLightContrast: "#6dc2df",
      primary: "#2CA1C8",
      primaryBorder: "#6dc2df",
      primaryBorderHover: "#6dc2df",
      primarySolidHover: "#6dc2df",
      primarySolidContrast: "$white",
      primaryShadow: "#6dc2df",

      background: "#242425",
      text: "#fff",

      secondary: "#282A2D",

      link: "#2CA1C8",
    },
    space: {},
    fonts: {},
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: any) => url !== router.asPath && setLoading(true);
    const handleComplete = (url: any) =>
      url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <NextUIProvider theme={theme}>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </NextUIProvider>
  );
}
