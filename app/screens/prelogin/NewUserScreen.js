import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppFormField from "../../components/forms/AppFormField";
import { Formik } from "formik";
import * as yup from "yup";

import AppButton from "../../components/other/AppButton";
import colors from "../../config/colors";
import ScreenTitle from "../../components/texts/ScreenTitle";
import Logo from "../../components/texts/Logo";

const validationSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().label("Password"),
  passwordRepeat: yup.string().required().label("Password"),
});

function NewUserScreen(props) {
  return (
    <>
      <View style={styles.bg}>
        <View style={styles.top}>
          <Logo />
        </View>
        <View style={styles.formFields}>
          <ScreenTitle marginBottom={20}>Nuevo usuario</ScreenTitle>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              passwordRepeat: "",
            }}
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
                  text="Nombre"
                  placeholder="Nombre"
                  autoCorrect={false}
                  onChangeText={handleChange("name")}
                  onBlur={() => setFieldTouched("name")}
                  warning={errors.name}
                  visible={touched.name}
                />
                <AppFormField
                  text="Email"
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
                  placeholder="Por favor, que no sea 1234..."
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  secureTextEntry
                  onChangeText={handleChange("password")}
                  onBlur={() => setFieldTouched("password")}
                  warning={errors.password}
                  visible={touched.password}
                />
                <AppFormField
                  text="Repite contraseña"
                  placeholder="Clavadita a la anterior"
                  autoCapitalize="none"
                  autoCorrect={false}
                  textContentType="password"
                  secureTextEntry
                  onChangeText={handleChange("passwordRepeat")}
                  onBlur={() => setFieldTouched("passwordRepeat")}
                  warning={errors.passwordRepeat}
                  visible={touched.passwordRepeat}
                />
                <View style={styles.button}>
                  <AppButton
                    bgColor="primary"
                    bdColor="primary"
                    title="Crear"
                    onPress={handleSubmit}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bg: {
    padding: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
  formFields: {
    marginTop: 20,
    flex: 1,
  },
});

export default NewUserScreen;
