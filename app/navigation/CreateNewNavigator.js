import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import CreateNewSelectorScreen from "../screens//createnew/CreateNewSelectorScreen";
import NewWardrobe from "../screens/createnew/NewWardrobe";
import colors from "../config/colors";
import NewTripScreen from "../screens/createnew/NewTripScreen";
import NewClotheScreen from "../screens/createnew/NewClotheScreen";

const Stack = createNativeStackNavigator();

const CreateNewNavigator = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Crear"
      component={CreateNewSelectorScreen}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons
            name="menu"
            size={25}
            onPress={() => {
              navigation.openDrawer();
            }}
            style={{ marginRight: 10 }}
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
      name="Nuevo armario"
      component={NewWardrobe}
      options={{
        headerShadowVisible: false,
      }}
    />
    <Stack.Screen name="Nuevo viaje" component={NewTripScreen} />
    <Stack.Screen name="Nueva ropa" component={NewClotheScreen} />
  </Stack.Navigator>
);

export default CreateNewNavigator;
