import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import { COLORS } from '../constants/color';

class ChatWithUs extends Component<{ navigation: any }, {}>{
    constructor(props: any) {

        super(props);
        this.state = {

        }

    }

    componentDidMount(): void {
        BackHandler.addEventListener('hardwareBackPress', this.backaction)
    }

    componentWillUnmount(): void {
        BackHandler.removeEventListener('hardwareBackPress', this.backaction)
    }

    backaction = () => {
        this.props.navigation.goBack()
        return true
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: COLORS.black, fontSize: 25 }}>Help Chat Coming Soon....</Text>
            </View>
        )
    }



}

const styles = StyleSheet.create({

})

export default ChatWithUs