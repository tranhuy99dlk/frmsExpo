import ProfileScreen from "../screens/ProfileScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import Login from "../screens/Login";

const Profile = createNativeStackNavigator();
export function ProfileStack() {
  return (
    <Profile.Navigator>
      <Profile.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Profile.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
    </Profile.Navigator>
  );
}
