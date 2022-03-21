import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

import colors from "../../config/colors";
import ListItemSeparator from "../../components/ListItemSeparator";
import CategorySelector from "../../components/CategorySelector";
import AppText from "../../components/texts/AppText";
import ScreenTitle from "../../components/texts/ScreenTitle";
import Screen from "../../components/Screen";
import Logo from "../../components/texts/Logo";

const createOptions = [
  {
    id: 1,
    title: "Nuevo armario",
    icon: "wardrobe-outline",
    destScreen: "NewWardrobe",
  },
  {
    id: 2,
    title: "Nueva ropa",
    icon: "tshirt-crew-outline",
    destScreen: "NewClothe",
  },
  {
    id: 3,
    title: "Nuevo viaje",
    icon: "airplane-takeoff",
    destScreen: "NewTrip",
  },
];

function CreateNewSelectorScreen({ navigation }) {
  return (
    <>
      <Screen>
        <View style={styles.bg}>
          <View style={styles.introTextContainer}>
            <Logo marginVertical={10} />
            <ScreenTitle marginBottom={15}>Crear nuevo...</ScreenTitle>
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
      </Screen>
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
