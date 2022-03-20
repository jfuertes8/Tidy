import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabsNavigator from "./BottomTabsNavigator";
import { DrawerContent } from "./DrawerContent";
import AccountInfoScreen from "../screens/AccountInfoScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen
      name="HomeDrawer"
      component={BottomTabsNavigator}
      options={{
        headerShown: false,
      }}
    />
    <Drawer.Screen
      name="Profile"
      component={AccountInfoScreen}
      options={{
        headerShown: false,
      }}
    />
  </Drawer.Navigator>
);

export default DrawerNavigator;
