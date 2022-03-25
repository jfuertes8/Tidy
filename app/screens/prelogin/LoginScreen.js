import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppButton from "../../components/AppButton";
import AppFormField from "../../components/forms/AppFormField";
import colors from "../../config/colors";
import { PlayfairDisplay_600SemiBold } from "@expo-google-fonts/playfair-display";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import AppText from "../../components/texts/AppText";
import LinkText from "../../components/texts/LinkText";
import ScreenTitle from "../../components/texts/ScreenTitle";
import Logo from "../../components/texts/Logo";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().label("Password"),
});

function LoginScreen({ navigation }) {
  //Hook for custom Google Font
  let [fontsLoaded, error] = useFonts({
    PlayfairDisplay_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.bg}>
      <ImageBackground
        style={styles.top}
        source={require("../../assets/login-bg.png")}
      >
        <Logo />
        <Text style={styles.tagLine}>Let's talk {"\n"}wardrobe...</Text>
      </ImageBackground>
      <View style={styles.loginContainer}>
        <ScreenTitle marginBottom={20}>Login</ScreenTitle>

        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <AppFormField
                text="Email"
                icon="account"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                warning={errors.email}
                visible={touched.email}
              />
              <AppFormField
                text="Contraseña"
                icon="key"
                placeholder="Contraseña"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry
                onChangeText={handleChange("password")}
                onBlur={() => setFieldTouched("password")}
                warning={errors.password}
                visible={touched.password}
              />
              <AppButton
                title="Entrar"
                bgColor="primary"
                //onPress={() => navigation.navigate("LoginOk")}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>

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
    backgroundColor: colors.black,
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
    alignItems: "center",
    marginTop: 25,
  },
});

export default LoginScreen;
