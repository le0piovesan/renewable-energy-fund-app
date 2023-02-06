import React from "react";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSelector } from "react-redux";
import defaultStyle from "./defaultStyle";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";
import Home from "./views/Home";
import Portfolio from "./views/Portfolio";
import Trade from "./views/Trade";
import FundDetails from "./views/FundDetails";

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const HomeStackScreen = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route) ?? "";
    if (routeName === "FundDetails")
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    else navigation.setOptions({ tabBarStyle: { display: "flex" } });
  }, [navigation, route]);

  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: defaultStyle.brandPrimary,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          title: "",
        }}
      />
      <HomeStack.Screen
        name="FundDetails"
        component={FundDetails}
        options={{
          headerStyle: {
            backgroundColor: defaultStyle.brandPrimary,
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          title: "",
        }}
      />
    </HomeStack.Navigator>
  );
};

export default AppContainer = () => {
  const selector = useSelector((state) => state);
  const currentUser = selector.auth.currentUser;

  return (
    <NavigationContainer>
      {currentUser ? (
        <Tabs.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: "center",
            lazy: false,
            tabBarActiveTintColor: defaultStyle.brandPrimary,
            tabBarLabelStyle: {
              fontSize: 12,
            },
          }}
        >
          <Tabs.Screen
            name="HomeStack"
            component={HomeStackScreen}
            options={{
              headerShown: false,
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" size={30} color={color} />
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
                  size={30}
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
                <MaterialCommunityIcons name="store" size={30} color={color} />
              ),
              title: "Portfolio",
            }}
          />
        </Tabs.Navigator>
      ) : (
        <AuthStack.Navigator>
          <AuthStack.Screen
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
          <AuthStack.Screen
            name="Register"
            component={Register}
            options={{
              title: "Register",
              headerStyle: {
                backgroundColor: defaultStyle.brandPrimary,
              },
              headerBackButtonMenuEnabled: false,
              headerBackVisible: false,
              headerTintColor: "#fff",
            }}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};
