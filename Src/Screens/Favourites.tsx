import React, { Component } from "react";
import { Appearance, Dimensions, FlatList, LogBox, StyleSheet, Text, View, Image, Button } from "react-native";
import { COLORS } from "../constants/color";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ScrollView } from "react-native-gesture-handler";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

const { height, width } = Dimensions.get('window');

interface Favourites {
    colorTheme: any,
    carouselData: any[]
    generatedOTP: number | null;
}

class Favourites extends Component<{}, Favourites>{
    constructor(props: any) {

        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
            carouselData: [
                {
                    id: "01",
                    image: require("../assets/Slider1.jpg"),
                },
                {
                    id: "02",
                    image: require("../assets/Slider2.jpg"),
                },
                {
                    id: "03",
                    image: require("../assets/slider3.jpg"),
                },
                {
                    id: "04",
                    image: require("../assets/slider4.jpg"),
                },
                {
                    id: "04",
                    image: require("../assets/slider5.jpg"),
                },
            ],
            generatedOTP: null,
        }
    }

    componentDidMount(): void {
        LogBox.ignoreAllLogs();
    }

    screenWidth = Dimensions.get("window").width


    generateOTP = () => {
        const randomOTP = Math.floor(Math.random() * 9000) + 1000;
        this.setState({ generatedOTP: randomOTP });
        return randomOTP;
    };
    render() {


        const { colorTheme } = this.state;
        return (
            <View>
                <View>
                    <Text style={styles.carouseltext}> React Native Swiper Carousel</Text>
                    <SwiperFlatList
                        autoplay
                        autoplayDelay={5}
                        autoplayLoop
                        index={2}
                        showPagination
                        // paginationActiveColor={COLORS.Orange}
                        data={this.state.carouselData}
                        renderItem={({ item }) => (
                            <View style={[styles.child, { backgroundColor: item }]}>
                                <Image source={item.image} style={{ height: 300, width: this.screenWidth }} />
                            </View>
                        )}
                    />
                </View>
                <View style={{ marginTop: '25%', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: COLORS.red, fontSize: 30 }}>Random OTP Generator</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: COLORS.black }}>{this.state.generatedOTP}</Text>
                    <Button onPress={() =>  this.generateOTP() } title="Generate" />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    darktheme: {
        color: COLORS.black
    },
    lightheme: {
        color: COLORS.black
    },
    carouseltext: {
        fontWeight: 'bold',
        color: COLORS.black,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    child: {
        width,
        justifyContent: 'center'
    },
    text: {
        fontSize: width * 0.5,
        textAlign: 'center'
    },
})

export default Favourites;