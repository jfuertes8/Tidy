import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Text,
  Platform,
  StatusBar,
} from "react-native";

import AppText from "../texts/AppText";
import AppButton from "./AppButton";
import Screen from "./Screen";
import { Feather } from "@expo/vector-icons";
import colors from "../../config/colors";
import { NavigationContainer } from "@react-navigation/native";

function CardAction({
  title,
  icon,
  bgColor = "white",
  textColor = "black",
  action,
  onPress,
  navigation,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  if (action == 2) {
    onPress = () => setModalVisible(true);
  } else if (action == 1) {
    onPress = () => navigation.navigate("NewWardrobe");
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.option, { backgroundColor: colors[bgColor] }]}>
          <Feather name={icon} size={20} color={textColor} />
          <AppText fontSize={8} color={textColor}>
            {title}
          </AppText>
        </View>
      </TouchableWithoutFeedback>
      <Modal transparent visible={modalVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.top}></View>
          </TouchableWithoutFeedback>
          <View style={styles.bottom}>
            <Feather
              name="trash-2"
              size={25}
              color={colors.black}
              style={styles.optionIcon}
            />
            <Text style={styles.modalTitle}>¿Estas seguro?</Text>
            <Text style={styles.modalText}>
              No podrás deshacer está acción, así que asegurate de que quieres
              eliminarlo.
            </Text>
            <View style={styles.buttons}>
              <View style={styles.buttonContainer}>
                <AppButton
                  onPress={() => console.log("eliminar")}
                  title="Eliminar"
                  bgColor="danger"
                />
              </View>
              <View style={styles.buttonContainer}>
                <AppButton
                  onPress={() => setModalVisible(false)}
                  title="Volver"
                  bgColor="white"
                  textColor="black"
                  borderColor="darkgray"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  option: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
    borderRadius: 8,
    padding: 8,
  },
  optionIcon: {
    marginRight: 5,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(52, 52, 52, 0.8)",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  top: {
    flex: 1,
    backgroundColor: "yellow",
  },
  bottom: {
    alignItems: "center",
    padding: 20,
    borderRadius: 8,
    backgroundColor: colors.white,
    width: "100%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "900",
    marginVertical: 10,
  },
  modalText: {
    textAlign: "center",
    marginVertical: 10,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
  },
  buttonContainer: {
    width: "50%",
    padding: 5,
  },
});

export default CardAction;
