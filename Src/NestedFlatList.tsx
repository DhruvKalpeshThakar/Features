import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class NestedFlatList extends Component<{}, {}>{
    constructor(props: any) {

        super(props);
        this.state = {

        }

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome to Nested FlatList Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default NestedFlatList;