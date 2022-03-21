import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WardrobeLandingScreen from "../screens/wardrobes/WardrobeLandingScreen";
import WardrobeCategoryScreen from "../screens/wardrobes/WardrobeCategoryScreen";
import CategoryDetailScreen from "../screens/CategoryDetailScreen";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

function WardrobeNavigator({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WardrobesFeed"
        component={WardrobeLandingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="WardrobeDetail"
        component={WardrobeCategoryScreen}
        options={{
          title: "Detalle del armario",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.gray,
          },
        }}
      />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryDetailScreen}
        options={{
          title: "Detalle de la categoría",
        }}
      />
    </Stack.Navigator>
  );
}

export default WardrobeNavigator;
