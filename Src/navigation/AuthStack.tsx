import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Stack = createNativeStackNavigator();

class AuthStack extends Component<{}, {}>{
    constructor(props: any) {

        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome to Login Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default AuthStack;