import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../texts/AppText";
import ErrorMessage from "./ErrorMessage";

function AppFormField({ icon, text, warning, visible, ...otherProps }) {

  return (
    <>
      <View style={styles.formInputField}>
        <View style={styles.textContainer}>
          {icon && (
            <MaterialCommunityIcons name={icon} size={15} style={styles.icon} />
          )}
          <AppText>{text}</AppText>
        </View>
        <TextInput {...otherProps} style={styles.input}></TextInput>
      </View>
      <View style={styles.warningMessage}>
        {warning && visible && <ErrorMessage warning={warning} />}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  formInputField: {
    width: "100%",
    height: 65,
    backgroundColor: colors.white,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    borderRadius: 10
  },
  textContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    alignSelf: "stretch",
  },
  warningMessage: {
    marginBottom: 15,
  },
});

export default AppFormField;
