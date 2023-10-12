import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Premium from '../Screens/Premium';
import Profile from '../Screens/Profile';
import Favourites from '../Screens/Favourites';
import Bottomtabs from './Bottomtabs';
import CustomDrawer from '../Components/CustomDrawer';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { color } from 'native-base/lib/typescript/theme/styled-system';


const Drawer = createDrawerNavigator()

class AppStack extends Component<{}, {}>{
    constructor(props: any) {

        super(props);
        this.state = {

        }

    }


    render() {
        return (
            <Drawer.Navigator drawerContent={props => <CustomDrawer props={undefined} {...props} />}
                screenOptions={{
                    headerShown: false,
                    drawerLabelStyle: {
                        marginLeft: -25
                    },
                    drawerActiveBackgroundColor: '#ca95ff',
                    drawerActiveTintColor: '#fff'
                }} >
                <Drawer.Screen name="MainPage" component={Bottomtabs} options={{
                    drawerIcon: ({ color }) =>
                        (<FontAwesome5 name='home' size={22} color={color} />)
                }} />
                <Drawer.Screen name='Profile' component={Profile} options={{
                    drawerIcon: ({ color }) =>
                        (<FontAwesome5 name='user-alt' size={22} color={color} />)
                }} />
                <Drawer.Screen name='Premium' component={Premium} options={{
                    drawerIcon: ({ color }) =>
                        (<FontAwesome5 name='crown' size={22} color={color} />)
                }} />
                <Drawer.Screen name='Favourites' component={Favourites} options={{
                    drawerIcon: ({ color }) =>
                        (<FontAwesome5 name='star' size={22} color={color} />)
                }} />
            </Drawer.Navigator>
        )
    }


}

const styles = StyleSheet.create({

})


export default AppStack