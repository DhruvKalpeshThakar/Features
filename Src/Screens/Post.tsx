import React, { Component } from "react";
import { Text, View, StyleSheet, Image, Modal, Alert, Pressable } from "react-native";
import { BlurView } from "@react-native-community/blur";


interface ModalInterface {
    modalvisible: boolean
}

class Post extends Component<{}, ModalInterface>{
    constructor(props: any) {
        super(props);
        this.state = {
            modalvisible: false
        }
    }

    toggleModalVisible = () => {
        this.setState((prevState) => ({
            modalvisible: !prevState.modalvisible,
        }));
    };


    render() {
        return (
            <View style={styles.container}>
                <Image
                    key={'blurryImage'}
                    source={{ uri: 'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_640.jpg' }}
                    style={styles.absolute}
                />
                <Text style={[styles.absolute, { fontSize: 100 }]}>Hi, I am some blurred text</Text>
                {/* in terms of positioning and zIndex-ing everything before the BlurView will be blurred */}
                {/* <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={10}
                    reducedTransparencyFallbackColor="white"
                /> */}
                {/* <Text>I'm the non blurred text because I got rendered on top of the BlurView</Text> */}
                <View style={styles.centeredView}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modalvisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            this.toggleModalVisible()
                        }}>
                        <BlurView
                            style={styles.absolute}
                            blurType="light"
                            blurAmount={10}
                            reducedTransparencyFallbackColor="white"
                        />
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>Hello World!</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => this.toggleModalVisible()}>
                                    <Text style={styles.textStyle}>Hide Modal</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={() => this.setState({ modalvisible: true })}>
                        <Text style={styles.textStyle}>Show Modal</Text>
                    </Pressable>
                </View>
            </View >
        )
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})

export default Post