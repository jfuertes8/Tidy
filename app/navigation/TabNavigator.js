import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import WardrobeNavigator from "../navigation/WardrobeNavigator";
import TripNavigator from "../navigation/TripNavigator";
import CreateNewNavigator from "../navigation/CreateNewNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import SettingsNavigator from "./SettingsNavigator";
import AppText from "../components/texts/AppText";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={WardrobeNavigator}
      options={({ route }) => ({
        tabBarLabel: () => <AppText fontSize={10}>Armarios</AppText>,
        tabBarStyle: { display: getTabBarVisibility(route) },
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="wardrobe-outline"
            size={size}
            color={color}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Trips"
      component={TripNavigator}
      options={({ route }) => ({
        tabBarLabel: () => <AppText fontSize={10}>Viajes</AppText>,
        tabBarStyle: { display: getTabBarVisibility(route) },
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="airplane-takeoff"
            size={size}
            color={color}
          />
        ),
      })}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsNavigator}
      options={({ route }) => ({
        tabBarLabel: () => <AppText fontSize={10}>Ajustes</AppText>,
        tabBarStyle: { display: getTabBarVisibility(route) },
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        ),
      })}
    />
    <Tab.Screen
      name="New"
      component={CreateNewNavigator}
      options={({ route }) => ({
        tabBarLabel: () => <AppText fontSize={10}>Nuevo</AppText>,
        tabBarStyle: { display: getTabBarVisibility(route) },
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={size}
            color={color}
          />
        ),
      })}
    />
  </Tab.Navigator>
);

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  if (
    routeName === "WardrobeDetail" ||
    routeName === "CategoryDetail" ||
    routeName === "TripDetail" ||
    routeName === "NewWardrobe" ||
    routeName === "NewTrip" ||
    routeName === "NewClothe" ||
    routeName === "Credits" ||
    routeName === "Account"
  ) {
    return "none";
  } else {
    return "flex";
  }
};

export default TabNavigator;
