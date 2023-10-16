import React, { Component } from "react";
import { Appearance, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/color";

class Profile extends Component<{}, { colorTheme: any }>{
    constructor(props: any) {

        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
        }

    }


    render() {
        const { colorTheme } = this.state;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={colorTheme == 'light' ? styles.lightheme : styles.darktheme}>Welcome to Profile Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    darktheme: {
        color: COLORS.black
    },
    lightheme: {
        color: COLORS.black
    }
})

export default Profile;