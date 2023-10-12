import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Chat from "../Screens/Chat";
import Feed from "../Screens/Feed";
import Post from "../Screens/Post";
import Search from "../Screens/Media";
import Settings from "../Screens/Settings";
import Home from "../Home";
import Media from "../Screens/Media";


const Tab = createMaterialBottomTabNavigator();


class Bottomtabs extends Component<{}, {}>{
    constructor(props: any) {
        super(props);
        this.state = {

        }

    }




    // CustomTabBarButton = ({ children, onPress }: any) => (
    //     <TouchableOpacity style={{ top: -30, justifyContent: 'center', alignItems: 'center', ...styles.shadow }} onPress={onPress}>
    //         <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: '#e32f45' }}>
    //             {children}
    //         </View>
    //     </TouchableOpacity>
    // );
    render() {
        return (<Tab.Navigator
            initialRouteName="Home"
            activeColor="#e91e63"
            // barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                
                options={{
                    
                    tabBarLabel: 'Home',
                    tabBarColor:'#0080ff',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Chat"
                component={Chat}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarColor:'#d81244',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                    
                }}
            />
            <Tab.Screen
                name="Post"
                component={Post}
                options={{
                    tabBarLabel: "Post",
                    tabBarColor:'#11794d',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="post" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Media"
                component={Media}
                options={{
                    tabBarLabel: 'Media',
                    tabBarColor:'#ff0000',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="video-vintage" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarColor:'#5d5d',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account-settings" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>

            // <Tab.Navigator screenOptions={{
            //     tabBarShowLabel: false,
            //     tabBarStyle: {
            //         position: 'absolute',
            //         bottom: 10,
            //         left: 20,
            //         right: 20,
            //         backgroundColor: '#ffff',
            //         borderRadius: 15,
            //         height: 90,
            //         ...styles.shadow
            //     }, headerShown: false
            // }}  >
            //     <Tab.Screen name="Home" component={Home} options={{
            //         tabBarIcon: ({ focused }) => (
            //             <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            //                 <Image source={require('../assets/feed.png')}
            //                     resizeMode="contain"
            //                     style={{
            //                         width: 25,
            //                         height: 25,
            //                         tintColor: focused ? "#e32f45" : "#748c94",
            //                     }}
            //                 />
            //                 <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Feed</Text>
            //             </View>
            //         ), 
            //     }} />
            //     <Tab.Screen name="Chat" component={Chat} options={{
            //         tabBarIcon: ({ focused }) => (
            //             <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            //                 <Image source={require('../assets/chat.png')}
            //                     resizeMode="contain"
            //                     style={{
            //                         width: 25,
            //                         height: 25,
            //                         tintColor: focused ? "#e32f45" : "#748c94"
            //                     }}
            //                 />
            //                 <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Chat</Text>
            //             </View>
            //         ), 
            //     }} />
            //     <Tab.Screen name="Post" component={Post} options={{
            //         tabBarIcon: ({ focused }) => (
            //             <View style={{ alignItems: 'center', justifyContent: 'center', }}>
            //                 <Image source={require('../assets/plus.png')}
            //                     resizeMode="contain"
            //                     style={{
            //                         width: 30,
            //                         height: 30,
            //                         tintColor: "#fff"
            //                     }}
            //                 />
            //             </View>
            //         ),
            //         tabBarButton: (props) => (
            //             <this.CustomTabBarButton {...props} />
            //         )
            //     }} />
            //     <Tab.Screen name="Media" component={Media} options={{
            //         tabBarIcon: ({ focused }) => (
            //             <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            //                 <Image source={require('../assets/media.png')}
            //                     resizeMode="contain"
            //                     style={{
            //                         width: 25,
            //                         height: 25,
            //                         tintColor: focused ? "#e32f45" : "#748c94"
            //                     }}
            //                 />
            //                 <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Media</Text>
            //             </View>
            //         ), 
            //     }} />
            //     <Tab.Screen name="Settings" component={Settings} options={{
            //         tabBarIcon: ({ focused }) => (
            //             <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            //                 <Image source={require('../assets/settings.png')}
            //                     resizeMode="contain"
            //                     style={{
            //                         width: 25,
            //                         height: 25,
            //                         tintColor: focused ? "#e32f45" : "#748c94"
            //                     }}
            //                 />
            //                 <Text style={{ color: focused ? "#e32f45" : "#748c94", fontSize: 12 }}>Settings</Text>
            //             </View>
            //         )
            //     }} />
            // </Tab.Navigator>
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