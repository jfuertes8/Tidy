import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";


function SectionTitle({ children, marginBottom = 18 }) {

  const[fontsLoaded] = useFonts({
    RegularText: require('../../assets/fonts/Poppins-Regular.ttf')
  })

  return (
    <Text style={[styles.text, { marginBottom: marginBottom }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'RegularText',
    fontSize: 16,
  },
});

export default SectionTitle;
