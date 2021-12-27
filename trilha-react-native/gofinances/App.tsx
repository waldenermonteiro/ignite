import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";

import { AuthProvider, useAuth } from "./src/hooks/auth";

import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import AppLoading from "expo-app-loading";

import Routes from "./src/routes";

import theme from "./src/global/styles/theme";

import "intl";
import "intl/locale-data/jsonp/pt-BR";

export default function App() {
  const [fontsLoad] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const { userStoragedLoading } = useAuth();
  
  if (!fontsLoad || userStoragedLoading) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={"light-content"} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  );
}
