import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Modal, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import { AntDesign } from '@expo/vector-icons';
import Signing from './SignIn';

const CustomerSignIn = ({ toggleScreen }) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.signinContainer}>
                <View style={styles.togglebuttons}>
                    <TouchableOpacity style={styles.btn2} title="ServiceProvider" onPress={toggleScreen}>ServiceProvider</TouchableOpacity>
                    <TouchableOpacity style={styles.btn1} title="Customer">Customer</TouchableOpacity>
                </View>
                <Image
                    source={require('../../assets/signup.png')}
                    style={styles.signinImage}
                />
                <Text style={styles.signInHeading}>Find stylists wherever you are</Text>
                <Text style={styles.signInText}>Booksy for beauticians and stylist gives you exposure and helps you manage appointment</Text>
                <View style={styles.Btns}>
                    <TouchableOpacity style={styles.signupBtn} onPress={() => setModalVisible(true)}>Sign Up</TouchableOpacity>
                    <TouchableOpacity style={styles.LoginBtn}>Login</TouchableOpacity>
                </View>
                <StatusBar style="auto" />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    // Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalView}>
                            <Image
                                source={require('../../assets/CloseButton.png')} onClick={() => setModalVisible(!modalVisible)} style={styles.closeBtn}
                                // style={{ width: 20, height: 20, marginRight: 10 }}
                            />
                            {/* <AntDesign name="closecircleo" size={40} color={Colors.LIGHTGRAY} onPress={() => setModalVisible(!modalVisible)} style={styles.closeBtn} /> */}
                            <View style={styles.formView}>
                                <Text style={styles.modalHeading}>Create Account</Text>
                                <Text style={styles.formLabel}>Email</Text>
                                <TextInput placeholder='Email Address' style={styles.formTextInput} />
                                <Text style={styles.formLabel}>Password</Text>
                                <TextInput placeholder='Password' style={styles.formTextInput} secureTextEntry={!passwordVisible} />
                                <TouchableOpacity
                                    onPress={togglePasswordVisibility}
                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                >
                                    {/* <Image
                                        source={passwordVisible ? require('./hidden_icon.png') : require('./visible_icon.png')}
                                        style={{ width: 20, height: 20, marginRight: 10 }}
                                    /> */}
                                </TouchableOpacity>
                                <Text style={styles.formLabel}>Confirm Password</Text>
                                <TextInput placeholder='Confirm Password' style={styles.formTextInput} secureTextEntry={!passwordVisible} />
                            </View>
                            <TouchableOpacity style={styles.signupBtn}>Sign Up</TouchableOpacity>
                            <View style={styles.orContainer}>
                                <View style={styles.line} />
                                <Text style={styles.orText}>or</Text>
                                <View style={styles.line} />
                            </View>
                            <TouchableOpacity style={styles.googleSignupBtn}>Continue with Google</TouchableOpacity>
                            <View style={styles.loginAlt}>
                                <Text>Already Have An Account? Login</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>

    );
};

export default CustomerSignIn;

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
    togglebuttons: {
        borderRadius: 24,
        display: "flex",
        flexDirection: "row",
        marginBottom: 12,
        backgroundColor: Colors.WHITE,
    },
    btn1: {
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
    btn2: {
        backgroundColor: Colors.WHITE,
        color: Colors.GRAY,
        padding: 10,
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: 700,
        lineHeight: 15,
        borderRadius: 16,
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // margin: 20,
        marginBottom: 0,
    },
    modalContent: {
        // backgroundColor: 'white',
        backgroundColor: Colors.WHITE,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        // paddingLeft: 16,
        // paddingRight: 16,
        // padding: 35,
        // alignItems: 'center',
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
    },
    modalHeading: {
        marginBottom: 15,
        // marginTop: 83,
        // textAlign: 'center',
        fontSize: 28,
        fontFamily: 'PlayfairDisplay-Bold',
        fontWeight: 700,
        marginBottom: 20,
    },
    modalView: {
        marginLeft: 16,
        marginRight: 16,
    },
    closeBtn: {
        marginTop: 19,
        marginBottom: 14,
        width: 40,
        height: 40,
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
    formView: {
        marginBottom: 32,
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
    googleSignupBtn: {
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
    loginAlt: {
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 61,
    }
});