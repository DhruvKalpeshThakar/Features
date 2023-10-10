import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
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
        console.log("callerddd",this.state.showAlert);
        
        this.setState({ showAlert:!this.state.showAlert });
        setTimeout(() => {
            console.log("callerddd////////////////////////",this.state.showAlert);
        }, 500);
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                    style={{ backgroundColor: '#cccc' }}
                    onPress={() =>  this.showCustomAlert() }
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

                <CustomAlert isVisible={this.state.showAlert} />
            </View>
        );
    }
}

const styles = StyleSheet.create({});

export default Settings;
