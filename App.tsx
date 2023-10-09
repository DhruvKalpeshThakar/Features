import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";


import React, { Component } from "react";
import {
  StyleSheet
} from "react-native";
import { NativeBaseProvider } from 'native-base';
import Signup from "./Src/Signup";
import Home from "./Src/Home";
import { StatusBar } from "react-native";
import SplashScreen from "./Src/SplashScreen";
import Bottomtabs from "./Src/navigation/Bottomtabs";



class App extends Component<{}, {}> {

  constructor(props: {}) {
    super(props);
    this.state = {};
  }


  render() {
    const Stack = createStackNavigator();

    return (
      <NativeBaseProvider>
        <StatusBar hidden />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="SplashScreen">

            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Bottomtabs" component={Bottomtabs} options={{ headerShown: false }} />

            {/* <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} /> */}
            {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
