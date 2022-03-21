import React from "react";
import { View, FlatList, StyleSheet, ImageBackground } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/texts/AppText";
import ScreenTitle from "../components/texts/ScreenTitle";
import ListItemSeparator from "../components/ListItemSeparator";
import CategorySelector from "../components/CategorySelector";

const settingsOptions = [
  {
    id: 1,
    title: "Tu cuenta",
    icon: "account-circle-outline",
  },
  {
    id: 2,
    title: "Información de la App",
    icon: "cellphone-information",
  },
  {
    id: 3,
    title: "Menciones",
    icon: "trophy-variant-outline",
  },
  {
    id: 4,
    title: "Cerrar sesión",
    icon: "logout",
  },
];

function SettingsScreen(props) {
  return (
    <Screen>
      <View style={styles.bg}>
        <View style={styles.header}>
          <ImageBackground
            source={require("../assets/man.png")}
            style={styles.avatar}
          />
          <View style={styles.headerInfo}>
            <AppText>Javier</AppText>
            <AppText color="darkgray">javier@email.com</AppText>
          </View>
        </View>
        <View style={styles.body}>
          <ScreenTitle marginBottom={15}>Ajustes</ScreenTitle>
          <FlatList
            data={settingsOptions}
            keyExtractor={(card) => card.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CategorySelector
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    padding: 20,
  },
  header: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  body: { flex: 1 },
});

export default SettingsScreen;
