import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Appearance, Image } from "react-native";
import CustomAlert from "../Components/CustomAlert";
import { ToastAndroid } from "react-native";
import { Share } from "react-native";
import { Alert } from "react-native";
import { COLORS } from "../constants/color";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Linking } from "react-native";




class Settings extends Component<{ navigation: any }, { colorTheme: any, Developing: boolean }> {
    constructor(props: any) {
        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
            Developing: false
        };
    }

    navigateToEditProfile = () => {
        this.props.navigation.navigate('EditProfile')
        // this.setState({ Developing: true });
    }
    navigateToSecurity = () => {
        this.setState({ Developing: true });
    }
    navigateToNotifications = () => {
        this.setState({ Developing: true });
    }
    navigateToScanner = () => {
        // this.setState({ Developing: true });
        this.props.navigation.navigate('Privacy');
    }
    navigateToSubscription = () => {
        this.props.navigation.navigate('Subscription')
        // this.setState({ Developing: true });
    }
    navigateToSupport = () => {
        // this.setState({ Developing: true });
        this.props.navigation.navigate('HelpnSupport')
    }
    navigateToTermsnPolicies = () => {

        // this.setState({ Developing: true });
        this.props.navigation.navigate('Termpolicies')
    }
    navigatetoRating = () => {
        // this.setState({ Developing: true });
        this.props.navigation.navigate('Ratings')
    }

    navigateToReportProblem = () => {
        Alert.alert('Confirmation', 'Report a Problem?', [
            {
                text: 'Cancel',
                style: 'cancel',
            },
            { text: 'OK', onPress: () => { Linking.openURL('mailto:admin@feature.com') } },
        ]);
    }
    navigateToAddAccount = () => {
        this.setState({ Developing: true });
    }
    navigateToPrivacy = () => {
        this.setState({ Developing: true });
    }
    navigateTologout = () => {
        // this.props.navigation.navigate('SignUp')
        this.setState({ Developing: true });
    }

    navigatetoexperience = () => {
        this.props.navigation.navigate('CreateExperienceForm')
    }




    accountItems = [
        { icon: "person-outline", text: 'Edit Profile', action: this.navigateToEditProfile },
        { icon: "security", text: 'Security', action: this.navigateToSecurity },
        { icon: "notifications-none", text: 'Notifications', action: this.navigateToNotifications },
        { icon: "qr-code-scanner", text: 'Scanner', action: this.navigateToScanner },
        { icon: "lock-outline", text: 'Privacy', action: this.navigateToPrivacy },
    ];

    supportItems = [
        { icon: "credit-card", text: 'My Subscription', action: this.navigateToSubscription },
        { icon: "help-outline", text: 'Help & Support', action: this.navigateToSupport },
        { icon: "info-outline", text: 'Terms & Policies', action: this.navigateToTermsnPolicies },
        { icon: "dynamic-form", text: 'Create Experience', action: this.navigatetoexperience },

    ];

    ratingandreviews = [
        { icon: "star", text: 'Rate us', action: this.navigatetoRating },


    ];

    actionItems = [
        { icon: "outlined-flag", text: 'Report a Problem', action: this.navigateToReportProblem },
        { icon: "people-outline", text: 'Add a Account', action: this.navigateToAddAccount },
        { icon: "logout", text: 'Log out', action: this.navigateTologout },

    ]


    renderSettingsItem = ({ icon, text, action }: { icon: string, text: string, action: () => void }) => (
        <TouchableOpacity onPress={action} style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 8, paddingLeft: 12, borderBottomColor: COLORS.black, borderBottomWidth: 1 }}>
            <MaterialIcons name={icon} size={24} color={'black'} />
            <Text style={{ marginLeft: 36, fontWeight: '600', fontSize: 16, color: COLORS.black }}>{text}</Text>
        </TouchableOpacity>
    );




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
            // <SafeAreaView style={{ flex: 1 }}>
            //     {/* <ImageBackground source={require('../assets/settings.jpg')} style={styles.image}> */}
            //     <ScrollView contentContainerStyle={styles.container}>
            //         <View style={styles.profile}>
            //             <TouchableOpacity onPress={() => { }}>
            //                 <View style={styles.profileAvatarWrapper}>
            //                     <Image source={{ uri: PROFILE_PICTURE }} style={styles.profileAvatar} />
            //                 </View>
            //             </TouchableOpacity>


            //             <Text style={{ color: COLORS.black }}>Jason Roy</Text>
            //             <Text style={{ color: COLORS.black }}>456 Apple Street,London,PA,18080</Text>
            //         </View>

            //     </ScrollView>
            //     {/* </ImageBackground> */}
            // </SafeAreaView>
            <SafeAreaView style={{ flex: 1, backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white }}>
                <ScrollView style={{ marginBottom: '30%' }}>
                    <View style={{
                        marginHorizontal: 13,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',

                    }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={{ position: 'absolute', left: 0 }}>
                            <MaterialIcons name="keyboard-arrow-left" size={26} color={COLORS.black} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 22, color: colorTheme == 'dark' ? COLORS.white : COLORS.black, textAlign: 'center' }}>Settings</Text>
                    </View>

                    {/* Account Settings */}

                    <View style={{ marginBottom: 12 }}>
                        <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold', color: colorTheme == 'dark' ? COLORS.white : COLORS.black }}> Account</Text>

                        <View style={{ borderRadius: 12, backgroundColor: COLORS.white, }}>
                            {
                                this.accountItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {this.renderSettingsItem(item)}
                                    </React.Fragment>
                                ))
                            }
                        </View>
                    </View>

                    {/* Support and About Settings */}
                    <View style={{ marginBottom: 12 }}>
                        <Text style={{ marginVertical: 10, color: colorTheme == 'dark' ? COLORS.white : COLORS.black, fontSize: 20, fontWeight: 'bold' }}> Support and About</Text>

                        <View style={{ borderRadius: 12, backgroundColor: COLORS.white }}>
                            {
                                this.supportItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {this.renderSettingsItem(item)}
                                    </React.Fragment>
                                ))
                            }
                        </View>
                    </View>

                    {/* Cache and Cellular */}

                    <View style={{ marginBottom: 12 }}>
                        <Text style={{ marginVertical: 10, color: colorTheme == 'dark' ? COLORS.white : COLORS.black, fontSize: 20, fontWeight: 'bold' }}>Rating and Reviews</Text>

                        <View style={{ borderRadius: 12, backgroundColor: COLORS.white }}>
                            {
                                this.ratingandreviews.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {this.renderSettingsItem(item)}
                                    </React.Fragment>
                                ))
                            }
                        </View>
                    </View>

                    {/* Action Settings */}
                    <View style={{ marginBottom: 12 }}>
                        <Text style={{ marginVertical: 10, fontSize: 20, fontWeight: 'bold', color: colorTheme == 'dark' ? COLORS.white : COLORS.black }}> Actions</Text>

                        <View style={{ borderRadius: 12, backgroundColor: COLORS.white }}>
                            {
                                this.actionItems.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {this.renderSettingsItem(item)}
                                    </React.Fragment>
                                ))
                            }
                        </View>
                    </View>

                    {/* {this.state.Developing &&
                    <View style={styles.modal}>
                        <View style={styles.body}>
                            <Image source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/011/858/556/small/green-check-mark-icon-with-circle-tick-box-check-list-circle-frame-checkbox-symbol-sign-png.png" }} style={{ width: '30%', height: '30%', alignSelf: 'center', marginTop: 15 }} />
                            <Text style={styles.alerttitle}>Success</Text>
                            <Text style={styles.alertmessage}>Are you sure You want to Proceed?</Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 17 }}>
                                <TouchableOpacity style={{ backgroundColor: COLORS.grey, width: '35%' }}
                                    onPress={() => { }} activeOpacity={0.7}>
                                    <Text style={styles.button}>CANCEL</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#007788', width: '35%' }} onPress={() => { this.setState({ Developing: false }) }} activeOpacity={0.7}>
                                    <Text style={styles.button}>OK</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                    
                } */}
                    <CustomAlert
                        visible={this.state.Developing}
                        title="Warning"
                        message="This Module is Under Development"
                        onConfirm={() => {
                            // Add any code you want to execute when the user confirms the alert
                            this.setState({ Developing: false });
                        }}
                    // onCancel={() => {
                    //     this.setState({ Developing: false });
                    // }}
                    />
                </ScrollView>
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

    },
    modal: {
        flex: 1,
        // backgroundColor: 'rgba(50,50,50,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    },
    body: {
        borderRadius: 25,
        backgroundColor: COLORS.white,
        width: '75%',
        height: '35%',
        justifyContent: 'flex-start',

    },

    alerttitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 15
    },
    alertmessage:
    {
        fontSize: 17,
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 15
    },
    button: {
        fontSize: 17,
        color: COLORS.black,
        textAlign: 'center',
        marginTop: 15
    }


});

export default Settings;
