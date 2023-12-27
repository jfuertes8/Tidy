import React, {useState} from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Image } from "react-native";

import AppButton from "./AppButton";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/texts/AppText";
import ScreenTitle from "../texts/ScreenTitle";

function OptionButton({
  title,
  iconName,
  modal, 
  navigation
}) {

  const [modalVisible, setModalVisible] = useState(false)

  function buttonAction(modal) {
    if(modal) {
      setModalVisible(true)
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => buttonAction(modal)}>
        <View style={styles.option}>
          <MaterialCommunityIcons
            name={iconName}
            size={18}
            color={colors.black}
            style={styles.icon}
          />
          <AppText>{title}</AppText>
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType='slide'>
      <View style={styles.modal}>
        <View style={styles.modalTop}>
          <ScreenTitle>¿Estas seguro?</ScreenTitle>
          <AppText>Ten en cuenta que si borras el armario no lo podrás recuperar. ¿Quieres borrarlo de todas formas?</AppText>
          <Image source={require('../../assets/delete-image.jpg')} style={styles.modalImage}/>
        </View>
        <AppButton bgColor="danger" title="Borrar armario" onPress={() => setModalVisible(false)}></AppButton>
        <AppButton title="Volver" textColor="black" onPress={() => setModalVisible(false)}></AppButton>
      </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    padding: 5,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  },
  icon: {
    marginRight: 5,
  },
  modal: {
    padding: 20,
    height: '100%'
  },
  modalImage: {
    height: 300,
    width: 300,
    borderRadius: 150,
    alignSelf: 'center',
    marginTop: 75
  },
  modalTop: {
    flex: 1
  }
});

export default OptionButton;
