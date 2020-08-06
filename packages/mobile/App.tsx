import React from "react";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import {
  Archivo_400Regular,
  Archivo_700Bold,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

const App: React.FC = () => {
  const [isLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <React.Fragment>
      <StatusBar style="light" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </React.Fragment>
  );
};

export default App;
