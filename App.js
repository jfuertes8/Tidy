import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerNavigator from "./app/navigation/DrawerNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AuthNavigator from "./app/navigation/AuthNavigator";
import BottomTabsNavigator from "./app/navigation/BottomTabsNavigator";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}
