import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView } from "react-native";
import CustomAlert from "../Components/CustomAlert";
import { ToastAndroid } from "react-native";
import { Share } from "react-native";
import { Alert } from "react-native";
import { COLORS } from "../constants/color";

interface setting {
    showAlert: boolean;
}

class Settings extends Component<{ navigation: any }, setting> {
    constructor(props: any) {
        super(props);
        this.state = {
            showAlert: false,
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
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={require('../assets/settings.jpg')} style={styles.image}>


                    <Text style={{ fontSize: 25, color: COLORS.white, textAlign: 'center' }}> React Native Share</Text>
                    <TouchableOpacity onPress={() => { this.onShare() }} style={{ backgroundColor: '#d81244', marginTop: 25, alignItems: 'center', }} activeOpacity={0.8}>
                        <Text style={{ padding: 10, color: COLORS.white }}>Share Button</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                        style={{ backgroundColor: '#cccc', alignSelf: 'flex-end',marginTop:50,marginRight:10 }}
                        onPress={() => this.showCustomAlert()}
                    >
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: COLORS.black,
                                fontSize: 27,
                            }}
                        >
                            Logout
                        </Text>
                    </TouchableOpacity> */}
                    <CustomAlert isVisible={this.state.showAlert} />
                </ImageBackground>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',

    },
});

export default Settings;
