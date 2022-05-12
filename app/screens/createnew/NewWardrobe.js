import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import AppButton from "../../components/AppButton";
import AppFormField from "../../components/forms/AppFormField";
import colors from "../../config/colors";

const validationSchema = yup.object().shape({
  wardrobeName: yup.string().required().label("Wardrobe Name"),
  location: yup.string().required().label("Location"),
});

function NewWardrobe(props) {
  return (
    <>
      <View style={styles.bg}>
        <View style={styles.formFields}>
          <Formik
            initialValues={{ wardrobeName: "", location: "" }}
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
                <View style={styles.formFields}>
                  <AppFormField
                    text="Nombre del armario"
                    placeholder="p. ej: Armario de casa..."
                    onChangeText={handleChange("wardrobeName")}
                    onBlur={() => setFieldTouched("wardrobeName")}
                    warning={errors.wardrobeName}
                    visible={touched.wardrobeName}
                  />
                  <AppFormField
                    text="Ubicación del armario"
                    placeholder="p. ej: Madrid..."
                    onChangeText={handleChange("location")}
                    onBlur={() => setFieldTouched("location")}
                    warning={errors.location}
                    visible={touched.location}
                  />
                </View>
                <AppButton
                  bgColor="primary"
                  bdColor="primary"
                  title="Crear armario"
                  onPress={handleSubmit}
                />
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
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  formFields: {
    flex: 1,
  },
  image: {
    alignSelf: "center",
  },
});

export default NewWardrobe;
