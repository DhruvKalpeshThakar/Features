import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Appearance } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Chat from "../Screens/Chat";
import Feed from "../Screens/Feed";
import Post from "../Screens/Post";
import Search from "../Screens/Media";
import Settings from "../Screens/Settings";
import Home from "../Home";
import Media from "../Screens/Media";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants/color";


const Tab = createBottomTabNavigator();


class Bottomtabs extends Component<{ navigation: any }, { colorTheme: any }>{
    constructor(props: any) {
        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
        }

    }




    CustomTabBarButton = ({ children, onPress }: any) => (
        <TouchableOpacity style={{ top: -30, justifyContent: 'center', alignItems: 'center', ...styles.shadow }} onPress={onPress}>
            <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: COLORS.red }}>
                {children}
            </View>
        </TouchableOpacity>
    );
    render() {
        const { colorTheme } = this.state;
        return (

            // <Tab.Navigator
            //     initialRouteName="Home"
            //     activeColor="#e91e63"

            //     // barStyle={{ backgroundColor: 'tomato' }}
            // >
            //     <Tab.Screen
            //         name="Home"
            //         component={Home}

            //         options={{

            //             tabBarLabel: 'Home',
            //             tabBarColor:'#0080ff',
            //             tabBarIcon: ({ color }) => (
            //                 <MaterialCommunityIcons name="home" color={color} size={26} />
            //             ),
            //         }}
            //     />
            //     <Tab.Screen
            //         name="Chat"
            //         component={Chat}
            //         options={{
            //             tabBarLabel: 'Chat',
            //             tabBarColor:'#d81244',
            //             tabBarIcon: ({ color }) => (
            //                 <MaterialCommunityIcons name="bell" color={color} size={26} />
            //             ),

            //         }}
            //     />
            //     <Tab.Screen
            //         name="Post"
            //         component={Post}
            //         options={{
            //             tabBarLabel: "Post",
            //             tabBarColor:'#11794d',
            //             tabBarIcon: ({ color }) => (
            //                 <MaterialCommunityIcons name="post" color={color} size={26} />
            //             ),
            //         }}
            //     />
            //     <Tab.Screen
            //         name="Media"
            //         component={Media}
            //         options={{
            //             tabBarLabel: 'Media',
            //             tabBarColor:'#ff0000',
            //             tabBarIcon: ({ color }) => (
            //                 <MaterialCommunityIcons name="video-vintage" color={color} size={26} />
            //             ),
            //         }}
            //     />
            //     <Tab.Screen
            //         name="Settings"
            //         component={Settings}
            //         options={{
            //             tabBarLabel: 'Settings',
            //             tabBarColor:'#5d5d',
            //             tabBarIcon: ({ color }) => (
            //                 <MaterialCommunityIcons name="account-settings" color={color} size={26} />
            //             ),
            //         }}
            //     />
            // </Tab.Navigator>

            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 10,
                    left: 20,
                    right: 20,
                    backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white,
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }, headerShown: true,
                headerRight: ({ }) => (
                    <TouchableOpacity onPress={() => this.props.navigation.openDrawer()} activeOpacity={0.8}>
                        <Image source={require('../assets/userprofile.jpg')} style={{ height: 30, width: 30, marginRight: 15, borderRadius: 25 }} />
                    </TouchableOpacity>
                ),
                headerStyle: { borderBottomColor: '#b9b9b9', borderBottomWidth: 1, }
            }}  >
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require('../assets/feed.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.red : COLORS.cyan,
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.red : COLORS.cyan, fontSize: 12 }}>Feed</Text>
                        </View>
                    ), headerStyle: colorTheme === 'dark' ? styles.darktheme : styles.lighttheme, headerTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black
                }} />
                <Tab.Screen name="Chat" component={Chat} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require('../assets/chat.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.red : COLORS.cyan
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.red : COLORS.cyan, fontSize: 12 }}>Chat</Text>
                        </View>
                    ), headerStyle: colorTheme === 'dark' ? styles.darktheme : styles.lighttheme, headerTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black
                }} />
                <Tab.Screen name="Post" component={Post} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../assets/plus.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: COLORS.white
                                }}
                            />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <this.CustomTabBarButton {...props} />
                    ), headerStyle: colorTheme === 'dark' ? styles.darktheme : styles.lighttheme, headerTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black
                }} />
                <Tab.Screen name="Media" component={Media} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require('../assets/media.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.red : COLORS.cyan
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.red : COLORS.cyan, fontSize: 12 }}>Media</Text>
                        </View>
                    ), headerStyle: colorTheme === 'dark' ? styles.darktheme : styles.lighttheme, headerTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black
                }} />
                <Tab.Screen name="Settings" component={Settings} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require('../assets/settings.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? COLORS.red : COLORS.cyan
                                }}
                            />
                            <Text style={{ color: focused ? COLORS.red : COLORS.cyan, fontSize: 12 }}>Settings</Text>
                        </View>
                    ), headerStyle: colorTheme === 'dark' ? styles.darktheme : styles.lighttheme, headerTintColor: colorTheme == 'dark' ? COLORS.white : COLORS.black
                }} />
            </Tab.Navigator>
        )
    }


}





const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    darktheme: {
        backgroundColor: COLORS.black,
        borderBottomColor: COLORS.white,
        borderBottomWidth: 1

    },
    lighttheme: {
        backgroundColor: COLORS.white,
        borderBottomColor: COLORS.black,
        borderBottomWidth: 1

    }
})

export default Bottomtabs