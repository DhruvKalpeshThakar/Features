import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Image, Appearance } from 'react-native';
import Premium from '../Screens/Premium';
import Profile from '../Screens/Profile';
import Favourites from '../Screens/Favourites';
import Bottomtabs from './Bottomtabs';
import CustomDrawer from '../Components/CustomDrawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { color } from 'native-base/lib/typescript/theme/styled-system';
import { COLORS } from '../constants/color';
import Map from '../Map';
import ChatWithUs from '../Screens/ChatWithUs';
import Entypo from 'react-native-vector-icons/Entypo';


const Drawer = createDrawerNavigator()

class AppStack extends Component<{}, { colorTheme: any }>{
    constructor(props: any) {

        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
        }

    }


    render() {
        const { colorTheme } = this.state;
        return (
            <Drawer.Navigator drawerContent={props => <CustomDrawer props={undefined} {...props} />}
                screenOptions={{
                    headerShown: true,
                    drawerLabelStyle: {
                        marginLeft: -25,
                        flex: 1
                    },
                    drawerActiveBackgroundColor: COLORS.lightpurple,
                    drawerActiveTintColor: COLORS.white,
                    drawerInactiveTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black
                }} >
                <Drawer.Screen name="MainPage" component={Bottomtabs} options={{
                    drawerIcon: ({ color }) =>
                        (<FontAwesome5 name='home' size={22} color={color} />),
                    headerShown: false

                }} />
                <Drawer.Screen name='Profile' component={Profile} options={{
                    drawerIcon: ({ color }) =>
                        (<FontAwesome5 name='user-alt' size={22} color={color} />),
                    headerStyle: { backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white },
                    headerTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black
                }} />
                <Drawer.Screen name='Premium' component={Premium} options={{
                    drawerIcon: ({ color }) =>
                        (<FontAwesome5 name='crown' size={22} color={color} />),
                    headerStyle: { backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white },
                    headerTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black
                }} />
                <Drawer.Screen name='Favourites' component={Favourites} options={{
                    drawerIcon: ({ color }) =>
                        (<FontAwesome5 name='star' size={22} color={color} />),
                    headerStyle: { backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white },
                    headerTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black
                }} />
                <Drawer.Screen name='Map' component={Map} options={{
                    drawerIcon: ({ color }) =>
                        (<FontAwesome5 name='map-marked-alt' size={22} color={color} />),
                    headerStyle: { backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white },
                    headerTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black
                }} />
                <Drawer.Screen name='Chat with us' component={ChatWithUs} options={{
                    drawerIcon: ({ color }) =>
                        (<Entypo name='chat' size={22} color={color} />),
                    headerStyle: { backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white },
                    headerTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black,
                    headerShown: false
                }} />
            </Drawer.Navigator>
        )
    }


}

const styles = StyleSheet.create({

})


export default AppStack