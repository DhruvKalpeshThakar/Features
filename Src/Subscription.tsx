import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { COLORS } from "./constants/color";


interface Data {
    digitsarray: any[]
}

class Subscription extends Component<{}, Data>{
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

    }

    renderdata = ({ item }) => {
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
                    <FlatList
                        data={this.state.digitsarray}
                        renderItem={({ item }) => this.renderdata({ item })}

                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default Subscription;