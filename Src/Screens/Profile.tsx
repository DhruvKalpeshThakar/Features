import React, { Component } from "react";
import { Appearance, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/color";
import { Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class Profile extends Component<{}, { colorTheme: any, username: string }>{
    constructor(props: any) {

        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
            username: ''
        }

    }

    setdata = async () => {
        await AsyncStorage.setItem('User', "Dhruv Thakar")
    }

    getdata = async () => {
        const name = await AsyncStorage.getItem('User')
        this.setState({ username: name })
    }

    removedata = async () => {
        const name = await AsyncStorage.removeItem('User')
        this.setState({ username: '' })
    }


    render() {
        const { colorTheme } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={colorTheme == 'light' ? styles.lightheme : styles.darktheme}>Async Storage with React Native |{this.state.username}</Text>

                <View style={{ marginTop: '20%', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Set Data" onPress={() => { this.setdata() }} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Get Data" onPress={() => { this.getdata() }} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Remove Data" onPress={() => { this.removedata() }} />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    darktheme: {
        color: COLORS.black,
        fontSize: 25,
        fontWeight: 'bold'
    },
    lightheme: {
        color: COLORS.black,
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Profile;