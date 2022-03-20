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
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 100,
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
  },
  image: {
    height: 75,
    width: 75,
  },
  cardInfoContainer: {
    padding: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
});

export default Card;
