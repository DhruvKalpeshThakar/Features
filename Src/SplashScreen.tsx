import React from "react";
import { Image, StyleSheet, View } from "react-native";

class SplashScreen extends React.Component<{ navigation: any }, {}> {
    constructor(props: any) {
        super(props);

        this.state = {

        }

    }

    componentDidMount(): void {
        setTimeout(() => {
            this.props.navigation.replace('Signup');
        }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                    source={require('../Src/assets/SplashScreen.gif')}
                    style={styles.imagecontainer}
                    resizeMode="contain" // You can adjust the resizeMode as needed
                />
                {/* <Text></Text> */}
            </View>
        )
    }


}


const styles = StyleSheet.create({
    imagecontainer: {
        width: '100%',
        height: '100%',
        // borderRadius: 20,
        borderWidth: 2,
        marginRight: 25,
        // overflow: "hidden",
        marginVertical: 30,


    },
})

export default SplashScreen;