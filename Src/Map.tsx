import React, { Component } from "react";
import { PermissionsAndroid, SafeAreaView } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { TouchableOpacity } from "react-native";
import { COLORS } from "./constants/color";
import Geolocation from "@react-native-community/geolocation";

interface Maps {
    MLat: number;
    MLong: number;
}
class Map extends Component<{}, Maps>{

    constructor(props: any) {
        super(props);
        this.state = {
            MLat: 23.07813,
            MLong: 72.50786 
        }
    }

    componentDidMount(): void {
        this.requestLocationPermission()
    }

    requestLocationPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title: 'Features App Location Permission',
                    message:
                        'Features App needs access to your Location ' +
                        'so you can be Tracked.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('You can use the Location');
            } else {
                console.log('Location permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    getlocation = () => {
        Geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                this.setState({
                    MLat: position.coords.latitude,
                    MLong: position.coords.longitude
                })
            },
            (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
    }


    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#080' }}>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ width: '100%', height: '100%', }}
                    initialRegion={{
                        latitude: this.state.MLat,
                        longitude: this.state.MLong,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    onRegionChange={x => {
                        console.log(x);

                    }}
                >
                    <Marker coordinate={{ latitude: this.state.MLat, longitude: this.state.MLong }} />
                </MapView>
                <TouchableOpacity style={{
                    width: '90%',
                    height: 50,
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: 20,
                    backgroundColor: COLORS.Orange,
                    justifyContent: 'center',
                    alignItems: 'center',
                }} onPress={() => { this.getlocation() }} activeOpacity={0.8}>
                    <Text>Get Current Location</Text>
                </TouchableOpacity>

                {/* <Text> Map Screen</Text> */}
            </View>
        )
    }


}





const styles = StyleSheet.create({

})

export default Map;