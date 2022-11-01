import React, {useState} from "react";
import { View, Modal, StyleSheet, Image } from "react-native";

import Screen from "../../components/other/Screen";
import CategorySelector from "../../components/other/CategorySelector";
import AppText from "../../components/texts/AppText";
import AppButton from "../../components/other/AppButton";
import ScreenTitle from "../../components/texts/ScreenTitle";
import LandingHeader from "../../components/other/LandingHeader";
import colors from "../../config/colors";

const settingsOptions = [
  {
    id: 1,
    title: "Mi cuenta",
    icon: "account-circle-outline",
    destScreen: "Account",
  },
  {
    id: 2,
    title: "Menciones",
    icon: "trophy-variant-outline",
    destScreen: "Credits",
  },
  {
    id: 3,
    title: "Cerrar sesión",
    icon: "logout",
    destScreen: "Login",
  },
];

function SettingsScreen({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <Screen color='gray'>
        <View style={styles.bg}>
          <LandingHeader title="Ajustes" />
          <View style={styles.body}>
          <CategorySelector
                  title='Mi cuenta'
                  icon="account-circle-outline"
                  chevron
                  onPress={() => navigation.navigate("Account")}
                  marginBottom={20}
                />
          <CategorySelector
                  title='Menciones'
                  icon="trophy-variant-outline"
                  chevron
                  onPress={() => navigation.navigate("Credits")}
                  marginBottom={20}
                />
          <CategorySelector
                  title='Cerrar sesión'
                  icon="logout"
                  chevron
                  onPress={() => setModalVisible(true)}
                />
            <View style={styles.bottom}>
              <AppText>Versión de la app: 1.0.0</AppText>
            </View>
          </View>
        </View>
      </Screen>

      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modal}>
          <View style={styles.modalTop}>
            <ScreenTitle>¿Estas seguro?</ScreenTitle>
            <AppText>Entendemos que tienes otras cosas que hacer. Esperamos verte de vuelta.</AppText>
            <Image source={require('../../assets/logout_image.png')} style={styles.image}/>
          </View>
          <AppButton bgColor="primary" title="Cerrar sesión" onPress={() => navigation.navigate("Login")}></AppButton>
          <AppButton title="Volver" textColor="black" onPress={() => setModalVisible(false)}></AppButton>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.gray
  },
  body: { flex: 1 },
  bottom: {
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  modal: {
    padding: 20
  },
  image: {
    height: 310,
    width: 175,
    alignSelf: 'center',
    marginVertical: 20
  }
});

export default SettingsScreen;
