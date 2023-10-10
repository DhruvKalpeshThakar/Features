import React, { Component } from "react";
import { Alert, Share, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from "react-native";


class Chat extends Component<{}, {}>{
    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
                url: 'https://youtu.be/TGTNBxbFHRY?si=zLwctur8_ZHpO1MN',
                title: 'React Native Share'
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    ToastAndroid.show('Shared With' + result.activityType, ToastAndroid.SHORT)
                } else {
                    // ToastAndroid.show('Shared But not sure How', ToastAndroid.SHORT)
                }
            } else if (result.action === Share.dismissedAction) {
                ToastAndroid.show('Share Cancelled', ToastAndroid.SHORT)
            }
        } catch (error: any) {
            Alert.alert(error.message);
        }
    };


    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: '#000' }}> React Native Share</Text>
                <TouchableOpacity onPress={() => { this.onShare() }} style={{ backgroundColor: '#1b71af', marginTop: 20 }}>
                    <Text style={{ padding: 10, color: '#fff' }}>Share Button</Text>
                </TouchableOpacity>
            </View>
        )
    }


}





const styles = StyleSheet.create({

})

export default Chat