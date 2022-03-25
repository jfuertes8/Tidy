import React from "react";
import { View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../texts/AppText";
import colors from "../../config/colors";

function ErrorMessage({ warning }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="exclamation-thick"
        color={colors.danger}
        size={18}
      />
      <AppText color="danger" fontSize={12}>
        {warning}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ErrorMessage;
