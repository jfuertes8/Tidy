import React from "react";
import { Text, StyleSheet } from "react-native";

import { Spartan_700Bold } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import colors from "../../config/colors";

function ScreenTitle({ children, marginBottom, color = "black" }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_700Bold,
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
    fontSize: 25,
    fontFamily: "Spartan_700Bold",
  },
});

export default ScreenTitle;
