import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, BackHandler } from 'react-native';
import { COLORS } from '../constants/color';
import OTPTextView from 'react-native-otp-textinput'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import PhoneInput from 'react-native-phone-number-input';

interface Chat {
    otpAdd:string
    phoneNumber: string, 
    value: string 
}
class ChatWithUs extends Component<{ navigation: any }, Chat>{
    constructor(props: any) {

        super(props);
        this.state = {
            otpAdd: '',
            phoneNumber: '', 
            value: '' 
        }
        this.forceUpdate()
        
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
    otpInputRef: any = React.createRef();
    phoneInput: any = React.createRef();
    
    clearOTPInput = () => {
        if (this.otpInputRef) {
          this.otpInputRef.clear();
          this.setState({ otpAdd: '' }); 
        }
      };
    
      clearPhoneInput = () => {
        console.log("phone valaueeee",this.state.phoneNumber,this.state.value);
        
        this.setState({ phoneNumber: '', value: '' }, () => {
            
            // After updating state, set the value of PhoneInput to empty string
            // this.phoneInput.current?.handleOnChangeText('');
            console.log("Phone-Number......",this.state.phoneNumber,this.state.value);
            
          });
      };
    

    render() {
        return (
            <View>
            <OTPTextView
              ref={e => this.otpInputRef = e}
              containerStyle={{ marginVertical: 20, width: "100%" }}
              textInputStyle={{
                borderColor: "gray",
                borderWidth: 1,
                height: hp(6),
                width: wp(9),
                borderRadius: 8,
              }}
              handleTextChange={(otpAdd:any) => this.setState({ otpAdd: otpAdd })}
              defaultValue={this.state.otpAdd}
              keyboardType="numeric"
              inputCount={6}
              tintColor={"red"}
              offTintColor="gray"
            />
            {/* Button to clear OTP input */}
            <TouchableOpacity onPress={this.clearOTPInput}>
              <Text>Clear OTP</Text>
            </TouchableOpacity>


            <PhoneInput
          ref={this.phoneInput}
          defaultValue={this.state.value}
          defaultCode="US"
          layout="first"
          onChangeText={(number) => {
            console.log("Phone Number OnChange Text------>>>>>>>", number);
            this.setState({ phoneNumber: number });
          }}
          onChangeFormattedText={(text) => {
            this.setState({ value: text });
          }}
          withDarkTheme={false}
          withShadow={false}
          autoFocus={false}
          placeholder="Enter your phone number"
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={styles.phoneInputTextContainer}
          textInputStyle={styles.phoneInputTextInput}
        />
        {/* Button to clear PhoneInput value */}
        <TouchableOpacity onPress={()=>this.clearPhoneInput()}>
          <Text>Clear PhoneInput</Text>
        </TouchableOpacity>
          </View>
        )
    }



}

const styles = StyleSheet.create({
    phoneInputContainer: {
        width: '100%',
        // height: hp(52),
        backgroundColor: 'transparent',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#090909'
    },
    phoneInputTextInput: {
        fontSize: 16,
        color: 'black',
        // height: hp(20),
        width: '100%',
        // marginTop:hp(2),
        paddingHorizontal: 10,
    },
    phoneInputTextContainer: {
        borderRadius: 8
    },
})

export default ChatWithUs





  

