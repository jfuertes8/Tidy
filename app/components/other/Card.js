import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";

import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../texts/AppText";
import CardTitle from "../texts/CardTitle";

function Card({ title, subtitle, onPress, image, bgColor, locationColor, clothesCount }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.card, {backgroundColor: colors[bgColor]}]}>
          <View style={styles.cardInfo}>
            <Image
              source={image}
              style={styles.image}
            />
              <CardTitle>{title}</CardTitle>
              <AppText>{clothesCount} prendas</AppText>
              <View style={[styles.locationContainer, {backgroundColor: colors[locationColor]}]}>
                <MaterialCommunityIcons name="map-marker" style={styles.icon} size={15} />
                  <AppText>{subtitle}</AppText>
              </View>
          </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    width: (Dimensions.get('window').width - 20) / 2 - 5,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
  },
  image: {
    width: 30,
    height: 30,
    marginBottom: 20,
  },
  locationContainer: {
    width: '100%',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  icon: {
    flex: 1,
    marginRight: 5,
  },
});

export default Card;
