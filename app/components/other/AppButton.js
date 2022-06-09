import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

import colors from "../../config/colors";
import ButtonText from "../texts/ButtonText";

function AppButton({
  title,
  bgColor,
  onPress,
  textColor,
  borderColor = bgColor,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.button,
          {
            backgroundColor: colors[bgColor],
            borderColor: colors[borderColor],
          },
        ]}
      >
        <ButtonText style={styles.buttonText} color={textColor}>
          {title}
        </ButtonText>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 45,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
  },
});

export default AppButton;
