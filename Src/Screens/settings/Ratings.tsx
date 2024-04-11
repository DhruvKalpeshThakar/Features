import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from "../../constants/color";
import { AirbnbRating, Rating } from "react-native-ratings";
import { ToastAndroid } from "react-native";
import { Tabs, Tab } from "marschattha-swipeable-tabs/dist";
import { usersdata } from "../../constants/dummydata";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
interface Ratin {
    ratingCompleted: any
    selectedTab: any
    isradioButton: any
    isradioButtonColor: boolean
    label: string[]
    biometryType: any
}
class Ratings extends Component<{ navigation: any, route: any }, Ratin> {
    ratingCompleted: ((number: any) => void) | undefined;
    rnBiometrics: ReactNativeBiometrics;
    constructor(props: any) {
        super(props);
        this.state = {
            ratingCompleted: 3,
            selectedTab: 0,
            isradioButton: null,
            isradioButtonColor: false,
            label: ["Number 1", "Number 2", "Number 3"],
            biometryType: null
        }
        this.rnBiometrics = new ReactNativeBiometrics();
    }

    // async componentDidMount() {
    //     try {
    //         const { biometryType } = await this.rnBiometrics.isSensorAvailable();

    //         if (biometryType === BiometryTypes.Biometrics) {
    //             console.log("Biometry Type is ------- >>>>>", biometryType);
    //             // this.setState({ biometryType });
    //         }
    //     } catch (error) {
    //         console.log("Biometrics error:", error);
    //     }
    // }

    componentDidMount(): void {
        console.log("Component Called !!-----", this.state.biometryType);
        
    }


    feedback = () => {
        this.props.navigation.goBack()
        ToastAndroid.show('Thanks,Feedback Received!', ToastAndroid.SHORT)
    }


    changeTab: (selectedTab: {
        label: string;
        key: string | number;
    }) => void = updatedTab => {
        this.setState({ selectedTab: updatedTab.label })

    };

    handleOptionChange = (value: string, color: boolean) => {
        this.setState({ isradioButton: value, isradioButtonColor: color });
    };

    options = [
        { label: 'Google Pay', value: 'option1', color: true },
        { label: 'Paytm', value: 'option2', color: true },
        { label: 'Card', value: 'option3', color: true },
    ];

    render() {

        // const { biometryType } = this.state;

        return (
            <View style={{ flex: 1 }}>

                {/* {this.options.map((option) => (
                    <TouchableOpacity
                        key={option.value}
                        onPress={() => this.handleOptionChange(option.value,option.color)}
                        style={[styles.container,{borderColor: this.state.isradioButtonColor ? "#10B981": '#64748B'}]}
                    >
                        <View style={styles.radioButton}>
                            {this.state.isradioButton === option.value && (
                                <View style={styles.radioButtonOuter}>
                                    <View style={styles.radioButtonInner}></View>
                                </View>
                            )}
                        </View>
                        <Text>{option.label}</Text>
                    </TouchableOpacity>
                ))} */}

                {/* <Text style={{ color: COLORS.black, fontSize: 30, textAlign: 'center', marginVertical: 30, fontFamily: 'YoungSerif-Regular' }} >Selected Users List</Text> */}

                {/* <AirbnbRating
                    reviews={['Poor', 'Very Bad', 'Bad', 'Ok', 'Good', 'Very Good', 'Excellent']}
                    count={7}
                    // defaultRating={this.ratingCompleted.toString}
                    selectedColor="green"
                    unselectedColor="lightGray"
                    reviewColor="green"
                    size={30}
                    onFinishRating={this.ratingCompleted}
                    starContainerStyle={{ marginVertical: 30 }}
                    reviewSize={30}
                />
                <TouchableOpacity onPress={() => { this.feedback() }} style={{ backgroundColor: COLORS.blue, alignSelf: 'center', padding: 8, borderRadius: 10 }}>
                    <Text style={{ fontWeight: 'bold', color: COLORS.white, fontSize: 25, textAlign: 'center' }}>Submit</Text>
                </TouchableOpacity>

                <Tabs value={this.state.selectedTab} onChange={this.changeTab}>
                    <Tab label="Tab 1" key={0}>
                        <div>Tab 1 Content</div>
                    </Tab>
                    <Tab label="Tab 2" key={1}>
                        <div>Tab 2 content</div>
                    </Tab>
                    <Tab label="Tab 3" key={2}>
                        <div>Tab 3 content</div>
                    </Tab>
                    <Tab label="Tab 4" key={3}>
                        <div>Tab 4 content</div>
                    </Tab>
                </Tabs> */}

            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: heightPercentageToDP(5),
        // alignSelf: 'center',
        // marginBottom: 10,
        height: 17,
        width: 17,
        borderRadius: 5,
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    radioButtonInner: {
        height: 9,
        width: 9,
        alignSelf: 'center',
        marginTop: 3,
        borderRadius: 5,
        backgroundColor: '#ffffff',
    },
    radioButtonOuter: {
        height: 18,
        width: 18,
        borderRadius: 5,
        backgroundColor: '#10B981',
    },
})

export default Ratings;
