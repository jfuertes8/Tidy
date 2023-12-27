import React from "react";
import { View, FlatList, StyleSheet, Image, Text } from "react-native";

import ClothePill from "../components/other/ClothePill";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenTitle from "../components/texts/ScreenTitle";
import AppText from "../components/texts/AppText";
import OptionButton from "../components/other/OptionButton";

const clothesList = [
  {
    id: 1,
    title: "Pantalón vaquero",
    image: require("../assets/pants1.jpg"),
  },
  {
    id: 2,
    title: "Vaquero oscuro",
    image: require("../assets/pants2.jpg"),
  },
  {
    id: 3,
    title: "El de Hawaii",
    image: require("../assets/pants3.jpg"),
  },
  {
    id: 4,
    title: "El de Japón",
    image: require("../assets/pants4.jpg"),
  },
  {
    id: 5,
    title: "El roto cool",
    image: require("../assets/pants5.jpg"),
  },
  {
    id: 6,
    title: "Vaquero oscuro",
    image: require("../assets/pants2.jpg"),
  },
  {
    id: 7,
    title: "Pantalón vaquero",
    image: require("../assets/pants1.jpg"),
  },
  {
    id: 8,
    title: "El roto cool",
    image: require("../assets/pants5.jpg"),
  },
];

function CategoryDetailScreen({ navigation, route }) {
  return (
    <View style={styles.bg}>
      <View style={{backgroundColor: colors[route.params?.color]}}>
        <View style={styles.top}>
              <Image
                source={route.params?.image}
                style={styles.image}
              />
              <View style={styles.titleLocation}>
                <View style={{ flexDirection: "row" }}>
                  <MaterialCommunityIcons
                    name="wardrobe-outline"
                    size={18}
                    color={colors.black}
                    style={styles.locationIcon}
                  />
                  <AppText>{route.params?.wardrobeName}</AppText>
                </View>
                <View style={styles.optionsContainer}>
                  <OptionButton title='Borrar' iconName='trash-can-outline' modal />
                </View>
              </View>
        </View>
      </View>
      <View style={styles.bottomSide}>
        <FlatList
          data={clothesList}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={(message) => message.id.toString()}
          ListHeaderComponent={() => {
            return (<View style={{backgroundColor: colors.white, height: 20}}></View>)
          }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ClothePill 
              image={item.image} 
              title={item.title} 
              onPress={() => navigation.navigate("ImageDetail", {
                image: item.image,
                title: item.title,
            })}/>
          )}
          style={{ marginBottom: 100 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.white
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
  locationIcon: {
    marginRight: 5,
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10
  },
  bottomSide: {
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  }
});

export default CategoryDetailScreen;
