import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../../config/colors";
import AppFormField from "../../components/forms/AppFormField";
import AppButton from "../../components/AppButton";
import CategorySelector from "../../components/CategorySelector";

function NewTripScreen(props) {
  return (
    <>
      <View style={styles.bg}>
        <View style={styles.formFields}>
          <Text style={styles.screenTitle}>Fly me to the moon...</Text>
          <Text style={styles.description}>
            Escribe el destino de tu próximo viaje y selecciona el armario de
            donde vas a sacar la ropa.
          </Text>
          <AppFormField
            text="Destino del viaje"
            placeholder="P. ej: Madrid, Canarias, Tokio..."
          />
          <View style={styles.wardrobeSelectorContainer}>
            <CategorySelector
              title="Selecciona un armario"
              subtitle="De aquí saldrá la ropa"
              icon="wardrobe"
            />
          </View>
        </View>
        <AppButton bgColor="primary" bdColor="primary" title="Siguiente" />
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
  screenTitle: {
    fontSize: 40,
    fontWeight: "700",
    marginBottom: 30,
  },
  description: {
    marginBottom: 20,
    fontSize: 15,
    lineHeight: 22,
  },
  formFields: {
    flex: 1,
  },
  wardrobeSelectorContainer: {
    width: "100%",
    backgroundColor: colors.gray,
    borderRadius: 8,
    marginVertical: 10,
  },
});

export default NewTripScreen;
