import React from "react";
import { View, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../../components/texts/AppText";
import LinkText from "../../components/texts/LinkText";
import colors from "../../config/colors";

function CreditScreen(props) {
  return (
    <View style={styles.bg}>
      <View style={styles.top}>
        <MaterialCommunityIcons
          name="trophy-variant-outline"
          color={colors.black}
          size={80}
        />
      </View>
      <View style={styles.bottom}>
        <AppText>
          Menciones a los diseñadores de la iconografía empleada en esta
          aplicación, o quienes me han ayudado en la app:
        </AppText>
        <View style={styles.creditBlock}>
          <AppText marginBottom={15}>
            Freepik: {"\n"}Iconografía empleada en la pantalla de Login,
            Armarios, Categorías y Detalle de los viajes.
          </AppText>
          <LinkText>Más sobre Freepik</LinkText>
        </View>
        <View style={styles.creditBlock}>
          <AppText marginBottom={15}>
            Miguel Fuertes: {"\n"}Mi hermano que me ha ayudado con el
            funcionamiento de partes del código y la parte del back.
          </AppText>
          <LinkText>Conócele</LinkText>
        </View>
        <View style={styles.creditBlock}>
          <AppText marginBottom={15}>
            Otros: {"\n"}Lorem ipsum dolor sit amet.
          </AppText>
          <LinkText>Lorem Ipsum</LinkText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    padding: 20,
    flex: 1,
    backgroundColor: colors.gray,
  },
  top: {
    width: "100%",
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
  },
  creditBlock: {
    marginVertical: 15,
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 8,
  },
});

export default CreditScreen;
