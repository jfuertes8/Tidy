import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import colors from "../../config/colors";

function ScreenTitle({ children, marginBottom, color = "black" }) {

  const[fontsLoaded] = useFonts({
    SemiBoldText: require('../../assets/fonts/Poppins-SemiBold.ttf')
  })

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
    fontFamily:'SemiBoldText',
    fontSize: 22,
  },
});

export default ScreenTitle;
