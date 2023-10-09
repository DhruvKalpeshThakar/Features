import React from "react";
import { LogBox,Alert, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo';
import { ImageBackground } from "react-native";
// import localimage from "..Src\assets\bg.jpg";


interface State {

    //Primitive DataTypes
    email: string;
    cemail: string
    pass: any;
    cpass: any;
    major: boolean;
    //void datatype = doesn't returns anything
    //undefined = unintentional unassigned value
    //null = intentional assigned value



    //Object DataTypes
    //enum = used to define set of named constants
    numbers: (string | number)[]; //array - any length
    person: [string, number] //Tuple - of fixed Length
    showPassword: boolean
    showCPassword: boolean
}


// export interface Navigate {
//     navigation: any
// }

class Signup extends React.Component<{navigation:any}, State> {
    constructor(props: any) {

        super(props);

        this.state = {
            email: "",
            cemail: "",
            pass:"",
            cpass: "",
            major: false,
            numbers: [10, 11, 12, 13, 14, 15, 'Hello'],
            person: ["John", 35],
            showPassword: false,
            showCPassword: false,
        };
    }

   

    componentDidMount(): void {
        LogBox.ignoreLogs(['In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.']);
        console.log("Hello Class Component")
    }

    componentWillUnmount(): void {
        console.log("Bye Bye Class Component")
    }

    togglePasswordVisibility = () => {
        this.setState((prevState) => ({
          showPassword: !prevState.showPassword,
        }));
      };
    toggleRePasswordVisibility = () => {
        this.setState((prevState) => ({
          showCPassword: !prevState.showCPassword,
        }));
      };

    submithandler = () => {
        // if (this.state.email && this.state.cemail && this.state.pass && this.state.cpass != "") {
            
        //     if (this.state.email === this.state.cemail) {
        //         if (this.state.pass === this.state.cpass) {
        //             this.props.navigation.navigate('Home',{
        //                 email: this.state.email,
        //                 cemail: this.state.cemail,
        //                 pass: this.state.pass,
        //                 cpass: this.state.cpass,
        //             });            
        //         } else {
        //             Alert.alert('Mis-match', 'Passwords Fields value Mis-match', [
        //                 {
        //                   text: 'Cancel',
        //                   style: 'cancel',
        //                 },
        //                 {text: 'OK'},
        //               ]);
        //         }
        //     } else{
        //         Alert.alert('Mis-match', 'Email Fields value Mis-match', [
        //             {
        //               text: 'Cancel',
        //               style: 'cancel',
        //             },
        //             {text: 'OK'},
        //           ]);
        //     }
        // } else {
        //     Alert.alert('Missing', 'Fill Out all fields Properly', [
        //         {
        //           text: 'Cancel',
        //           style: 'cancel',
        //         },
        //         {text: 'OK'},
        //       ]);
        // }

        this.props.navigation.navigate('Home')
        
        // console.log("called after navigation");
    };


    render() {
       
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../Src/assets/bg.jpg')} style={styles.image} >
                <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"} keyboardVerticalOffset={50}>
                <View style={styles.cardoutside}>

                    <View style={styles.card}>
                        <Text style={styles.cardtitle}>Sign-Up </Text>
                        <View style={styles.inputcontainer}>
                            <Text style={styles.formtext}>Email</Text>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={(email) => this.setState({ email })}
                                value={this.state.email}
                                keyboardType="email-address"
                                placeholderTextColor={"#000"}
                                placeholder="Enter your email" />

                        </View>
                        <View style={styles.inputcontainer}>
                            <Text style={styles.formtext} >Confirm Email</Text>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={(cemail) =>this.setState({ cemail })}  
                                value={this.state.cemail}
                                keyboardType="email-address"
                                placeholderTextColor={"#000"}
                                placeholder="Confirm your email" />

                        </View>
                         <View style={styles.inputcontainer}>
                            <Text style={styles.formtext}>Password</Text>
                            <TextInput
                                style={[styles.textinput]}
                                onChangeText={(pass) =>this.setState({ pass })}
                                value={this.state.pass}
                                secureTextEntry={!this.state.showPassword}
                                maxLength={8}
                                placeholderTextColor={"#000"}
                                placeholder="Enter Password" />
                            <TouchableOpacity    
                                style={[styles.toggleButton,{position:'absolute',right:10}]}
                                onPress={this.togglePasswordVisibility}>
                                         <Entypo size={25} color={'#000'} name={this.state.showPassword ? 'eye' : 'eye-with-line'} />                               
                            </TouchableOpacity>
                          
                        </View>
                        <View style={styles.inputcontainer}>
                            <Text style={styles.formtext}>Confirm Password</Text>
                            <TextInput
                                style={styles.textinput}
                                onChangeText={(cpass) =>this.setState({ cpass })}
                                value={this.state.cpass} 
                                secureTextEntry={!this.state.showCPassword}
                                maxLength={8}
                                placeholderTextColor={"#000"}
                                placeholder="Confirm Password" />
                            <TouchableOpacity    
                                style={[styles.toggleButton,{position:'absolute',right:10}]}
                                onPress={this.toggleRePasswordVisibility}>
                                         <Entypo size={25} color={'#000'} name={this.state.showCPassword ? 'eye' : 'eye-with-line'} />                               
                            </TouchableOpacity>

                        </View>
                        <TouchableOpacity onPress={() =>this.submithandler()} style={styles.submitstyle}>
                            <Text style={styles.buttontext}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </KeyboardAvoidingView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff'
    },
      image: {
        flex: 1,
        justifyContent: 'center',
  },
    textinput: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        marginHorizontal: 20,
        width: '70%',
        backgroundColor: '#fff'
    },
    inputcontainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    cardoutside: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        backgroundColor: '#f50e4e',
        borderRadius: 8,
        padding: 10,
        width: "80%",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 6,
        borderWidth:1,
        borderColor:'#fff'
    },
    submitstyle: {
        marginTop:10,
        width: '100%',
        borderRadius: 5,
        backgroundColor: '#000',
    },
    buttontext: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    formtext:{ 
        width: '25%', 
        color: '#fff', 
        fontSize: 16, 
        // fontFamily:'DancingScript-VariableFont_wght'
        fontWeight: 'bold' 
    },
    cardtitle:{
        color: '#ffff',
        fontSize:27,
        fontFamily: 'YoungSerif-Regular',
        textAlign:'center',
        // fontWeight:'bold',
        margin:5
        
    },
    eyecontainer:{
        // // flexDirection: 'row',
        // alignItems: 'center',
        // width:'',
    },
    toggleButton: {
        // padding: 10,
        // backgroundColor: '#008',
      },
      toggleButtonText: {
        fontWeight: 'bold',
      },

})


export default Signup;









  //------------------Function with a datatype defined --------------------
    // demo(): string {
    //     return "Hello TypeScript Learner"
    // }


    //---------------function with datatype with one variable, a Optional one---------------
    //     function demo1(a: number, b?: number): number {
    //     return b ? a + b : a;

    // }
    // console.log(demo1(100));



    //----------------- class of typeScript--------------------------
    // class Home1 {
    //     name:string = "SuryaDev"
    //     constructor(name: string){
    //         this.name=name
    //     }

    //     getName():string
    //     {

    //         return this.name
    //     }
    // }
    // let a1 = new Home1('Dhruv');
    // console.warn(a1.getName()); 



    // ----------------------Inheritance of typeScript----------------------
    // class Parent {
    //     name:string ;
    //     setName(name) : void
    //     {
    //         this.name = name
    //     }
    // }    

    // class Child extends Parent {
    //         getName():string
    //         {
    //             return this.name
    //         }
    //     }

    // let c1 = new Child();
    // c1.setName('John'); 
    // console.log(c1.getName()); 


    //Generics
    // function Identity<T>(arg:T): T{
    //     return arg;
    // }

    // let output = Identity<string>('Hello')