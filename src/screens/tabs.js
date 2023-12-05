import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./home/index";
const Stack = createNativeStackNavigator();

const screenOptions = () => ({
  animation: "fade_from_bottom",
  headerShown: false,
});

const Tabs = () => {

  return (
    <Stack.Navigator
      backBehavior="history"
      initialRouteName="Home"
      screenOptions={screenOptions}>

      <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>
  );
};

export default Tabs;
