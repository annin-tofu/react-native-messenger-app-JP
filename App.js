// React-Native Navigator https://reactnavigation.org/docs/getting-started/
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

// //Status bar is the the clock and reception next to the iphone top . If set to "light", the clock and reception bar will not be visible.
// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";

//create initial stack
const Stack = createStackNavigator();

// https://stackoverflow.com/questions/66864162/react-native-navigationcontainer-not-styling
const globalScreenOptions = {
  headerStyle: { backgroundColor: "#2C6BED" },

  // headerTitleSyyle allows you to change Header TITLE's color.
  headerTitleStyle: { color: "white" },
  // headerTintColor allows you to change ICONS' color within header
  headerTintColor: "white",
};

export default function App() {
  return (
    // React-Native Navigator https://reactnavigation.org/docs/getting-started/
    <NavigationContainer>
      <Stack.Navigator
        //  inititalRouteName="Home" => forces to navigate to Home
        // inititalRouteName="Home"
        screenOptions={globalScreenOptions}
      >
        {/* this is similar to useRouter in React */}
        <Stack.Screen
          // // options={{ title: "Sign up" }}
          // This allows me to change the Title for the page
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          // // options={{ title: "Sign up" }}
          // This allows me to change the Title for the page
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          // // options={{ title: "Sign up" }}
          // This allows me to change the Title for the page
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          // // options={{ title: "Sign up" }}
          // This allows me to change the Title for the page
          name="AddChat"
          component={AddChatScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// React-Native has stylesheet all on js file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
