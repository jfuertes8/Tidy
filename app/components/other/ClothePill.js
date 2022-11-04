import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback
} from "react-native";

import colors from "../../config/colors";
import { Feather } from "@expo/vector-icons";
import ClothePillTitle from "../texts/ClothePillTitle";

function CategorySelector({ image, title, onPress }) {
  return (
            <View style={styles.container}>
              <TouchableWithoutFeedback onPress={onPress}>
                <Image source={image} style={styles.image}/>
              </TouchableWithoutFeedback>
              <View>
                <ClothePillTitle style={styles.title}>{title}</ClothePillTitle>
              </View>
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 20) / 2 - 5,
    marginBottom: 15,
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 8,
  },
  image: {
    height: 100,
    width: '100%',
    borderRadius: 8
  },
});

export default CategorySelector;
