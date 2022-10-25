import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import AppText from "../texts/AppText";
import { Feather } from "@expo/vector-icons";
import colors from "../../config/colors";

function CardAction({
  title,
  icon,
  bgColor = "white",
  textColor = "black",
  action,
  onPress,
  navigation,
}) {

  if (action == 2) {
    onPress = () => setModalVisible(true);
  } else if (action == 1) {
    onPress = () => navigation.navigate("NewWardrobe");
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.option, { backgroundColor: colors[bgColor] }]}>
          <Feather name={icon} size={20} color={textColor} />
          <AppText fontSize={8} color={textColor}>
            {title}
          </AppText>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  option: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 8,
    padding: 8,
  },
  optionIcon: {
    marginRight: 5,
  },
});

export default CardAction;
