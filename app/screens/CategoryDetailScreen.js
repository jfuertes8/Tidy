import React from "react";
import { View, FlatList, StyleSheet, Image, Text } from "react-native";

import ListItemSeparator from "../components/other/ListItemSeparator";
import CategorySelector from "../components/other/CategorySelector";
import colors from "../config/colors";
import AppText from "../components/texts/AppText";
import CardAction from "../components/other/CardAction";
import { SimpleLineIcons } from "@expo/vector-icons";

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
      <View style={styles.top}>
        <Image source={route.params?.image} style={styles.image} />
        <View>
          <Text style={styles.wardrobeName}>{route.params?.title}</Text>
          <View style={{ flexDirection: "row" }}>
            <SimpleLineIcons
              name="location-pin"
              size={18}
              color={colors.black}
              style={styles.locationIcon}
            />
            <Text>{route.params?.wardrobeName}</Text>
          </View>
        </View>
      </View>
      <View style={styles.cardOptions}>
        <CardAction title="Borrar" icon="trash-2" />
        <CardAction
          title="Añadir"
          icon="plus"
          bgColor={colors.black}
          textColor="white"
        />
      </View>
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
  top: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    paddingBottom: 0,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 70,
    marginBottom: 20,
    marginRight: 15,
    backgroundColor: colors.white,
  },
  wardrobeName: {
    fontWeight: "900",
    fontSize: 22,
    marginBottom: 8,
  },
  locationIcon: {
    marginRight: 5,
  },
  cardOptions: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    paddingTop: 0,
  },
});

export default CategoryDetailScreen;
