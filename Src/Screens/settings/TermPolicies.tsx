import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Button, Linking, SafeAreaView, Dimensions } from 'react-native';
import { COLORS } from "../../constants/color";
import { AirbnbRating, Rating } from "react-native-ratings";
import { ToastAndroid } from "react-native";
import { Modal } from "native-base";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface Terms {
    isshowModal: boolean;
    ratingCompleted: number
}

class Termpolicies extends Component<{ navigation: any }, Terms> {

    constructor(props: any) {
        super(props);
        this.state = {
            ratingCompleted: 3,
            isshowModal: false
        }
    }

    feedback = () => {
        this.props.navigation.goBack()
        ToastAndroid.show('Thanks,Feedback Received!', ToastAndroid.SHORT)
    }

    render() {


        return (
            <View style={{ flex: 1 }}>
                <SafeAreaView style={{}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 25, color: COLORS.black, textAlign: 'center', marginTop: 20 }}>Terms and Conditions</Text>
                    <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 15, marginTop: 10, marginBottom: '10%' }}>
                        <Text style={{ color: COLORS.black, fontSize: 15, textAlign: 'justify', marginTop: 5, marginBottom: '30%', fontFamily: 'YoungSerif-Regular' }} >


                            These terms and conditions ("Terms") govern your use of the mobile application ("App") provided by [Your Company Name] ("Company," "we," "our," or "us"). By using the App, you agree to comply with and be bound by these Terms. If you do not agree to these Terms, please do not use the App.

                            <Text style={{ fontWeight: "bold" }}>1. Acceptance of Terms</Text>

                            By accessing or using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you are using the App on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms.

                            2. Use of the App

                            2.1. Eligibility: You must be at least [age] years old to use the App. By using the App, you represent and warrant that you are at least [age] years old.

                            2.2. License: We grant you a limited, non-exclusive, non-transferable, and revocable license to use the App for your personal, non-commercial use.

                            2.3. User Accounts: Some features of the App may require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.

                            2.4. Prohibited Activities: You may not:

                            Use the App for any unlawful purpose.
                            Distribute, publish, or post any material that is defamatory, offensive, or violates the rights of others.
                            Interfere with or disrupt the App's operation or its servers.
                            2.5. Privacy: Your use of the App is also governed by our Privacy Policy, which is incorporated by reference.

                            3. Content and Intellectual Property

                            3.1. Ownership: The App, its content, and all intellectual property rights related to the App are owned by the Company.

                            3.2. User-Generated Content: You may be able to submit content to the App, including comments, reviews, and other material. By submitting content, you grant the Company a non-exclusive, worldwide, royalty-free, and transferable right to use, reproduce, modify, and display your content.

                            4. Disclaimer

                            4.1. Use at Your Own Risk: Your use of the App is at your own risk. The App is provided "as is" and "as available" without any warranties of any kind, whether expressed or implied.

                            5. Limitation of Liability

                            To the fullest extent permitted by law, the Company shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:

                            Your use or inability to use the App.
                            Any unauthorized access to or use of our servers and/or any personal information stored therein.
                            Any errors or omissions in any content.
                            Any interruptions or cessation of transmission to or from the App.
                            Any bugs, viruses, or other harmful code that may be transmitted to or through the App.
                            6. Modifications to Terms

                            We may modify these Terms at any time by posting the revised Terms on the App. Your continued use of the App after such changes will constitute your acceptance of the revised Terms.

                            7. Termination

                            We reserve the right to terminate your access to the App at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users.

                            8. Governing Law

                            These Terms are governed by and construed in accordance with the laws .

                            9. Contact Us

                            If you have any questions about these Terms, please contact us.

                            <TouchableOpacity style={{ alignItems: 'center', }} activeOpacity={0.5} onPress={() => { this.setState({ isshowModal: true }) }}>
                                <Text style={{ borderBottomColor: COLORS.black, borderBottomWidth: 1, color: COLORS.blue, fontSize: 18, fontWeight: 'bold' }}>Still need Help?</Text>
                            </TouchableOpacity>
                        </Text>

                    </ScrollView>
                </SafeAreaView>
                <Modal isOpen={this.state.isshowModal} onClose={() => this.setState({ isshowModal: false })} >
                    <Modal.Content width={screenWidth / 1.1} >
                        <Modal.CloseButton />
                        <Modal.Header style={{ alignItems: 'center', }}><Text style={{ fontSize: 25, color: COLORS.black, fontFamily: 'YoungSerif-Regular' }}>Contact Us</Text></Modal.Header>
                        <Modal.Body style={{ backgroundColor: '#00abc4' }}>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styles.contacttext]}>Email : </Text>
                                    <TouchableOpacity onPress={() => { Linking.openURL('mailto:hellodemo123@gmail.com') }}>
                                        <Text style={[styles.contacttext, { color: COLORS.white, fontSize: 17, borderBottomColor: COLORS.black, borderBottomWidth: 1 }]}>hellodemo123@gmail.com</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styles.contacttext, { fontFamily: 'YoungSerif-Regular' }]}>Address : </Text>
                                    <TouchableOpacity onPress={() => { Linking.openURL('https://maps.app.goo.gl/6ZR57KHRi4Vgt8WE6') }}>
                                        {/* <WebView source={{ uri: 'https://maps.app.goo.gl/XQSrKsEeivAjZeBm8' }} style={{ flex: 1 }} /> */}
                                        <Text style={[styles.contacttext, { color: COLORS.white, fontSize: 17, borderBottomColor: COLORS.black, borderBottomWidth: 1 }]}>Sola,Ahmedabad</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </Modal.Body>
                        <Modal.Footer style={{ alignSelf: 'center' }}>
                            <Button

                                title="Connect with us"
                                color="#f194ff"

                                onPress={() => {
                                    Linking.openURL('tel:9874598754')
                                    this.setState({ isshowModal: false })
                                }}


                            />
                            {/* <Button
                                    title="OK"
                                    color="#f194ff"
                                    onPress={() => this.setState({ isshowModal: false })}
                                /> */}

                        </Modal.Footer>
                    </Modal.Content>
                </Modal>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    contacttext: {
        color: COLORS.black,
        fontSize: 18,
        fontFamily: 'YoungSerif-Regular'
    },
})

export default Termpolicies;
