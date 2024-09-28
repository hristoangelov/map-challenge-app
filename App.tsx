import { StatusBar } from "expo-status-bar";
// import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { Home } from "./screens/HomeScreen/Home";
import { CustomHeaderButton } from "./components/Home";
import * as React from "react";
import { View, Text } from "react-native";

function RightDrawerContent() {
  return (
    <View>
      <Text>right drawer</Text>
    </View>
  );
}

const LeftDrawer = createDrawerNavigator();

function SettingsScreen() {
  return (
    <View>
      <Text>Settings screen</Text>
    </View>
  );
}

function LeftDrawerScreen({navigation}: any) {
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: "left" }}
    >
      <LeftDrawer.Screen
        name="Home"
        component={Home}
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

const RightDrawer = createDrawerNavigator();

function RightDrawerScreen({navigation}: any) {
  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={(props) => <RightDrawerContent />}
      screenOptions={{
        drawerPosition: 'right',
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
