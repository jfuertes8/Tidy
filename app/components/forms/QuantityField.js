import React, {useState} from "react";
import { StyleSheet, View, Image, TouchableWithoutFeedback} from "react-native";

import colors from "../../config/colors";
import { AntDesign } from "@expo/vector-icons";
import AppText from "../texts/AppText";

function QuantityField({ }) {

  const [quantity, setQuantity] = useState(1)

  function reduceQuantity() {
    if (quantity >= 2) {
      setQuantity(quantity - 1)
    }
  }

  return (
        <View style={styles.container}>
          <View style={{flexDirection: 'row', flex: 1, alignItems: "center", justifyContent: "center"}}>
            <TouchableWithoutFeedback onPress={() => reduceQuantity()}>
              <View style={styles.quantifiers}>
                <AntDesign name="minus" />
              </View>
            </TouchableWithoutFeedback>

            <View style={{marginHorizontal: 20}}>
              <AppText fontSize={16}>{quantity}</AppText>
            </View>

            <TouchableWithoutFeedback onPress={() => setQuantity(quantity + 1)}>
              <View style={styles.quantifiers}>
                <AntDesign name="plus" />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 65,
    backgroundColor: colors.white,
    marginTop: 5,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 10,
    flexDirection: 'row'
  },
  quantifiers: {
    width: 30,
    height: 30,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default QuantityField;
