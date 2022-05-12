import React from "react";
import { Text, StyleSheet } from "react-native";

import { Spartan_500Medium } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";
import colors from "../../config/colors";

function ScreenTitle({ children, marginBottom, color = "black" }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_500Medium,
  });

  return (
    <Text
      style={[
        styles.text,
        { marginBottom: marginBottom, color: colors[color] },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    fontFamily: "Spartan_500Medium",
  },
});

export default ScreenTitle;
