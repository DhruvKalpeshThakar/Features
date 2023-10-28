import React, { Component } from "react";
import { Appearance, Dimensions, FlatList, LogBox, StyleSheet, Text, View, Image } from "react-native";
import { COLORS } from "../constants/color";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { ScrollView } from "react-native-gesture-handler";

const { height, width } = Dimensions.get('window');

interface Favourites {
    colorTheme: any,
    carouselData: any[]
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
            ]
        }
    }

    componentDidMount(): void {
        LogBox.ignoreAllLogs();
    }

    screenWidth = Dimensions.get("window").width


    render() {

        const { colorTheme } = this.state;
        return (
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