import React from "react";
import { View, StyleSheet, FlatList, Image } from "react-native";

import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import CategorySelector from "../components/CategorySelector";
import ListItemSeparator from "../components/ListItemSeparator";
import SectionTitle from "../components/texts/SectionTitle";
import ScreenTitle from "../components/texts/ScreenTitle";
import AppText from "../components/texts/AppText";

const categoriesList = [
  {
    id: 1,
    title: "Camisetas",
    subtitle: "4 elementos",
    image: require("../assets/tshirticon.png"),
  },
  {
    id: 2,
    title: "Pantalones",
    subtitle: "3 elementos",
    image: require("../assets/jeans.png"),
  },
  {
    id: 3,
    title: "Calcetines",
    subtitle: "1 elemento",
    image: require("../assets/socks.png"),
  },
  {
    id: 4,
    title: "Bañadores",
    subtitle: "6 elementos",
    image: require("../assets/shorts.png"),
  },
  {
    id: 5,
    title: "Camisas",
    subtitle: "3 elementos",
    image: require("../assets/shirt.png"),
  },
];

function TripDetailScreen({ route }) {
  const trip = route.params;

  return (
    <View style={styles.bg}>
      <View style={styles.tripTicketContainer}>
        <Image source={require("../assets/lugagge.png")} style={styles.image} />
        <View style={styles.tripTicketInfo}>
          <AppText style={styles.dates}>{trip.date}</AppText>
          <View style={styles.cities}>
            <View style={styles.section}>
              <ScreenTitle>{trip.originShort}</ScreenTitle>
              <AppText>{trip.origin}</AppText>
            </View>
            <View style={styles.section}>
              <Ionicons name="ios-airplane-sharp" size={20} color="black" />
            </View>
            <View style={styles.section}>
              <ScreenTitle>{trip.destShort}</ScreenTitle>
              <AppText>{trip.dest}</AppText>
            </View>
          </View>
          {trip.active && (
            <View style={styles.tag}>
              <AppText color="white">Activo</AppText>
            </View>
          )}
        </View>
      </View>
      <View style={styles.sectionTitle}>
        <SectionTitle marginBottom={0}>Tu ropa en este viaje</SectionTitle>
      </View>
      <FlatList
        data={categoriesList}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <CategorySelector
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  tripTicketContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  tripTicketInfo: {
    width: "100%",
    alignItems: "center",
  },
  dates: {
    marginBottom: 25,
  },
  cities: {
    flexDirection: "row",
    width: 300,
    marginVertical: 20,
  },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sectionTitle: {
    width: "100%",
    padding: 15,
  },
  tag: {
    padding: 5,
    width: 80,
    borderRadius: 100,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TripDetailScreen;
