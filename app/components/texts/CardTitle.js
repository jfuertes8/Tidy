import React from "react";
import { Text, StyleSheet } from "react-native";

import { Spartan_500Medium } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function CardTitle({ children }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Spartan_500Medium",
    fontSize: 16,
  },
});

export default CardTitle;
