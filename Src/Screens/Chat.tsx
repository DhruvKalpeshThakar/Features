import React, { Component } from "react";
import { Alert, ImageBackground, SafeAreaView, ScrollView, Share, StyleSheet, Text, ToastAndroid, TouchableOpacity, View, PermissionsAndroid, Image } from "react-native";
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';

interface Gallery {
    capturedCameraImage: any,
    capturedGalleryImage: string[] | null
}

class Chat extends Component<{}, Gallery>{
    constructor(props: any) {
        super(props);
        this.state = {
            capturedCameraImage: null,
            capturedGalleryImage: null
        }
    }

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

    openImagePicker = () => {
        ImagePicker.openCamera({
            width: 800,
            height: 800,
            cropping: true,
        }).then(image => {
            console.log(image);
            this.setState({ capturedCameraImage: image.path });
        });
    }

    opengallery = () => {
        console.log("called in gallery");
        ImagePicker.openPicker({
            multiple: true
        }).then(images => {
            console.log(images);
            const imagePaths = images.map(image => image.path);
            this.setState({ capturedGalleryImage: imagePaths });
        });
    }


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ImageBackground source={require('../assets/chatscreen.jpg')} style={{ flex: 1 }}>


                    <View style={{ flex: 1 }}>


                        <TouchableOpacity style={styles.button} onPress={() => this.opengallery()} activeOpacity={0.8}>
                            <Text style={styles.buttonText}>Open Gallery</Text>
                        </TouchableOpacity>
                        {this.state.capturedGalleryImage ?
                            <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
                                {this.state.capturedGalleryImage.map((imagePath, index) => (
                                    <Image
                                        key={index}
                                        source={{ uri: imagePath }}
                                        style={{ width: '100%', height: 200 }}
                                    />
                                ))}
                            </ScrollView>
                            :
                            <View style={{ backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center', height: '40%' }}>
                                <Text>No Image Selected Yet!!!!</Text>
                            </View>
                        }

                        <TouchableOpacity style={styles.button} onPress={this.openImagePicker} activeOpacity={0.8}>
                            <Text style={styles.buttonText}>Open Camera</Text>
                        </TouchableOpacity>
                        {this.state.capturedCameraImage ?

                            <Image
                                source={{ uri: this.state.capturedCameraImage }}
                                style={{ width: '100%', height: '50%' }}
                            />
                            :
                            <View style={{ backgroundColor: '#ccc', justifyContent: 'center', alignItems: 'center', height: '40%' }}>
                                <Text>No Image Selected Yet!!!!</Text>
                            </View>

                        }

                    </View>
                    {/* <Text style={{ fontSize: 25, color: '#fff', textAlign: 'center' }}> React Native Share</Text>
                    <TouchableOpacity onPress={() => { this.ks() }} style={{ backgroundColor: '#d81244', marginTop: 25, alignItems: 'center', }} activeOpacity={0.8}>
                        <Text style={{ padding: 10, color: '#fff' }}>Share Button</Text>
                    </TouchableOpacity> */}
                </ImageBackground>
            </SafeAreaView>
        )
    }


}





const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1b71af',
        padding: 20
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'YoungSerif-Regular'
    },

})

export default Chat