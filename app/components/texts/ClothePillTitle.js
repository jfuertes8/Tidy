import React from "react";
import { Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import colors from "../../config/colors";


function ClothePillTitle({ children, marginVertical = 10 }) {

  const[fontsLoaded] = useFonts({
    BoltText: require('../../assets/fonts/Poppins-Bold.ttf')
  })

  return (
    <Text style={[styles.text, { marginTop: marginVertical }]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'BoldText',
    color: colors.black,
    fontSize: 14,
  },
});

export default ClothePillTitle;
