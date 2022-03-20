import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";

import CategorySelector from "../components/CategorySelector";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import ScreenTitle from "../components/texts/ScreenTitle";
import AppText from "../components/texts/AppText";
import SectionTitle from "../components/texts/SectionTitle";

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

const pastTrips = [
  {
    id: 1,
    title: "Madrid - Sevilla",
    subtitle: "13 Abril - 17 Abril",
  },
  {
    id: 2,
    title: "Madrid - Nueva York",
    subtitle: "1 Abril - 18 Abril",
  },
  {
    id: 3,
    title: "Madrid - Londres",
    subtitle: "15 Marzo - 19 Marzo",
  },
  {
    id: 4,
    title: "Madrid - Valencia",
    subtitle: "9 febrero - 11 febrero",
  },
];

function WardrobeLandingScreen({ navigation }) {
  return (
    <View style={styles.bg}>
      <View style={styles.topSection}>
        <ScreenTitle marginBottom={5}>Tus viajes</ScreenTitle>
        <AppText marginBottom={30}>¡Hola Javier!</AppText>
        <SectionTitle>Tu viaje activo</SectionTitle>
        <View style={styles.activeTripCard}>
          <Image
            source={require("../assets/lugagge.png")}
            style={styles.activeImage}
          />
          <View style={styles.tripData}>
            <View style={styles.dataSection}>
              <ScreenTitle color="white">MAD</ScreenTitle>
              <AppText color="white">Madrid</AppText>
            </View>
            <View style={styles.dataSection}>
              <Ionicons
                name="ios-airplane-sharp"
                size={20}
                color={colors.black}
              />
            </View>
            <View style={styles.dataSection}>
              <ScreenTitle color="white">TOK</ScreenTitle>
              <AppText color="white">Tokio</AppText>
            </View>
          </View>
        </View>
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
              subtitle={item.subtitle}
              icon="calendar"
              onPress={() => navigation.navigate("Detalle del viaje")}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>
    </View>
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
  },
  section: {
    flex: 1,
  },
});

export default WardrobeLandingScreen;
