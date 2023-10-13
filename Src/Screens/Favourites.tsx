import React, { Component } from "react";
import { Appearance, StyleSheet, Text, TouchableOpacity, View } from "react-native";

class Favourites extends Component<{}, { colorTheme: any }>{
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
                <Text style={colorTheme == 'light' ? styles.lightheme : styles.darktheme}>Welcome to Favourites Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    darktheme: {
        color: '#000'
    },
    lightheme: {
        color: '#000'
    }
})

export default Favourites;