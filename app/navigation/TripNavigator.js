import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TripsLandingScreen from "../screens/trips/TripsLandingScreen";
import TripDetailScreen from "../screens/trips/TripDetailScreen";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const TripNavigator = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="TripsFeed"
      component={TripsLandingScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="TripDetail"
      component={TripDetailScreen}
      options={{
        title: "Detalle del viaje",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.gray,
        },
      }}
    />
  </Stack.Navigator>
);

export default TripNavigator;
