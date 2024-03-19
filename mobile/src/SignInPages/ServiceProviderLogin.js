import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Modal, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';

const ServiceProviderLogin = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    return (
        <View style={styles.container}>
            <View style={styles.LoginView}>
                <Text style={styles.LoginHeading}>
                    Welcome Back
                </Text>
                <View style={styles.formView}>
                    <Text style={styles.formLabel}>Email</Text>
                    <TextInput placeholder='Email Address' style={styles.formTextInput} />
                    <Text style={styles.formLabel} >Password</Text>
                    <TextInput placeholder='Password' style={styles.passwordformTextInput} secureTextEntry={!passwordVisible} />
                    <TouchableOpacity
                        onPress={togglePasswordVisibility}
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                    </TouchableOpacity>
                    <Text style={styles.ForgotPassword}>
                        Forgot Password?
                    </Text>
                    <View style={styles.LoginButtons}>
                        <TouchableOpacity style={styles.LoginBtn}>Login</TouchableOpacity>
                        <View style={styles.orContainer}>
                            <View style={styles.line} />
                            <Text style={styles.orText}>or</Text>
                            <View style={styles.line} />
                        </View>
                        <TouchableOpacity style={styles.googleLoginBtn}>Login with Google</TouchableOpacity>
                        <View style={styles.SignUpAlt}>
                            <Text style={styles.signUpAltText}>Already Have An Account? <Text style={styles.bold}>Signup</Text></Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.OFFWHITE,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    LoginView: {
        marginTop: 108,
        marginLeft: 16,
        marginRight: 16,
    },
    LoginHeading: {
        fontSize: 32,
        fontFamily: 'PlayfairDisplay-Bold',
        fontWeight: 700,
        marginBottom: 24,
    },
    formLabel: {
        fontSize: 16,
        fontWeight: 400,
        // marginTop: 20,
        fontFamily: 'Inter',
        marginBottom: 8,
        color: Colors.BLACK,
    },
    formTextInput: {
        width: '100%',
        borderRadius: 8,
        padding: 15,
        borderWidth: 1,
        fontFamily: 'Inter',
        borderBlockColor: Colors.LIGHTGRAY,
        color: Colors.BLACK,
        marginBottom: 16,
    },
    passwordformTextInput: {
        width: '100%',
        borderRadius: 8,
        padding: 15,
        borderWidth: 1,
        fontFamily: 'Inter',
        borderBlockColor: Colors.LIGHTGRAY,
        color: Colors.BLACK,
        marginBottom: 8,
    },
    ForgotPassword: {
        fontSize: 12,
        fontFamily: 'Inter',
        fontWeight: 400,
        opacity: ' 50%',
        color: Colors.BLACK,
        marginBottom: 212,
        // borderBottomWidth: 1,
        // borderBottomColor: Colors.BLACK,
        // width: 'auto',
    },
    orContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 16,
    },
    orText: {
        marginLeft: 29,
        marginRight: 29,
        fontSize: 12,
        fontFamily: 'Inter',
        color: Colors.BLACK,
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: 69,
        color: Colors.BLACK
    },
    googleLoginBtn: {
        fontFamily: "Inter",
        color: Colors.BLACK,
        padding: 17,
        width: "100%",
        textAlign: "center",
        fontWeight: 700,
        fontSize: 16,
        borderRadius: 24,
        backgroundColor: Colors.GRAY2,
        marginBottom: 24,
    },
    LoginBtn: {
        backgroundColor: Colors.BLACK,
        fontFamily: "Inter",
        color: Colors.WHITE,
        padding: 17,
        width: "100%",
        textAlign: "center",
        fontWeight: 700,
        fontSize: 16,
        borderRadius: 24,
        marginBottom: 16,
    },
    SignUpAlt: {
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 61,
    },
    signUpAltText:{
        fontFamily: 'Inter',
        fontSize: 12,
        fontWeight: 400,
    },
    bold: {
        fontWeight: 700,
        borderBlockEndColor: Colors.BLACK,
        borderBottomWidth: 1,
    }
});
export default ServiceProviderLogin;