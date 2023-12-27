import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import colors from "../config/colors";
import WardrobeLandingScreen from "../screens/wardrobes/WardrobeLandingScreen";
import WardrobeCategoryScreen from "../screens/wardrobes/WardrobeCategoryScreen";
import CategoryDetailScreen from "../screens/CategoryDetailScreen";
import NewWardrobeScreen from "../screens/wardrobes/NewWardrobeScreen";
import ImageDetailScreen from "../screens/wardrobes/ImageDetailScreen";
import NewClotheScreen from "../screens/wardrobes/NewClotheScreen";

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
        options={({ route }) => ({
          title: route.params?.title,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors[route.params.color],
          },
          headerRight: () => (
            <>
              <Feather name='plus' size={25} color={colors.black} onPress={() => {navigation.navigate('NewClothe')}} />
            </>
          ),
        })}
      />
      <Stack.Screen
        name="CategoryDetail"
        component={CategoryDetailScreen}
        options={({ route }) => ({
          title: route.params?.title,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors[route.params.color],
          },
          headerRight: () => (
            <>
              <Feather name='plus' size={25} color={colors.black} onPress={() => {navigation.navigate('NewClothe')}}/>
            </>
          ),
        })}
      />
      <Stack.Screen
        name="ImageDetail"
        component={ImageDetailScreen}
        options={({ route }) => ({
          title: " ",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.black,
          },
          headerTintColor: colors.white
        })}
      />
      <Stack.Screen
        name="NewWardrobe"
        component={NewWardrobeScreen}
        options={{
          title: "",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: colors.white,
          },
        }}
      />
      <Stack.Screen
        name="NewClothe"
        component={NewClotheScreen}
        options={{
          title: "",
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
