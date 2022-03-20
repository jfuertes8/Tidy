import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import WardrobeLandingScreen from "../screens/wardrobes/WardrobeLandingScreen";
import WardrobeCategoryScreen from "../screens/wardrobes/WardrobeCategoryScreen";
import colors from "../config/colors";
import CategoryDetailScreen from "../screens/CategoryDetailScreen";

const Stack = createNativeStackNavigator();

function WardrobeNavigator({ navigation, route }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=" "
        component={WardrobeLandingScreen}
        options={{
          headerLeft: () => (
            <MaterialCommunityIcons
              name="menu"
              size={25}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          ),
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: colors.gray,
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Detalle de armario"
        component={WardrobeCategoryScreen}
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.gray,
          },
        }}
      />
      <Stack.Screen
        name="Detalle de categoría"
        component={CategoryDetailScreen}
      />
    </Stack.Navigator>
  );
}

export default WardrobeNavigator;
