import React, { Component } from "react";
import { Appearance, Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/color";
import { Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";

class Profile extends Component<{}, { colorTheme: any, username: string }>{
    constructor(props: any) {

        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
            username: ''
        }

    }

    setdata = async () => {
        await AsyncStorage.setItem('User', "Dhruv Thakar")
    }

    getdata = async () => {
        const name = await AsyncStorage.getItem('User')
        this.setState({ username: name })
    }

    removedata = async () => {
        const name = await AsyncStorage.removeItem('User')
        this.setState({ username: '' })
    }


    render() {
        const { colorTheme } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={colorTheme == 'light' ? styles.lightheme : styles.darktheme}>Async Storage with React Native |{this.state.username}</Text>

                <View style={{ marginTop: '20%', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Set Data" onPress={() => { this.setdata() }} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Get Data" onPress={() => { this.getdata() }} />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Remove Data" onPress={() => { this.removedata() }} />
                    </View>
                </View>

                <View style={{ marginTop: '20%' }}>
                    <Text style={{ textAlign: 'center', fontWeight: 'bold', color: COLORS.black, fontSize: 22 }}>Bezier Line Chart</Text>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: [
                                {
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width} // from react-native
                        height={220}
                        yAxisLabel="$"
                        yAxisSuffix="k"
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: '#0097df',
                            backgroundGradientFrom: '#0000ff',
                            backgroundGradientTo: '#6464ff',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    darktheme: {
        color: COLORS.black,
        fontSize: 25,
        fontWeight: 'bold'
    },
    lightheme: {
        color: COLORS.black,
        fontSize: 25,
        fontWeight: 'bold'
    }
})

export default Profile;