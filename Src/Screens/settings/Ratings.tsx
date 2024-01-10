import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from "../../constants/color";
import { AirbnbRating, Rating } from "react-native-ratings";
import { ToastAndroid } from "react-native";
import { Tabs,Tab } from "marschattha-swipeable-tabs/dist";

interface Ratin {
    ratingCompleted:any
    selectedTab: any
}
class Ratings extends Component<{ navigation: any }, Ratin> {
    ratingCompleted: ((number: any) => void) | undefined;
    constructor(props: any) {
        super(props);
        this.state = {
            ratingCompleted: 3,
            selectedTab: 0
        }
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

    render() {


        return (
            <View style={{ flex: 1 }}>
                <Text style={{ color: COLORS.black, fontSize: 25, textAlign: 'center', marginVertical: 30, fontFamily: 'YoungSerif-Regular' }} >Provide us a Rating</Text>

                <AirbnbRating
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
                </Tabs>

            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default Ratings;
