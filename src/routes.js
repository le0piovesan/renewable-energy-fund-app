import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

// Pages
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import defaultStyle from "./defaultStyle";

const Stack = createNativeStackNavigator();

export default AppContainer = () => {
  const selector = useSelector((state) => state);
  console.log("Redux Data: ", selector);
  const { authenticated } = selector.auth.authenticated;

  return (
    <NavigationContainer>
      {authenticated ? (
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Home",
              headerStyle: {
                backgroundColor: defaultStyle.brandPrimary,
              },
              headerTintColor: "#000",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: "Login",
              headerStyle: {
                backgroundColor: defaultStyle.brandPrimary,
              },
              headerTintColor: "#000",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Register",
              headerStyle: {
                backgroundColor: defaultStyle.brandPrimary,
              },
              headerTintColor: "#000",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
