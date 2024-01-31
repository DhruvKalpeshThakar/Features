import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList, BackHandler } from "react-native";
import { COLORS } from "./constants/color";
import MapView from 'react-native-maps';

interface Data {
    digitsarray: any[]
}

class Subscription extends Component<{navigation:any}, Data>{
    constructor(props: any) {

        super(props);
        this.state = {
            digitsarray: [
                {
                    digits: 1
                },
                {
                    digits: 2
                },
                {
                    digits: 3
                },
                {
                    digits: 4
                },
                {
                    digits: 5
                },
                {
                    digits: 6
                },
                {
                    digits: 7
                },
                {
                    digits: 8
                },
                {
                    digits: 9
                },
                {
                    digits: 10
                },
                {
                    digits: 11
                },
                {
                    digits: 12
                },
                {
                    digits: 13
                },
            ]
        }
        // this.backaction = this.backaction().bind(this)
    }

    componentDidMount(): void {
        BackHandler.addEventListener('hardwareBackPress',this.backaction)
    }

    componentWillUnmount(): void {
        BackHandler.removeEventListener('hardwareBackPress',this.backaction)
    }

    backaction = () => {
        this.props.navigation.goBack()
        return true
    }

    renderdata = ({ item }: any) => {
        console.log("Item--------------------------", item);

        return (
            <View style={{ backgroundColor: COLORS.black }}>
                <Text style={{ fontSize: 20, color: COLORS.white, fontWeight: 'bold' }}>
                    {item.digits < 10 ? `0${item.digits}` : `${item.digits}`}
                </Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>
                    {/* <FlatList
                        data={this.state.digitsarray}
                        renderItem={({ item }) => this.renderdata({ item })}

                    /> */}
                    <MapView
                        provider="google"
                        mapType="terrain"
                        style={styles.map}
                        zoomEnabled={true}
                        showsUserLocation={true}
                        showsMyLocationButton={false}
                        region={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    minZoomLevel={5}
                    // onRegionChangeComplete={this.onRegionChange}
                    maxZoomLevel={50}
                    />
                    {/* {this.state.nearByExperiences["Nearby experiences"]?.map((item: any, index: number) => (
                            <Marker
                                testID={`test-${index}`}
                                coordinate={{ latitude: Number(item.latitude), longitude: Number(item.longitude) }}
                                {...this.markerProps(index, Number(item.latitude), Number(item.longitude))}
                                draggable={false}
                                key={item.id.toString()}
                            >
                                <View style={[styles.enableCircleView, { backgroundColor: this.state.activeIndex == index ? "#F59E0B" : "#FEF3C7" }]} />
                                <View style={styles.nearBylocationElevation}>
                                    <View style={[styles.cardContainer]}>
                                        <Text style={styles.locationHeaderTxt}>{item.title}</Text>
                                        <View style={styles.cardDetailsRowAlign}>
                                            <Text style={styles.textLocationDetails}>{item.meal_type}</Text>
                                            <Text style={styles.textLocationDetails}>•</Text>
                                            {this.state.activeIndex == index ? (
                                                <Image source={IMG.starActive} />
                                            ) : (
                                                <Image source={IMG.starInActive} />
                                            )}
                                            <Text style={styles.textLocationDetails}>{item.average_rating}</Text>
                                            <Text style={styles.textLocationDetails}>•</Text>
                                            <Text style={styles.textLocationDetails}>{this.CurrencyPriceIndicator(item.price_indecator, this.state.symbol)}</Text>
                                        </View>
                                    </View>
                                </View>
                                <AntDesign name="caretdown" size={19} color={"white"} style={styles.pinArrowDown} />
                            </Marker>
                        ))} */}
                    {/* </MapView> */}

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%'
    }
})

export default Subscription;