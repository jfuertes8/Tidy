import React, { useState } from "react";
import { FlatList, View, StyleSheet, Image, Text } from "react-native";

import ListItemSeparator from "../../components/other/ListItemSeparator";
import CategorySelector from "../../components/other/CategorySelector";
import colors from "../../config/colors";
import SectionTitle from "../../components/texts/SectionTitle";
import AppButton from "../../components/other/AppButton";
import EmptyState from "../../components/other/EmptyState";
import { SimpleLineIcons } from "@expo/vector-icons";
import CardAction from "../../components/other/CardAction";

const categoriesList = [
  {
    id: 1,
    title: "Camisetas",
    subtitle: "4 elementos",
    image: require("../../assets/tshirticon.png"),
    wardrobeName: "Armario de Madrid",
  },
  {
    id: 2,
    title: "Pantalones",
    subtitle: "3 elementos",
    image: require("../../assets/jeans.png"),
    wardrobeName: "Armario de Madrid",
  },
  {
    id: 3,
    title: "Calcetines",
    subtitle: "1 elemento",
    image: require("../../assets/socks.png"),
    wardrobeName: "Armario de Madrid",
  },
  {
    id: 4,
    title: "Bañadores",
    subtitle: "6 elementos",
    image: require("../../assets/shorts.png"),
    wardrobeName: "Armario de Madrid",
  },
  {
    id: 5,
    title: "Camisas",
    subtitle: "3 elementos",
    image: require("../../assets/shirt.png"),
    wardrobeName: "Armario de Madrid",
  },
  {
    id: 6,
    title: "Jerseys",
    subtitle: "5 elementos",
    image: require("../../assets/jumper.png"),
    wardrobeName: "Armario de Madrid",
  },
];

function WardrobeCategoryScreen({ navigation, route }) {
  return (
    <>
      <View style={styles.bg}>
        <View style={styles.top}>
          <Image
            source={require("../../assets/login-bg.png")}
            style={styles.image}
          />
          <View>
            <Text style={styles.wardrobeName}>{route.params?.title}</Text>
            <View style={{ flexDirection: "row" }}>
              <SimpleLineIcons
                name="location-pin"
                size={18}
                color={colors.black}
                style={styles.locationIcon}
              />
              <Text>{route.params?.location}</Text>
            </View>
          </View>
        </View>
        <View style={styles.cardOptions}>
          <CardAction title="Editar" icon="edit-2" />
          <CardAction title="Borrar" icon="trash-2" />
          <CardAction
            title="Añadir"
            icon="plus"
            bgColor={colors.black}
            textColor="white"
          />
        </View>
        <View style={styles.sectionTitle}>
          <SectionTitle>Tu ropa en este armario</SectionTitle>
        </View>
        {/*<View style={{ flex: 1, paddingHorizontal: 20 }}>
          <EmptyState
            ctaText="Nueva Ropa"
            onPress={() => console.log("new clothe tapped")}
          />
          </View>*/}
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
  sectionTitle: {
    marginLeft: 20,
  },
});

export default WardrobeCategoryScreen;
