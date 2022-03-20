import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./texts/AppText";
import CardTitle from "./texts/CardTitle";

function CategorySelector({
  title,
  subtitle,
  image,
  icon,
  onPress,
  chevron = true,
  bgColor = "white",
  marginBottom,
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.categoryContainer,
          { backgroundColor: bgColor, marginBottom: marginBottom },
        ]}
      >
        {icon && (
          <MaterialCommunityIcons name={icon} size={20} style={styles.icon} />
        )}
        {image && <Image source={image} style={styles.image} />}
        <View style={styles.textContainer}>
          <AppText style={styles.title}> {title} </AppText>
          {subtitle && <AppText color="darkgray"> {subtitle}</AppText>}
        </View>
        {chevron && (
          <MaterialCommunityIcons
            name="chevron-right"
            size={20}
            color={colors.primary}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  categoryContainer: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontWeight: "700",
  },
  image: {
    marginRight: 15,
  },
  icon: {
    marginRight: 15,
  },
});

export default CategorySelector;
