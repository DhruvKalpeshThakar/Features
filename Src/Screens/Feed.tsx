import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

class Feed extends Component<{}, {}>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text> Feed Screen</Text>
            </View>
        )
    }


}





const styles = StyleSheet.create({

})

export default Feed