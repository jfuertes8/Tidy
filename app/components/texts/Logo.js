import React from "react";
import { Text, StyleSheet } from "react-native";

import { Spartan_700Bold } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import colors from "../../config/colors";

function Logo({ marginVertical }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Text style={[styles.logo, { marginVertical: marginVertical }]}>Tidy.</Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    color: colors.primary,
    fontFamily: "Spartan_700Bold",
  },
});

export default Logo;
