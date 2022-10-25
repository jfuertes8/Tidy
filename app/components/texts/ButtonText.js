import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import colors from "../../config/colors";

function ButtonText({ children, color = "white" }) {

  const[fontsLoaded] = useFonts({
    RegularText: require('../../assets/fonts/Poppins-Regular.ttf')
  })

  return (
    <Text style={[styles.text, { color: colors[color] }]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 15,
    fontFamily: 'RegularText'
  },
});

export default ButtonText;
