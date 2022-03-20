import React from "react";
import { Text, StyleSheet } from "react-native";

import { Spartan_500Medium } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import colors from "../../config/colors";

function AppText({ children, marginBottom, color = "black" }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
    fontSize: 14,
    fontFamily: "Spartan_500Medium",
    lineHeight: 22,
  },
});

export default AppText;
