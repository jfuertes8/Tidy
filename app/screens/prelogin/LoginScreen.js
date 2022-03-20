import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

import AppButton from "../../components/AppButton";
import AppFormField from "../../components/forms/AppFormField";
import colors from "../../config/colors";
import { Spartan_700Bold } from "@expo-google-fonts/spartan";
import { PlayfairDisplay_600SemiBold } from "@expo-google-fonts/playfair-display";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import AppText from "../../components/texts/AppText";
import LinkText from "../../components/texts/LinkText";
import ScreenTitle from "../../components/texts/ScreenTitle";

function LoginScreen({ navigation }) {
  let [fontsLoaded, error] = useFonts({
    Spartan_700Bold,
    PlayfairDisplay_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.bg}>
      <ImageBackground
        style={styles.top}
        source={require("../../assets/login-bg.jpg")}
      >
        <Text style={styles.logo}>Tidy.</Text>
        <Text style={styles.tagLine}>Let's talk {"\n"}wardrobe...</Text>
      </ImageBackground>
      <View style={styles.loginContainer}>
        <ScreenTitle marginBottom={20}>Login</ScreenTitle>
        <AppFormField
          placeholder="Nombre de usuario"
          text="Nombre de usuario o email"
          icon="account"
        />
        <AppFormField placeholder="Contraseña" text="Contraseña" icon="key" />
        <AppButton
          title="Entrar"
          bgColor="primary"
          onPress={() => navigation.navigate("LoginOk")}
        />
        <View style={styles.newAccContainer}>
          <AppText>¿No tienes cuenta aún?</AppText>
          <LinkText
            onPress={() => navigation.navigate("Crear cuenta")}
            marginLeft={5}
          >
            Crear cuenta
          </LinkText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  top: {
    flex: 1,
    paddingVertical: 60,
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 30,
    color: colors.primary,
    fontFamily: "Spartan_700Bold",
  },
  tagLine: {
    color: colors.white,
    fontSize: 30,
    fontFamily: "PlayfairDisplay_600SemiBold",
  },
  loginContainer: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: colors.white,
    padding: 20,
    paddingBottom: 40,
  },
  newAccContainer: {
    flexDirection: "row",
    marginTop: 25,
  },
});

export default LoginScreen;
