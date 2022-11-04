import React, {useState} from "react";
import { FlatList, View, StyleSheet, Image, Modal, TouchableWithoutFeedback } from "react-native";

import AppButton from "../../components/other/AppButton";
import ListItemSeparator from "../../components/other/ListItemSeparator";
import CategorySelector from "../../components/other/CategorySelector";
import colors from "../../config/colors";
import SectionTitle from "../../components/texts/SectionTitle";
import EmptyState from "../../components/other/EmptyState";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

  const [modalVisible, setModalVisible] = useState(false)

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
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={18}
                  color={colors.black}
                  style={styles.locationIcon}
                />
                <AppText>{route.params?.location}</AppText>
              </View>
              <View style={styles.optionsContainer}>
                <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                  <View style={styles.option}>
                    <MaterialCommunityIcons
                      name="trash-can-outline"
                      size={18}
                      color={colors.black}
                      style={styles.locationIcon}
                    />
                    <AppText>Borrar</AppText>
                  </View>
                </TouchableWithoutFeedback>
                <View style={styles.option}>
                  <MaterialCommunityIcons
                    name="playlist-edit"
                    size={18}
                    color={colors.black}
                    style={styles.locationIcon}
                  />
                  <AppText>Editar</AppText>
                </View>
                <View></View>
              
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

      <Modal visible={modalVisible} animationType='slide'>
        <View style={styles.modal}>
          <View style={styles.modalTop}>
            <ScreenTitle>¿Estas seguro?</ScreenTitle>
            <AppText>Ten en cuenta que si borras el armario no lo podrás recuperar. ¿Quieres borrarlo de todas formas?</AppText>
            <Image source={require('../../assets/delete-image.jpg')} style={styles.modalImage}/>
          </View>
          <AppButton bgColor="danger" title="Borrar armario" onPress={() => setModalVisible(false)}></AppButton>
          <AppButton title="Volver" textColor="black" onPress={() => setModalVisible(false)}></AppButton>
        </View>
      </Modal>
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
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 10
  },
  option: {
    flexDirection: 'row',
    padding: 5,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16
  },
  sectionTitle: {
    marginLeft: 20,
    marginTop: 25
  },
  modal: {
    padding: 20,
    height: '100%'
  },
  modalImage: {
    height: 300,
    width: 300,
    borderRadius: 150,
    alignSelf: 'center',
    marginTop: 75
  },
  modalTop: {
    flex: 1
  }
});

export default WardrobeCategoryScreen;
