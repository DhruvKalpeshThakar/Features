import React, { Component } from "react";
import { Appearance, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/color";
import { Dimensions } from "react-native";
import { FlatList } from "react-native";
import { LogBox } from "react-native";
const { height, width } = Dimensions.get('window');

interface Favourites {
    colorTheme: any,
    data: any,
    currentIndex: any,
}

class Favourites extends Component<{}, Favourites>{
    constructor(props: any) {

        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
            data: [1, 1, 1, 1, 1],
            currentIndex: 0
        }



    }


    componentDidMount(): void {
        LogBox.ignoreAllLogs();
    }


    render() {
        console.log("Current Index-----------------------------", this.state.currentIndex);
        
        const { colorTheme } = this.state;
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View
                    style={{
                        height: height / 2 + 100,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <FlatList
                        data={this.state.data}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        onScroll={e => {
                            const x = e.nativeEvent.contentOffset.x;
                            this.setState({ currentIndex: ((x / width).toFixed(0)) });
                        }}
                        horizontal
                        renderItem={({ item, index }) => {
                            return (
                                <View
                                    style={{
                                        width: width - 50,
                                        height: height / 2,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <TouchableOpacity
                                        disabled={true}
                                        style={{
                                            width: '90%',
                                            height: '90%',
                                            backgroundColor: 'green',
                                            borderRadius: 10,
                                        }}></TouchableOpacity>
                                </View>
                            );
                        }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        width: width,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    {
                        this.state.data.map((item: any, index: any) => {
                            console.log(" Index-----------------------------", index);
                            return (
                                <View
                                    style={{
                                        width: this.currentIndex == index ? 30 : 8,
                                        height: this.currentIndex == index ? 10 : 8,
                                        borderRadius: this.currentIndex == index ? 5 : 4,
                                        backgroundColor: this.currentIndex == index ? 'green' : COLORS.grey,
                                        marginLeft: 5,
                                    }}></View>
                            );
                        })}
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
    }
})

export default Favourites;