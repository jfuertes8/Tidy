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
                <View style={styles.actions}>
                  <View style={styles.actionBlock}>
                    <Feather name="edit-2" size={18} style={styles.editIcon} />
                  </View>
                  <View style={styles.actionBlock}>
                    <Feather name="trash-2" size={18} />
                  </View>
                </View>
              </View>
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: (Dimensions.get('window').width - 20) / 2 - 5,
    marginBottom: 15,
    height: (Dimensions.get('window').width - 20) / 1.8,
    backgroundColor: colors.gray,
    borderRadius: 8,
    padding: 8
  },
  image: {
    flex: 1,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.darkgray
  },
  actions: {
    flexDirection: 'row',
  },
  actionBlock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CategorySelector;
