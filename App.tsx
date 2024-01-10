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
import Entypo from 'react-native-vector-icons/Entypo'
import NestedFlatList from "./Src/NestedFlatList";


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
          visible={!this.state.isConnected}

        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                <Text style={[styles.title]}>No Internet Available !</Text>
                <Entypo name='cross'   />
              </View>
              <View style={{ marginTop: hp(2) }}>
                <Text> Please check your connection and come back again!</Text>
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
    width: '100%',
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: wp(5),
    borderTopRightRadius: wp(5),
    borderTopLeftRadius: wp(5)

  },
  title: {
    fontSize: hp(3),
    color: '#FF0000',
  },
  message: {
    fontSize: 16,
    marginVertical: 10,
    color: COLORS.black
  },


});

export default App;
