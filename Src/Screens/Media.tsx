import React, { Component } from 'react';
import { View, Button, Image, Text, ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import TrackPlayer, { Track } from 'react-native-track-player';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'
import { COLORS } from '../constants/color';



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
        // Set up the player
        await TrackPlayer.setupPlayer();

        // Add a track to the queue
        const track: Track = {
            id: 'trackId',
            url: require('../song/ICC.mp3'), // Replace with your track's file path
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'), // Replace with your track's artwork file path
        };
        const track1: Track = {
            id: 'trackId1',
            url: require('../song/ICC1.mp3'), // Replace with your track's file path
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'), // Replace with your track's artwork file path
        };
        const track2: Track = {
            id: 'trackId2',
            url: require('../song/ICC2.mp3'), // Replace with your track's file path
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'), // Replace with your track's artwork file path
        };
        const track3: Track = {
            id: 'trackId3',
            url: require('../song/ICC3.mp3'), // Replace with your track's file path
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'), // Replace with your track's artwork file path
        };
        const track4: Track = {
            id: 'trackId4',
            url: require('../song/Alone(PagalWorld).mp3'), // Replace with your track's file path
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'), // Replace with your track's artwork file path
        };
        const track5: Track = {
            id: 'trackId5',
            url: require('../song/chaleya.mp3'), // Replace with your track's file path
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'), // Replace with your track's artwork file path
        };
        const track6: Track = {
            id: 'trackId6',
            url: require('../song/kesariyo.mp3'), // Replace with your track's file path
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'), // Replace with your track's artwork file path
        };
        const track7: Track = {
            id: 'trackId7',
            url: require('../song/Heeriye.mp3'), // Replace with your track's file path
            title: 'Track Title',
            artist: 'Track Artist',
            artwork: require('../assets/music.jpg'), // Replace with your track's artwork file path
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

    render() {
        return (
            <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
                <ImageBackground source={{ uri: 'https://i.pinimg.com/originals/70/ae/13/70ae137a8af329f6d2e9dc4e2cd47d92.jpg' }} style={styles.image}>
                    <Text style={{ color: COLORS.white, textAlign: 'center', marginBottom: '20%', fontFamily: 'YoungSerif-Regular', fontSize: 30, marginTop: '5%' }}>"Music is the Strongest Form of Magic"</Text>
                    <Text style={{ fontFamily: 'YoungSerif-Regular', fontSize: 30, textAlign: 'center', color: '#ff0000' }}>Music Player</Text>
                    {/* You can add any UI components here */}
                    <Image source={require('../assets/music.jpg')} style={{ borderRadius: 50, height: '30%', width: '60%', alignSelf: 'center', marginTop: '5%', marginBottom: '5%' }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Foundation name='previous' onPress={this.prevTrack} size={35} color={COLORS.white} />
                        <AntDesign name={this.state.isPlaying ? 'pausecircle' : 'play'} onPress={this.togglePlayback} size={35} color={COLORS.white} />
                        <Foundation name='next' onPress={this.nextTrack} size={35} color={COLORS.white} />

                        {/* <Button title="Play" onPress={this.playTrack} />
                    <Button title="Next" onPress={this.nextTrack} />
                    <Button title="Pause" onPress={this.pauseTrack} />
                    <Button title="Previous" onPress={this.prevTrack} /> */}
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
    image: {
        flex: 1,

    },
})

export default Media;
