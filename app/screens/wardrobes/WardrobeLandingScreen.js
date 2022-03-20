import React from "react";
import { StyleSheet, View, Text, Image, FlatList } from "react-native";

import Card from "../../components/Card";
import colors from "../../config/colors";
import ScreenTitle from "../../components/texts/ScreenTitle";
import AppText from "../../components/texts/AppText";

/*
        <FlatList
          data={cardData}
          keyExtractor={(card) => card.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subtitle={item.subtitle}
              image={item.image}
            ></Card>
          )}
        />


        <View style={styles.emptyStateContainer}>
          <Image source={require("../assets/empty-state.png")} />
          <Text style={styles.emptyStateTitle}>Que vacío está esto...</Text>
          <Text style={styles.emptyStateText}>
            Parece que aún no has creado ningún armario. Puedes crear el primero
            mediante el botón + más abajo.
          </Text>
        </View>
*/

const cardData = [
  {
    id: 1,
    title: "Mi armario de casa",
    subtitle: "Pamplona",
  },
  {
    id: 2,
    title: "Armario de Madrid",
    subtitle: "Madrid",
  },
  /*{
    id: 3,
    title: "Armario del pueblo",
    subtitle: "Abelón",
    image: require("../assets/wardrobe-landing2.jpg"),
  },*/
];

function WardrobeLandingScreen({ navigation }) {
  return (
    <View style={styles.bg}>
      <ScreenTitle marginBottom={5}>Tus armarios</ScreenTitle>
      <AppText marginBottom={30}>¡Hola Javier!</AppText>
      <FlatList
        data={cardData}
        keyExtractor={(card) => card.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subtitle={item.subtitle}
            image={require("../../assets/wardrobeimg.png")}
            onPress={() => {
              navigation.navigate("Detalle de armario", item);
            }}
          ></Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    paddingHorizontal: 20,
    backgroundColor: colors.gray,
    flex: 1,
    justifyContent: "center",
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
  },
});

export default WardrobeLandingScreen;
