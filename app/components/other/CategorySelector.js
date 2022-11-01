import React, {useState} from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  AppButton
} from "react-native";

import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../texts/AppText";

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

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
    <TouchableHighlight activeOpacity={0.6} underlayColor={colors.gray} onPress={onPress}>
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
    </TouchableHighlight>
</>
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
    width: 35,
    height: 35
  },
  icon: {
    marginRight: 15,
  },
});

export default CategorySelector;
