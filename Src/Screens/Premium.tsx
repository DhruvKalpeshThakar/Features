import React, { Component } from "react";
import { Appearance, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../constants/color";
import DocumentPicker from 'react-native-document-picker';

class Premium extends Component<{}, { colorTheme: any, selectedFileName: null, }>{
    constructor(props: any) {

        super(props);
        this.state = {
            colorTheme: Appearance.getColorScheme(),
            selectedFileName: null,
        }

    }

    selecDoc = async () => {
        try {
            // const doc = await DocumentPicker.pick({
            //     type: [DocumentPicker.types.pdf],
            //     allowMultiSelection: true
            // });
            const doc = await DocumentPicker.pickSingle({
                type: [DocumentPicker.types.pdf],
            })
            console.log(doc);
            this.setState({ selectedFileName: doc.name });
        } catch (err) {
            if (DocumentPicker.isCancel(err))
                console.log("User cancelled the upload", err);
            else
                console.log(err);

        }

    }


    render() {
        const { colorTheme, selectedFileName } = this.state;
        return (
            <View style={{ flex: 1, alignItems: 'center', marginTop: 15, }}>
                <Text style={colorTheme == 'light' ? styles.lightheme : styles.darktheme}>Select Document</Text>

                <TouchableOpacity style={{ backgroundColor: COLORS.blue, marginTop: 20, padding: 15, borderRadius: 15 }} onPress={() => { this.selecDoc() }}>
                    <Text style={{ fontSize: 20 }}> {selectedFileName || "Browse"}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    darktheme: {
        color: COLORS.black,
        fontSize: 30,
        fontWeight: 'bold'
    },
    lightheme: {
        color: COLORS.black,
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default Premium;