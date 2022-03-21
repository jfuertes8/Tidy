import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateNewSelectorScreen from "../screens//createnew/CreateNewSelectorScreen";
import NewWardrobe from "../screens/createnew/NewWardrobe";
import NewTripScreen from "../screens/createnew/NewTripScreen";
import NewClotheScreen from "../screens/createnew/NewClotheScreen";
import colors from "../config/colors";

const Stack = createNativeStackNavigator();

const CreateNewNavigator = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="CreateNew"
      component={CreateNewSelectorScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="NewWardrobe"
      component={NewWardrobe}
      options={{
        title: "Nuevo armario",
        headerShadowVisible: false,
      }}
    />
    <Stack.Screen
      name="NewTrip"
      component={NewTripScreen}
      options={{
        title: "Nuevo viaje",
        headerShadowVisible: false,
      }}
    />
    <Stack.Screen
      name="NewClothe"
      component={NewClotheScreen}
      options={{
        title: "Nueva ropa",
        headerShadowVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default CreateNewNavigator;
