import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./texts/AppText";
import CardTitle from "./texts/CardTitle";

function Card({ title, subtitle, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <View style={styles.cardInfoContainer}>
          <CardTitle>{title}</CardTitle>
          <View style={styles.locationContainer}>
            <MaterialCommunityIcons name="map-marker" style={styles.icon} />
            <AppText color="darkgray">{subtitle}</AppText>
          </View>
          <View style={styles.options}>
            <TouchableWithoutFeedback>
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={25}
                style={styles.deleteIcon}
              />
            </TouchableWithoutFeedback>
            <MaterialCommunityIcons name="square-edit-outline" size={25} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginRight: 20,
    overflow: "hidden",
  },
  image: {
    height: 110,
    width: "100%",
  },
  cardInfoContainer: {
    padding: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 15,
  },
  icon: {
    marginRight: 5,
  },
  options: {
    flexDirection: "row",
  },
  deleteIcon: {
    marginRight: 20,
  },
});

export default Card;
