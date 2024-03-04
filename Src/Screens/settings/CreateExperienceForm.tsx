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
import { MD2LightTheme } from "react-native-paper";
import { PERMISSIONS, RESULTS, check, request } from "react-native-permissions";
import ImagePicker from 'react-native-image-crop-picker';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BlurView } from "@react-native-community/blur";

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
    // dietaryoptions: any
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
    mealcatlimit: boolean
    selectedDietary: any
    isCameraModal: boolean
    photosindex: any
    photosone: any
    photostwo: any
    photosthree: any
    photosfour: any
    dietaryoptions: dietaryoptions[]
    exptitlealert: boolean
    expdatealert: boolean
    exptimealert: boolean
    mealtypealert: boolean
    childfriendlyalert: boolean
    noofseatsalert: boolean
    mealcatalert: boolean
    dietaryoptionsalert: boolean
    expdescalert: boolean
    droomdescalert: boolean,
    photosalert: boolean
    addmenuslist: any
    addmenualert: boolean
    photoimagerender: boolean
    expandmenu: boolean
    renderCount: number
    trigger: string
    DateandtimeViews: any
    isID: any
}

interface dietaryoptions {
    id: number
    title: string
    image: any
}


class CreateExperienceForm extends Component<{ navigation: any, route: any }, Experience, dietaryoptions> {
    constructor(props: any) {

        super(props);
        this.state = {
            exptitle: '',
            childfriendly: false,
            expdate: '',
            expdate2: {},
            exptime: "",
            mealtype: '',
            noofseats: '',
            mealcategories: '',
            isCameraModal: false,
            selectedDietary: [],
            expdesc: '',
            droomdesc: '',
            activeindex: null,
            iscalendar: false,
            isTime: false,
            isMealtype: false,
            ismealcategories: false,
            isdietaryoptions: false,
            photosalert: false,
            selectedTime: null,
            selectedMeals: [],
            photosindex: 0,
            mealcatlimit: false,
            photosone: '',
            photostwo: '',
            photosthree: '',
            photosfour: '',
            exptitlealert: false,
            expdatealert: false,
            exptimealert: false,
            mealtypealert: false,
            childfriendlyalert: false,
            noofseatsalert: false,
            mealcatalert: false,
            dietaryoptionsalert: false,
            expdescalert: false,
            droomdescalert: false,
            addmenualert: false,
            photoimagerender: false,
            expandmenu: false,
            addmenuslist: '',
            renderCount: 1,
            trigger: '',
            isID: null,
            DateandtimeViews: [
                { id: 1, date: 'Sat, 4 Aug', time: '11:00 am' },
                // { id: 2, date: 'Sat, 4 Aug', time: '11:00 am' },
                // { id: 3, date: 'Sat, 4 Aug', time: '11:00 am' }
            ],
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
            dietaryoptions: [
                { id: 1, title: 'Gluten Free', image: require('../../assets/gluten-free.png') },
                { id: 2, title: 'Vegetarian', image: require('../../assets/vegetarian.png') },
                { id: 3, title: 'Halal', image: require('../../assets/lamb.png') },
                { id: 4, title: 'Vegan', image: require('../../assets/vegan.png') },
                { id: 5, title: 'Organic', image: require('../../assets/salad.png') },
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
                    image: require('../../assets/noimage.png'),

                },
                {
                    id: 2,
                    image: require('../../assets/noimage.png'),

                },
                {
                    id: 3,
                    image: require('../../assets/noimage.png'),

                },
                {
                    id: 4,
                    image: require('../../assets/noimage.png'),

                },
            ]
        }

    }

    renderphotosdata = (item: any, index: any) => {
        const isSelected = this.state.photosindex === item.id
        return (
            <TouchableOpacity style={{
                width: wp(30),
                height: hp(12),
                backgroundColor: '#ffffff',
                marginHorizontal: wp(1),
                borderRadius: wp(3),
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: this.state.photosalert ? "#DC2626" : '#E4DFDF',
                borderWidth: 1,
            }}
                onPress={() => {
                    console.log("Photo Image Render----->>>", this.state.photoimagerender);
                    this.setState({ isCameraModal: true })
                    // console.log("Index of Add Photos----", index)
                    this.setState({ photosindex: item.id })
                }}
            >
                {isSelected &&
                    <AntDesign name="delete" size={25} color={'#fff'} onPress={() => { this.deletephotoImage(item.id) }} style={{ position: 'absolute', zIndex: 1, bottom: hp(8), left: wp(20) }} />
                }
                <Image source={this.photoImage(item.id)} style={{
                    width: this.state.photoimagerender ? wp(30) : wp(10),
                    height: this.state.photoimagerender ? hp(12) : hp(5),
                    opacity: 0.5
                }} resizeMode="cover" />
            </TouchableOpacity>
        )
    }

    componentDidMount(): void {
        BackHandler.addEventListener('hardwareBackPress', this.backaction)
        // this.menudatahandler()
    }

    componentWillUnmount(): void {
        BackHandler.removeEventListener('hardwareBackPress', this.backaction)
    }

    menudatahandler = () => {
        console.log("Add Menu Items------>>>", this.props.route.params.Title, this.props.route.params.Description, this.props.route.params.Price);
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
        if (numbersOfseats === '.' || numbersOfseats == "") {
            this.setState({ noofseats: '' })
            this.setState({ noofseatsalert: true })
            Keyboard.dismiss()
        } else if (numbersOfseats != "") {
            this.setState({ noofseatsalert: false })
            this.setState({ noofseats: numbersOfseats })
        }
        else if (numbersOfseats > 99) {
            Alert.alert("Limit", "Max number reached")
            this.setState({ noofseatsalert: false })
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
        // console.log("Timer in Timehandler", this.state.exptime);

        const timestamp = new Date(this.state.exptime);
        const options = { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: 'Asia/Kolkata' };
        const formattedTime = timestamp.toLocaleTimeString('en-US', options);
        // console.log("formattedTime", formattedTime);

        return formattedTime
    }


    photoImage = (id: any) => {

        if (id === 1 && this.state.photosone != "") {
            return { uri: this.state.photosone }
        }
        else if (id === 2 && this.state.photostwo != "") {

            return { uri: this.state.photostwo }
        }
        else if (id === 3 && this.state.photosthree != "") {

            return { uri: this.state.photosthree }
        }
        else if (id === 4 && this.state.photosfour != "") {

            return { uri: this.state.photosfour }
        }
        else {

            return require('../../assets/noimage.png')
        }
    }

    deletephotoImage = (id: any) => {
        if (id === 1 && this.state.photosone != "") {
            console.log("Delete PhotoImage 1------>>>");
            this.setState({ photosone: '' })
            return require('../../assets/noimage.png')
        }
        else if (id === 2 && this.state.photostwo != "") {
            this.setState({ photostwo: '' })
            return require('../../assets/noimage.png')
        }
        else if (id === 3 && this.state.photosthree != "") {
            this.setState({ photosthree: '' })
            return require('../../assets/noimage.png')
        }
        else if (id === 4 && this.state.photosfour != "") {
            this.setState({ photosfour: '' })
            return require('../../assets/noimage.png')
        }
        else {
            // console.log('gjkhgsdjkghdjgkhu');
            return require('../../assets/noimage.png')
        }
    }


    isCancelMealCat = () => {
        this.setState({ ismealcategories: false })
    }


    toggleInterestSelection = (interestValue: any) => {

        const isSelected = this.state.selectedMeals.includes(interestValue);

        if (isSelected) {
            this.setState((prevState) => ({
                selectedMeals: prevState.selectedMeals.filter(
                    (interest: any) => interest !== interestValue
                )
            }));
        } else {
            this.setState((prevState) => ({
                selectedMeals: [...prevState.selectedMeals, interestValue]
            }));
        }
    };

    toggleDietaryoptions = (interestValue: any) => {
        console.log("Interest-----Value------", interestValue);

        const isSelected = this.state.selectedDietary.includes(interestValue);

        if (isSelected) {
            this.setState((prevState) => ({
                selectedDietary: prevState.selectedDietary.filter(
                    (interest: any) => interest !== interestValue
                )
            }));

        } else {
            this.setState((prevState) => ({
                selectedDietary: [...prevState.selectedDietary, interestValue]
            }));

            setTimeout(() => {
                console.log("Dietary Loghhhhhhhhhhhhhhhhhhhhhh", this.state.selectedDietary);

            }, 500);
        }
    };

    isCanceldietary = () => {
        this.setState({ isdietaryoptions: false })
    }

    openImagePicker = (index: any) => {
        ImagePicker.openCamera({
            width: 800,
            height: 800,
            cropping: true,
        }).then(image => {
            console.log(image);

            if (this.state.trigger === 'Onephoto') {
                this.setState({ photosone: image.path })
            }
            else if (this.state.trigger === 'Twophoto') {
                this.setState({ photostwo: image.path })
            }
            else if (this.state.trigger === 'Threephoto') {
                this.setState({ photosthree: image.path })
            }
            else if (this.state.trigger === 'Fourphoto') {
                this.setState({ photosfour: image.path })
            } else {
                console.log('gjkhgsdjkghdjgkhu');
            }
            // const updatedData = this.state.photosdata.map((item: any) => {
            //     if (item.id === index) {
            //         return [...item, { uri: image.path }]
            //     } else {
            //         return [...item]
            //     }
            // })
            // console.log("Updated Data----++==", updatedData);

            // this.setState({ photosdata: updatedData })
            this.setState({ isCameraModal: false })
        });
    }

    pickImage = () => {
        ImagePicker.openPicker({
            multiple: false,
            mediaType: 'photo'
        }).then(images => {
            console.log(images);
            console.log("Image Paths-------------------->>>>>>>>>>>>>>", images.path);
            this.setState({ isCameraModal: false })
            if (this.state.trigger === 'Onephoto') {
                this.setState({ photosone: images.path })
            }
            else if (this.state.trigger === 'Twophoto') {
                this.setState({ photostwo: images.path })
            }
            else if (this.state.trigger === 'Threephoto') {
                this.setState({ photosthree: images.path })
            }
            else if (this.state.trigger === 'Fourphoto') {
                this.setState({ photosfour: images.path })
            } else {
                console.log('gjkhgsdjkghdjgkhu');
            }
        });
    }

    opengallery = async () => {
        console.log("called in gallery");

        // Check if permission is already granted
        const permissionStatus = await check(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);
        console.log("permisssion Status--------->>>>>>>", permissionStatus);


        if (permissionStatus === RESULTS.GRANTED) {
            // Permission already granted, proceed with image picking
            this.pickImage();
        } else {
            // Permission not granted, request it
            const result = await request(PERMISSIONS.ANDROID.READ_MEDIA_IMAGES);

            if (result === RESULTS.GRANTED) {
                // Permission granted, proceed with image picking
                this.pickImage();
            } else {
                // Permission denied, handle accordingly (show a message, etc.)
                console.log("Read external storage permission denied");
            }
        }
    }

    isCancelCamera = () => {
        this.setState({ isCameraModal: false })
    }

    createhandler = () => {
        if (this.state.exptitle == "") {
            this.setState({ exptitlealert: true })
        } else {
            this.setState({ exptitlealert: false })
        }

        if (this.state.expdate == "") {
            this.setState({ expdatealert: true })
        } else {
            this.setState({ expdatealert: false })
        }

        if (this.state.exptime == "") {
            this.setState({ exptimealert: true })
        } else {
            this.setState({ exptimealert: false })
        }

        if (this.state.mealtype == "") {
            this.setState({ mealtypealert: true })
        } else {
            this.setState({ mealtypealert: false })
        }


        if (this.state.noofseats == "") {
            this.setState({ noofseatsalert: true })
        } else {
            this.setState({ noofseatsalert: false })
        }


        if (this.state.selectedMeals == "") {
            this.setState({ mealcatalert: true })
        } else {
            this.setState({ mealcatalert: false })
        }

        if (this.state.selectedDietary == "") {
            this.setState({ dietaryoptionsalert: true })
        } else {
            this.setState({ dietaryoptionsalert: false })
        }

        if (this.state.photosone === "" || this.state.photostwo === "" || this.state.photosthree === "" || this.state.photosfour === "") {
            this.setState({ photosalert: true })
        } else {
            this.setState({ photosalert: false })
        }

        if (this.state.expdesc == "") {
            this.setState({ expdescalert: true })
        } else {
            this.setState({ expdescalert: false })
        }

        if (this.state.droomdesc == "") {
            this.setState({ droomdescalert: true })
        } else {
            this.setState({ droomdescalert: false })
        }

        if (this.state.addmenuslist == "") {
            this.setState({ addmenualert: true })
        } else {
            this.setState({ addmenualert: false })
        }


    }

    addmorebutton = () => {
     const data = this.state.DateandtimeViews.concat({
            id: this.state.DateandtimeViews.length + 1,
            date: 'Sat, 4 Aug', time: '11:00 am'
        })
        console.warn(data)
        if(this.state.DateandtimeViews.length <=3){
            this.setState({DateandtimeViews: data})
        }
    }

    renderDatenadtimeview = () => {
       
        return(
                <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }} >
                    <View>
                        {this.state.DateandtimeViews.map((item: any) => {
                            console.log("Date and View item <><><><><><", item);
                            return (
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View>
                                        <View>
                                            <Text style={styles.text}>Date</Text>
                                        </View>
                                        <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => { this.setState({ iscalendar: !this.state.iscalendar, isID: item.id }) }}>
                                            <View style={[styles.textinput, { paddingHorizontal: wp(3), marginTop: hp(1), marginBottom: hp(3), width: wp(35), padding: wp(3.8), borderColor: this.state.expdatealert ? "#DC2626" : '#E4DFDF' }]}>
                                                <Text style={{ color: '#000' }}>{item.date}</Text>
                                            </View>
                                            <Entypo name={this.state.iscalendar ? "chevron-up" : "chevron-down"} color={'#000'} size={20} style={{ position: 'absolute', top: hp(2.7), right: wp(4) }} />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ marginRight: wp(5) }}>
                                        <View>
                                            <Text style={styles.text}>Time</Text>
                                        </View>
                                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.setState({ isTime: true }) }}>
                                            <View style={[styles.textinput, { paddingHorizontal: wp(3), marginTop: hp(1), marginBottom: hp(3), width: wp(35), padding: wp(3.8), borderColor: this.state.exptimealert ? "#DC2626" : '#E4DFDF' }]}>
                                                <Text style={{ color: '#000' }}>{item.time}</Text>
                                            </View>

                                            <Entypo name="chevron-down" color={'#000'} size={20} style={{ position: 'absolute', top: hp(2.7), right: wp(4) }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        })}
                    </View>

                    {/* <View>
                        <View>
                            <View>
                                <Text style={styles.text}>Date</Text>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row', }} onPress={() => { this.setState({ iscalendar: !this.state.iscalendar }) }}>
                                <View style={[styles.textinput, { paddingHorizontal: wp(3), marginTop: hp(1), marginBottom: hp(3), width: wp(35), padding: wp(3.8), borderColor: this.state.expdatealert ? "#DC2626" : '#E4DFDF' }]}>
                                    {this.state.expdate != "" ?
                                        <Text style={{ color: '#747688' }}>{this.state.expdate2}</Text>
                                        :
                                        <Text style={{ color: '#747688' }}>Sat, 4 Aug</Text>
                                    }
                                </View>
                                <Entypo name={this.state.iscalendar ? "chevron-up" : "chevron-down"} color={'#000'} size={20} style={{ position: 'absolute', top: hp(2.7), right: wp(4) }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginRight: wp(5) }}>
                            <View>
                                <Text style={styles.text}>Time</Text>
                            </View>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => { this.setState({ isTime: true }) }}>
                                <View style={[styles.textinput, { paddingHorizontal: wp(3), marginTop: hp(1), marginBottom: hp(3), width: wp(35), padding: wp(3.8), borderColor: this.state.exptimealert ? "#DC2626" : '#E4DFDF' }]}>
                                    {this.state.exptime != "" ?
                                        <Text style={{ color: '#747688' }}>{this.timeDisplayhandler()}</Text> :
                                        <Text style={{ color: '#747688' }}>11:00 am</Text>
                                    }
                                </View>

                                <Entypo name="chevron-down" color={'#000'} size={20} style={{ position: 'absolute', top: hp(2.7), right: wp(4) }} />
                            </TouchableOpacity>
                        </View>
                    </View> */}

                </View>
        )
            
        }



    render() {

        const colors = ['#087064', '#ff0000', '#37B5B6', '#A94438', '#DC84F3',];

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ebebeb' }}>
                <View style={{ flex: 1 }}>
                    <StatusBar barStyle={"dark-content"} backgroundColor={'#ebebeb'} />

                    <View style={{ flexDirection: 'row', marginTop: hp(3) }}>
                        <View style={{ marginLeft: wp(3) }}>
                            <Entypo name="cross" color={'#000'} size={30} />
                        </View>

                        <Text style={{ color: '#000', textAlign: 'center', fontSize: 20, marginLeft: wp(3), fontWeight: 'bold' }}>Create experience</Text>

                        <View style={{ marginLeft: 'auto', marginRight: wp(4), marginTop: hp(0.2) }}>
                            <AntDesign name="delete" color={'#000'} size={25} />
                        </View>
                    </View>
                    <View style={{ flex: 1, }}>
                        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }}>
                            <ScrollView showsVerticalScrollIndicator={false} >
                                <View style={{ flex: 1, marginBottom: hp(2), backgroundColor: '#F3F2F3 ' }}>


                                    <View style={{ marginHorizontal: wp(1), flex: 1, marginTop: hp(2) }}>

                                        <View style={{ marginHorizontal: wp(4), }}>
                                            <View>
                                                <Text style={styles.text}>Experience title</Text>
                                            </View>
                                            <TextInput
                                                style={[styles.textinput, { padding: wp(4), marginTop: hp(1), marginBottom: hp(2), borderColor: this.state.exptitlealert ? "#DC2626" : '#E4DFDF', }]}
                                                value={this.state.exptitle}
                                                placeholderTextColor={'#747688'}
                                                placeholder="e.g. My Tasty Experience"
                                                onChangeText={
                                                    (text) => {
                                                        if (this.state.exptitle == "") {
                                                            this.setState({ exptitlealert: true })
                                                        } else {

                                                            this.setState({ exptitlealert: false })
                                                        }
                                                        this.setState({ exptitle: text })
                                                    }
                                                }
                                            />

                                            {this.state.exptitlealert &&
                                                <View style={{ backgroundColor: '#FEE2E2', flexDirection: 'row', borderRadius: wp(2), marginBottom: hp(2) }}>
                                                    <View style={{ width: wp(2), height: hp(5), backgroundColor: '#DC2626', borderBottomStartRadius: wp(2), borderTopLeftRadius: wp(2) }}></View>
                                                    <Text style={{ color: '#DC2626', alignSelf: 'center', paddingLeft: wp(3) }}>Please add experience title</Text>
                                                </View>
                                            }

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
                                                        margin: wp(2),
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


                                        {this.renderDatenadtimeview()}
                                        <TouchableOpacity style={{ marginHorizontal: wp(4), borderColor: '#ffffff', borderWidth: 2, backgroundColor: '#ebebeb', borderRadius: wp(5) }} onPress={() => { this.addmorebutton() }}>
                                            <Text style={{ color: '#6F6F70', fontSize: 20, padding: wp(3), textAlign: 'center', fontWeight: 'bold' }}>+ Add more</Text>
                                        </TouchableOpacity>


                                        <View style={{ marginHorizontal: wp(4), marginTop: hp(3), }}>
                                            <View>
                                                <Text style={styles.text}>Meal type</Text>
                                            </View>

                                            <TouchableOpacity onPress={() => { this.setState({ isMealtype: !this.state.isMealtype }) }}>
                                                <TextInput
                                                    style={[styles.textinput, { paddingHorizontal: wp(3), marginVertical: hp(1), color: '#000', borderColor: this.state.mealtypealert ? "#DC2626" : '#E4DFDF' }]}
                                                    value={this.state.mealtype}
                                                    editable={false}
                                                    placeholderTextColor={'#747688'}
                                                    placeholder="e.g. My Brunch"
                                                    onChangeText={(text) => this.setState({ mealtype: text })}
                                                />
                                                <Entypo name={this.state.isMealtype ? "chevron-up" : "chevron-down"} color={'#000'} size={20} style={{ position: 'absolute', top: hp(2.7), right: wp(4) }} />
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

                                            {this.state.mealtypealert &&
                                                <View style={{ backgroundColor: '#FEE2E2', flexDirection: 'row', borderRadius: wp(2), marginBottom: hp(2) }}>
                                                    <View style={{ width: wp(2), height: hp(5), backgroundColor: '#DC2626', borderBottomStartRadius: wp(2), borderTopLeftRadius: wp(2) }}></View>
                                                    <Text style={{ color: '#DC2626', alignSelf: 'center', paddingLeft: wp(3) }}>Please choose meal type</Text>
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
                                                    style={[styles.textinput, { paddingLeft: wp(15), marginVertical: hp(1), color: '#000', borderColor: this.state.noofseatsalert ? "#DC2626" : '#E4DFDF' }]}
                                                    value={this.state.noofseats}
                                                    placeholderTextColor={'#747688'}
                                                    keyboardType="number-pad"
                                                    placeholder="Type a number"
                                                    onChangeText={(text) => this.numberofseats(text)}
                                                />

                                            </View>

                                            {this.state.noofseatsalert &&
                                                <View style={{ backgroundColor: '#FEE2E2', flexDirection: 'row', borderRadius: wp(2), marginBottom: hp(2) }}>
                                                    <View style={{ width: wp(2), height: hp(5), backgroundColor: '#DC2626', borderBottomStartRadius: wp(2), borderTopLeftRadius: wp(2) }}></View>
                                                    <Text style={{ color: '#DC2626', alignSelf: 'center', paddingLeft: wp(3) }}>Maximum no. of seats you can host is 99</Text>
                                                </View>
                                            }

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
                                                    style={[styles.textinput, { paddingLeft: wp(15), marginVertical: hp(1), color: '#000', borderColor: this.state.mealcatalert ? "#DC2626" : '#E4DFDF' }]}
                                                    value={this.state.mealcategories}
                                                    editable={false}
                                                    placeholderTextColor={'#747688'}
                                                    placeholder="e.g. French"
                                                    onChangeText={(text) => this.setState({ exptitle: text })}
                                                />
                                            </TouchableOpacity>

                                            {this.state.mealcatalert &&
                                                <View style={{ backgroundColor: '#FEE2E2', flexDirection: 'row', borderRadius: wp(2), marginBottom: hp(2) }}>
                                                    <View style={{ width: wp(2), height: hp(5), backgroundColor: '#DC2626', borderBottomStartRadius: wp(2), borderTopLeftRadius: wp(2) }}></View>
                                                    <Text style={{ color: '#DC2626', alignSelf: 'center', paddingLeft: wp(3) }}>Please choose meal categories</Text>
                                                </View>
                                            }


                                            <View style={{
                                                flexWrap: 'wrap',
                                                flexDirection: 'row',

                                            }}>
                                                {this.state.selectedMeals?.map((item: any, index: any) => {
                                                    console.log("This.state.Selected-----Meals", item);
                                                    return (
                                                        <View key={index} style={[styles.interestselection, {
                                                            backgroundColor: "#000000",
                                                            borderColor: "#000000",
                                                            marginLeft: wp(2)
                                                        }]}>
                                                            <Text style={[styles.interestname, { color: "#ffffff", padding: wp(1) }]}>{item}</Text>
                                                        </View>
                                                    )
                                                })}
                                            </View>
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
                                                    style={[styles.textinput, { paddingLeft: wp(15), marginVertical: hp(1), color: '#000', borderColor: this.state.dietaryoptionsalert ? "#DC2626" : '#E4DFDF' }]}
                                                    // value={this.state.dietaryoptions}
                                                    editable={false}
                                                    placeholderTextColor={'#747688'}
                                                    placeholder="e.g. French"
                                                />
                                            </TouchableOpacity>

                                            {this.state.dietaryoptionsalert &&
                                                <View style={{ backgroundColor: '#FEE2E2', flexDirection: 'row', borderRadius: wp(2), marginBottom: hp(2) }}>
                                                    <View style={{ width: wp(2), height: hp(5), backgroundColor: '#DC2626', borderBottomStartRadius: wp(2), borderTopLeftRadius: wp(2) }}></View>
                                                    <Text style={{ color: '#DC2626', alignSelf: 'center', paddingLeft: wp(3) }}>Please choose dietary options</Text>
                                                </View>
                                            }


                                            <View style={{
                                                flexWrap: 'wrap',
                                                flexDirection: 'row',
                                            }}>
                                                {this.state.selectedDietary?.map((item: any, index: any) => {
                                                    console.log("This.state.Selected-----Dietary", item);
                                                    return (
                                                        <View key={index} style={[styles.interestselection, {
                                                            backgroundColor: "#000000",
                                                            borderColor: "#000000",
                                                            marginLeft: wp(2),
                                                            marginVertical: 0,
                                                            marginBottom: hp(1.2),
                                                            flexDirection: 'row',
                                                            justifyContent: 'space-between',
                                                        }]}>
                                                            <Image source={item.image} style={{ height: hp(2.95), width: wp(6.4), alignSelf: 'center', marginLeft: wp(1.25) }} />
                                                            <Text style={[styles.interestname, { color: "#ffffff", padding: wp(1) }]}>{item.title}</Text>
                                                        </View>
                                                    )
                                                })}
                                            </View>
                                        </View>

                                        <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
                                            <View>
                                                <Text style={styles.text}>Add photos</Text>
                                            </View>

                                            <View style={{ marginVertical: hp(1), }}>
                                                <ScrollView horizontal>

                                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                                        <TouchableOpacity style={{
                                                            width: wp(30),
                                                            height: hp(12),
                                                            backgroundColor: '#ffffff',
                                                            marginHorizontal: wp(1),
                                                            borderRadius: wp(3),
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderColor: this.state.photosalert ? "#DC2626" : '#E4DFDF',
                                                            borderWidth: 1,
                                                        }}
                                                            onPress={() => {
                                                                console.log("Photo Image Render----->>>", this.state.photoimagerender);
                                                                this.setState({ isCameraModal: true, trigger: 'Onephoto' })
                                                            }}
                                                        >
                                                            {this.state.photosone != "" &&
                                                                <AntDesign name="delete" size={25} color={'#fff'} onPress={() => { this.setState({ photosone: '' }) }} style={{ position: 'absolute', zIndex: 1, bottom: hp(8), left: wp(20) }} />
                                                            }
                                                            {this.state.photosone != "" ?

                                                                <Image source={{ uri: this.state.photosone }} style={{
                                                                    width: wp(30),
                                                                    height: hp(12),
                                                                    opacity: 0.5
                                                                }} resizeMode="cover" /> :
                                                                <Image source={require('../../assets/noimage.png')} style={{
                                                                    width: wp(10),
                                                                    height: hp(4),
                                                                    opacity: 0.5
                                                                }} resizeMode="cover" />

                                                            }
                                                        </TouchableOpacity>

                                                        <TouchableOpacity style={{
                                                            width: wp(30),
                                                            height: hp(12),
                                                            backgroundColor: '#ffffff',
                                                            marginHorizontal: wp(1),
                                                            borderRadius: wp(3),
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderColor: this.state.photosalert ? "#DC2626" : '#E4DFDF',
                                                            borderWidth: 1,
                                                        }}
                                                            onPress={() => {
                                                                console.log("Photo Image Render----->>>", this.state.photoimagerender);
                                                                this.setState({ isCameraModal: true, trigger: 'Twophoto' })
                                                            }}
                                                        >
                                                            {this.state.photostwo != "" &&
                                                                <AntDesign name="delete" size={25} color={'#fff'} onPress={() => { this.setState({ photostwo: '' }) }} style={{ position: 'absolute', zIndex: 1, bottom: hp(8), left: wp(20) }} />
                                                            }
                                                            {this.state.photostwo != "" ?

                                                                <Image source={{ uri: this.state.photostwo }} style={{
                                                                    width: wp(30),
                                                                    height: hp(12),
                                                                    opacity: 0.5
                                                                }} resizeMode="cover" /> :
                                                                <Image source={require('../../assets/noimage.png')} style={{
                                                                    width: wp(10),
                                                                    height: hp(4),
                                                                    opacity: 0.5
                                                                }} resizeMode="cover" />

                                                            }
                                                        </TouchableOpacity>

                                                        <TouchableOpacity style={{
                                                            width: wp(30),
                                                            height: hp(12),
                                                            backgroundColor: '#ffffff',
                                                            marginHorizontal: wp(1),
                                                            borderRadius: wp(3),
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderColor: this.state.photosalert ? "#DC2626" : '#E4DFDF',
                                                            borderWidth: 1,
                                                        }}
                                                            onPress={() => {
                                                                console.log("Photo Image Render----->>>", this.state.photoimagerender);
                                                                this.setState({ isCameraModal: true, trigger: 'Threephoto' })
                                                            }}
                                                        >
                                                            {this.state.photosthree != "" &&
                                                                <AntDesign name="delete" size={25} color={'#fff'} onPress={() => { this.setState({ photosthree: '' }) }} style={{ position: 'absolute', zIndex: 1, bottom: hp(8), left: wp(20) }} />
                                                            }
                                                            {this.state.photosthree != "" ?

                                                                <Image source={{ uri: this.state.photosthree }} style={{
                                                                    width: wp(30),
                                                                    height: hp(12),
                                                                    opacity: 0.5
                                                                }} resizeMode="cover" /> :
                                                                <Image source={require('../../assets/noimage.png')} style={{
                                                                    width: wp(10),
                                                                    height: hp(4),
                                                                    opacity: 0.5
                                                                }} resizeMode="cover" />

                                                            }
                                                        </TouchableOpacity>

                                                        <TouchableOpacity style={{
                                                            width: wp(30),
                                                            height: hp(12),
                                                            backgroundColor: '#ffffff',
                                                            marginHorizontal: wp(1),
                                                            borderRadius: wp(3),
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            borderColor: this.state.photosalert ? "#DC2626" : '#E4DFDF',
                                                            borderWidth: 1,
                                                        }}
                                                            onPress={() => {
                                                                console.log("Photo Image Render----->>>", this.state.photoimagerender);
                                                                this.setState({ isCameraModal: true, trigger: 'Fourphoto' })
                                                            }}
                                                        >
                                                            {this.state.photosfour != "" &&
                                                                <AntDesign name="delete" size={25} color={'#fff'} onPress={() => { this.setState({ photosfour: '' }) }} style={{ position: 'absolute', zIndex: 1, bottom: hp(8), left: wp(20) }} />
                                                            }
                                                            {this.state.photosfour != "" ?

                                                                <Image source={{ uri: this.state.photosfour }} style={{
                                                                    width: wp(30),
                                                                    height: hp(12),
                                                                    opacity: 0.5
                                                                }} resizeMode="cover" /> :
                                                                <Image source={require('../../assets/noimage.png')} style={{
                                                                    width: wp(10),
                                                                    height: hp(4),
                                                                    opacity: 0.5
                                                                }} resizeMode="cover" />

                                                            }
                                                        </TouchableOpacity>
                                                    </View>

                                                    {/* <FlatList
                                                        data={this.state.photosdata}
                                                        renderItem={({ item, index }) => this.renderphotosdata(item, index)}
                                                        horizontal
                                                        showsHorizontalScrollIndicator={false}
                                                        keyExtractor={(item) => item.id.toString()}
                                                    /> */}
                                                </ScrollView>
                                            </View>

                                            {this.state.photosalert &&
                                                <View style={{ backgroundColor: '#FEE2E2', flexDirection: 'row', borderRadius: wp(2), marginBottom: hp(2) }}>
                                                    <View style={{ width: wp(2), height: hp(5), backgroundColor: '#DC2626', borderBottomStartRadius: wp(2), borderTopLeftRadius: wp(2) }}></View>
                                                    <Text style={{ color: '#DC2626', alignSelf: 'center', paddingLeft: wp(3) }}>Please add photos of the dishes</Text>
                                                </View>
                                            }


                                        </View>


                                        <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
                                            <View>
                                                <Text style={styles.text}>Experience description</Text>
                                            </View>

                                            <View>
                                                <TextInput
                                                    style={[styles.textinput, styles.textinputdescription, { borderColor: this.state.expdescalert ? "#DC2626" : '#E4DFDF' }]}
                                                    value={this.state.expdesc}
                                                    multiline
                                                    numberOfLines={5}
                                                    placeholderTextColor={'#747688'}
                                                    placeholder="Search typing here"
                                                    onChangeText={(text) => {
                                                        if (this.state.expdesc == "") {
                                                            this.setState({ expdescalert: true })
                                                        } else {
                                                            this.setState({ expdescalert: false })
                                                        }
                                                        this.setState({ expdesc: text })

                                                    }
                                                    }
                                                />
                                            </View>

                                            {this.state.expdescalert &&
                                                <View style={{ backgroundColor: '#FEE2E2', flexDirection: 'row', borderRadius: wp(2), marginBottom: hp(2) }}>
                                                    <View style={{ width: wp(2), height: hp(5), backgroundColor: '#DC2626', borderBottomStartRadius: wp(2), borderTopLeftRadius: wp(2) }}></View>
                                                    <Text style={{ color: '#DC2626', alignSelf: 'center', paddingLeft: wp(3) }}>Please enter description for your experience</Text>
                                                </View>
                                            }

                                        </View>

                                        <View style={{ marginHorizontal: wp(4), marginTop: hp(3) }}>
                                            <View>
                                                <Text style={styles.text}>Dining room description</Text>
                                            </View>

                                            <View>
                                                <TextInput
                                                    style={[styles.textinput, styles.textinputdescription, { borderColor: this.state.droomdescalert ? "#DC2626" : '#E4DFDF' }]}
                                                    value={this.state.droomdesc}
                                                    numberOfLines={5}
                                                    multiline
                                                    placeholderTextColor={'#747688'}
                                                    placeholder="Search typing here"
                                                    onChangeText={(text) => {
                                                        if (this.state.droomdesc == "") {
                                                            this.setState({ droomdescalert: true })
                                                        } else {
                                                            this.setState({ droomdescalert: false })

                                                        }
                                                        this.setState({ droomdesc: text })
                                                    }
                                                    }
                                                />
                                            </View>

                                            {this.state.droomdescalert &&
                                                <View style={{ backgroundColor: '#FEE2E2', flexDirection: 'row', borderRadius: wp(2), marginBottom: hp(2) }}>
                                                    <View style={{ width: wp(2), height: hp(5), backgroundColor: '#DC2626', borderBottomStartRadius: wp(2), borderTopLeftRadius: wp(2) }}></View>
                                                    <Text style={{ color: '#DC2626', alignSelf: 'center', paddingLeft: wp(3) }}>Please enter description for dining room</Text>
                                                </View>
                                            }
                                        </View>

                                        <View style={{ marginHorizontal: wp(4), marginTop: hp(1) }}>
                                            <Text style={{ color: '#475569', fontSize: 25, fontWeight: '600' }}>Menu</Text>
                                        </View>

                                        {this.props.route.params?.isMenuExists === "True" &&
                                            <View style={{ backgroundColor: '#ffffff', borderRadius: wp(3), elevation: 1, marginHorizontal: wp(4), marginVertical: hp(3) }}>
                                                <View style={{ marginHorizontal: wp(3) }}>
                                                    <View style={{ paddingVertical: hp(2.25) }}>
                                                        <Text style={{ color: '#000', paddingLeft: wp(2) }}>Available Courses</Text>
                                                    </View>

                                                    <TouchableOpacity style={{ marginHorizontal: wp(2), }} onPress={() => { this.setState({ expandmenu: !this.state.expandmenu }) }} >
                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                            <Text style={{ fontSize: 22, color: '#000', textAlign: 'center', fontWeight: 'bold' }}>{this.props.route.params?.Title}</Text>
                                                            <Entypo name="chevron-down" size={25} color={'#000'} style={{ textAlign: 'center' }} />
                                                        </View>
                                                        <View style={{ marginTop: hp(1) }}>
                                                            <Text style={{ color: '#000' }}>$ {this.props.route.params?.Price}</Text>
                                                        </View>
                                                        {this.state.expandmenu &&

                                                            <View>
                                                                <View style={{ marginTop: hp(2) }}>
                                                                    <Text style={{ color: '#000' }}>{this.props.route.params?.Description}</Text>
                                                                </View>

                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(2), marginBottom: hp(2) }}>
                                                                    <TouchableOpacity style={{ backgroundColor: '#F87171', borderRadius: wp(2), height: hp(5.66), width: wp(36.8), justifyContent: 'center' }}>
                                                                        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '400' }}>Delete</Text>
                                                                    </TouchableOpacity>

                                                                    <TouchableOpacity style={{ backgroundColor: '#F3E344', borderRadius: wp(2), height: hp(5.66), width: wp(36.8), justifyContent: 'center' }}>
                                                                        <Text style={{ color: '#000', textAlign: 'center', fontWeight: '400' }}>Edit</Text>
                                                                    </TouchableOpacity>
                                                                </View>

                                                            </View>
                                                        }


                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        }

                                        <TouchableOpacity style={{
                                            marginHorizontal: wp(4), borderColor: this.state.addmenualert ? "#DC2626" : '#ffffff', borderWidth: 2, backgroundColor: '#ebebeb', borderRadius: wp(5), marginTop: hp(1)
                                        }} onPress={() => { this.props.navigation.navigate('AddMenu') }}>
                                            <Text style={{ color: '#6F6F70', fontSize: 20, padding: wp(3), textAlign: 'center', fontWeight: 'bold' }}>+ Add Menu</Text>
                                        </TouchableOpacity>

                                        {this.state.addmenualert &&
                                            <View style={{ backgroundColor: '#FEE2E2', flexDirection: 'row', borderRadius: wp(2), marginBottom: hp(2), marginHorizontal: wp(4), marginTop: hp(1) }}>
                                                <View style={{ width: wp(2), height: hp(5), backgroundColor: '#DC2626', borderBottomStartRadius: wp(2), borderTopLeftRadius: wp(2) }}></View>
                                                <Text style={{ color: '#DC2626', alignSelf: 'center', paddingLeft: wp(3) }}>Please add menu to your experience</Text>
                                            </View>
                                        }


                                    </View>
                                </View>
                            </ScrollView>

                        </KeyboardAvoidingView >
                        <TouchableOpacity style={{ marginHorizontal: wp(4), borderColor: '#ffffff', borderWidth: 2, backgroundColor: '#334155', borderRadius: wp(5), marginBottom: hp(1.97) }} onPress={() => { this.createhandler() }}>
                            <Text style={{ color: '#ffffff', fontSize: 20, padding: wp(3), textAlign: 'center', fontWeight: 'bold' }}>Create experience</Text>
                        </TouchableOpacity>
                    </View>

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
                                        // this.setState({ expdate2: dayName.substring(0, 3) + "," + " " + day.day + " " + MonthName, iscalendar: false })
                                        const date = dayName.substring(0, 3) + "," + " " + day.day + " " + MonthName
                                        const updatedData = this.state.DateandtimeViews.map((item: any) => {
                                            if (item.id == this.state.isID) {
                                                return { ...item, date }
                                            } else {
                                                return { ...item }
                                            }
                                        })

                                        this.setState({ DateandtimeViews: updatedData, iscalendar: false })
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
                        <View style={[styles.modalContainer, { marginBottom: 0, marginLeft: 0 }]}>
                            <View style={styles.modalContent}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp(2), overflow: 'hidden' }}>
                                    <Image source={require('../../assets/Rec.jpg')} style={{ height: hp(0.8), width: wp(9), borderRadius: wp(10), }} tintColor={'#D9D9D9'} />
                                </View>
                                <View style={{ backgroundColor: '#fff', }}>
                                    <View style={{ marginLeft: wp(8), marginVertical: hp(2) }}>
                                        <Text style={{ color: '#000000', fontSize: 25, fontWeight: 'bold' }}>Meal Categories</Text>
                                    </View>
                                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginLeft: wp(7), marginRight: wp(2), }}>
                                        {this.state.mealcatdata?.map((item: any, index: any) => {
                                            const isSelected = this.state.selectedMeals.includes(item.title);
                                            return (
                                                <TouchableOpacity key={index} onPress={() => { this.toggleInterestSelection(item.title) }} activeOpacity={0.6} style={[styles.interestselection, {
                                                    backgroundColor: isSelected ? "#000000" : '#E2E8F0',
                                                    marginLeft: wp(2),
                                                    marginVertical: 0,
                                                    marginBottom: hp(1.2),
                                                    borderColor: isSelected ? "#000000" : '#E2E8F0',
                                                }]}  >
                                                    <Text style={[styles.interestname, { color: isSelected ? "#ffffff" : '#64748B', fontSize: 16 }]}>{item.title}</Text>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                    {/* <View>
                                    {this.state.mealcatlimit &&
                                        <View style={{ backgroundColor: 'rgba(255,0,0,0.1)', flexDirection: 'row' }}>
                                            <View style={{ backgroundColor: 'rgba(255,0,0,1)', width: wp(3), height: hp(100) }}></View>
                                            <Text style={{ color: 'rgba(255,0,0,0.6)' }}>Maximum 4 categories</Text>
                                        </View>
                                    }
                                </View> */}

                                    <TouchableOpacity onPress={() => {
                                        this.setState({ ismealcategories: false })
                                        console.log("Selected Meal Categories--->>>", this.state.selectedMeals)
                                    }} style={{ backgroundColor: '#F3E344', marginHorizontal: wp(6), marginVertical: hp(2), borderRadius: wp(5) }}>
                                        <Text style={{ fontSize: 20, color: '#000', padding: wp(2), fontWeight: 'bold', textAlign: 'center' }}>Done</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    </Modal>

                    <Modal
                        transparent={true}
                        animationType="slide"
                        visible={this.state.isdietaryoptions}
                        onRequestClose={() => this.isCanceldietary()}
                    >
                        <View style={[styles.modalContainer, { marginBottom: 0, marginLeft: 0 }]}>
                            <View style={styles.modalContent}>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: hp(2), overflow: 'hidden' }}>
                                    <Image source={require('../../assets/Rec.jpg')} style={{ height: hp(0.8), width: wp(9), borderRadius: wp(10), }} tintColor={'#D9D9D9'} />
                                </View>
                                <View style={{ backgroundColor: '#fff', }}>
                                    <View style={{ marginLeft: wp(8), marginVertical: hp(2) }}>
                                        <Text style={{ color: '#000000', fontSize: 28, }}>Dietary Options</Text>
                                    </View>
                                    <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginLeft: wp(7), marginRight: wp(2), marginBottom: hp(50) }}>
                                        {this.state.dietaryoptions?.map((item: any, index: any) => {
                                            console.log("Dietary Options--------", item);

                                            const isSelected = this.state.selectedDietary.includes(item);
                                            return (
                                                <TouchableOpacity key={index} onPress={() => { this.toggleDietaryoptions(item) }} activeOpacity={0.6} style={[styles.interestselection, {
                                                    backgroundColor: isSelected ? "#000000" : '#E2E8F0',
                                                    marginLeft: wp(2),
                                                    marginVertical: 0,
                                                    marginBottom: hp(1.2),
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    borderColor: isSelected ? "#000000" : '#E2E8F0',
                                                }]}  >
                                                    <Image source={item.image} style={{ height: hp(2.95), width: wp(6.4), alignSelf: 'center', marginLeft: wp(1.25) }} />
                                                    <Text style={[styles.interestname, { color: isSelected ? "#ffffff" : '#64748B', fontSize: 16 }]}>{item.title}</Text>
                                                </TouchableOpacity>
                                            )
                                        })}
                                    </View>
                                    {/* <View>
                                    {this.state.mealcatlimit &&
                                        <View style={{ backgroundColor: 'rgba(255,0,0,0.1)', flexDirection: 'row' }}>
                                            <View style={{ backgroundColor: 'rgba(255,0,0,1)', width: wp(3), height: hp(100) }}></View>
                                            <Text style={{ color: 'rgba(255,0,0,0.6)' }}>Maximum 4 categories</Text>
                                        </View>
                                    }
                                </View> */}

                                    <TouchableOpacity onPress={() => {
                                        this.setState({ isdietaryoptions: false })
                                        console.log("Selected Dietary Options--->>>", this.state.selectedDietary)
                                    }} style={{ backgroundColor: '#F3E344', marginHorizontal: wp(6), marginVertical: hp(2), borderRadius: wp(5) }}>
                                        <Text style={{ fontSize: 20, color: '#000', padding: wp(2), fontWeight: 'bold', textAlign: 'center' }}>Done</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>

                        </View>
                    </Modal>

                    <Modal

                        transparent={true}
                        animationType="slide"
                        visible={this.state.isCameraModal}
                        onRequestClose={() => this.isCancelCamera()}
                    >
                        <BlurView
                            style={styles.absolute}
                            blurType="regular"
                            blurAmount={1}
                            reducedTransparencyFallbackColor="white"
                        />
                        <View style={[styles.modalContainer, { marginBottom: 0, marginLeft: 0, marginTop: hp(40), alignItems: 'center', justifyContent: 'center', borderColor: '#747678', }]}>
                            <View style={[styles.modalContent, { backgroundColor: '#ffffff', borderColor: "#747688", borderWidth: 0.8, borderTopLeftRadius: wp(2), borderTopRightRadius: wp(2), borderTopWidth: 1, borderRadius: wp(2) }]}>
                                <TouchableOpacity onPress={() => { this.openImagePicker(this.state.activeindex) }} style={{}} >
                                    <Text style={[styles.title, { padding: wp(10), fontSize: 20, }]}>Select from Camera</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => { this.opengallery() }}>
                                    <Text style={[styles.title, { padding: wp(10), fontSize: 20, }]}>Select from Gallery</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </Modal>

                    {/* <Modal
                        transparent={true}
                        animationType="slide"
                        visible={this.state.isCameraModal}
                        onRequestClose={() => this.isCancelCamera()}
                    >
                        <View style={[styles.modalContainer, { marginBottom: 0, marginLeft: 0, marginTop: hp(40), alignItems: 'center', justifyContent: 'center' }]}>
                            <View style={{ backgroundColor: '#ffffff', borderRadius: wp(5), borderColor: "#747688", borderWidth: 0.8 }}>
                                <View>
                                    <Text style={{ color: '#747688', fontSize: 30, padding: wp(2), paddingHorizontal: wp(5), textAlign: 'center', fontWeight: 'bold' }}>Choose one</Text>
                                </View>
                                <View style={{ borderColor: '#F3E344', borderWidth: 1, backgroundColor: '#747688' }}></View>
                                <View style={{}}>
                                    <TouchableOpacity style={{}} onPress={() => { this.openImagePicker(this.state.activeindex) }}>
                                        <Text style={{ color: '#000000', fontSize: 25, paddingHorizontal: wp(20), marginTop: hp(3), }}>Open Camera</Text>
                                    </TouchableOpacity>
                                    <View style={{ borderColor: '#747688', borderWidth: 1, backgroundColor: '#000000', marginTop: hp(2) }}></View>
                                    <TouchableOpacity style={{ marginTop: hp(3), marginBottom: hp(3) }} onPress={() => { this.opengallery() }}>
                                        <Text style={{ color: '#000000', fontSize: 25, paddingHorizontal: wp(20) }}>Open Gallery</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal> */}
                </View>
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
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
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
        margin: wp(0.5),
        borderWidth: 1,
        borderRadius: wp(6.66),
        marginVertical: hp(1.23),
    },
    interestname: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: wp(2.66),
        paddingVertical: hp(0.61)
    }

})

export default CreateExperienceForm;