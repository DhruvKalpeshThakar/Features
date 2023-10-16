import React, { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/color';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface Alert {
    isVisible: boolean;
}


export default class CustomAlert extends Component<Alert, Alert>{
    constructor(props: any) {
        super(props);
    }

    render() {
        console.log(this.props.isVisible, 'this.state.isVisible--------------------------');

        return (
            <View style={styles.container}>
                {this.props.isVisible &&
                    <View style={styles.modal}>
                        <View style={styles.body}>
                            <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/011/858/556/small/green-check-mark-icon-with-circle-tick-box-check-list-circle-frame-checkbox-symbol-sign-png.png" }} style={{ width: '30%', height: '30%', alignSelf: 'center', marginTop: 15 }} />
                            <Text style={styles.alerttitle}>Success</Text>
                            <Text style={styles.alertmessage}>Are you sure You want to Proceed?</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 17 }}>
                                <TouchableOpacity style={{ backgroundColor: COLORS.grey, width: '35%' }}
                                    onPress={() => { }} activeOpacity={0.7}>
                                    <Text style={styles.button}>CANCEL</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#007788', width: '35%' }} onPress={() => { this.setState({ isVisible: false }) }} activeOpacity={0.7}>
                                    <Text style={styles.button}>OK</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                }



                {/* <Button title='Open Dialog' onPress={() => { this.setState({ isshowAlert: true }) }} /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modal: {
        flex: 1,
        // backgroundColor: 'rgba(50,50,50,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    body: {
        borderRadius: 25,
        backgroundColor: COLORS.white,
        width: '75%',
        height: '35%',
        justifyContent: 'flex-start',

    },
    alerttitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 15
    },
    alertmessage:
    {
        fontSize: 17,
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 15
    },
    button: {
        fontSize: 17,
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 15
    }

})