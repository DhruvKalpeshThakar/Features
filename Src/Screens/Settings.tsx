import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Appearance, Image } from "react-native";
import CustomAlert from "../Components/CustomAlert";
import { ToastAndroid } from "react-native";
import { Share } from "react-native";
import { Alert } from "react-native";
import { COLORS } from "../constants/color";
import Feather from 'react-native-vector-icons/Feather';



class Settings extends Component<{ navigation: any }, { colorTheme: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
        };
    }

    showCustomAlert = () => {
        // console.log("callerddd", this.state.showAlert);

        // this.setState({ showAlert: !this.state.showAlert });
        // setTimeout(() => {
        //     console.log("callerddd////////////////////////", this.state.showAlert);
        // }, 500);
        // this.props.navigation.navigate('WelcomeScreen')
    };

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
                url: 'https://youtu.be/TGTNBxbFHRY?si=zLwctur8_ZHpO1MN',
                title: 'React Native Share'
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
        const PROFILE_PICTURE = 'https://img.freepik.com/premium-vector/glitch-social-media-user-profile-icon_97886-10045.jpg'
        const { colorTheme } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {/* <ImageBackground source={require('../assets/settings.jpg')} style={styles.image}> */}
                <ScrollView contentContainerStyle={styles.container}>
                    <View style={styles.profile}>
                        <TouchableOpacity onPress={() => { }}>
                            <View style={styles.profileAvatarWrapper}>
                                <Image source={{ uri: PROFILE_PICTURE }} style={styles.profileAvatar} />
                            </View>
                        </TouchableOpacity>


                        <Text style={{ color: COLORS.black }}>Jason Roy</Text>
                        <Text style={{ color: COLORS.black }}>456 Apple Street,London,PA,18080</Text>
                    </View>

                </ScrollView>
                {/* </ImageBackground> */}
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',

    },
    container: {
        paddingVertical: 24
    },
    profile: {
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'YoungSerif-Regular'
    },
    profileAvatar: {
        width: 72,
        height: 72,
        borderRadius: 9999
    },
    profileAvatarWrapper: {
        position: 'relative'
    },
    profileAction: {
        width: 28,
        height: 28,
        borderRadius: 9999,
        backgroundColor: COLORS.blue,
        position: 'absolute',
        right: -4,
        bottom: -10,
        alignItems: 'center',
        justifyContent: 'center',

    }


});

export default Settings;
