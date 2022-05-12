import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

function Screen({ children }) {
  return <SafeAreaView style={styles.bg}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
