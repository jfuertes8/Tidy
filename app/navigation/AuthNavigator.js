import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/prelogin/LoginScreen";
import NewUserScreen from "../screens/prelogin/NewUserScreen";
import colors from "../config/colors";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Crear cuenta"
      component={NewUserScreen}
      options={{
        title: " ",
        headerStyle: {
          backgroundColor: colors.white,
        },
        headerShadowVisible: false,
      }}
    />
    <Stack.Screen
      name="LoginOk"
      component={TabNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
