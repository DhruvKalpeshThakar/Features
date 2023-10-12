import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class LoginScreen extends Component<{}, {}>{
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

export default LoginScreen;