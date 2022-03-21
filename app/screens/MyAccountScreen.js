import React from "react";
import { View, ImageBackground, StyleSheet } from "react-native";

import AppText from "../components/texts/AppText";
import LinkText from "../components/texts/LinkText";
import ScreenTitle from "../components/texts/ScreenTitle";
import colors from "../config/colors";

function MyAccountScreen(props) {
  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <ImageBackground
          source={require("../assets/man.png")}
          style={styles.avatar}
        />
        <View style={styles.headerInfo}>
          <AppText>Javier</AppText>
          <AppText color="darkgray">javier@email.com</AppText>
        </View>
      </View>
      <View style={styles.bottom}>
        <ScreenTitle>Cuenta</ScreenTitle>
        <View style={styles.creditBlock}>
          <AppText marginBottom={15}>
            Nombre de usuario {"\n"}javi_el_crack_94
          </AppText>
          <LinkText>Cambiar</LinkText>
        </View>
        <View style={styles.creditBlock}>
          <AppText marginBottom={15}>
            Email {"\n"}javi_el_crack_94@email.com
          </AppText>
          <LinkText>Cambiar</LinkText>
        </View>
        <View style={styles.creditBlock}>
          <AppText marginBottom={15}>Contraseña {"\n"}**********</AppText>
          <LinkText>Cambiar</LinkText>
        </View>
        <ScreenTitle>Eliminar cuenta</ScreenTitle>
        <View style={styles.creditBlock}>
          <AppText marginBottom={15}>
            ¿Estas seguro de que deseas eliminar tu cuenta? Toda la información
            se borrará.
          </AppText>
          <LinkText color="danger">Si, borrar</LinkText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    padding: 20,
    flex: 1,
  },
  header: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  bottom: {
    flex: 1,
  },
  creditBlock: {
    marginVertical: 10,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 8,
  },
});

export default MyAccountScreen;
