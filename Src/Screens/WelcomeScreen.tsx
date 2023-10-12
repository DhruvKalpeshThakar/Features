import React, { Component } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';

class WelcomeScreen extends Component<{ navigation: any }, {}> {
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#2f44d5' }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    {/* <Text style={{ fontFamily: 'YoungSerif-Regular', marginTop: 20, fontSize: 45, color: '#fff' }}> Welcome </Text> */}
                    <Image source={require('../assets/Welcome_Back.png')} style={{ height: '20%', width: '90%', marginTop: '30%' }} />


                </View>
                <View style={{ flex: 1 / 10, backgroundColor: '#d2610d', marginBottom: 20, marginHorizontal: 20, borderRadius: 10, }}>
                    <TouchableOpacity style={{ justifyContent: 'space-between', flexDirection: 'row' }} onPress={() => { this.props.navigation.navigate('Bottomtabs') }}>
                        <Text style={{ fontFamily: 'YoungSerif-Regular', fontSize: 30, marginTop: 7, color: '#fff', marginLeft: 20, }}>Let's Begin</Text>
                        <Entypo name="chevron-right" size={35} style={{ marginTop: '5%', color: '#fff', marginRight: 20 }} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }

}


const styles = StyleSheet.create({})

export default WelcomeScreen