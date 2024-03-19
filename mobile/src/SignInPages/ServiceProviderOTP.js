import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Colors from '../../Utils/Colors';

const ServiceProviderOTP = () => {
    const [otp, setOTP] = useState(['', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleOTPChange = (index, value) => {
        if (value.length <= 1 && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
        const newOTP = [...otp];
        newOTP[index] = value;
        setOTP(newOTP);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.OTPHeading}>
                Verify Your Email
            </Text>
            <Text style={styles.OTPText}>
                please check your email...
            </Text>
            <Text style={styles.OTP}>
                OTP
            </Text>
            <View style={styles.OTPView}>
                {Array.from({ length: 5 }).map((_, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
                        onChangeText={(value) => handleOTPChange(index, value)}
                        value={otp[index]}
                        maxLength={1}
                        keyboardType="numeric"
                        ref={(ref) => (inputRefs.current[index] = ref)}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        paddingLeft: 16,
        paddingRight: 16,
        // justifyContent: 'space-between',
        // paddingHorizontal: 20,
        // marginTop: 50,
    },
    input: {
        height: 51,
        width: 48,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: Colors.LIGHTGRAY,
        textAlign: 'center',
        fontSize: 20,
        marginRight: 8,
    },
    OTPView: {
        display: 'flex',
        flexDirection: 'row',
    },
    OTPHeading: {
        fontSize: 32,
        fontFamily: 'PlayfairDisplay-Bold',
        fontWeight: 700,
        marginBottom: 10,
        marginTop: 108,
    },
    OTPText: {
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 400,
        marginBottom: 64,
        opacity: '50%',
        // marginTop: 108,
    },
    OTP:{
        fontSize: 16,
        fontFamily: 'Inter',
        fontWeight: 400,
        marginBottom: 8,
        opacity: '50%',
    }
});

export default ServiceProviderOTP;