import React from "react";
import { StyleSheet, View, Image } from "react-native";
import ScreenTitle from "../../components/texts/ScreenTitle";

import colors from "../../config/colors";

function ImageDetailScreen({ route }) {
  return (
    <>
        <View style={styles.container}>

          <Image source={route.params?.image} resizeMode='cover' style={styles.image}/>
          <ScreenTitle color='white'>{route.params?.title}</ScreenTitle>

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
