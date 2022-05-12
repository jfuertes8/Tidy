import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import AppText from "../texts/AppText";
import CardTitle from "../texts/CardTitle";

function Card({ title, subtitle, onPress, image }) {
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.cardInfo}>
          <Image
            source={require("../../assets/wardrobeimg.png")}
            style={styles.image}
          />
          <View style={{ flex: 1 }}>
            <CardTitle>{title}</CardTitle>
            <View style={styles.locationContainer}>
              <MaterialCommunityIcons name="map-marker" style={styles.icon} />
              <AppText color="darkgray">{subtitle}</AppText>
            </View>
          </View>
          <Feather name="chevron-right" size={16} color="black" />
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.cardOptions}>
        <View style={styles.option}>
          <Feather name="edit-2" size={18} color="black" />
        </View>
        <View style={styles.option}>
          <Feather name="plus" size={18} color="black" />
        </View>
        <View style={styles.option}>
          <Feather name="trash-2" size={18} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.white,
    borderRadius: 8,
    marginBottom: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
  cardInfo: {
    marginBottom: 15,
    padding: 20,
    paddingBottom: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  icon: {
    marginRight: 5,
  },
  cardOptions: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    paddingTop: 0,
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: colors.gray,
    borderRadius: 20,
    padding: 10,
  },
});

export default Card;
