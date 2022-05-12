import React from "react";
import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../../components/texts/AppText";
import CategorySelector from "../../components/other/CategorySelector";
import colors from "../../config/colors";
import ListItemSeparator from "../../components/other/ListItemSeparator";
import Screen from "../../components/other/Screen";
import ScreenTitle from "../../components/texts/ScreenTitle";
import SectionTitle from "../../components/texts/SectionTitle";
import LandingHeader from "../../components/other/LandingHeader";

/*
        <FlatList
        style={styles.flatlist}
        data={activeTrip}
        keyExtractor={(card) => card.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            onPress={() => navigation.navigate("Viaje de veranito")}
          ></Card>
        )}
      />


        <View style={styles.emptyStateContainer}>
          <Image source={require("../assets/empty-state.png")} />
          <Text style={styles.emptyStateTitle}>Que vacío está esto...</Text>
          <Text style={styles.emptyStateText}>
            Parece que aún no has creado ningún viaje. Si ya tienes al menos un armario, puedes crear el primero
            mediante el botón + más abajo.
          </Text>
        </View>
*/

const activeTrip = {
  id: 1,
  date: "13 Abril - 17 Abril",
  origin: "Madrid",
  originShort: "MAD",
  dest: "Tokio",
  destShort: "TOK",
  active: true,
};

const pastTrips = [
  {
    id: 1,
    title: "Madrid - Sevilla",
    date: "13 Abril - 17 Abril",
    origin: "Madrid",
    originShort: "MAD",
    dest: "Sevilla",
    destShort: "SEV",
  },
  {
    id: 2,
    title: "Madrid - Nueva York",
    date: "1 Abril - 18 Abril",
    origin: "Madrid",
    originShort: "MAD",
    dest: "Nueva York",
    destShort: "NYC",
  },
  {
    id: 3,
    title: "Madrid - Londres",
    date: "15 Marzo - 19 Marzo",
    origin: "Madrid",
    originShort: "MAD",
    dest: "Londres",
    destShort: "LON",
  },
  {
    id: 4,
    title: "Madrid - Valencia",
    date: "9 febrero - 11 febrero",
    origin: "Madrid",
    originShort: "MAD",
    dest: "Valencia",
    destShort: "VAL",
  },
];

function WardrobeLandingScreen({ navigation }) {
  return (
    <>
      <Screen>
        <View style={styles.bg}>
          <View style={styles.topSection}>
            <LandingHeader title="Tus Viajes" icon />
            <SectionTitle>Tu viaje activo</SectionTitle>
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("TripDetail", activeTrip)}
            >
              <View style={styles.activeTripCard}>
                <Image
                  source={require("../../assets/lugagge.png")}
                  style={styles.activeImage}
                />
                <View style={styles.tripData}>
                  <View style={styles.dataSection}>
                    <ScreenTitle color="white">
                      {activeTrip.originShort}
                    </ScreenTitle>
                    <AppText color="white">{activeTrip.origin}</AppText>
                  </View>
                  <View style={styles.dataSection}>
                    <Ionicons
                      name="ios-airplane-sharp"
                      size={20}
                      color={colors.black}
                    />
                  </View>
                  <View style={styles.dataSection}>
                    <ScreenTitle color="white">
                      {activeTrip.destShort}
                    </ScreenTitle>
                    <AppText color="white">{activeTrip.dest}</AppText>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <SectionTitle>Tus viajes anteriores</SectionTitle>
          </View>
          <View style={styles.section}>
            <FlatList
              data={pastTrips}
              keyExtractor={(card) => card.id.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <CategorySelector
                  title={item.title}
                  subtitle={item.date}
                  icon="calendar"
                  onPress={() => navigation.navigate("TripDetail", item)}
                />
              )}
              ItemSeparatorComponent={ListItemSeparator}
            />
          </View>
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.gray,
    flex: 1,
    justifyContent: "center",
  },
  activeTripCard: {
    width: "100%",
    height: 125,
    backgroundColor: colors.primary,
    marginBottom: 20,
    borderRadius: 8,
    flexDirection: "row",
    padding: 10,
    paddingRight: 20,
    alignItems: "center",
  },
  activeImage: {
    width: 85,
    height: 85,
  },
  tripData: {
    flexDirection: "row",
    flex: 1,
  },
  dataSection: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  emptyStateContainer: {
    width: "100%",
    alignItems: "center",
  },
  emptyStateTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 22,
    marginVertical: 10,
  },
  emptyStateText: {
    textAlign: "center",
    width: "85%",
    lineHeight: 22,
    marginBottom: 25,
  },
  topSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  section: {
    flex: 1,
  },
});

export default WardrobeLandingScreen;
