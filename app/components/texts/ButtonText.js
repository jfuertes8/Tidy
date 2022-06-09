import React from "react";
import { Text, StyleSheet } from "react-native";

import colors from "../../config/colors";

function ButtonText({ children, color = "white" }) {
  return (
    <Text style={[styles.text, { color: colors[color] }]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 15,
  },
});

export default ButtonText;
