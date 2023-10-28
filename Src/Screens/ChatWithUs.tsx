import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../constants/color';

class ChatWithUs extends Component<{}, {}>{
    constructor(props: any) {

        super(props);
        this.state = {

        }

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: COLORS.black, fontSize: 25 }}> Help Chat Coming Soon....</Text>
            </View>
        )
    }



}

const styles = StyleSheet.create({

})

export default ChatWithUs