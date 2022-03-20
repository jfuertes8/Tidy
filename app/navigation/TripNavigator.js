import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import TripsLandingScreen from "../screens/TripsLandingScreen";
import TripDetailScreen from "../screens/TripDetailScreen";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const TripNavigator = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name=" "
      component={TripsLandingScreen}
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
      name="Detalle del viaje"
      component={TripDetailScreen}
      options={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.gray,
        },
      }}
    />
  </Stack.Navigator>
);

export default TripNavigator;
