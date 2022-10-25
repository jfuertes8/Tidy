import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

function CardTitle({ children }) {

  const[fontsLoaded] = useFonts({
    RegularText: require('../../assets/fonts/Poppins-Regular.ttf')
  })

  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'RegularText',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 5
  },
});

export default CardTitle;
