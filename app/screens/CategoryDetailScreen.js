import React from "react";
import { View, FlatList, StyleSheet, Image } from "react-native";

import ListItemSeparator from "../components/other/ListItemSeparator";
import CategorySelector from "../components/other/CategorySelector";
import ScreenTitle from "../components/texts/ScreenTitle";
import colors from "../config/colors";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import AppText from "../components/texts/AppText";

const clothesList = [
  {
    id: 1,
    title: "Camiseta de rayas azules",
    subtitle: "4 elementos",
    image: require("../assets/tshirticon.png"),
  },
  {
    id: 2,
    title: "Camiseta verde Alemania",
    subtitle: "3 elementos",
    image: require("../assets/tshirticon.png"),
  },
  {
    id: 3,
    title: "Camiseta Mr. Meeseks y stormtrooper",
    subtitle: "1 elemento",
    image: require("../assets/tshirticon.png"),
  },
  {
    id: 4,
    title: "Camiseta Quiksilver",
    subtitle: "6 elementos",
    image: require("../assets/tshirticon.png"),
  },
];

function CategoryDetailScreen({ route }) {
  return (
    <View style={styles.bg}>
      <ImageBackground
        source={require("../assets/category-bg.png")}
        style={styles.header}
      >
        <ScreenTitle color="white">{route.params.title}</ScreenTitle>
        <View style={styles.elements}>
          <AppText color="white">{route.params.subtitle}</AppText>
        </View>
        <View style={styles.wardrobe}>
          <AppText color="white">Armario de casa</AppText>
        </View>
      </ImageBackground>
      <FlatList
        data={clothesList}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <CategorySelector
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            chevron={false}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.gray,
    flex: 1,
  },
  header: {
    width: "100%",
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  elements: {
    position: "absolute",
    left: 20,
    bottom: 20,
  },
  wardrobe: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});

export default CategoryDetailScreen;
