import React, { Component } from 'react';
import { View, Button, Image, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import TrackPlayer, { Track } from 'react-native-track-player';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'
import { COLORS } from '../constants/color';
import notifee, { AndroidStyle } from '@notifee/react-native';
import { LogBox } from 'react-native';



interface MediaState {
    isPlaying: boolean;
}


class Media extends Component<{}, MediaState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isPlaying: false, // Initial playback state is paused
        };
    }


    async componentDidMount() {
        LogBox.ignoreLogs(['No task registered for key TrackPlayer']);
        LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);
        // Set up the player
        await TrackPlayer.setupPlayer();

        // Add a track to the queue
        const track: Track = {
            id: 'trackId',
            url: require('../song/ICC.mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/artwork1.png'),
        };
        const track1: Track = {
            id: 'trackId1',
            url: require('../song/ICC1.mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'),
        };
        const track2: Track = {
            id: 'trackId2',
            url: require('../song/ICC2.mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'),
        };
        const track3: Track = {
            id: 'trackId3',
            url: require('../song/ICC3.mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'),
        };
        const track4: Track = {
            id: 'trackId4',
            url: require('../song/Alone(PagalWorld).mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'),
        };
        const track5: Track = {
            id: 'trackId5',
            url: require('../song/chaleya.mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'),
        };
        const track6: Track = {
            id: 'trackId6',
            url: require('../song/kesariyo.mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'),
        };
        const track7: Track = {
            id: 'trackId7',
            url: require('../song/Heeriye.mp3'),
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'),
        };

        await TrackPlayer.add([track, track1, track2, track3, track4, track5, track6, track7]);

        // Start playing it
        // await TrackPlayer.play();
    }


    togglePlayback = async () => {
        if (this.state.isPlaying) {
            await TrackPlayer.pause();
        } else {
            await TrackPlayer.play();
        }
        // Update the playback state
        this.setState({ isPlaying: !this.state.isPlaying });
    };


    async displayNotification() {

        // Request permissions (required for iOS)
        await notifee.requestPermission();

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({

            title: 'Hey Cricket Lover',
            body: 'These duo are the Mighties in the World.',
            android: {
                channelId,
                style: { type: AndroidStyle.BIGPICTURE, picture: 'https://imgk.timesnownews.com/story/Kohli-Dhoni-PTI_2.jpg' },
                // autoCancel: false,
                showTimestamp: true,
                // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
                // pressAction is needed if you want the notification to open the app when pressed
                pressAction: {
                    id: 'default',

                },
            },
        });
    }

    getCurrentTrack = async () => {
        const currentTrack = await TrackPlayer.getCurrentTrack();
        return currentTrack ? await TrackPlayer.getTrack(currentTrack) : require('../assets/music.jpg');

        console.log("Current Track--------->>>>", currentTrack);

    };


    render() {
        const currentTrack = this.getCurrentTrack();
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/70/ae/13/70ae137a8af329f6d2e9dc4e2cd47d92.jpg' }} style={styles.imagebackground}>
                    <Text style={styles.musicquote}>"Music is the Strongest Form of Magic"</Text>
                    <Text style={styles.title}>Music Player</Text>
                    {/* You can add any UI components here */}
                    {/* {currentTrack && (
                        <Image source={currentTrack ? currentTrack.artwork : require('../assets/music.jpg')} style={styles.image} />
                    )} */}
                    <Image source={require('../assets/artwork1.png')} style={styles.image} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Foundation name='previous' onPress={this.prevTrack} size={35} color={COLORS.white} />
                        <AntDesign name={this.state.isPlaying ? 'pausecircle' : 'play'} onPress={this.togglePlayback} size={35} color={COLORS.white} />
                        <Foundation name='next' onPress={this.nextTrack} size={35} color={COLORS.white} />

                        {/* <Button title="Play" onPress={this.playTrack} />
                    <Button title="Next" onPress={this.nextTrack} />
                    <Button title="Pause" onPress={this.pauseTrack} />
                    <Button title="Previous" onPress={this.prevTrack} /> */}
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '3%' }}>
                        <Button title="Display Notification" onPress={() => this.displayNotification()} />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        );
    }

    // Add more methods and event handlers as needed
    pauseTrack = async () => {
        await TrackPlayer.pause();

    };

    playTrack = async () => {
        await TrackPlayer.play();
    };

    nextTrack = async () => {
        await TrackPlayer.skipToNext();
    };


    prevTrack = async () => {
        await TrackPlayer.skipToPrevious();
    };

}

const styles = StyleSheet.create({
    imagebackground: {
        flex: 1,

    },
    musicquote: {
        color: COLORS.white,
        textAlign: 'center',
        marginBottom: '20%',
        fontFamily: 'YoungSerif-Regular',
        fontSize: 30,
        marginTop: '5%'
    },
    title: {
        fontFamily: 'YoungSerif-Regular',
        fontSize: 30,
        textAlign: 'center',
        color: COLORS.red
    },
    image: {
        borderRadius: 50,
        height: '30%',
        width: '60%',
        alignSelf: 'center',
        marginTop: '5%',
        marginBottom: '5%'
    }


})

export default Media;
