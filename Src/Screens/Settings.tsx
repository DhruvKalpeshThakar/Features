import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from "react-native";
import CustomAlert from "../Components/CustomAlert";

interface setting {
    showAlert: boolean;
}

class Settings extends Component<{ navigation: any }, setting> {
    constructor(props: any) {
        super(props);
        this.state = {
            showAlert: false,
        };
    }

    showCustomAlert = () => {
        console.log("callerddd", this.state.showAlert);

        this.setState({ showAlert: !this.state.showAlert });
        setTimeout(() => {
            console.log("callerddd////////////////////////", this.state.showAlert);
        }, 500);
    };

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={require('../assets/settings.jpg')} style={styles.image}>
                    <TouchableOpacity
                        style={{ backgroundColor: '#cccc', alignItems: 'center' }}
                        onPress={() => this.showCustomAlert()}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: "#000",
                                fontSize: 27,
                            }}
                        >
                            Logout
                        </Text>
                    </TouchableOpacity>
                    <CustomAlert isVisible={this.state.showAlert}  />
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',

    },
});

export default Settings;
