import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    NativeModules,
    NativeEventEmitter,
    Platform,
    PermissionsAndroid,
    FlatList,
    TouchableHighlight,
    Pressable,
    ToastAndroid,
    Switch,
    Modal,
    TouchableOpacity
} from 'react-native';

import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';
import BleManager, {
    BleDisconnectPeripheralEvent,
    BleManagerDidUpdateValueForCharacteristicEvent,
    BleScanCallbackType,
    BleScanMatchMode,
    BleScanMode,
    Peripheral,
} from 'react-native-ble-manager';

const SECONDS_TO_SCAN_FOR = 3;
const SERVICE_UUIDS: string[] = [];
const ALLOW_DUPLICATES = true;

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

interface State {
    isScanning: boolean;
    peripherals: Map<string, Peripheral>;
}


// interface SecurityState {
//     fingerprintEnabled: boolean
//     faceidEnabled: boolean
//     alertModal: boolean
//     authType: string
//     rulerValue: any   
// }

interface Peripherals {
    connected?: boolean
    connecting?: boolean
}

class Security extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            // fingerprintEnabled: false,
            // faceidEnabled: false,
            // alertModal: false,
            // authType: "",
            // rulerValue: "",
            isScanning: false,
            peripherals: new Map<string, Peripheral>(),
        };
    }

    SECONDS_TO_SCAN_FOR = 3;
    SERVICE_UUIDS: string[] = [];
    ALLOW_DUPLICATES = true;

    BleManagerModule = NativeModules.BleManager;
    bleManagerEmitter = new NativeEventEmitter(this.BleManagerModule);

    // toggleFingerSwitch = () => {
    //     this.setState({ authType: 'Fingerprint' })
    //     if (this.state.fingerprintEnabled === true) {
    //         this.setState({ fingerprintEnabled: false, alertModal: false })
    //     } else {
    //         this.setState({ alertModal: true })
    //     }
    // };

    // toggleFaceSwitch = () => {
    //     this.setState({ authType: 'Face' })
    //     if (this.state.faceidEnabled === true) {
    //         this.setState({ faceidEnabled: false, alertModal: false, })
    //     } else {
    //         this.setState({ alertModal: true })
    //     }
    // };

    rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true })

    componentDidMount(): void {
        this.rnBiometrics.isSensorAvailable()
            .then((resultObject) => {
                const { available, biometryType } = resultObject

                if (available && biometryType === BiometryTypes.TouchID) {
                    console.log('TouchID is supported')
                } else if (available && biometryType === BiometryTypes.FaceID) {
                    console.log('FaceID is supported')
                } else if (available && biometryType === BiometryTypes.Biometrics) {
                    console.log('Biometrics is supported')
                } else {
                    console.log('Biometrics not supported')
                }
            })


        this.rnBiometrics.createKeys()
            .then((resultObject) => {
                const { publicKey } = resultObject
                console.log(publicKey)
                sendPublicKeyToServer(publicKey)
            })


        const rnBiometrics = new ReactNativeBiometrics()
        rnBiometrics.biometricKeysExist()
            .then((resultObject) => {
                const { keysExist } = resultObject

                if (keysExist) {
                    console.log('Keys exist')
                } else {
                    console.log('Keys do not exist or were deleted')
                }
            })
    }

    // isFingerprint = () => {
    //     this.setState({ fingerprintEnabled: true, alertModal: false })

    //     this.rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
    //         .then((resultObject) => {
    //             const { success } = resultObject

    //             if (success) {
    //                 ToastAndroid.show("Fingerprint Authenticated Successfully", ToastAndroid.BOTTOM)
    //             } else {
    //                 // ToastAndroid.show("Fingerprint Failed !!!!", ToastAndroid.BOTTOM)
    //             }
    //         })
    //         .catch(() => {
    //             console.log('biometrics failed')
    //         })
    // }

    // startScan = () => {
    //     const { isScanning } = this.state;
    //     if (!isScanning) {
    //         this.setState({ peripherals: new Map<string, Peripheral>() });
    //         try {
    //             this.setState({ isScanning: true });
    //             BleManager.scan(SERVICE_UUIDS, SECONDS_TO_SCAN_FOR, ALLOW_DUPLICATES, {
    //                 matchMode: BleScanMatchMode.Sticky,
    //                 scanMode: BleScanMode.LowLatency,
    //                 callbackType: BleScanCallbackType.AllMatches,
    //             })
    //                 .then(() => {
    //                     console.debug('[startScan] scan promise returned successfully.');
    //                 })
    //                 .catch((err: any) => {
    //                     console.error('[startScan] ble scan returned in error', err);
    //                 });
    //         } catch (error) {
    //             console.error('[startScan] ble scan error thrown', error);
    //         }
    //     }
    // };

    Start = () => {
        // BleManager.start({ showAlert: false }).then(() => {
        //     // Success code
        //     console.log("Module initialized");
        //   });

        //   BleManager.scan([], 6, true).then(() => {
        //     // Success code
        //     console.log("Scan started");
        //   });

        BleManager.connect("XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX")
            .then(() => {
                // Success code
                console.log("Connected");
            })
            .catch((error) => {
                // Failure code
                console.log(error);
            });
    }

    render() {

        const { isScanning, peripherals } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* <View style={{ marginTop: hp(5), marginHorizontal: wp(5), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Enable Authentication </Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={this.state.fingerprintEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={this.toggleFingerSwitch}
                            value={this.state.fingerprintEnabled}
                        />
                    </View> */}

                    <View style={{ flexDirection: 'row', marginTop: hp(5), marginHorizontal: wp(5), justifyContent: 'space-between' }}>
                        <Text>Scan for Bluetooth Devices !!!</Text>
                        <TouchableOpacity style={{ backgroundColor: 'blue' }} onPress={() => this.Start()}>
                            <Text style={{ color: '#fff', padding: 5 }}>Scan</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* <Modal
                    transparent={true}
                    animationType="slide"
                    visible={this.state.alertModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: '#ccc', borderBottomWidth: 1 }}>
                                <Text style={[styles.title]}>{"Enable Fingerprint Authentication ?"}</Text>
                            </View>
                            <View style={{ marginTop: hp(2), flexDirection: 'row', justifyContent: 'space-around' }}>
                                <TouchableOpacity onPress={() => { this.setState({ fingerprintEnabled: false }) }} style={{ backgroundColor: '#000000', borderRadius: 10 }}>
                                    <Text style={{ color: '#fff', fontSize: 20, padding: 10, paddingHorizontal: 30 }}>No</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.isFingerprint() }} style={{ backgroundColor: '#000000', borderRadius: 10 }}>
                                    <Text style={{ color: '#fff', fontSize: 20, padding: 10, paddingHorizontal: 30 }}>Yes</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal> */}

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        // alignItems: "center",
    },
    title: {
        fontSize: 18,
        // fontWeight: "bold",
        marginTop: 10,
        color: '#000',
    },
});

export default Security;
function sendPublicKeyToServer(publicKey: string) {
    throw new Error("Function not implemented.");
}

