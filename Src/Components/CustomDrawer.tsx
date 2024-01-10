import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { Component } from "react";
import { Alert, Appearance, Image, ImageBackground, Modal, SafeAreaView, Share, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from "../constants/color";
import ImagePicker from 'react-native-image-crop-picker';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';

interface Drawer {
    modelstate: boolean
    colorTheme: any
    capturedCameraImage: any
    capturedGalleryImage: any

}
class CustomDrawer extends Component<{ props: any }, Drawer>{
    constructor(props: any) {

        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
            modelstate: false
        }

    }

    onShare = async () => {
        try {
            const result = await Share.share({
                title: 'Hello',
                message: 'Subscribe to Channel: https://youtube.com/@KnowledgeWorld22?si=TxK5CprQwQRSEKHv'

                // url: 'https://youtu.be/TGTNBxbFHRY?si=zLwctur8_ZHpO1MN',
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

    cancel = () => {
        this.setState({ modelstate: false })
    }

    openImagePicker = () => {
        ImagePicker.openCamera({
            width: 800,
            height: 800,
            cropping: true,
        }).then(image => {
            console.log(image);
            this.setState({ modelstate: false })
            this.setState({ capturedCameraImage: image.path });
        });
    }

    opengallery = async () => {
        console.log("called in gallery");

        // Check if permission is already granted
        const permissionStatus = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
        console.log("permisssion Status--------->>>>>>>", permissionStatus);


        if (permissionStatus === RESULTS.GRANTED) {
            // Permission already granted, proceed with image picking
            this.pickImage();
        } else {
            // Permission not granted, request it
            const result = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);

            if (result === RESULTS.GRANTED) {
                // Permission granted, proceed with image picking
                this.pickImage();
            } else {
                // Permission denied, handle accordingly (show a message, etc.)
                console.log("Read external storage permission denied");
            }
        }
    }

    pickImage = () => {
        ImagePicker.openPicker({
            multiple: false,
            mediaType: 'photo'
        }).then(images => {
            console.log(images);
            console.log("Image Paths-------------------->>>>>>>>>>>>>>", images.path);

            this.setState({ modelstate: false })
            this.setState({ capturedGalleryImage: images.path });
        });
    }


    render() {
        const { colorTheme } = this.state;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white }}>
                    <DrawerContentScrollView {...this.props} contentContainerStyle={{ backgroundColor: COLORS.purple }}>
                        <ImageBackground source={require('../assets/drawer.jpg')} style={{ padding: 20, }}>

                            <TouchableOpacity onPress={() => { this.setState({ modelstate: true }) }}>
                                {this.state.capturedGalleryImage || this.state.capturedCameraImage ?
                                    <Image source={{ uri: this.state.capturedGalleryImage || this.state.capturedCameraImage }} style={styles.image} /> :
                                    <Image source={require('../assets/userprofile.jpg')} style={styles.image} />
                                }
                                <AntDesign name='plus' size={25} style={{ position: 'absolute', bottom: 10, left: 55, fontWeight: 'bold', backgroundColor: '#0088', borderRadius: 20 }} color={'#ffff00'} />
                            </TouchableOpacity>

                            <Text style={styles.username}>Mr. Secret </Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={styles.designation}>Lover</Text>
                                <MaterialIcons name="computer" size={18} color={COLORS.yellow} style={{ marginTop: 7, marginLeft: 5 }} />
                            </View>
                            {/* <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', borderColor: '#ccc', borderWidth: 1, width: '32%' }}>
                            <MaterialIcons name="light-mode" size={22} style={{ bottom: -15 }} />
                            <Text style={{ marginTop: 15, marginLeft: 5, fontSize: 18 }}>Mode</Text>
                        </TouchableOpacity> */}
                        </ImageBackground>
                        <View style={colorTheme == 'dark' ? styles.darktheme : styles.lighttheme}>
                            <DrawerItemList {...this.props} />
                        </View>
                    </DrawerContentScrollView >
                    <View style={[styles.bottomview, { backgroundColor: colorTheme == 'dark' ? COLORS.black : COLORS.white }]}>
                        <TouchableOpacity onPress={() => { this.onShare() }} style={{ paddingVertical: 15 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <MaterialIcons name="share" size={22} style={{ color: colorTheme == 'dark' ? COLORS.white : COLORS.black }} />
                                <Text style={[styles.bottomviewtext, {
                                    color: colorTheme == 'dark' ? COLORS.white : COLORS.black,
                                }]}>Share with Friend</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                <MaterialIcons name="exit-to-app" size={22} style={{ color: colorTheme == 'dark' ? COLORS.white : COLORS.black }} />
                                <Text style={[styles.bottomviewtext, {

                                    color: colorTheme == 'dark' ? COLORS.white : COLORS.black
                                }]}>Sign Out</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View >

                <Modal
                    // style={{ flex: 1 }}
                    transparent={true}
                    animationType="slide"
                    visible={this.state.modelstate}
                    onRequestClose={() => this.cancel()}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TouchableOpacity onPress={() => { this.openImagePicker() }} style={{}} >
                                <Text style={styles.title}>Select from Camera</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.opengallery() }}>
                                <Text style={styles.title}>Select from Gallery</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    lighttheme: {
        // flex: 1,
        paddingTop: 10,
        backgroundColor: COLORS.white,
        color: COLORS.black
    },
    darktheme: {
        // flex: 1,
        paddingTop: 10,
        backgroundColor: COLORS.black,
        color: COLORS.white
    },
    image: {
        height: 80,
        width: 80,
        marginBottom: 10,
        borderRadius: 40

    },
    username: {
        color: COLORS.white,
        fontSize: 18,
        fontFamily: 'YoungSerif-Regular',
    },
    designation: {
        color: COLORS.yellow,
        fontSize: 15,
        fontFamily: 'YoungSerif-Regular'
    },
    bottomview: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: COLORS.grey,
    },
    bottomviewtext: {
        fontSize: 15,
        marginLeft: 5,
        fontFamily: 'YoungSerif-Regular',
    },
    modalContainer: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",

    },
    modalContent: {

        backgroundColor: '#5badff',
        padding: 30,
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        padding: 20,
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        color: '#fff',
    },
    message: {
        fontSize: 16,
        marginVertical: 10,
        color: COLORS.black
    },
    buttonContainer: {
        flexDirection: "row",
        // justifyContent: "space-around",
        width: "100%",
    },
    button: {
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "blue",
        fontWeight: 'bold',
    },

})

export default CustomDrawer;