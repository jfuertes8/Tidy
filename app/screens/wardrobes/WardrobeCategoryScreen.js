import React from "react";
import { FlatList, View, StyleSheet, Image } from "react-native";

import ListItemSeparator from "../../components/ListItemSeparator";
import CategorySelector from "../../components/CategorySelector";
import colors from "../../config/colors";
import ScreenTitle from "../../components/texts/ScreenTitle";
import AppText from "../../components/texts/AppText";

const categoriesList = [
  {
    id: 1,
    title: "Camisetas",
    subtitle: "4 elementos",
    image: require("../../assets/tshirticon.png"),
  },
  {
    id: 2,
    title: "Pantalones",
    subtitle: "3 elementos",
    image: require("../../assets/jeans.png"),
  },
  {
    id: 3,
    title: "Calcetines",
    subtitle: "1 elemento",
    image: require("../../assets/socks.png"),
  },
  {
    id: 4,
    title: "Bañadores",
    subtitle: "6 elementos",
    image: require("../../assets/shorts.png"),
  },
  {
    id: 5,
    title: "Camisas",
    subtitle: "3 elementos",
    image: require("../../assets/shirt.png"),
  },
  {
    id: 6,
    title: "Jerseys",
    subtitle: "5 elementos",
    image: require("../../assets/jumper.png"),
  },
];

function WardrobeCategoryScreen({ navigation, route }) {
  return (
    <>
      <View style={styles.bg}>
        <View style={styles.top}>
          <Image
            source={require("../../assets/wardrobeimg.png")}
            style={styles.image}
          />
          <ScreenTitle>{route.params?.title}</ScreenTitle>
          <AppText>{route.params?.location}</AppText>
        </View>
        <FlatList
          data={categoriesList}
          keyExtractor={(message) => message.id.toString()}
          renderItem={({ item }) => (
            <CategorySelector
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
              onPress={() => navigation.navigate("CategoryDetail", item)}
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
  top: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 170,
    height: 170,
  },
});

export default WardrobeCategoryScreen;
