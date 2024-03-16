import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colors from '../Utils/Colors';

const ServiceProviderSignIn = ({ toggleScreen }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.signinContainer}>
                <View style={styles.togglebuttons}>
                    <TouchableOpacity style={styles.btn1} title="ServiceProvider">ServiceProvider</TouchableOpacity>
                    <TouchableOpacity style={styles.btn2} title="Customer" onPress={toggleScreen}>Customer</TouchableOpacity>
                </View>
                <Image
                    source={require('../assets/signup.png')}
                    style={styles.signinImage}
                />
                <Text style={styles.signInHeading}>Never run out of clients</Text>
                <Text style={styles.signInText}>Booksy for beauticians and stylist gives you exposure and helps you manage appointment</Text>
                <View style={styles.Btns}>
                    <TouchableOpacity style={styles.signupBtn}>Sign Up</TouchableOpacity>
                    <TouchableOpacity style={styles.LoginBtn}>Login</TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
        </View>
    );
};

const CustomerSignIn = ({ toggleScreen }) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.signinContainer}>
                <View style={styles.togglebuttons}>
                    <TouchableOpacity style={styles.btn2} title="ServiceProvider" onPress={toggleScreen}>ServiceProvider</TouchableOpacity>
                    <TouchableOpacity style={styles.btn1} title="Customer">Customer</TouchableOpacity>
                </View>
                <Image
                    source={require('../assets/signup.png')}
                    style={styles.signinImage}
                />
                <Text style={styles.signInHeading}>Find stylists wherever you are</Text>
                <Text style={styles.signInText}>Booksy for beauticians and stylist gives you exposure and helps you manage appointment</Text>
                <View style={styles.Btns}>
                    <TouchableOpacity style={styles.signupBtn}>Sign Up</TouchableOpacity>
                    <TouchableOpacity style={styles.LoginBtn}>Login</TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
        </View>
        
    );
};

const Signing = () => {
    const [currentScreen, setCurrentScreen] = useState('ServiceProviderSignIn');

    const toggleScreen = () => {
        setCurrentScreen(currentScreen === 'ServiceProviderSignIn' ? 'CustomerSignIn' : 'ServiceProviderSignIn');
    };

    return (
        <View style={{ flex: 1 }}>
            {currentScreen === 'ServiceProviderSignIn' ? (
                <ServiceProviderSignIn toggleScreen={toggleScreen} />
            ) : (
                <CustomerSignIn toggleScreen={toggleScreen} />
            )}
        </View>
    );
};

export default Signing;

const styles = StyleSheet.create({
    signinImage: {
        marginBottom: 32,
    },
    signinContainer: {
        backgroundColor: Colors.OFFWHITE,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    signInHeading: {
        fontFamily: 'PlayfairDisplay-Bold',
        fontWeight: 700,
        fontSize: 40,
        textAlign: "center",
    },
    signInText: {
        fontFamily: 'OpenSans',
        fontWeight: 400,
        fontSize: 14,
        textAlign: "center",
        width: 241,
        height: 57,
        color: Colors.DARKGREY,
        marginTop: 17,
        marginBottom: 32,
    },
    signupBtn: {
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
    LoginBtn: {
        backgroundColor: 'none',
        fontFamily: "Inter",
        color: Colors.BLACK,
        padding: 17,
        width: "100%",
        textAlign: "center",
        fontWeight: 700,
        fontSize: 16,
        borderRadius: 24,
        borderWidth: 2,
        borderColor: Colors.WHITE,
    },
    Btns: {
        width: "100%",
        paddingLeft: 25,
        paddingRight: 25,
    },
    togglebuttons:{
        borderRadius: 24,
        display: "flex",
        flexDirection: "row",
        marginBottom: 12,
        backgroundColor: Colors.WHITE,
    },
    btn1:{
        backgroundColor: Colors.GREY,
        color: Colors.WHITE,
        padding: 10,
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 15,
        borderRadius: 16,
        opacity: "50%",
    },
    btn2:{
        backgroundColor: Colors.WHITE,
        color: Colors.GRAY,
        padding: 10,
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 15,
        borderRadius: 16,
    }
});