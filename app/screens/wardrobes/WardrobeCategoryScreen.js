import React, { useState } from "react";
import { FlatList, View, StyleSheet, Image, Text } from "react-native";

import ListItemSeparator from "../../components/other/ListItemSeparator";
import CategorySelector from "../../components/other/CategorySelector";
import colors from "../../config/colors";
import SectionTitle from "../../components/texts/SectionTitle";
import EmptyState from "../../components/other/EmptyState";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardAction from "../../components/other/CardAction";
import ScreenTitle from '../../components/texts/ScreenTitle';
import AppText from "../../components/texts/AppText";

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
    title: "Accesorios",
    subtitle: "1 elemento",
    image: require("../../assets/tie.png"),
    wardrobeName: "Armario de Madrid",
  },
  {
    id: 4,
    title: "Calcetines",
    subtitle: "6 elementos",
    image: require("../../assets/socks.png"),
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
    title: "Mudas",
    subtitle: "5 elementos",
    image: require("../../assets/underwear.png"),
    wardrobeName: "Armario de Madrid",
  },
  {
    id: 7,
    title: "Faldas",
    subtitle: "5 elementos",
    image: require("../../assets/skirt.png"),
    wardrobeName: "Armario de Madrid",
  },
  {
    id: 8,
    title: "Guantes",
    subtitle: "5 elementos",
    image: require("../../assets/glove.png"),
    wardrobeName: "Armario de Madrid",
  },
];

function WardrobeCategoryScreen({ navigation, route }) {

  return (
    <>
      <View style={styles.bg}>
        <View style={{backgroundColor: colors[route.params?.color]}}>
          <View style={styles.top}>
            <Image
              source={route.params?.image}
              style={styles.image}
            />
            <View style={styles.titleLocation}>
              <ScreenTitle style={styles.wardrobeName}>{route.params?.title}</ScreenTitle>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={18}
                  color={colors.black}
                  style={styles.locationIcon}
                />
                <AppText>{route.params?.location}</AppText>
              </View>
            </View>
          </View>
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
                onPress={() => navigation.navigate("CategoryDetail", {
                  image: item.image,
                  title: item.title,
                  wardrobeName: item.wardrobeName,
                  color: route.params?.color})}
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
    backgroundColor: colors.white,
  },
  top: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    paddingBottom: 0,
    flexDirection: "row",
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  titleLocation: {
    alignSelf: "flex-start"
  },
  wardrobeName: {
    fontWeight: "600",
    fontSize: 22,
    marginBottom: 5,
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
    marginTop: 25
  },
});

export default WardrobeCategoryScreen;
