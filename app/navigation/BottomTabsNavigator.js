import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import WardrobeNavigator from "./WardrobeNavigator";
import TripNavigator from "./TripNavigator";
import CreateNewNavigator from "./CreateNewNavigator";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="FeedArmarios"
      component={WardrobeNavigator}
      options={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          marginBottom: 3,
        },
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="wardrobe" color={color} size={size} />
        ),
        tabBarLabel: "Armarios",
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="FeedViajes"
      component={TripNavigator}
      options={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          marginBottom: 3,
        },
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="bag-checked"
            color={color}
            size={size}
          />
        ),
        tabBarLabel: "Viajes",
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="CreateNew"
      component={CreateNewNavigator}
      options={{
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
          marginBottom: 3,
        },
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
        tabBarLabel: "Crear",
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabsNavigator;
