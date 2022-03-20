import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppFormField from "../../components/forms/AppFormField";

import AppButton from "../../components/AppButton";
import colors from "../../config/colors";
import ScreenTitle from "../../components/texts/ScreenTitle";
import AppText from "../../components/texts/AppText";

function NewUserScreen(props) {
  return (
    <>
      <View style={styles.bg}>
        <View style={styles.formFields}>
          <ScreenTitle marginBottom={20}>Nuevo usuario</ScreenTitle>
          <AppText marginBottom={20}>
            Rellena los campos a continuación para crearte una cuenta y empezar
            a gestionar tus armarios
          </AppText>
          <AppFormField
            placeholder="Nombre de usuario"
            text="Nombre de usuario"
          />
          <AppFormField placeholder="Email" text="Email" />
          <AppFormField
            placeholder="Por favor, que no sea 1234..."
            text="Contraseña"
          />
          <AppFormField
            placeholder="Clavadita a la anterior"
            text="Repite contraseña"
          />
        </View>
        <AppButton bgColor="primary" bdColor="primary" title="Crear" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    padding: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
  formFields: {
    flex: 1,
  },
});

export default NewUserScreen;
