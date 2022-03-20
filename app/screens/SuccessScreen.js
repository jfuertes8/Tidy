import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/colors";

function SuccessScreen(props) {
  return (
    <View style={styles.bg}>
      <View style={styles.topElements}>
        <Text style={styles.successTitle}>¡Olé! Todo un éxito</Text>
        <Text style={styles.subtitle}>
          Has creado el viaje con éxito. Ya puedes consultarlo y editarlo desde
          el apartado de viajes.
        </Text>
        <Image
          source={require("../assets/success-luggage.png")}
          style={styles.image}
        />
      </View>
      <AppButton
        style={styles.button}
        bgColor="primary"
        bdColor="primary"
        title="Ir a mis viajes"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
    backgroundColor: colors.gray,
  },
  button: {
    position: "absolute",
    left: 20,
    bottom: 20,
  },
  successTitle: {
    fontSize: 55,
    color: "#2AC940",
    width: 200,
  },
  subtitle: {
    marginVertical: 20,
    fontSize: 17,
    lineHeight: 27,
    marginBottom: 50,
  },
  topElements: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  image: {
    alignSelf: "center",
  },
});

export default SuccessScreen;
