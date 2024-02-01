import React, { Component } from "react";
import { Alert, BackHandler, FlatList, Image, Keyboard, KeyboardAvoidingView, Modal, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Fontisto from 'react-native-vector-icons/Fontisto'
import LinearGradient from "react-native-linear-gradient";
import { Calendar, LocaleConfig } from 'react-native-calendars';
import DatePicker from 'react-native-date-picker'

interface Experience {
    exptitle: any
    childfriendly: boolean
    photosdata: any
    expdate: any
    expdate2: any
    exptime: any
    mealtype: any
    noofseats: any
    mealcategories: any
    dietaryoptions: any
    expdesc: any
    droomdesc: any
    activeindex: any
    iscalendar: boolean
    isTime: boolean
    isMealtype: boolean
    mealdata: any
    ismealcategories: boolean
    isdietaryoptions: boolean
    selectedTime: any
    mealcatdata: any
    selectedMeals: any
}


class CreateExperienceForm extends Component<{ navigation: any }, Experience> {
    constructor(props: any) {

        super(props);
        this.state = {
            exptitle: '',
            childfriendly: false,
            expdate: '',
            expdate2: {},
            exptime: new Date(),
            mealtype: '',
            noofseats: '',
            mealcategories: '',
            dietaryoptions: '',
            expdesc: '',
            droomdesc: '',
            activeindex: null,
            iscalendar: false,
            isTime: false,
            isMealtype: false,
            ismealcategories: false,
            isdietaryoptions: false,
            selectedTime: null,
            selectedMeals: [],
            mealcatdata: [
                { id: 1, title: 'Chinese' },
                { id: 2, title: 'Sushi' },
                { id: 3, title: 'African' },
                { id: 4, title: 'Thai' },
                { id: 5, title: 'Pizza' },
                { id: 6, title: 'Indian' },
                { id: 7, title: 'Mexican' },
                { id: 8, title: 'Chicken' },
                { id: 9, title: 'Asian' },
                { id: 10, title: 'Halal' },
                { id: 11, title: 'BBQ' },
                { id: 12, title: 'Vegan' },
                { id: 13, title: 'American' },
                { id: 14, title: 'Burgers' },
                { id: 15, title: 'Turkish' },
                { id: 16, title: 'Salad' },
                { id: 17, title: 'Greek' },
                { id: 18, title: 'Jamaican' },
                { id: 19, title: 'Street Food' },
                { id: 20, title: 'South American' },
                { id: 21, title: 'Middle Eastern' },
                { id: 22, title: 'Italian' },
                { id: 23, title: 'Pasta' },
                { id: 24, title: 'Japanese' },
                { id: 25, title: 'Korean' },
                { id: 26, title: 'Comfort Food' },
                { id: 27, title: 'Vietnamese' },
                { id: 28, title: 'Romanian' },
                { id: 29, title: 'Seafood' },
                { id: 30, title: 'Soup' },
                { id: 31, title: 'Mediterranean' },
                { id: 32, title: 'German' },
                { id: 33, title: 'British' },
                { id: 34, title: 'Portuguese' },
                { id: 35, title: 'Drinks only List' },
                { id: 36, title: 'European' },
                { id: 37, title: 'Pakistani' },
                { id: 38, title: 'Vegetarian' },
            ],
            mealdata: [
                {
                    id: 1,
                    title: 'Breakfast'
                },
                {
                    id: 2,
                    title: 'Brunch'
                },
                {
                    id: 3,
                    title: 'Lunch'
                },
                {
                    id: 4,
                    title: 'Dinner'
                }
            ],
            photosdata: [
                {
                    id: 1,
                    image: require('../../assets/noimage.png')
                },
                {
                    id: 2,
                    image: require('../../assets/noimage.png')
                },
                {
                    id: 3,
                    image: require('../../assets/noimage.png')
                },
                {
                    id: 4,
                    image: require('../../assets/noimage.png')
                },
            ]
        }

    }

    renderphotosdata = (item: any) => {
        return (
            <View style={{ width: wp(30), height: hp(12), backgroundColor: '#ffffff', marginHorizontal: wp(1), borderRadius: wp(3), alignItems: 'center', justifyContent: 'center', borderColor: '#eaeaea', }}>
                <Image source={item.image} style={{ width: wp(15), height: hp(6) }} resizeMode="contain" />
            </View>
        )
    }

    componentDidMount(): void {
        BackHandler.addEventListener('hardwareBackPress', this.backaction)
    }

    componentWillUnmount(): void {
        BackHandler.removeEventListener('hardwareBackPress', this.backaction)
    }

    backaction = () => {
        this.props.navigation.goBack()
        return true
    }

    isCanceltime = () => {
        this.setState({ isTime: false })
    }

    isCancelcalendar = () => {
        this.setState({ iscalendar: false })
    }

    handleConfirm = () => {
        this.setState({ isTime: false })
    }

    hideDatePicker = () => {
        this.setState({ isTime: false })
    }

    numberofseats = (numbersOfseats: any) => {
        // console.log("Number of Seats---------", numbersOfseats)
        if (numbersOfseats === '.') {
            this.setState({ noofseats: '' })
            //Turn on alertstate
            Keyboard.dismiss()
        } else if (numbersOfseats > 99) {
            Alert.alert("Limit", "Max number reached")
            //Can enable state instead and display the same in red
        }
        else {
            this.setState({ noofseats: numbersOfseats })
        }
    }

    timehandler = (timer: any) => {
        // Update selectedTime on every change
        this.setState({ selectedTime: timer });
    };

    timeDisplayhandler = () => {
        console.log("Timer in Timehandler", this.state.exptime);

        const timestamp = new Date(this.state.exptime);
        const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' };
        const formattedTime = timestamp.toLocaleTimeString('en-US', options);
        console.log("formattedTime", formattedTime);

        return formattedTime
    }

    categoriesdata = (item: any, index: any) => {
        // console.log(item.title);

        const isSelected = this.state.selectedMeals.includes(item.title);
        return (
            <TouchableOpacity key={index} onPress={() => { }} activeOpacity={0.6} style={[styles.interestselection, {
                backgroundColor: '#400',
                // borderColor: isSelected ? 'transparent' : 'black',
            }]}  >
                <Text style={[styles.interestname, { color: '#000' }]}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    isCancelMealCat = () => {
        this.setState({ ismealcategories: false })
    }

    render() {

        const colors = ['#087064', '#ff0000', '#37B5B6', '#A94438', '#DC84F3',];

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ebebeb' }}>
                <StatusBar barStyle={"dark-content"} backgroundColor={'#ebebeb'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
                    <ScrollView showsVerticalScrollIndicator={false} >
                        <View style={{ flex: 1, marginBottom: hp(2), backgroundColor: '#F3F2F3 ' }}>

                            <View style={{ flexDirection: 'row', marginTop: hp(3) }}>
                                <View style={{ marginLeft: wp(3) }}>
                                    <Entypo name="cross" color={'#000'} size={30} />
                                </View>

                                <Text style={{ color: '#000', textAlign: 'center', fontSize: 20, marginLeft: wp(3), fontWeight: 'bold' }}>Create experience</Text>

                                <View style={{ marginLeft: 'auto', marginRight: wp(4), marginTop: hp(0.2) }}>
                                    <AntDesign name="delete" color={'#000'} size={25} />
                                </View>
                            </View>

                            <View style={{ marginHorizontal: wp(1), flex: 1, marginTop: hp(2) }}>

                                <View style={{ marginHorizontal: wp(4), }}>
                                    <View>
                                        <Text style={styles.text}>Experience title</Text>
                                    </View>
                                    <TextInput
                                        style={[styles.textinput, { padding: wp(4), marginTop: hp(1), marginBottom: hp(3) }]}
                                        value={this.state.exptitle}
                                        placeholderTextColor={'#747688'}
                                        placeholder="e.g. My Tasty Experience"
                                        onChangeText={(text) => this.setState({ exptitle: text })}
                                    />
                                </View>
                                <View style={{ marginHorizontal: wp(4), }}>
                                    <View>
                                        <Text style={styles.text}>Select experience colour</Text>
                                    </View>

                                    <View style={{ flexDirection: 'row', }}>
                                        {colors.map((color: any, index: any) => (
                                            <TouchableOpacity key={index} style={[styles.colorBox, {
                                                backgroundColor: color,
                                                marginTop: hp(2),
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }]}
                                                onPress={() => this.setState({ activeindex: index })}>
                                                {/* <LinearGradient colors={this.state.activeindex === index ? ['orange', 'orange'] : ['transparent', 'transparent']}  style={{ paddingVertical: hp(2.5),
                                                    paddingHorizontal: wp(5),
                                                    width: wp(9),
                                                    height: hp(4.5),
                                                    borderRadius: wp(3),
                                                    // borderColor: this.state.activeindex === index ? 'orange' : 'transparent',
                                                    // borderWidth: this.state.activeindex === index ? 3 : 1
                                                }}
                                                    >

                                                </LinearGradient> */}
                                                <View style={{
                                                    paddingVertical: hp(2.5),
                                                    paddingHorizontal: wp(5),
                                                    width: wp(9),
                                                    height: hp(4.5),
                                                    borderRadius: wp(3),
                                                    borderColor: this.state.activeindex === index ? 'orange' : 'transparent',
                                                    borderWidth: this.state.activeindex === index ? 3 : 1
                                                }}>
                                                </View>
                                            </TouchableOpacity>
                                        ))}
                                    </View>

                                </View>
                                <View style={{ marginHorizontal: wp(4), flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(3) }}>

                                    <View>
                                        <View>
                                            <Text style={styles.text}>Date</Text>
                                        </View>
                                        <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => { this.setState({ iscalendar: true }) }}>
                                            <View style={[styles.textinput, { paddingHorizontal: wp(3), marginTop: hp(1), marginBottom: hp(3), width: wp(35), padding: wp(3.8) }]}>
                                                {this.state.expdate != "" ?
                                                    <Text style={{ color: '#747688' }}>{this.state.expdate2}</Text>
                                                    :
                                                    <Text style={{ color: '#747688' }}>Sat, 4 Aug</Text>
                                                }
                                            </View>
                                            <Entypo name="chevron-down" color={'#000'} size={20} style={{ position: 'absolute', top: hp(2.7), right: wp(4) }} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ marginRight: wp(5) }}>
                                        <View>
                                            <Text style={styles.text}>Time</Text>
                                        </View>
                                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.setState({ isTime: true }) }}>
                                            <View style={[styles.textinput, { paddingHorizontal: wp(3), marginTop: hp(1), marginBottom: hp(3), width: wp(35), padding: wp(3.8) }]}>
                                                {this.state.exptime != "" ?
                                                    <Text style={{ color: '#747688' }}>{this.timeDisplayhandler()}</Text> :
                                                    <Text style={{ color: '#747688' }}>11:00 am</Text>
                                                }
                                            </View>
                                            {/* <TextInput
                                                style={[styles.textinput, { paddingHorizontal: wp(3), marginVertical: hp(1), width: wp(35), color: '#000' }]}
                                                value={this.state.exptime}
                                                editable={false}
                                                placeholderTextColor={'#747688'}
                                                placeholder="11:00 am"
                                                onChangeText={(text) => this.setState({ exptitle: text })}
                                            /> */}
                                            <Entypo name="chevron-down" color={'#000'} size={20} style={{ position: 'absolute', top: hp(2.7), right: wp(4) }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                {/* {this.state.iscalendar &&
                                    <View style={{ marginHorizontal: wp(3), borderRadius: wp(2), overflow: 'hidden' }}>
                                        <Calendar
                                            onDayPress={day => {

                                                this.setState({ expdate: day.dateString })
                                            }}
                                            markedDates={{
                                                [this.state.expdate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                            }}
                                        />
                                    </View>

                                } */}

                                <TouchableOpacity style={{ marginHorizontal: wp(4), borderColor: '#ffffff', borderWidth: 2, backgroundColor: '#ebebeb', borderRadius: wp(5) }}>
                                    <Text style={{ color: '#6F6F70', fontSize: 20, padding: wp(3), textAlign: 'center', fontWeight: 'bold' }}>+ Add more</Text>
                                </TouchableOpacity>


                                <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
                                    <View>
                                        <Text style={styles.text}>Meal type</Text>
                                    </View>

                                    <TouchableOpacity onPress={() => { this.setState({ isMealtype: true }) }}>
                                        <TextInput
                                            style={[styles.textinput, { paddingHorizontal: wp(3), marginVertical: hp(1), color: '#000' }]}
                                            value={this.state.mealtype}
                                            editable={false}
                                            placeholderTextColor={'#747688'}
                                            placeholder="e.g. My Brunch"
                                            onChangeText={(text) => this.setState({ exptitle: text })}
                                        />
                                        <Entypo name="chevron-down" color={'#000'} size={20} style={{ position: 'absolute', top: hp(2.7), right: wp(4) }} />
                                    </TouchableOpacity>

                                    {this.state.isMealtype &&
                                        <View style={{ backgroundColor: '#ffffff', borderRadius: wp(3), borderColor: '#E4DFDF', borderWidth: 1 }}>
                                            {this.state.mealdata.map((meal: any, index: any) => (
                                                <TouchableOpacity key={meal.id} onPress={() => { this.setState({ mealtype: meal.title, isMealtype: false }) }}>
                                                    <Text style={{ color: '#747688', padding: wp(3) }}>{meal.title}</Text>
                                                </TouchableOpacity>
                                            ))}
                                        </View>
                                    }

                                </View>

                                <View style={{ marginHorizontal: wp(4), marginTop: hp(2) }}>
                                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                                        onPress={() => {
                                            this.setState({ childfriendly: !this.state.childfriendly })
                                            // console.log("Child Friendly----------", this.state.childfriendly);
                                        }}>
                                        <View style={{
                                            borderColor: '#000',
                                            backgroundColor: this.state.childfriendly ? 'purple' : '#ebebeb',
                                            borderWidth: 1,
                                            borderRadius: wp(2),
                                            padding: wp(3),
                                            width: wp(2),
                                            height: hp(2),
                                            marginVertical: hp(1),
                                            marginHorizontal: wp(2),
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            {this.state.childfriendly &&
                                                <Image source={require('../../assets/check.png')} style={{ height: wp(4.2), width: wp(4.2) }} tintColor={'#fff'} />
                                            }
                                        </View>
                                        <Text style={{ color: '#000000', fontSize: 15, }}>Child Friendly ?</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
                                    <View>
                                        <Text style={styles.text}>Number of seats available</Text>
                                    </View>

                                    <View>
                                        <View style={{ position: 'absolute', zIndex: 1, top: hp(2.5), left: wp(5) }}>
                                            <FontAwesome6 name="people-roof" color={'#000'} size={20} style={{}} />
                                        </View>
                                        <TextInput
                                            style={[styles.textinput, { paddingLeft: wp(15), marginVertical: hp(1), color: '#000' }]}
                                            value={this.state.noofseats}
                                            placeholderTextColor={'#747688'}
                                            keyboardType="number-pad"
                                            placeholder="Type a number"
                                            onChangeText={(text) => this.numberofseats(text)}
                                        />

                                    </View>
                                </View>

                                <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
                                    <View>
                                        <Text style={styles.text}>Meal categories</Text>
                                    </View>

                                    <TouchableOpacity onPress={() => { this.setState({ ismealcategories: true }) }}>
                                        <View style={{ position: 'absolute', zIndex: 1, top: hp(2.5), left: wp(5) }}>
                                            <Fontisto name="search" color={'#000'} size={20} />
                                        </View>
                                        <TextInput
                                            style={[styles.textinput, { paddingLeft: wp(15), marginVertical: hp(1), color: '#000' }]}
                                            value={this.state.mealcategories}
                                            editable={false}
                                            placeholderTextColor={'#747688'}
                                            placeholder="e.g. French"
                                            onChangeText={(text) => this.setState({ exptitle: text })}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
                                    <View>
                                        <Text style={styles.text}>Dietary options available</Text>
                                    </View>

                                    <TouchableOpacity onPress={() => { this.setState({ isdietaryoptions: true }) }}>
                                        <View style={{ position: 'absolute', zIndex: 1, top: hp(2.5), left: wp(5) }}>
                                            <Fontisto name="search" color={'#000'} size={20} />
                                        </View>
                                        <TextInput
                                            style={[styles.textinput, { paddingLeft: wp(15), marginVertical: hp(1), color: '#000' }]}
                                            value={this.state.dietaryoptions}
                                            editable={false}
                                            placeholderTextColor={'#747688'}
                                            placeholder="e.g. French"
                                            onChangeText={(text) => this.setState({ exptitle: text })}
                                        />
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
                                    <View>
                                        <Text style={styles.text}>Add photos</Text>
                                    </View>

                                    <View style={{ marginVertical: hp(1) }}>
                                        <FlatList
                                            data={this.state.photosdata}
                                            renderItem={({ item }) => this.renderphotosdata(item)}
                                            horizontal
                                            keyExtractor={(item) => item.id.toString()}
                                        />
                                    </View>

                                </View>


                                <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
                                    <View>
                                        <Text style={styles.text}>Experience description</Text>
                                    </View>

                                    <View>
                                        <TextInput
                                            style={[styles.textinput, styles.textinputdescription]}
                                            value={this.state.expdesc}
                                            numberOfLines={5}
                                            placeholderTextColor={'#747688'}
                                            placeholder="Search typing here"
                                            onChangeText={(text) => this.setState({ exptitle: text })}
                                        />
                                    </View>
                                </View>

                                <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
                                    <View>
                                        <Text style={styles.text}>Dining room description</Text>
                                    </View>

                                    <View>
                                        <TextInput
                                            style={[styles.textinput, styles.textinputdescription]}
                                            value={this.state.droomdesc}
                                            numberOfLines={5}
                                            placeholderTextColor={'#747688'}
                                            placeholder="Search typing here"
                                            onChangeText={(text) => this.setState({ exptitle: text })}
                                        />
                                    </View>
                                </View>

                                <View style={{ marginHorizontal: wp(4), marginTop: hp(1) }}>
                                    <Text style={{ color: '#475569', fontSize: 25, fontWeight: '600' }}>Menu</Text>
                                </View>

                                <TouchableOpacity style={{ marginHorizontal: wp(4), borderColor: '#ffffff', borderWidth: 2, backgroundColor: '#ebebeb', borderRadius: wp(5), marginTop: hp(1) }}>
                                    <Text style={{ color: '#6F6F70', fontSize: 20, padding: wp(3), textAlign: 'center', fontWeight: 'bold' }}>+ Add Menu</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ marginHorizontal: wp(4), borderColor: '#ffffff', borderWidth: 2, backgroundColor: '#334155', borderRadius: wp(5), marginTop: hp(5) }}>
                                    <Text style={{ color: '#ffffff', fontSize: 20, padding: wp(3), textAlign: 'center', fontWeight: 'bold' }}>Create experience</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>

                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={this.state.iscalendar}
                    onRequestClose={() => this.isCancelcalendar()}
                >
                    <View style={styles.modalContainer}>

                        <View style={{ marginRight: wp(9), marginLeft: wp(2), borderRadius: wp(2), overflow: 'hidden', width: wp(77.6), }}>

                            <Calendar
                                style={{ height: hp(38), width: wp(77.6), }}
                                theme={{
                                    // textDayHeaderFontSize:10,
                                    // todayButtonFontSize:10,
                                    // textDayFontSize: 10,
                                    // textMonthFontSize:10,
                                    selectedDayBackgroundColor: '#F0E5FF',
                                    selectedDayTextColor: '#6200EA',
                                    // selectedDotColor:'#6200EA'
                                }}
                                onDayPress={day => {
                                    console.log(day);
                                    const tempdate = new Date(day.timestamp)
                                    const Day = tempdate.getDay()
                                    const Month = tempdate.getMonth()
                                    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                                    const dayName = daysOfWeek[Day];
                                    const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                                    const MonthName = Months[Month]
                                    console.log("Day-----", dayName, MonthName);
                                    this.setState({ expdate: day.dateString })
                                    this.setState({ expdate2: dayName.substring(0, 3) + "," + " " + day.day + " " + MonthName, iscalendar: false })
                                }}
                                markedDates={{
                                    [this.state.expdate]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                                }}
                            />
                        </View>

                    </View>
                </Modal>

                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={this.state.isTime}
                    onRequestClose={() => this.isCanceltime()}
                >
                    <View style={[styles.modalContainer, { marginLeft: 0, marginBottom: 0 }]}>
                        <View style={styles.modalContent}>
                            <View style={{ borderRadius: wp(2), overflow: 'hidden', }}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp(2), overflow: 'hidden' }}>
                                    <Image source={require('../../assets/Rec.jpg')} style={{ height: hp(0.8), width: wp(9), borderRadius: wp(10), }} tintColor={'#D9D9D9'} />
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp(5), marginTop: hp(3), marginHorizontal: wp(6) }}>
                                    <Text style={{ color: '#000', fontSize: 25 }}>Choose Time</Text>

                                    <TouchableOpacity onPress={() => {
                                        console.log("Selected time: ", this.state.selectedTime);
                                        this.setState({ isTime: false, exptime: this.state.selectedTime });
                                    }}
                                        style={{ backgroundColor: '#F3E344', borderRadius: wp(5) }} >
                                        <Text style={{ color: '#000', fontWeight: '600', paddingHorizontal: wp(4), paddingVertical: hp(1), fontSize: 18 }}>Done</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginBottom: hp(6) }}>
                                    <DatePicker
                                        theme="auto"
                                        style={{
                                            alignSelf: 'center', width: wp(55), height: hp(10),
                                            transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
                                        }}
                                        date={this.state.exptime}
                                        onDateChange={(timer) => {
                                            this.timehandler(timer)
                                        }}
                                        mode="time"
                                    />
                                </View>

                            </View>
                        </View>
                    </View>
                </Modal>

                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={this.state.ismealcategories}
                    onRequestClose={() => this.isCancelMealCat()}
                >
                    <View style={[styles.modalContainer, { marginTop: 0, flex: 1 }]}>
                        <View style={{ backgroundColor: '#fff', flex: 1 }}>
                            <View style={{ marginRight: wp(9), marginLeft: wp(2), borderRadius: wp(2), overflow: 'hidden' }}>
                                {this.state.mealcatdata?.map((item: any, index: any) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={() => { }} activeOpacity={0.6} style={[styles.interestselection, {
                                            backgroundColor: '#64748B',
                                            // borderColor: isSelected ? 'transparent' : 'black',
                                        }]}  >
                                            <Text style={[styles.interestname, { color: '#ccc' }]}>{item.title}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                </Modal>

                {/* <Modal
                    transparent={true}
                    animationType="slide"
                    visible={this.state.isdietaryoptions}
                    onRequestClose={() => this.isCanceltime()}
                >
                    <View style={[styles.modalContainer, { backgroundColor: '#ff0000', flex: 1, elevation: 5 }]}>

                        <View style={{ marginRight: wp(9), marginLeft: wp(2), borderRadius: wp(5), width: wp(77.6) }}>


                            <DatePicker
                                date={new Date(this.state.exptime)}
                                onDateChange={(timer) => console.log(timer)}
                                mode="time"
                                onConfirm={(time) => {
                                    console.log("Time-----------------", time);
                                }}
                                onCancel={() => {
                                    console.log("TimePicker Cancelled---");
                                }}
                            />

                        </View>

                    </View>
                </Modal>  */}

            </SafeAreaView >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    colorBox: {
        width: wp(9),
        height: hp(4.5),
        margin: wp(4),
        borderRadius: wp(2),
    },
    textinput: {
        borderColor: '#E4DFDF', borderWidth: 1, borderRadius: wp(3), backgroundColor: '#ffffff', color: '#000'
    },
    textinputdescription: {
        paddingLeft: wp(3), paddingTop: hp(2), marginVertical: hp(1), textAlignVertical: 'top', fontSize: 15, color: '#000'
    },
    text: { color: '#747688', fontSize: 15 },
    modalContainer: {
        // flex: 1,
        borderColor: '#E4DFDF',
        marginLeft: wp(3),
        marginTop: 'auto',
        marginBottom: hp(15),
        backgroundColor: "transparent"
    },
    modalContent: {
        elevation: 1,
        borderColor: '#E4DFDF',
        backgroundColor: '#ffffff',
        borderTopLeftRadius: wp(10),
        borderTopWidth: 1,
        borderTopRightRadius: wp(10),
    },
    title: {
        padding: wp(5),
        fontSize: 15,
        fontWeight: "bold",
        color: '#000',
    },
    interestselection: {
        margin: 4,
        borderWidth: 1,
        borderRadius: 25,
        marginVertical: 10,
    },
    interestname: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5
    }

})

export default CreateExperienceForm;