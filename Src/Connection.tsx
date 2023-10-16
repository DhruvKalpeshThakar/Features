import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import { COLORS } from "./constants/color";


interface Connection {
    isConnected: boolean
}

class Connection extends Component<{}, Connection> {
    constructor(props: any) {
        super(props);
        this.state = {
            isConnected: false
        }
    }

    componentDidMount(): void {
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connect Type:", state.type);
            console.log("Is Connected?", state.isConnected);
            this.setState({ isConnected: state.isConnected })
        });

        //UnSubscribe
        return () => {
            unsubscribe();
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: this.state.isConnected ? 'green' : COLORS.red }}>
                <Text>{this.state.isConnected ? 'Connected' : 'No Internet'}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({

})

export default Connection;
