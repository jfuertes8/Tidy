import React from "react";
import { StyleSheet, View, Image, FlatList } from "react-native";

import Card from "../../components/other/Card";
import colors from "../../config/colors";
import Screen from "../../components/other/Screen";
import LandingHeader from "../../components/other/LandingHeader";
import EmptyState from "../../components/other/EmptyState";

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
];

function WardrobeLandingScreen({ navigation }) {
  return (
    <>
      <Screen>
        <View style={styles.bg}>
          <LandingHeader
            title="Tus Armarios"
            icon
            onPress={() => navigation.navigate("NewWardrobe")}
          />
          <FlatList
            data={cardData}
            keyExtractor={(card) => card.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subtitle={item.subtitle}
                image={require("../../assets/category-bg.png")}
                onPress={() => {
                  navigation.navigate("WardrobeDetail", {
                    title: item.title,
                    location: item.subtitle,
                  });
                }}
              ></Card>
            )}
            style={{ flexGrow: 0 }}
          />
          {/*<EmptyState
            ctaText="Nuevo Armario"
            onPress={() => console.log("new wardrobe tapped")}
            />*/}
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    padding: 20,
    backgroundColor: colors.gray,
    flex: 1,
  },
});

export default WardrobeLandingScreen;
