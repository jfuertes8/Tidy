import React from "react";
import { Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import { Spartan_700Bold } from "@expo-google-fonts/spartan";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import colors from "../../config/colors";

function LinkText({ children, onPress, marginLeft }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={[styles.text, { marginLeft: marginLeft }]}>{children}</Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.primary,
    fontFamily: "Spartan_700Bold",
  },
});

export default LinkText;
