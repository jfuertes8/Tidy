import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppFormField from "../../components/forms/AppFormField";
import AppButton from "../../components/other/AppButton";
import AppText from "../../components/texts/AppText";
import ScreenTitle from "../../components/texts/ScreenTitle";
import colors from "../../config/colors";

function NewWardrobeScreen(props) {
  return (
    <View style={styles.container}>
      <ScreenTitle marginBottom={20}>Nuevo Armario</ScreenTitle>
      <View style={styles.inputs}>
        <View style={styles.card}>
          <View style={styles.stepCircle}>
            <AppText color="white">1</AppText>
          </View>
          <Image
            source={require("../../assets/signature.png")}
            style={styles.image}
          />
          <AppFormField
            text="Nombre del armario"
            placeholder="p. ej: Armario de casa..."
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.card}>
          <View style={styles.stepCircle}>
            <AppText color="white">2</AppText>
          </View>
          <Image
            source={require("../../assets/earth-globe.png")}
            style={styles.image}
          />
          <AppFormField
            text="Ubicación del armario"
            placeholder="p. ej: Madrid, León, Baño, Salón..."
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <AppButton bgColor="primary" title="Crear" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.gray,
  },
  card: {
    width: "100%",
    backgroundColor: colors.white,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  stepCircle: {
    width: 30,
    height: 30,
    backgroundColor: colors.black,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 75,
    height: 75,
    alignSelf: "center",
    marginBottom: 25,
  },
});

export default NewWardrobeScreen;
