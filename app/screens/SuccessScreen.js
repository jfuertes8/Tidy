import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import AppButton from "../components/other/AppButton";
import colors from "../config/colors";
import AppText from "../components/texts/AppText";
import ScreenTitle from "../components/texts/ScreenTitle";

function SuccessScreen(props) {
  return (
    <View style={styles.bg}>
      <View style={styles.topElements}>
        <Image source={require("../assets/checked.png")} style={styles.icon} />
        <ScreenTitle marginBottom={20}>¡Enhorabuena!</ScreenTitle>
        <AppText textAlign="center">
          Has creado el armario con éxito. Puedes volver a la pantalla de
          armario para visualizarlo.
        </AppText>
        <Image
          source={require("../assets/successImage.jpg")}
          style={styles.image}
        />
      </View>
      <AppButton
        style={styles.button}
        bgColor="black"
        title="Ir a mis armarios"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
    backgroundColor: colors.success,
  },
  icon: {
    width: 60,
    height: 60,
    alignSelf: "center",
    marginVertical: 50,
  },
  topElements: {
    position: "absolute",
    top: 20,
    left: 20,
    alignItems: "center",
  },
  image: {
    width: 290,
    height: 290,
    marginVertical: 60,
  },
});

export default SuccessScreen;
