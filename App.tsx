import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { HomeScreen } from "./screens/HomeScreen";
import { SettingsScreen } from "./screens/SettingsScreen";
import { CustomHeaderButton } from "./components/Home";
import { RightDrawerContent } from "./components/RightDrawerContent";

const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();

function LeftDrawerScreen({ navigation }: any) {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: "left" }}
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

function RightDrawerScreen({ navigation }: any) {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={(props) => <RightDrawerContent />}
      screenOptions={{
        drawerPosition: "right",
        headerShown: false,
      }}
    >
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RightDrawerScreen />
    </NavigationContainer>
  );
}
