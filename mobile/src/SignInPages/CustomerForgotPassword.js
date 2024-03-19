import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Image, Modal, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';

const CustomerForgotPassword = () => {
    return (
        <View style={styles.container}>
            <View style={styles.ForgotPasswordView}>
                <Text style={styles.resetPasswordHeading}>
                    Reset Password
                </Text>
                <View style={styles.formView}>
                    <Text style={styles.formLabel} >Enter Your Email</Text>
                    <TextInput style={styles.forgotpasswordTextInput}/>
                    <TouchableOpacity style={styles.ForgotPasswordBtn}>Send Reset Link</TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.OFFWHITE,
    },
    ForgotPasswordView: {
        marginTop: 108,
        marginLeft: 16,
        marginRight: 16,
    },
    resetPasswordHeading: {
        fontSize: 32,
        fontFamily: 'PlayfairDisplay-Bold',
        fontWeight: 700,
        marginBottom: 24,
    },
    formLabel: {
        opacity: '50%',
        fontSize: 16,
        fontWeight: 400,
        // marginTop: 20,
        fontFamily: 'Inter',
        marginBottom: 8,
        color: Colors.BLACK,
    },
    forgotpasswordTextInput: {
        width: '100%',
        borderRadius: 8,
        padding: 15,
        borderWidth: 1,
        fontFamily: 'Inter',
        borderBlockColor: Colors.LIGHTGRAY,
        color: Colors.BLACK,
        marginBottom: 48,
    },
    ForgotPasswordBtn: {
        fontFamily: "Inter",
        color: Colors.WHITE,
        padding: 17,
        width: "100%",
        textAlign: "center",
        fontWeight: 400,
        fontSize: 16,
        borderRadius: 24,
        backgroundColor: Colors.BLACK,
    },
});
export default CustomerForgotPassword;