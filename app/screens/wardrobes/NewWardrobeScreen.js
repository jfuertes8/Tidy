import React, {useState} from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";

import AppFormField from "../../components/forms/AppFormField";
import PickerField from "../../components/forms/PickerField";
import AppButton from "../../components/other/AppButton";
import colors from "../../config/colors";
import ScreenTitle from '../../components/texts/ScreenTitle';
import AppText from "../../components/texts/AppText";

const colorList = [
  {
    label: 'Azul',
    icon: require('../../assets/colors/blue.png'),
    value: 1
  },
  {
    label: 'Amarillo',
    icon: require('../../assets/colors/yellow.png'),
    value: 2
  },
  {
    label: 'Verde',
    icon: require('../../assets/colors/green.png'),
    value: 3
  },
  {
    label: 'Morado',
    icon: require('../../assets/colors/purple.png'),
    value: 4
  },
  {
    label: 'Rojo',
    icon: require('../../assets/colors/red.png'),
    value: 5
  },
]

const wardrobeIconList = [
  {
    label: 'Clasico',
    icon: require('../../assets/closet.png'),
    value: 1
  },
  {
    label: 'Limpio',
    icon: require('../../assets/closet1.png'),
    value: 2
  },
  {
    label: 'Abierto',
    icon: require('../../assets/closet2.png'),
    value: 3
  },
  {
    label: 'Rustico',
    icon: require('../../assets/closet3.png'),
    value: 4
  },
  {
    label: 'Lleno',
    icon: require('../../assets/closet4.png'),
    value: 5
  },
  {
    label: 'Gym',
    icon: require('../../assets/closet5.png'),
    value: 6
  },
  {
    label: 'Simple',
    icon: require('../../assets/closet6.png'),
    value: 7
  },
]

function NewWardrobeScreen(props) {

  const [color, setColor] = useState()
  const [icon, setIcon] = useState()

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.topSide}>
          <Image source={require('../../assets/new-wardrobe-bg.jpg')} style={styles.image} />
        </View>
        <View style={styles.bottomSide}>
          <ScreenTitle marginBottom={15}>Nuevo armario</ScreenTitle>
          <AppText marginBottom={15}>Por favor, rellena los campos. Sólo necesitamos el nombre del armario y saber donde está (una ciudad o habitación de tu casa).</AppText>
          <AppFormField
            text="Nombre del armario"
            placeholder="p. ej: Armario de casa..."
            autoCapitalize="none"
            autoCorrect={false}
          />
          <AppFormField
            text="Ubicación del armario"
            placeholder="p. ej: Madrid, León, Baño, Salón..."
            autoCapitalize="none"
            autoCorrect={false}
          />
          <View style={{flexDirection: 'row', width: '100%'}}>
            <PickerField
              items={colorList}
              defaultIcon={require('../../assets/colordefault.png')}
              defaultText='Color'
              selectedItem={color}
              onSelectItem={item => setColor(item)}
              modalTitle='Elige un color'
            />
            <View style={{width: 15}}></View>
            <PickerField
              items={wardrobeIconList}
              defaultIcon={require('../../assets/mountain.png')}
              defaultText='Icono'
              selectedItem={icon}
              onSelectItem={item => setIcon(item)}
              modalTitle='Elige un icono'
            />
          </View>
          <AppButton bgColor="black" title="Crear armario" />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topSide: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  bottomSide: {
    flex: 1,
    width: "100%",
    backgroundColor: colors.gray,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    alignSelf: "center",
  },
});

export default NewWardrobeScreen;
