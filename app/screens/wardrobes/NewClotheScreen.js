import React, {useState} from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";

import AppFormField from "../../components/forms/AppFormField";
import PickerField from "../../components/forms/PickerField";
import QuantityField from "../../components/forms/QuantityField";
import AppButton from "../../components/other/AppButton";
import colors from "../../config/colors";
import ScreenTitle from '../../components/texts/ScreenTitle';
import AppText from "../../components/texts/AppText";

const categories = [
  {
    label: 'Camisetas',
    icon: require('../../assets/tshirticon.png'),
    value: 1
  },
  {
    label: 'Pantalones',
    icon: require('../../assets/jeans.png'),
    value: 2
  },
  {
    label: 'Accesorios',
    icon: require('../../assets/tie.png'),
    value: 3
  },
  {
    label: 'Calcetines',
    icon: require('../../assets/socks.png'),
    value: 4
  },
  {
    label: 'Camisas',
    icon: require('../../assets/shirt.png'),
    value: 5
  },
  {
    label: 'Mudas',
    icon: require('../../assets/underwear.png'),
    value: 6
  },
  {
    label: 'Faldas',
    icon: require('../../assets/skirt.png'),
    value: 7
  },
  {
    label: 'Guantes',
    icon: require('../../assets/glove.png'),
    value: 8
  },
]

function NewClotheScreen(props) {

  const [category, setCategory] = useState()

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: '100%'}}>
          <View style={styles.topSide}>
            <Image source={require('../../assets/new-clothe-bg.jpg')} style={styles.image} />
          </View>
          <View style={styles.bottomSide}>
            <ScreenTitle marginBottom={15}>Nueva ropa</ScreenTitle>
            <AppText marginBottom={15}>Ponle un nombre que te ayude a recordar la ropa.</AppText>
            <AppFormField
              text="Nombre de la ropa"
              placeholder="p. ej: Camiseta azul, el del viaje a México..."
              autoCapitalize="none"
              autoCorrect={false}
            />
            
            <AppText marginBottom={15}>Añade categoría y cantidad</AppText>
            <View style={{flexDirection: 'row', width: '100%'}}>
              <PickerField 
                text='Selecciona categoría'
                chevron={false}
                items={categories} 
                selectedItem={category} 
                onSelectItem={item => setCategory(item)} 
                defaultIcon={require('../../assets/categoryicon.png')} 
                defaultText='Selecciona categoría'
                modalTitle='Selecciona una categoría'
              />
              <View style={{width: 15}}></View>
              <QuantityField />
            </View>
            <AppButton bgColor="black" title="Añadir ropa" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  topSide: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSide: {
    flex: 1,
    backgroundColor: colors.gray,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 220,
    alignSelf: "center",
  },
});

export default NewClotheScreen;
