import React from "react";
import { View, StyleSheet } from "react-native";

import CategorySelector from "../../components/CategorySelector";
import AppFormField from "../../components/forms/AppFormField";
import AppButton from "../../components/AppButton";
import colors from "../../config/colors";

function NewClotheScreen(props) {
  return (
    <View style={styles.bg}>
      <View style={styles.top}>
        <View style={styles.textInputs}>
          <AppFormField
            placeholder="P. ej: chaqueta a rayas..."
            text="Nombre de la ropa"
          />
          <AppFormField
            placeholder="La que me regalo mi tía..."
            text="Descripción breve (opcional)"
          />
        </View>
        <CategorySelector
          title="Selecciona armario"
          icon="wardrobe"
          bgColor={colors.pickerColor}
          marginBottom={20}
        />

        <CategorySelector
          title="Selecciona categoria"
          icon="format-list-bulleted-type"
          bgColor={colors.pickerColor}
        />
      </View>

      <AppButton bgColor="primary" bdColor="primary" title="Crear" />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  top: {
    flex: 1,
  },
  textInputs: {
    marginBottom: 25,
  },
});

export default NewClotheScreen;
