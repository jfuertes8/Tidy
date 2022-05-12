import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../../config/colors";
import ButtonText from "../texts/ButtonText";

function AppButton({ title, bgColor, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.button, { backgroundColor: colors[bgColor] }]}>
        <ButtonText style={styles.buttonText}>{title}</ButtonText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default AppButton;
