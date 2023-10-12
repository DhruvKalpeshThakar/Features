import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Premium from '../Screens/Premium';
import Profile from '../Screens/Profile';
import Favourites from '../Screens/Favourites';
import Bottomtabs from './Bottomtabs';

const Drawer = createDrawerNavigator()

class AppStack extends Component<{}, {}>{
    constructor(props: any) {

        super(props);
        this.state = {

        }

    }


    render() {
        return (
            <Drawer.Navigator screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="MainPage" component={Bottomtabs} />
                <Drawer.Screen name='Premium' component={Premium} />
                <Drawer.Screen name='Profile' component={Profile} />
                <Drawer.Screen name='Favourites' component={Favourites} />
            </Drawer.Navigator>
        )
    }


}

const styles = StyleSheet.create({

})


export default AppStack