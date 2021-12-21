import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";
import DestinationScreen from "../screens/DestinationScreen";
import ImageScreen from "../screens/ImageScreen";
import Login from "../screens/Login";
import SignUpScreen from "../screens/SignUpScreen";
import VideoCall from "../screens/VideoCall";
import CameraScreen from "../screens/CameraScreen";

const Home = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Home.Navigator>
      {/* <Home.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      /> */}
      <Home.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="ImageScreen"
        component={ImageScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="RequestScreen"
        component={RequestScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="DestinationScreen"
        component={DestinationScreen}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="VideoCall"
        component={VideoCall}
        options={{ headerShown: false }}
      />
      <Home.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ headerShown: false }}
      />
    </Home.Navigator>
  );
}
