import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { CustomHeaderButton } from "./components/Home";
import { RightDrawerContent } from "./components/RightDrawerContent";
import { store } from "./app/store";

const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();

function LeftDrawerScreen({ navigation }: any) {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: "left", swipeEnabled: false }}
    >
      <LeftDrawer.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          headerRight: () => (
            <CustomHeaderButton
              isRightButton={true}
              iconName="funnel-outline"
              onPress={() => navigation.openDrawer()}
            />
          ),
        })}
      />
      <LeftDrawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => ({
          headerRight: () => (
            <CustomHeaderButton
              isRightButton={true}
              iconName="funnel-outline"
              onPress={() => navigation.openDrawer()}
            />
          ),
        })}
      />
    </LeftDrawer.Navigator>
  );
}

function RightDrawerScreen() {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={() => <RightDrawerContent />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
        swipeEnabled: false,
      }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RightDrawerScreen />
      </NavigationContainer>
    </Provider>
  );
}
