import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import Logo from "../texts/Logo";
import ScreenTitle from "../texts/ScreenTitle";

function LandingHeader({ onPress, title, icon }) {
  return (
    <View style={styles.landingHeader}>
      <View style={styles.headerLeft}>
        <Logo marginVertical={10} />
        <ScreenTitle marginBottom={20}>{title}</ScreenTitle>
      </View>
      {icon && (
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={styles.roundNewButton}>
            <MaterialCommunityIcons
              name="plus"
              size={24}
              color={colors.white}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  landingHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeft: {
    flex: 1,
  },
  roundNewButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LandingHeader;
