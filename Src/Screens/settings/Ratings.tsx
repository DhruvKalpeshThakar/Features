import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from "../../constants/color";
import { AirbnbRating, Rating } from "react-native-ratings";
import { ToastAndroid } from "react-native";

class Ratings extends Component<{ navigation: any }, {}> {
    ratingCompleted: ((number: any) => void) | undefined;
    constructor(props: any) {
        super(props);
        this.state = {
            ratingCompleted: 3
        }
    }

    feedback = () => {
        this.props.navigation.goBack()
        ToastAndroid.show('Thanks,Feedback Received!', ToastAndroid.SHORT)
    }

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
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

export default Ratings;
