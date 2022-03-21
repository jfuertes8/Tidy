import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreditScreen from "../screens/CreditScreen";
import SettingsScreen from "../screens/SettingsScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SettingsLanding"
      component={SettingsScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Credits"
      component={CreditScreen}
      options={{
        title: "Menciones",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.gray,
        },
      }}
    />
    <Stack.Screen
      name="Account"
      component={MyAccountScreen}
      options={{
        title: "Mi cuenta",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.gray,
        },
      }}
    />
  </Stack.Navigator>
);

export default SettingsNavigator;
