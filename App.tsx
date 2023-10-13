import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";


import { NativeBaseProvider } from 'native-base';
import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet, Appearance
} from "react-native";
import AuthStack from "./Src/navigation/AuthStack";
import SplashScreen from "./Src/SplashScreen";
import AppStack from "./Src/navigation/AppStack";
import WelcomeScreen from "./Src/Screens/WelcomeScreen";

// interface Theme {
//   theme: any
// }

class App extends Component<{}, {}> {

  constructor(props: {}) {
    super(props);
    this.state = {
      // theme: 'LIGHT'
    };
  }

  // componentDidMount(): void {
  //   const colorTheme = Appearance.getColorScheme();
  //   console.log(colorTheme);
  //   if (this.state.theme === 'LIGHT') {
  //     this.setState({ theme: 'LIGHT' })
  //   } else {
  //     this.setState({ theme: 'DARK' })
  //   }
  // }


  render() {
    const Stack = createStackNavigator();

    return (
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          {/* <AppStack /> */}
          <AuthStack />
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
