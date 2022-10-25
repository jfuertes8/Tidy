import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import colors from "../../config/colors";

function AppText({
  children,
  marginBottom,
  color = "black",
  fontSize = 12,
  textAlign,
}) {

  const[fontsLoaded] = useFonts({
    RegularText: require('../../assets/fonts/Poppins-Regular.ttf')
  })

  return (
    <Text
      style={[
        styles.text,
        {
          marginBottom: marginBottom,
          color: colors[color],
          fontSize: fontSize,
          textAlign: textAlign,
        },
      ]}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'RegularText',
    lineHeight: 22,
  },
});

export default AppText;
