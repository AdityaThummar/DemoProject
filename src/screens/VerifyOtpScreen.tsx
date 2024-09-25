import {StyleSheet, Text, TextInput, TextProps, View} from 'react-native';
import React from 'react';

const BaseText = ({children, ...props}: TextProps) => {
  return (
    <Text {...props} style={{color: 'black', ...props?.style}}>
      {children}
    </Text>
  );
};

const OTPInputView = (
  <TextInput
    style={{
      borderRadius: 10,
      height: 50,
      width: 50,
      borderWidth: 1,
      borderColor: 'black',
      fontSize: 24,
      textAlign: 'center',
      color: 'black',
      textAlignVertical: 'center',
      paddingVertical: 0,
    }}
    keyboardType="number-pad"
    maxLength={1}
    placeholder="-"
  />
);

const VerifyOtpScreen = () => {
  return (
    <View style={{backgroundColor: 'white', flex: 1, paddingHorizontal: '7%'}}>
      <View
        style={{
          height: 4,
          gap: '25%',
          flexDirection: 'row',
          //   marginHorizontal: '7%',
          marginVertical: '7%',
        }}>
        <View style={{flex: 1, backgroundColor: '#9EA059', borderRadius: 10}} />
        <View style={{flex: 1, backgroundColor: '#9EA059', borderRadius: 10}} />
        <View style={{flex: 1, backgroundColor: '#EDECEF', borderRadius: 10}} />
      </View>
      <View style={{gap: '55%', marginTop: '5%'}}>
        <BaseText style={{fontSize: 32, fontWeight: '700'}}>
          Verify you
        </BaseText>
        <BaseText style={{color: '#9397A0', fontSize: 14}}>
          We sent you a 4-digit code to your email.
        </BaseText>
        <View
          style={{
            flexDirection: 'row',
            gap: '80%',
            marginTop: '2%',
          }}>
          {OTPInputView}
          {OTPInputView}
          {OTPInputView}
          {OTPInputView}
        </View>
      </View>
      <BaseText style={{fontSize: 15, marginTop: '35%', alignSelf: 'center'}}>
        Re-send code in <BaseText style={{color: '#9EA059'}}>02:00</BaseText>
      </BaseText>
    </View>
  );
};

export default VerifyOtpScreen;

const styles = StyleSheet.create({});
