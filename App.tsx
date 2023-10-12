import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";


import { NativeBaseProvider } from 'native-base';
import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet
} from "react-native";
import AuthStack from "./Src/navigation/AuthStack";
import SplashScreen from "./Src/SplashScreen";
import AppStack from "./Src/navigation/AppStack";
import WelcomeScreen from "./Src/Screens/WelcomeScreen";



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
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <AppStack />
          {/* <AuthStack /> */}
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
