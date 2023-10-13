import React, { Component } from "react";
import { Alert, Appearance, Image, Share, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer'
import { ImageBackground } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from "../constants/color";
import { theme } from "native-base";

class CustomDrawer extends Component<{ props: any }, { colorTheme: any }>{
    constructor(props: any) {

        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
        }

    }

    onShare = async () => {
        try {
            const result = await Share.share({
                title:'Hello',
                url: 'https://youtu.be/TGTNBxbFHRY?si=zLwctur8_ZHpO1MN',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    ToastAndroid.show('Shared With' + result.activityType, ToastAndroid.SHORT)
                } else {
                    // ToastAndroid.show('Shared But not sure How', ToastAndroid.SHORT)
                }
            } else if (result.action === Share.dismissedAction) {
                ToastAndroid.show('Share Cancelled', ToastAndroid.SHORT)
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };


    render() {
        const { colorTheme } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white }}>
                <DrawerContentScrollView {...this.props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                    <ImageBackground source={require('../assets/drawer.jpg')} style={{ padding: 20, }}>
                        <Image source={require('../assets/userprofile.jpg')} style={{ height: 80, width: 80, marginBottom: 10, borderRadius: 40 }} />
                        <Text style={{ color: COLORS.white, fontSize: 18, fontFamily: 'YoungSerif-Regular', }}>Mr. Secret </Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={{ color: '#ff0', fontSize: 15, fontFamily: 'YoungSerif-Regular' }}>Lover</Text>
                            <MaterialIcons name="computer" size={18} color={'#ff0'} style={{ marginTop: 7, marginLeft: 5 }} />
                        </View>
                        {/* <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', borderColor: '#ccc', borderWidth: 1, width: '32%' }}>
                            <MaterialIcons name="light-mode" size={22} style={{ bottom: -15 }} />
                            <Text style={{ marginTop: 15, marginLeft: 5, fontSize: 18 }}>Mode</Text>
                        </TouchableOpacity> */}
                    </ImageBackground>
                    <View style={colorTheme == 'dark' ? styles.darktheme : styles.lighttheme}>
                        <DrawerItemList {...this.props} />
                    </View>
                </DrawerContentScrollView >
                <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white }}>
                    <TouchableOpacity onPress={() => { this.onShare() }} style={{ paddingVertical: 15 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <MaterialIcons name="share" size={22} style={{ color: colorTheme == 'dark' ? COLORS.white : COLORS.black }} />
                            <Text style={{
                                color: colorTheme == 'dark' ? COLORS.white : COLORS.black, fontSize: 15,
                                marginLeft: 5,
                                fontFamily: 'YoungSerif-Regular',
                            }}>Share with Friend</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <MaterialIcons name="exit-to-app" size={22} style={{ color: colorTheme == 'dark' ? COLORS.white : COLORS.black }} />
                            <Text style={{
                                fontSize: 15,
                                marginLeft: 5,
                                fontFamily: 'YoungSerif-Regular',
                                color: colorTheme == 'dark' ? COLORS.white : COLORS.black
                            }}>Sign Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    lighttheme: {
        // flex: 1,
        paddingTop: 10,
        backgroundColor: COLORS.white,
        color: COLORS.black
    },
    darktheme: {
        // flex: 1,
        paddingTop: 10,
        backgroundColor: COLORS.black,
        color: COLORS.white
    },

})

export default CustomDrawer;