import React, { Component } from "react";
import { View, Button } from "react-native";
import notifee, { AndroidStyle } from '@notifee/react-native';

class Notification extends Component {

    constructor(props: any) {
        super(props);
        this.state = {

        }
    }

    async onDisplayNotification() {
        // Request permissions (required for iOS)
        await notifee.requestPermission();

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
            title: 'Demo Notification Title',
            body: 'Main body content of the notification',
            android: {
                channelId,
                smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                    id: 'default',
                },
                style: { type: AndroidStyle.BIGPICTURE, picture: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg' },
            },
        });
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Display Notification" onPress={() => this.onDisplayNotification()} />
            </View>
        );
    }
}

export default Notification;
