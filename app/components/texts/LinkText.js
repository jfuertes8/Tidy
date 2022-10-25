import React from "react";
import { Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { useFonts } from "expo-font";


import colors from "../../config/colors";

function LinkText({ children, onPress, marginLeft, color = "primary" }) {

  const[fontsLoaded] = useFonts({
    RegularText: require('../../assets/fonts/Poppins-Regular.ttf')
  })

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text
        style={[styles.text, { marginLeft: marginLeft, color: colors[color] }]}
      >
        {children}
      </Text>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    color: colors.primary,
    fontFamily: 'RegularText'
  },
});

export default LinkText;
