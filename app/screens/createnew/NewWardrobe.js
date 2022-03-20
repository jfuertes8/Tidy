import React from "react";
import { StyleSheet, View, Image } from "react-native";
import AppButton from "../../components/AppButton";
import AppFormField from "../../components/forms/AppFormField";

import colors from "../../config/colors";

function NewWardrobe(props) {
  return (
    <>
      <View style={styles.bg}>
        <View style={styles.formFields}>
          <AppFormField
            placeholder="p. ej: Armario de casa..."
            text="Nombre del armario"
          />
          <AppFormField
            placeholder="p. ej: Madrid..."
            text="Ubicación del armario"
          />
          <Image
            source={require("../../assets/reading.jpg")}
            style={styles.image}
          />
        </View>
        <AppButton bgColor="primary" bdColor="primary" title="Crear armario" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  formFields: {
    flex: 1,
  },
  image: {
    alignSelf: "center",
  },
});

export default NewWardrobe;
