import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import WardrobeLandingScreen from "../screens/wardrobes/WardrobeLandingScreen";
import WardrobeCategoryScreen from "../screens/wardrobes/WardrobeCategoryScreen";
import CategoryDetailScreen from "../screens/CategoryDetailScreen";
import colors from "../config/colors";
import NewWardrobeScreen from "../screens/wardrobes/NewWardrobeScreen";

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
          title: " ",
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
          title: " ",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.gray,
          },
        }}
      />
      <Stack.Screen
        name="NewWardrobe"
        component={NewWardrobeScreen}
        options={{
          title: " ",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.white,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default WardrobeNavigator;
