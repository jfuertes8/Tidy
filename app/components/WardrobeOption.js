import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import AppText from "./texts/AppText";

function WardrobeOption({ text, icon, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.option}>
        <View style={styles.optionIcon}>
          <MaterialCommunityIcons name={icon} size={20} color={colors.white} />
        </View>
        <AppText fontSize={11}>{text}</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  option: {
    alignItems: "center",
    width: 85,
  },
  optionIcon: {
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WardrobeOption;
