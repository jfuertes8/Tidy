import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import WardrobeNavigator from "../navigation/WardrobeNavigator";
import TripNavigator from "../navigation/TripNavigator";
import CreateNewNavigator from "../navigation/CreateNewNavigator";
import SettingsScreen from "../screens/SettingsScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Home"
      component={WardrobeNavigator}
      options={({ route }) => ({
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
      name="New"
      component={CreateNewNavigator}
      options={({ route }) => ({
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
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="settings-outline" size={size} color={color} />
        ),
      }}
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
    routeName === "NewClothe"
  ) {
    return "none";
  } else {
    return "flex";
  }
};

export default TabNavigator;
