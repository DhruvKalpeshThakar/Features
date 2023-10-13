import React from "react";
import { LogBox, Alert, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Appearance, } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import { ImageBackground } from "react-native";
import { COLORS } from "../constants/color";
import Facebook from '../assets/misc/facebook.svg';
import Google from '../assets/misc/google.svg';
import Twitter from '../assets/misc/twitter.svg'




interface State {
    email: string;
    pass: any;
    major: boolean;
    numbers: (string | number)[]; //array - any length
    person: [string, number] //Tuple - of fixed Length
    showPassword: boolean
    colorTheme: any
}




class LoginScreen extends React.Component<{ navigation: any }, State> {
    constructor(props: any) {

        super(props);

        this.state = {
            email: "",
            pass: "",
            major: false,
            numbers: [10, 11, 12, 13, 14, 15, 'Hello'],
            person: ["John", 35],
            showPassword: false,
            colorTheme: Appearance.getColorScheme(),
        };
    }



    componentDidMount(): void {
        LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
        console.log("Hello Class Component")
    }

    componentWillUnmount(): void {
        console.log("Bye Bye Class Component")
    }

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
            showPassword: !prevState.showPassword,
        }));
    };

    submithandler = () => {
        // if (this.state.email && this.state.cemail && this.state.pass && this.state.cpass != "") {

        //     if (this.state.email === this.state.cemail) {
        //         if (this.state.pass === this.state.cpass) {
        //             this.props.navigation.navigate('Bottomtabs',{
        //                 email: this.state.email,
        //                 cemail: this.state.cemail,
        //                 pass: this.state.pass,
        //                 cpass: this.state.cpass,
        //             });            
        //         } else {
        //             Alert.alert('Mis-match', 'Passwords Fields value Mis-match', [
        //                 {
        //                   text: 'Cancel',
        //                   style: 'cancel',
        //                 },
        //                 {text: 'OK'},
        //               ]);
        //         }
        //     } else{
        //         Alert.alert('Mis-match', 'Email Fields value Mis-match', [
        //             {
        //               text: 'Cancel',
        //               style: 'cancel',
        //             },
        //             {text: 'OK'},
        //           ]);
        //     }
        // } else {
        //     Alert.alert('Missing', 'Fill Out all fields Properly', [
        //         {
        //           text: 'Cancel',
        //           style: 'cancel',
        //         },
        //         {text: 'OK'},
        //       ]);
        // }

        this.props.navigation.navigate('Bottomtabs')

        // console.log("called after navigation");
    };


    render() {
        const { colorTheme } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                {/* <ImageBackground source={require('../assets/bg.jpg')} style={styles.image} > */}
                <Image source={require('../assets/login.png')} style={{ height: 350, width: 370, marginLeft: '2%' }} />
                <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={50}>
                    <View style={styles.cardoutside}>

                        <View style={styles.card}>
                            <Text style={styles.cardtitle}>Login </Text>
                            <View style={styles.inputcontainer}>
                                <Text style={styles.formtext}>Email</Text>
                                <TextInput
                                    style={styles.textinput}
                                    onChangeText={(email) => this.setState({ email })}
                                    value={this.state.email}
                                    keyboardType="email-address"
                                    placeholderTextColor={COLORS.black}
                                    placeholder="Enter your email" />

                            </View>

                            <View style={styles.inputcontainer}>
                                <Text style={styles.formtext}>Password</Text>
                                <TextInput
                                    style={[styles.textinput]}
                                    onChangeText={(pass) => this.setState({ pass })}
                                    value={this.state.pass}
                                    secureTextEntry={!this.state.showPassword}
                                    maxLength={8}
                                    placeholderTextColor={COLORS.black}
                                    placeholder="Enter Password" />
                                <TouchableOpacity
                                    style={[styles.toggleButton, { position: 'absolute', right: 10 }]}
                                    onPress={this.togglePasswordVisibility}>
                                    <Entypo size={25} color={COLORS.black} name={this.state.showPassword ? 'eye' : 'eye-with-line'} />
                                </TouchableOpacity>

                            </View>

                            <TouchableOpacity onPress={() => this.submithandler()} style={styles.submitstyle}>
                                <Text style={styles.buttontext}>Login</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ textAlign: 'center', color: COLORS.black, marginBottom: 30, fontSize: 15 }}>
                            Or, login with ...
                        </Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginBottom: 30,
                            }}>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={{
                                    borderColor: '#ddd',
                                    borderWidth: 2,
                                    borderRadius: 10,
                                    paddingHorizontal: 30,
                                    paddingVertical: 10,
                                }}>
                                <Google height={24} width={24} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={{
                                    borderColor: '#ddd',
                                    borderWidth: 2,
                                    borderRadius: 10,
                                    paddingHorizontal: 30,
                                    paddingVertical: 10,
                                }}>
                                <Facebook height={24} width={24} />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={{
                                    borderColor: '#ddd',
                                    borderWidth: 2,
                                    borderRadius: 10,
                                    paddingHorizontal: 30,
                                    paddingVertical: 10,
                                }}>
                                <Twitter height={24} width={24} />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                marginBottom: 30,
                            }}>
                            <Text style={{ color: COLORS.black }}>New to the app?</Text>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}>
                                <Text style={{ color: '#0080ff', fontWeight: '700' }}> Register</Text>
                            </TouchableOpacity>
                        </View>

                        {/* <View style={{ backgroundColor: '#fff', marginTop: 25, paddingHorizontal: 30, borderRadius: 20 }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <Text style={{ fontSize: 20, color: '#000' }}>New User?</Text>
                                    <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => { this.props.navigation.navigate('Signup') }}>
                                        <Text style={{ fontSize: 20, color: '#008', fontWeight: 'bold' }}>Sign-Up</Text>
                                    </TouchableOpacity>
                                </View>

                            </View> */}
                    </View>
                </KeyboardAvoidingView>
                {/* </ImageBackground> */}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: COLORS.white
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    textinput: {
        borderColor: COLORS.black,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginHorizontal: 20,
        width: '70%',
        backgroundColor: COLORS.white
    },
    inputcontainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    cardoutside: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#0080ff',
        borderRadius: 8,
        padding: 10,
        width: "80%",
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 6,
        borderWidth: 1,
        borderColor: COLORS.white
    },
    submitstyle: {
        marginTop: 10,
        width: '100%',
        borderRadius: 5,
        backgroundColor: COLORS.black,
    },
    buttontext: {
        fontSize: 25,
        fontWeight: 'bold',
        color: COLORS.white,
        textAlign: 'center'
    },
    formtext: {
        width: '25%',
        color: COLORS.white,
        fontSize: 14,
        // fontFamily:'DancingScript-VariableFont_wght'
        fontWeight: 'bold'
    },
    cardtitle: {
        color: COLORS.white,
        fontSize: 27,
        fontFamily: 'YoungSerif-Regular',
        textAlign: 'center',
        // fontWeight:'bold',
        margin: 5

    },
    eyecontainer: {
        // // flexDirection: 'row',
        // alignItems: 'center',
        // width:'',
    },
    toggleButton: {
        // padding: 10,
        // backgroundColor: '#008',
    },
    toggleButtonText: {
        fontWeight: 'bold',
    },

})


export default LoginScreen;