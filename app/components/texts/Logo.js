import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import colors from "../../config/colors";

function Logo({ marginVertical }) {

  const[fontsLoaded] = useFonts({
    BoldText: require('../../assets/fonts/Poppins-Bold.ttf')
  })

  return (
    <Text style={[styles.logo, { marginVertical: marginVertical }]}>Tidy.</Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontFamily: 'BoldText',
    fontSize: 30,
    color: colors.primary,
  },
});

export default Logo;
