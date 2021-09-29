import React from "react";

import { ThemeProvider } from "styled-components/native";
import {
    useFonts,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";

import CategorySelect from "./src/screens/CategorySelect";

import theme from "./src/global/styles/theme";

export default function App() {
    const [fontsLoad] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold,
    });
    if (!fontsLoad) {
        return <AppLoading />;
    }
    return (
        <ThemeProvider theme={theme}>
            <CategorySelect />
        </ThemeProvider>
    );
}
