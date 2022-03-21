import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import Screen from "../components/Screen";
import Logo from "../components/texts/Logo";
import ScreenTitle from "../components/texts/ScreenTitle";
import ListItemSeparator from "../components/ListItemSeparator";
import CategorySelector from "../components/CategorySelector";
import AppText from "../components/texts/AppText";

const settingsOptions = [
  {
    id: 1,
    title: "Mi cuenta",
    icon: "account-circle-outline",
    destScreen: "Account",
  },
  {
    id: 2,
    title: "Menciones",
    icon: "trophy-variant-outline",
    destScreen: "Credits",
  },
  {
    id: 3,
    title: "Cerrar sesión",
    icon: "logout",
    destScreen: "Login",
  },
];

function SettingsScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.bg}>
        <Logo marginVertical={10} />
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
                chevron={item.chevron}
                onPress={() => navigation.navigate(item.destScreen)}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          />
          <View style={styles.bottom}>
            <AppText>Versión de la app: 1.0.0</AppText>
          </View>
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
  body: { flex: 1 },
  bottom: {
    width: "100%",
    alignItems: "center",
  },
});

export default SettingsScreen;
