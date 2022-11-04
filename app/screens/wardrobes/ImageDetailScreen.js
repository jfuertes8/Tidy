import React from "react";
import { StyleSheet, View, Image } from "react-native";
import ScreenTitle from "../../components/texts/ScreenTitle";

import AppText from "../../components/texts/AppText"
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageDetailScreen({ route }) {
  return (
    <>
        <View style={styles.container}>

          <Image source={route.params?.image} resizeMode='cover' style={styles.image}/>
          <ScreenTitle color='white'>{route.params?.title}</ScreenTitle>

          <View style={{flexDirection: 'row', marginTop: 20}}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 20}}>
              <MaterialCommunityIcons name='square-edit-outline' color={colors.white} size={25} style={{marginRight: 10}}/>
              <AppText color='white' fontSize={14}>Editar</AppText>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={25} style={{marginRight: 10}}/>
              <AppText color='white' fontSize={14}>Borrar</AppText>
            </View>
          </View>

        </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 20
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 6,
    marginVertical: 20
  }
});

export default ImageDetailScreen;
