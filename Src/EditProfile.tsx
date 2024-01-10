import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PhoneInput from "react-native-phone-number-input";

interface Phone {
    value: any
    country: any
}

class EditProfile extends Component<{}, Phone>{
    constructor(props: any) {

        super(props);
        this.state = {
            value: "",
            country: ""
        }

    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <PhoneInput
                    // ref={phoneInput}
                    defaultValue={this.state.value}
                    // defaultCode="DM"
                    layout="second"
                    onChangeText={(text) => {
                        this.setState({ value: text })
                    }}
                    // onChangeFormattedText={(text) => {
                    //     setFormattedValue(text);
                    // }}
                    onChangeCountry={(val) => {
                        console.log('valueuuuuuuuuuuuuuuuuuuuuuuuu', val);
                        const Country = val.callingCode[0]
                        console.log('Country', Country);

                        this.setState({ country: Country })
                    }}
                    
                    withDarkTheme
                    withShadow
                    autoFocus
                />

                <TouchableOpacity style={{ backgroundColor: '#008880', borderRadius: 25, marginTop: 20 }} onPress={() => {
                    console.log("Country Code", this.state.country, "Mobile Number", this.state.value);
                }}>
                    <Text style={{ padding: 20, color: '#fff', paddingHorizontal: 80 }}>Get Phone Number</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default EditProfile;