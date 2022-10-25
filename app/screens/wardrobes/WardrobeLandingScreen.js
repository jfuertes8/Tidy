import React, {useState} from "react";
import { StyleSheet, View, FlatList, TouchableWithoutFeedback } from "react-native";

import AppText from "../../components/texts/AppText";
import Card from "../../components/other/Card";
import colors from "../../config/colors";
import Screen from "../../components/other/Screen";
import LandingHeader from "../../components/other/LandingHeader";
import FilterTab from "../../components/other/FilterTab";
import EmptyState from "../../components/other/EmptyState";

const cardData = [
  {
    id: 1,
    title: "Mi armario de casa",
    image: require("../../assets/closet.png"),
    subtitle: "Pamplona",
    bgColor: 'cardBgBlue',
    locationColor: 'cardLocationBlue',
    clothesCount: '112'
  },
  {
    id: 2,
    title: "Casa en Madrid",
    image: require("../../assets/closet1.png"),
    subtitle: "Madrid",
    bgColor: 'cardBgYellow',
    locationColor: 'cardLocationYellow',
    clothesCount: '104'
  },
  {
    id: 3,
    title: "Armario del pueblo",
    image: require("../../assets/closet2.png"),
    subtitle: "Abelón",
    bgColor: 'cardBgPurple',
    locationColor: 'cardLocationPurple',
    clothesCount: '78'
  },
  {
    id: 4,
    title: "Casa de los tíos",
    image: require("../../assets/closet3.png"),
    subtitle: "Abelón",
    bgColor: 'cardBgGreen',
    locationColor: 'cardLocationGreen',
    clothesCount: '67'
  },
];

function WardrobeLandingScreen({ navigation }) {

  function createArray(cardData) {
    return ['Todos', ...cardData.map((item)=> item.subtitle)
      .filter(
        (value, index, array) => {
          return array.indexOf(value) === index;
      })]
  }

  const [active, setActive] = useState('Todos')
  const [datalist, setDataList] = useState(cardData)

  const setActiveFilter = active => {
    if (active !== 'Todos') {
      setDataList(cardData.filter(i => i.subtitle === active)) // a = [1, 2] b = [...a, 5]
    } else {
      setDataList(cardData)
    }
    setActive(active)
  }
  

  return (
    <>
      <Screen>
        <View style={styles.headerBg}>
          <LandingHeader
            title="Mis Armarios"
            icon
            onPress={() => navigation.navigate("NewWardrobe")}
          />
        </View>
        <View style={styles.contentBg}>

          <FlatList
            horizontal
            data={createArray(cardData)}
            keyExtractor={(card) => card}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback onPress={() => setActiveFilter(item)}>
                <View style={[styles.container, active === item && styles.btnTabActive]}>
                  <AppText fontSize={12} color={active === item && 'white'}>
                    {item}
                  </AppText>
                </View>
              </TouchableWithoutFeedback>
            )}
            style={{marginBottom: 30}}
          />

          <FlatList
            data={datalist}
            numColumns={2}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={(card) => card.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                clothesCount={item.clothesCount}
                bgColor={item.bgColor}
                locationColor = {item.locationColor}
                onPress={() => {
                  navigation.navigate("WardrobeDetail", {
                    title: item.title,
                    location: item.subtitle,
                    color: item.bgColor,
                    image: item.image
                  });
                }}
              ></Card>
            )}
            style={{ marginBottom: 150 }}
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
  headerBg: {
    padding: 20,
    paddingBottom: 0,
    backgroundColor: colors.white,
  },
  contentBg: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: colors.white,
  },
  btnTabActive: {
    backgroundColor: colors.primary,
  },
  container: {
    backgroundColor: colors.gray,
    padding: 8,
    paddingHorizontal: 12,
    marginRight: 12,
    borderRadius: 10
  }
});

export default WardrobeLandingScreen;
