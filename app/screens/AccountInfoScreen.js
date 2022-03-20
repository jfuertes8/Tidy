import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";

function AccountInfoScreen(props) {
  return (
    <>
      <Screen>
        <View style={styles.bg}>
          <Text style={styles.registrationTitle}>Info de la cuenta</Text>
          <View style={styles.accountInfoContainer}>
            <Text style={styles.title}>Nombre de usuario</Text>
            <Text>javi_el_crack</Text>
          </View>
          <View style={styles.accountInfoContainer}>
            <Text style={styles.title}>Email</Text>
            <Text>javicrack94@gmail.com</Text>
          </View>
          <View style={styles.accountInfoContainer}>
            <Text style={styles.title}>Contraseña</Text>
            <Text>**********</Text>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Eliminar la cuenta</Text>
            <Text style={styles.sectionText}>
              Es una pena que te vayas, pero lo entenderé. Eso sí, perderás toda
              la información guardada.
            </Text>
            <Text style={{ color: "tomato" }}>Borrar cuenta</Text>
          </View>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    padding: 20,
  },
  registrationTitle: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 30,
  },
  accountInfoContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: colors.inputBorder,
    padding: 15,
    marginBottom: 20,
  },
  title: {
    fontWeight: "700",
  },
  sectionTitle: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: "700",
  },
  sectionText: {
    lineHeight: 25,
    marginBottom: 20,
  },
});

export default AccountInfoScreen;
