import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer'
import { ImageBackground } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class CustomDrawer extends Component<{ props: any }, {}>{
    constructor(props: any) {

        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <DrawerContentScrollView {...this.props} contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                    <ImageBackground source={require('../assets/drawer.jpg')} style={{ padding: 20 }}>
                        <Image source={require('../assets/userprofile.jpg')} style={{ height: 80, width: 80, marginBottom: 10, borderRadius: 40 }} />
                        <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'YoungSerif-Regular', }}>Mr. Secret </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#ff0', fontSize: 15, fontFamily: 'YoungSerif-Regular' }}>Lover</Text>
                            <MaterialIcons name="computer" size={14} color={'#ff0'} style={{ marginTop: 7, marginLeft: 5 }} />
                        </View>
                    </ImageBackground>
                    <View style={{ backgroundColor: '#ffff', flex: 1, paddingTop: 10 }}>
                        <DrawerItemList {...this.props} />
                    </View>
                </DrawerContentScrollView>
                <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                    <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <MaterialIcons name="share" size={22} />
                            <Text style={{ fontSize: 15, marginLeft: 5, fontFamily: 'YoungSerif-Regular' }}>Share with Friend</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                            <MaterialIcons name="exit-to-app" size={22} />
                            <Text style={{ fontSize: 15, marginLeft: 5, fontFamily: 'YoungSerif-Regular' }}>Sign Out</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default CustomDrawer;