import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";

import { Home } from "./screens/HomeScreen/Home";

const Stack = createStackNavigator();

const HeaderButton = styled(TouchableOpacity)<{ isRightButton: boolean }>`
  margin-${(props) => (props.isRightButton ? "right" : "left")}: 12px;
`;

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerLeft: () => (
            <HeaderButton
              isRightButton={false}
              onPress={() => navigation.navigate("Profile")}
            >
              <Ionicons name="menu-outline" size={24} />
            </HeaderButton>
          ),
          headerRight: () => (
            <HeaderButton
              isRightButton={true}
              onPress={() => navigation.navigate("Profile")}
            >
              <Ionicons name="funnel-outline" size={24} />
            </HeaderButton>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <HomeStack />
    </NavigationContainer>
  );
}
