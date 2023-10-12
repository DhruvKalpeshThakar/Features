import { Modal } from 'native-base';
import React, { Component } from 'react';
import { Button, Dimensions, FlatList, Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface Item {
    title: string;
    body: string;
    imgurl: string

}


interface Pageone {
    refreshing: boolean
    isshowModal: boolean
    screenWidth: number;
    sliderWidth: number;
    itemWidth: number;
    data: Item[];
}

class Home extends Component<{ route: any }, Pageone>{
    constructor(props: any) {
        super(props);
        this.state = {
            refreshing: false,
            isshowModal: false,
            screenWidth: Dimensions.get('window').width,
            sliderWidth: 1,
            itemWidth: 1,
            data: [
                {
                    title: 'Shikhar Dhawan',
                    body: " Shikhar Dhawan (born 5 December 1985) is an Indian cricketer. A left-handed opening batsman At the 2013 Champions Trophy and 2017 Champions Trophy, Dhawan was the leading run-scorer and was awarded the 'Golden Bat' in both the tournaments.Dhawan made his One Day International (ODI) debut against Australia in October 2010 at Visakhapatnam. His Test debut came against the same opposition in March 2013 at Mohali, where he scored the fastest century by any batsman on Test debut and ended his innings with 187 runs from 174 balls.",
                    imgurl: 'https://img.cricketnmore.com/uploads/2022/07/dhawan-after-india-wins-series-.jpg',
                },
                {
                    title: 'Rishabh Pant',
                    body: "Rishabh Rajendra Pant (born 4 October 1997) is an Indian international cricketer who plays for the Indian cricket team as a wicket-keeper batter. Having played all formats for India, he is best known for his consistency to score runs in Test cricket.He made his Twenty20 International (T20I) debut for India in January 2017, his Test debut in August 2018, and his One Day International (ODI) debut in October 2018. In January 2019, Pant was named the ICC Men's Emerging Cricketer of the Year at the 2018 ICC Awards.[5] In February 2021, Pant was named the Men's Player of the Month in the first edition of the ICC Player of the Month Awards. ",
                    imgurl: 'https://cricketaddictor.com/wp-content/uploads/2023/06/Rishabh-Pant-Getty-Images-1200x821.jpg',
                },
                {
                    title: 'SuryaKumar Yadav',
                    body: "Surya Kumar Yadav (born 14 September 1990) is an Indian international cricketer who represents the Indian cricket team in ODI & T20I Formats. For his exceptional batting performances in T20 cricket, he is widely considered as one of the best in this format .",
                    imgurl: 'https://i.pinimg.com/1200x/b9/3d/76/b93d760f3517d1a060c05daf557e08e8.jpg',
                },
                {
                    title: 'Virat Kohli',
                    body: " Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team who plays for Royal Challengers Bangalore in the IPL and Delhi in domestic cricket.",
                    imgurl: 'https://i.pinimg.com/1200x/1d/ec/40/1dec40c962beeb50ab19a1d7ed8f003b.jpg',
                },
                {
                    title: 'M S Dhoni',
                    body: "Mahendra Singh Dhoni  is an Indian professional cricketer, who plays as a wicket-keeper-batsman. He is widely regarded as the greatest captain in India.",
                    imgurl: 'https://i.pinimg.com/736x/54/bc/26/54bc26716138d9fc1c26e09a77c0b759.jpg',
                },
                {
                    title: 'Kuldeep Yadav',
                    body: "Kuldeep Yadav (born 14 December 1994) is an Indian international cricketer. He is a bowling allrounder who bowls Left-arm Chinaman spin and is a capable lower order batter who plays for India and for Uttar Pradesh in domestic cricket.",
                    imgurl: 'https://cdn.zeebiz.com/sites/default/files/2022/10/11/204785-kuldeep-yadav-celebrates-wicket-of-andile-phehlukwayo-during-3rd-odi-cricket-match-between-india-and-south-africa-in-new-delhi-pic-pti-photo.jpg',
                },
                {
                    title: 'Jasprit Bumrah',
                    body: " Jasprit Jasbirsingh Bumrah (born 6 December 1993) is an Indian international cricketer who plays for the Indian cricket team in all formats of the game. A right-arm fast bowler with a unique bowling action.",
                    imgurl: 'https://i.pinimg.com/1200x/c6/03/73/c603737e716ab5faa7b099ea3030600c.jpg',
                },

            ],
        }
    }

    componentDidMount(): void {
        // console.log(
        //     "Email :", this.props.route.params.email, ",",
        //     "Password : ", this.props.route.params.pass,);


        const sliderWidth = this.state.screenWidth;
        const itemWidth = this.state.screenWidth * 0.8;


        this.setState({ sliderWidth, itemWidth });
    }

    fetchData(): any {
        // Implement your data fetching logic here
        return "Hello";
        // You can use this.setState to update the component's state
    }


    onRefresh() {
        // this.setState({ refreshing: true });
        console.log("Hey , You Refreshed the Page!!");

        // this.fetchData().then(() => {
        //     this.setState({ refreshing: false });
        // });
    }

    renderItem = ({ item }: { item: Item }) => {
        return (
            // <View style={[styles.itemContainer,]}>
            <LinearGradient colors={['#ff8040', "#ffff", "#3cce11"]} style={styles.itemContainer} >

                <Image source={{ uri: item.imgurl }} style={[styles.itemImg, { position: 'relative' }]} />
                <Image source={require('../Src/assets/bcci.png')} style={{ width: 40, height: 40, position: 'absolute', top: 10, left: 10 }} />
                <Image source={require('../Src/assets/icc.png')} style={{ width: 40, height: 40, position: 'absolute', top: 10, right: 10 }} />
                <Text style={styles.itemTitle}>{item.title}</Text>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <Text style={styles.itemBody}>{item.body}</Text>
                </ScrollView>
            </LinearGradient>
            // </View>
        );
    };


    render() {

        return (

            <LinearGradient colors={["#ffff", "#0080ff", "#ffff"]} style={{ flex: 1 }}>

                <View style={{}}>

                    <SafeAreaView style={{}}>
                        <Image source={require('../Src/assets/iccfull.png')} style={styles.logo} />
                        <Carousel
                            layout='stack'
                            data={this.state.data}
                            renderItem={this.renderItem}
                            sliderWidth={this.state.sliderWidth}
                            itemWidth={this.state.itemWidth}
                        />

                        <Image source={require('../Src/assets/bcci1.png')} style={[styles.logo, { height: '18%', width: '60%' }]} />

                        <TouchableOpacity style={{ alignItems: 'center', marginTop:15 }} activeOpacity={0.5} onPress={() => { this.setState({ isshowModal: true }) }}>
                            <Text style={{ borderBottomColor: '#000', borderBottomWidth: 1, color: '#000', fontSize: 20, fontWeight: 'bold' }}>Have any Queries?</Text>
                        </TouchableOpacity>
                    </SafeAreaView>


                    <Modal isOpen={this.state.isshowModal} onClose={() => this.setState({ isshowModal: false })}>
                        <Modal.Content width={screenWidth / 1.1} >
                            <Modal.CloseButton />
                            <Modal.Header style={{ alignItems: 'center', }}><Text style={{ fontSize: 25, color: '#000', fontFamily: 'YoungSerif-Regular' }}>Contact Us</Text></Modal.Header>
                            <Modal.Body style={{ backgroundColor: '#00abc4' }}>
                                <View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={[styles.contacttext]}>Email : </Text>
                                        <TouchableOpacity onPress={() => { Linking.openURL('mailto:hellodemo123@gmail.com') }}>
                                            <Text style={[styles.contacttext, { color: '#fff', fontSize: 17, borderBottomColor: '#000', borderBottomWidth: 1 }]}>hellodemo123@gmail.com</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={[styles.contacttext, { fontFamily: 'YoungSerif-Regular' }]}>Address : </Text>
                                        <TouchableOpacity onPress={() => { Linking.openURL('https://maps.app.goo.gl/6ZR57KHRi4Vgt8WE6') }}>
                                            {/* <WebView source={{ uri: 'https://maps.app.goo.gl/XQSrKsEeivAjZeBm8' }} style={{ flex: 1 }} /> */}
                                            <Text style={[styles.contacttext, { color: '#fff', fontSize: 17, borderBottomColor: '#000', borderBottomWidth: 1 }]}>Sola,Ahmedabad</Text>
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
                </View >
            </LinearGradient >

        )
    }

}


const styles = StyleSheet.create({
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
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: '100%', // Adjust the image height as needed
        resizeMode: 'cover',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    contacttext: {
        color: '#000',
        fontSize: 18,
        fontFamily: 'YoungSerif-Regular'
    },
    item: {
        width: '100%',
        height: '30%',
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    itemText: {
        fontSize: 18,
        textAlign: 'center'
    },
    itemContainer: {
        padding: 20,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        height: screenHeight * 0.43,

    },
    itemImg: {
        width: '40%',
        height: '40%',
        borderRadius: 70,
        marginBottom: 10
    },
    itemTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#000'
    },
    itemBody: {
        color: '#000',
        fontFamily: 'YoungSerif-Regular',
        textAlign: 'justify'
    },
    logo: {
        alignSelf: 'center',
        width: '80%',
        height: '20%'

    }
})


export default Home;



