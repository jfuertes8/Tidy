import React from "react";
import { Text, StyleSheet } from "react-native";

import { Spartan_700Bold } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";
import colors from "../../config/colors";

function ButtonText({ children }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_700Bold,
  });

  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Spartan_700Bold",
    color: colors.white,
    fontSize: 15,
  },
});

export default ButtonText;
