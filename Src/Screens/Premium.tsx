import React, { Component } from "react";
import { Appearance, StyleSheet, Text, TouchableOpacity, View, Platform, PermissionsAndroid, Linking, ToastAndroid } from "react-native";
import { COLORS } from "../constants/color";
import DocumentPicker from 'react-native-document-picker';
import RNFetchBlob from 'rn-fetch-blob';
import { downloadFile, getDownloadPermissionAndroid } from "../Downloadfile";
import { check } from "react-native-permissions";


class Premium extends Component<{}, { colorTheme: any, selectedFileName: null, fileUrl: string }>{
    constructor(props: any) {

        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
            selectedFileName: null,
            fileUrl: 'https://www.africau.edu/images/default/sample.pdf'
        }

    }



    selectDoc = async () => {
        try {
            const doc = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.pdf],
            })
            console.log(doc);
            this.setState({ selectedFileName: doc.name });
        } catch (err) {
            if (DocumentPicker.isCancel(err))
                console.log("User cancelled the upload", err);
            else
                console.log(err);
        }
    }

    checkStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.check(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,

            );
            console.log("Granted Status-------------------", granted);
            if (!granted) {
                this.requestStoragePermission()
            }
            // if (granted === 'granted') {
            //     console.log('Storage permission granted.');
            //     // return true;
            // } else if (granted === 'denied') {
            //     this.requestStoragePermission()
            // } else if (granted === 'never_ask_again') {
            //     Linking.openSettings()
            // }
        } catch (err) {
            console.log(err, "?????????????????????????????????");
            return false;
        }
    };

    requestStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission',
                    message: 'This app needs access to your storage to download files.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                }
            );
            // if (granted === 'granted') {
            //     console.log('Storage permission granted.');
            //     // return true;
            // } else if (granted === 'denied') {
            //     this.requestStoragePermission()
            // } else if (granted === 'never_ask_again') {
            //     Linking.openSettings()
            // }
        } catch (err) {
            console.warn(err);
            return false;
        }
    };

    downloadFileAndRequestPermission = () => {
        if (Platform.OS === 'android') {
            // console.log(this);
            // this.checkStoragePermission()
            this.checkStoragePermission().then((granted) => {
                const result = PermissionsAndroid.RESULTS.GRANTED
                console.log("Result Status==========================>>>>>>>>>>>", result);
                if (result == 'granted') {
                    downloadFile(this.state.fileUrl);
                    ToastAndroid.show('File Download Started!!', ToastAndroid.SHORT);
                }
                else if (result == 'denied') {
                    this.requestStoragePermission()
                }
                else {
                    Linking.openSettings()
                }
            });
        } else {
            downloadFile(this.state.fileUrl).then(res => {
                RNFetchBlob.ios.previewDocument(res.path());
            });
        }
    }


    render() {
        // const fileUrl = 'https://www.africau.edu/images/default/sample.pdf';
        const { colorTheme, selectedFileName } = this.state;
        return (

            <View style={{ flex: 1, alignItems: 'center', marginTop: 15, }}>
                <Text style={colorTheme == 'light' ? styles.lightheme : styles.darktheme}>Select Document</Text>

                <TouchableOpacity style={{ backgroundColor: COLORS.blue, marginTop: 20, padding: 15, borderRadius: 15 }} onPress={this.selectDoc}>
                    <Text style={{ fontSize: 20 }}>{selectedFileName || "Browse"}</Text>
                </TouchableOpacity>

                <View>
                    <Text style={styles.titleText}>File Download Demo App</Text>
                    <Text style={styles.titleText}>{this.state.fileUrl}</Text>
                    <TouchableOpacity
                        style={[styles.btnStyle]}
                        onPress={() => this.downloadFileAndRequestPermission()}>
                        <Text style={styles.textStyle}>Download</Text>
                    </TouchableOpacity>
                </View>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    darktheme: {
        color: COLORS.black,
        fontSize: 30,
        fontWeight: 'bold'
    },
    lightheme: {
        color: COLORS.black,
        fontSize: 30,
        fontWeight: 'bold'
    },
    titleText: {
        color: COLORS.black,
        textAlign: 'center',
        marginVertical: 20,
        marginHorizontal: 15,
    },
    textStyle: {
        color: 'white',
        fontSize: 14,
        paddingHorizontal: 25,
    },
    btnStyle: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        width: 150,
        height: 40,
    },
})

export default Premium;