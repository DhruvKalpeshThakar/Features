import React, { Component } from "react";
import { Alert, DeviceEventEmitter, Linking, NativeModules, StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import NetInfo from '@react-native-community/netinfo';
import { COLORS } from "./constants/color";
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';

interface Connection {

}

class Privacy extends Component<{}, Connection> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    componentDidMount(): void {

    }

    onSuccess = (e: { data: any; }) => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };



    render() {
        return (
            <QRCodeScanner
                onRead={this.onSuccess}
                flashMode={RNCamera.Constants.FlashMode.off}
                topContent={
                    <Text style={styles.centerText}>
                        Go to{' '}
                        <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
                        your computer and scan the Sample QR code.
                    </Text>
                }
                // bottomContent={
                //     <TouchableOpacity style={styles.buttonTouchable}>
                //         <Text style={styles.buttonText}>OK. Got it!</Text>
                //     </TouchableOpacity>
                // }
            />
        );
    }
}


const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777'
    },
    textBold: {
        fontWeight: '500',
        color: '#000'
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)'
    },
    buttonTouchable: {
        padding: 8
    }
})

export default Privacy;
