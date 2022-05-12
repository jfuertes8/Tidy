import React from "react";
import { View, StyleSheet, Image } from "react-native";

import colors from "../config/colors";
import AppText from "./texts/AppText";
import AppButton from "./AppButton";

function EmptyState({ ctaText, onPress }) {
  return (
    <View style={styles.emptyStateContainer}>
      <View style={styles.whiteBox}>
        <View style={styles.emptyStateContent}>
          <Image
            source={require("../assets/empty-state.png")}
            style={styles.emptyStateImage}
          />
          <AppText>
            No tienes ningún armario todavía. Crea ya tu primer armario y
            empieza a llenarlo de ropa.
          </AppText>
        </View>
        <AppButton title={ctaText} bgColor="primary" onPress={onPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyStateContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  whiteBox: {
    width: "100%",
    borderRadius: 8,
    padding: 15,
    backgroundColor: colors.white,
  },
  emptyStateImage: {
    width: 60,
    height: 40,
    marginBottom: 10,
  },
  emptyStateContent: {
    alignItems: "center",
  },
});

export default EmptyState;
