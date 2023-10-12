import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import WelcomeScreen from "../Screens/WelcomeScreen";
import Signup from "../Signup";
import SplashScreen from "../SplashScreen";
import Bottomtabs from "./Bottomtabs";
import LoginScreen from "../Screens/LoginScreen";

const Stack = createNativeStackNavigator();

class AuthStack extends Component<{}, {}>{
    constructor(props: any) {

        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Signup">

                {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
                {/* <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} /> */}
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                {/* <Stack.Screen name="Bottomtabs" component={Bottomtabs} /> */}
                {/* <Stack.Screen name="CustomAlert" component={CustomAlert} /> */}

                {/* <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} /> */}
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({

})

export default AuthStack;