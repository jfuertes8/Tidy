import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import colors from "../../config/colors";

function Screen({ children, color = 'white' }) {
  return <SafeAreaView style={[styles.bg, {backgroundColor: colors[color]}]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Screen;
