import React, { Component } from "react";
import { KeyboardAvoidingView, Modal, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BlurView } from "@react-native-community/blur";

interface Menufields {
    menutitle: string
    menudesc: string
    mealprice: string
    titlealert: boolean
    descalert: boolean
    pricealert: boolean
    isdeletemenu: boolean
}

class AddMenu extends Component<{ navigation: any }, Menufields>{
    constructor(props: any) {

        super(props);
        this.state = {
            menutitle: '',
            menudesc: '',
            mealprice: "",
            isdeletemenu: false,
            titlealert: false,
            descalert: false,
            pricealert: false,
        }

    }

    isDeletemenuhandler = () => {
        this.setState({ isdeletemenu: false })
    }


    addmenuhandler = async () => {
        if (this.state.menudesc == "") {
            this.setState({ descalert: true })
        } else {
            this.setState({ descalert: false })
        }

        if (this.state.menutitle == "") {
            this.setState({ titlealert: true })
        } else {
            this.setState({ titlealert: false })
        }


        if (this.state.mealprice == "") {
            this.setState({ pricealert: true })
        } else {
            this.setState({ pricealert: false })
        }

        setTimeout(() => {

            console.log("Price , Title , Description", this.state.pricealert, this.state.titlealert, this.state.descalert);
        }, 500);


        if ((this.state.menutitle && this.state.menudesc && this.state.mealprice) != "") {
            // const Menu = {
            //     Title: this.state.menutitle,
            //     Description: this.state.menudesc,
            //     Price: this.state.mealprice
            // }
            this.props.navigation.navigate("CreateExperienceForm", {
                Title: this.state.menutitle,
                Description: this.state.menudesc,
                Price: this.state.mealprice,
                isMenuExists: "True"
            })
        } else {
            ToastAndroid.show("Please fill up all details", ToastAndroid.BOTTOM)
        }
    }

    render() {
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: '#ebebeb' }}>

                <StatusBar barStyle={"dark-content"} backgroundColor={'#ebebeb'} />
                <View style={{ marginBottom: hp(2), backgroundColor: '#ebebeb' }}>
                    <View style={{ flexDirection: 'row', marginTop: hp(3) }}>
                        <View style={{ marginLeft: wp(3) }}>
                            <Entypo name="cross" color={'#000'} size={30} onPress={() => this.props.navigation.goBack()} />
                        </View>

                        <Text style={{ color: '#000', textAlign: 'center', fontSize: 20, marginLeft: wp(3), fontWeight: 'bold' }}>Add Menu</Text>

                        <TouchableOpacity style={{ marginLeft: 'auto', marginRight: wp(4), marginTop: hp(0.2) }}>
                            <AntDesign name="delete" color={'#000'} size={25} onPress={() => { this.setState({ isdeletemenu: true }) }} />
                        </TouchableOpacity>
                    </View>
                </View>

                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>

                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{ marginHorizontal: wp(7.46) }}>
                            <View>
                                <Text style={styles.text}>Menu Title</Text>
                                <TextInput
                                    style={[styles.textinput, { borderColor: this.state.titlealert ? "#DC2626" : '#E4DFDF' }]}
                                    value={this.state.menutitle}
                                    placeholder="My menu"
                                    placeholderTextColor={'#747688'}
                                    onChangeText={(text) => {
                                        if (this.state.menutitle == "") {
                                            this.setState({ titlealert: true })
                                        } else {
                                            this.setState({ titlealert: false })
                                        }
                                        this.setState({ menutitle: text })
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={[styles.text, { marginTop: hp(2.46) }]}>Menu Description</Text>
                                <TextInput
                                    style={[styles.textinput, { textAlignVertical: 'top', paddingHorizontal: wp(10), borderColor: this.state.descalert ? "#DC2626" : '#E4DFDF' }]}
                                    value={this.state.menudesc}
                                    numberOfLines={10}
                                    multiline
                                    placeholder="Start Typing here"
                                    placeholderTextColor={'#747688'}
                                    onChangeText={(text) => {
                                        if (this.state.menudesc == '') {
                                            this.setState({ descalert: true })
                                        } else {
                                            this.setState({ descalert: false })
                                        }
                                        this.setState({ menudesc: text })
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={[styles.text, { marginTop: hp(2.46) }]}>Menu Price</Text>
                                <TextInput
                                    style={[styles.textinput, { borderColor: this.state.pricealert ? "#DC2626" : '#E4DFDF' }]}
                                    value={this.state.mealprice.toString()}
                                    placeholder="type the amount"
                                    keyboardType="number-pad"
                                    placeholderTextColor={'#747688'}
                                    onChangeText={(number) => {
                                        if (this.state.mealprice == "") {
                                            this.setState({ pricealert: true })
                                        } else {
                                            this.setState({ pricealert: false })
                                        }
                                        this.setState({ mealprice: number })
                                    }}
                                />
                            </View>

                            {(this.state.titlealert || this.state.pricealert || this.state.descalert) &&
                                <View style={{ backgroundColor: '#FEE2E2', flexDirection: 'row', borderRadius: wp(2), marginBottom: hp(2), marginTop: hp(3) }}>
                                    <View style={{ width: wp(2), height: hp(5), backgroundColor: '#DC2626', borderBottomStartRadius: wp(2), borderTopLeftRadius: wp(2) }}></View>
                                    <Text style={{ color: '#DC2626', alignSelf: 'center', paddingLeft: wp(3) }}>Please fill all the required details</Text>
                                </View>
                            }
                        </View>
                        <TouchableOpacity style={{ backgroundColor: '#F3E344', borderRadius: wp(3), marginTop: hp(5), marginHorizontal: wp(7.46), marginBottom: hp(3) }} onPress={() => { this.addmenuhandler() }}>
                            <Text style={{ color: '#000000', fontSize: 20, padding: wp(3), textAlign: 'center', fontWeight: 'bold' }}>Add Menu</Text>
                        </TouchableOpacity>
                    </ScrollView>

                </KeyboardAvoidingView>

                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={this.state.isdeletemenu}
                    onRequestClose={() => this.isDeletemenuhandler()}
                >
                    <View style={[styles.modalContainer]}>
                        <BlurView
                            style={styles.absolute}
                            blurType="prominent"
                            blurAmount={10}
                            reducedTransparencyFallbackColor="white"
                        />
                        <View style={[styles.modalContent,]}>
                            <View style={{ borderRadius: wp(2) }}>


                                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: hp(2), marginTop: hp(3), marginHorizontal: wp(6) }}>
                                    <Text style={{ color: '#000', fontSize: 25 }}>Are you Sure ?</Text>
                                </View>

                                <View style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: wp(5) }}>
                                    <Text style={{ color: '#000' }} numberOfLines={2}>Any bookings with this menu will be cancelled.</Text>
                                </View>
                                <View style={{ marginBottom: hp(3), alignItems: 'center', marginTop: hp(3) }}>
                                    <TouchableOpacity style={{ backgroundColor: '#F87171', height: hp(6.40), width: wp(68.53), justifyContent: 'center', borderRadius: wp(2) }}>
                                        <Text style={{ color: '#fff', textAlign: 'center' }}>Delete Menu</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ height: hp(6.40), width: wp(68.53), justifyContent: 'center' }} onPress={() => { this.setState({ isdeletemenu: false }) }}>
                                        <Text style={{ color: '#000', textAlign: 'center' }}>Cancel</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>

            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    text: { color: '#747688', fontSize: 15 },
    textinput: {
        borderColor: '#E4DFDF', borderWidth: 1, borderRadius: wp(3), backgroundColor: '#ffffff', color: '#000', marginTop: hp(1.53), paddingLeft: wp(4)
    },
    modalContainer: {

        borderRadius: wp(2),
        borderColor: '#E4DFDF',
        marginTop: hp(35),
        marginHorizontal: wp(5),
        backgroundColor: "transparent"
    },
    modalContent: {
        elevation: 1,
        borderColor: '#E4DFDF',
        backgroundColor: '#ffffff',
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
})

export default AddMenu;