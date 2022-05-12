import React from "react";
import { Text, StyleSheet } from "react-native";

import { Spartan_600SemiBold } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";

function CardTitle({ children }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_600SemiBold,
  });

  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Spartan_600SemiBold",
    fontSize: 15,
    lineHeight: 24,
  },
});

export default CardTitle;
