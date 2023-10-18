import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { Text, View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

class Map extends Component<{}, {}>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#080' }}>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ width: '100%', height: '100%', }}
                    initialRegion={{
                        latitude: 23.083691,
                        longitude: 72.561129,
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01
                    }}
                    onRegionChange={x => {
                        console.log(x);

                    }}
                ></MapView>

                {/* <Text> Map Screen</Text> */}
            </View>
        )
    }


}





const styles = StyleSheet.create({

})

export default Map;