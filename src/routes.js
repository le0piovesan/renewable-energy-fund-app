import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import defaultStyle from "./defaultStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Pages
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Trade from "./views/Trade";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default AppContainer = () => {
  const selector = useSelector((state) => state);
  console.log("Redux Data: ", selector);
  const currentUser = selector.auth.currentUser;

  return (
    <NavigationContainer>
      {currentUser ? (
        <Tabs.Navigator
          initialRouteName="Home"
          lazy={false}
          screenOptions={{
            tabBarActiveTintColor: defaultStyle.brandPrimary,
            style: {
              height: 70,
              elevation: 0,
              shadowOpacity: 0,
              paddingBottom: 7,
              paddingTop: 7,
            },
          }}
        >
          <Tabs.Screen
            name="Home"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: defaultStyle.brandPrimary,
              },
              headerTintColor: "#fff",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" size={24} color={color} />
              ),
              title: "Home",
            }}
          />
          <Tabs.Screen
            name="Trade"
            component={Trade}
            options={{
              headerStyle: {
                backgroundColor: defaultStyle.brandPrimary,
              },
              headerTintColor: "#fff",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="arrow-decision-outline"
                  size={24}
                  color={color}
                />
              ),
              title: "Trade",
            }}
          />
          <Tabs.Screen
            name="Portfolio"
            component={Portfolio}
            options={{
              headerStyle: {
                backgroundColor: defaultStyle.brandPrimary,
              },
              headerTintColor: "#fff",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="store" size={24} color={color} />
              ),
              title: "Portfolio",
            }}
          />
        </Tabs.Navigator>
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
              headerTintColor: "#fff",
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
              headerTintColor: "#fff",
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};
