import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chat from "../Screens/Chat";
import Feed from "../Screens/Feed";
import Post from "../Screens/Post";
import Search from "../Screens/Media";
import Settings from "../Screens/Settings";
import Home from "../Home";
import Media from "../Screens/Media";


const Tab = createBottomTabNavigator();


class Bottomtabs extends Component<{}, {}>{
    constructor(props: any) {
        super(props);
        this.state = {

        }

    }




    CustomTabBarButton = ({ children, onPress }: any) => (
        <TouchableOpacity style={{ top: -30, justifyContent: 'center', alignItems: 'center', ...styles.shadow }} onPress={onPress}>
            <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#e32f45' }}>
                {children}
            </View>
        </TouchableOpacity>
    );
    render() {
        return (
            <Tab.Navigator screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    backgroundColor: '#ffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }, headerShown: false
            }}  >
                <Tab.Screen name="Home" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require('../assets/feed.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#e32f45" : "#748c94"
                                }}
                            />
                            <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Feed</Text>
                        </View>
                    ), 
                }} />
                <Tab.Screen name="Chat" component={Chat} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require('../assets/chat.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#e32f45" : "#748c94"
                                }}
                            />
                            <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Chat</Text>
                        </View>
                    ), 
                }} />
                <Tab.Screen name="Post" component={Post} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                            <Image source={require('../assets/plus.png')}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                    tintColor: "#fff"
                                }}
                            />
                        </View>
                    ),
                    tabBarButton: (props) => (
                        <this.CustomTabBarButton {...props} />
                    )
                }} />
                <Tab.Screen name="Media" component={Media} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require('../assets/media.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#e32f45" : "#748c94"
                                }}
                            />
                            <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Media</Text>
                        </View>
                    ), 
                }} />
                <Tab.Screen name="Settings" component={Settings} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <Image source={require('../assets/settings.png')}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? "#e32f45" : "#748c94"
                                }}
                            />
                            <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Settings</Text>
                        </View>
                    )
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
    }
})

export default Bottomtabs