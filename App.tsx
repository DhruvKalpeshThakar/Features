import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import NetInfo from '@react-native-community/netinfo'

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
import { View } from "react-native";
import { Text } from "react-native";

interface ConnectionCheck {
  isConnected: boolean;
  showOnline: boolean;
}

class App extends Component<{}, ConnectionCheck> {

  constructor(props: {}) {
    super(props);
    this.state = {
      isConnected: false,
      showOnline: false,
    };
  }
  componentDidMount() {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("Connect Type:", state.type);
      console.log("Is Connected?", state.isConnected);
      this.setState({ isConnected: state.isConnected });

      if (state.isConnected) {
        // Show "Online" for 3 seconds (adjust the duration as needed)
        this.setState({ showOnline: true });
        setTimeout(() => {
          this.setState({ showOnline: false });
        }, 3000); // 3000 milliseconds (3 seconds)
      }
    });

    // Unsubscribe
    return () => {
      unsubscribe();
    };
  }


  render() {
    const Stack = createStackNavigator();

    return (
      <NativeBaseProvider>
        <NavigationContainer >

          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <AppStack />


          {/* <AuthStack /> */}

        </NavigationContainer>
        {this.state.showOnline ? (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "green",
              alignItems: "center",
              justifyContent: "center",
            }}

          >
            <Text>Online</Text>
          </View>
        ) : null}

        {this.state.isConnected ? null : (
          <View
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              backgroundColor: "red",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>No Internet</Text>
          </View>
        )}
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({});

export default App;
