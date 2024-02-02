import React, { Component } from "react";
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';

class AddMenu extends Component<{}, {}>{
    constructor(props: any) {

        super(props);
        this.state = {

        }

    }
    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: '#ebebeb' }}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'#ebebeb'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ flexDirection: 'row', marginTop: hp(3) }}>
                            <View style={{ marginLeft: wp(3) }}>
                                <Entypo name="cross" color={'#000'} size={30} />
                            </View>

                            <Text style={{ color: '#000', textAlign: 'center', fontSize: 20, marginLeft: wp(3), fontWeight: 'bold' }}>Add Menu</Text>

                            <View style={{ marginLeft: 'auto', marginRight: wp(4), marginTop: hp(0.2) }}>
                                <AntDesign name="delete" color={'#000'} size={25} />
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({

})

export default AddMenu;