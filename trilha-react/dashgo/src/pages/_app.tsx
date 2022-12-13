import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContent";

import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}
