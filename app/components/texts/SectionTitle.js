import React from "react";
import { Text, StyleSheet } from "react-native";

import { Spartan_600SemiBold } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

function SectionTitle({ children, marginBottom = 18 }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_600SemiBold,
  });

  return (
    <Text style={[styles.text, { marginBottom: marginBottom }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Spartan_600SemiBold",
    fontSize: 16,
  },
});

export default SectionTitle;
