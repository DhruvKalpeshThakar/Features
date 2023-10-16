import React, { Component } from "react";
import { Modal, Text, View, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface CustomAlertProps {
    visible: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}


class CustomAlert extends Component<CustomAlertProps> {
    render() {
        const { visible, title, message, onConfirm, onCancel } = this.props;

        return (
            <Modal
                transparent={true}
                animationType="slide"
                visible={visible}
                onRequestClose={onCancel}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name="warning" size={48} color={'#b69d14'} />
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.message}>{message}</Text>
                        <View style={styles.buttonContainer}>
                            {/* <TouchableOpacity onPress={onCancel} style={styles.button}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity> */}
                            <TouchableOpacity onPress={onConfirm} style={styles.button}>
                                <Text style={styles.buttonText}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
        color: '#000',
    },
    message: {
        fontSize: 16,
        marginVertical: 10,
    },
    buttonContainer: {
        flexDirection: "row",
        // justifyContent: "space-around",
        width: "100%",

    },
    button: {
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        color: "blue",
        fontWeight: 'bold',
    },
});

export default CustomAlert;
