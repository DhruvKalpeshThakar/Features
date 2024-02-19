import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const StarRating = (props: any) => {
    let stars = [];

    for (var i = 1; i <= 5; i++) {
        let name = 'star';

        if (i > props.ratings) {
            name = 'star-o';
        }
        stars.push((<FontAwesome name={name} size={15} style={styles.star} key={i} />));
    }

    return (
        <View style={styles.container}>
            {stars}
            <Text style={styles.text}>({props.reviews})</Text>
        </View>
    );

}

export default StarRating;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        color: '#FF8C00'
    },
    text: {
        fontSize: 12,
        marginLeft: wp(1.33),
        color: '#444',
    }
});