import React from "react";
import { View, ImageBackground, StyleSheet, ScrollView } from "react-native";

import AppText from "../components/texts/AppText";
import LinkText from "../components/texts/LinkText";
import SectionTitle from "../components/texts/SectionTitle";
import colors from "../config/colors";

function MyAccountScreen(props) {
  return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <ImageBackground
          source={require("../assets/man.png")}
          style={styles.avatar}
        />

        <AppText>Javier</AppText>
        <AppText color="darkgray">javier@email.com</AppText>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.bottom}>
          <View style={styles.accBlock}>
            <SectionTitle marginBottom={10}>Datos de la cuenta</SectionTitle>
            <View style={styles.creditBlock}>
              <AppText marginBottom={15}>
                Nombre de usuario {"\n"}javi_el_crack_94
              </AppText>
              <LinkText>Cambiar</LinkText>
            </View>
            <View style={styles.creditBlock}>
              <AppText marginBottom={15}>Email {"\n"}javier@email.com</AppText>
              <LinkText>Cambiar</LinkText>
            </View>
            <View style={styles.creditBlock}>
              <AppText marginBottom={15}>Contraseña {"\n"}**********</AppText>
              <LinkText>Cambiar</LinkText>
            </View>
          </View>
          <SectionTitle marginBottom={10}>Eliminar cuenta</SectionTitle>
          <View style={styles.creditBlock}>
            <AppText marginBottom={15}>
              ¿Estas seguro de que deseas eliminar tu cuenta? Toda la
              información se borrará.
            </AppText>
            <LinkText color="danger">Si, borrar</LinkText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
  },
  header: {
    width: "100%",
    alignItems: "center",
    marginBottom: 15,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  bottom: {
    flex: 1,
  },
  accBlock: {
    marginBottom: 20,
  },
  creditBlock: {
    marginVertical: 10,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 8,
  },
});

export default MyAccountScreen;
