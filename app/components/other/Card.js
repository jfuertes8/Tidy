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
import CardAction from "./CardAction";

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
        <CardAction title="Editar" icon="edit-2" action={1} />
        <CardAction title="Borrar" icon="trash-2" action={2} />
        <CardAction
          title="Añadir"
          icon="plus"
          bgColor={colors.black}
          textColor="white"
          action={3}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: colors.gray,
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
});

export default Card;
