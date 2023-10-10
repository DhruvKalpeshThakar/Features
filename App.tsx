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
import CustomAlert from "./Src/Components/CustomAlert";



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
          <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">

            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Bottomtabs" component={Bottomtabs} />
            <Stack.Screen name="CustomAlert" component={CustomAlert} />

            {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
