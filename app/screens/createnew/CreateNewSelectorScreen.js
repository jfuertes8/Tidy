import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import colors from "../../config/colors";
import ListItemSeparator from "../../components/ListItemSeparator";
import CategorySelector from "../../components/CategorySelector";
import AppText from "../../components/texts/AppText";

const createOptions = [
  {
    id: 1,
    title: "Nuevo armario",
    icon: "wardrobe",
    destScreen: "Nuevo armario",
  },
  {
    id: 2,
    title: "Nueva ropa",
    icon: "tshirt-crew-outline",
    destScreen: "Nueva ropa",
  },
  {
    id: 3,
    title: "Nuevo viaje",
    icon: "bag-checked",
    destScreen: "Nuevo viaje",
  },
];

function CreateNewSelectorScreen({ navigation }) {
  return (
    <>
      <View style={styles.bg}>
        <View style={styles.introTextContainer}>
          <AppText>
            Crea un nuevo armario para guardar tu ropa, nueva ropa para tu
            armario, o un viaje para llevartela en tu proxima aventura.
          </AppText>
        </View>
        <FlatList
          data={createOptions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CategorySelector
              title={item.title}
              image={item.image}
              icon={item.icon}
              onPress={() => navigation.navigate(item.destScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  introTextContainer: {
    padding: 20,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
});

export default CreateNewSelectorScreen;
