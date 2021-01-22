import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from "react-redux";
import * as Screens from '../screens';

const Stack = createStackNavigator();

const Navigation = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Stack.Navigator initialRouteName={user ? "Home" : "Welcome"} screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Welcome"
        component={Screens.Welcome}
      />
      <Stack.Screen
        name="Home"
        component={Screens.Home}
      />
      <Stack.Screen
        name="Dashboard"
        component={Screens.Dashboard}
      />
      <Stack.Screen
        name="Setting"
        component={Screens.Setting}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
