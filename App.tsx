import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import NetInfo from '@react-native-community/netinfo'

import { NativeBaseProvider } from 'native-base';
import React, { Component } from "react";
import {
  StatusBar,
  StyleSheet, Appearance, LogBox
} from "react-native";
import AuthStack from "./Src/navigation/AuthStack";
import SplashScreen from "./Src/SplashScreen";
import AppStack from "./Src/navigation/AppStack";
import WelcomeScreen from "./Src/Screens/WelcomeScreen";
import { View, Modal, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import Ratings from "./Src/Screens/settings/Ratings";
import { AuthContext } from "./Src/navigation/AuthProvider";
import auth from '@react-native-firebase/auth'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from "./Src/constants/color";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

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

      LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
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


        <Modal
          transparent={true}
          animationType="slide"
          visible={this.state.isConnected}

        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <MaterialIcons name="wifi-off" size={60} color={COLORS.red} />
              <Text style={styles.title}>No Internet</Text>
              {/* <Text style={styles.message}>No Internet</Text> */}
              <View style={styles.buttonContainer}>
                {/* <TouchableOpacity onPress={onCancel} style={styles.button}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity> */}
                {/* <TouchableOpacity style={styles.button} onPress={() => { this.setState({ isConnected: false }) }}>
                  <Text style={styles.buttonText}>OK</Text>
                </TouchableOpacity> */}
              </View>
            </View>
          </View>
        </Modal>

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

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: hp(5),
    borderRadius: wp(5),
    alignItems: "center",
  },
  title: {
    fontSize: hp(3),
    fontFamily:'YoungSerif-Regular',
    marginTop: 10,
    color: '#000',
  },
  message: {
    fontSize: 16,
    marginVertical: 10,
    color: COLORS.black
  },
  buttonContainer: {
    flexDirection: "row",
    // justifyContent: "space-around",
    width: "100%",
  },
  button: {
    padding: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "blue",
    fontWeight: 'bold',
  },
});

export default App;
