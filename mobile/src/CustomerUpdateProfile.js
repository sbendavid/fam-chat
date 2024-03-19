import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Modal, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colors from '../Utils/Colors';

const CustomerUpdateProfile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.CustomerUpdateProfileView}>
                <Text style={styles.CustomerUpdateProfileHeading}>
                    Update Profile
                </Text>
                <View style={styles.formView}>
                    <View style={styles.UpdateProfilePicture}>
                        <Image
                            source={require('../assets/UpdateProfile.png')}
                            style={styles.UpdateProfilePictureImage}
                        />
                        <Text style={styles.UpdateProfilePictureText}>
                            Add a profile photo
                        </Text>
                    </View>
                    <Text style={styles.formLabel}>Name</Text>
                    <TextInput style={styles.formTextInput} />
                    <Text style={styles.formLabel}>Phone Number</Text>
                    <TextInput style={styles.formTextInput} />
                    <Text style={styles.formLabel}>Skin type (Optional)</Text>
                    <TextInput style={styles.formTextInput} />
                    <Text style={styles.formLabel}>Hair type (Optional)</Text>
                    <TextInput style={styles.formTextInput} />
                    <View style={styles.CustomerUpdateProfileButtons}>
                        <TouchableOpacity style={styles.CustomerUpdateProfileBtn}>UpdateProfile</TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CustomerUpdateProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.OFFWHITE,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    CustomerUpdateProfileView: {
        marginTop: 108,
        marginLeft: 16,
        marginRight: 16,
    },
    CustomerUpdateProfileHeading: {
        fontSize: 28,
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
        opacity: '50%',
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
    // CustomerUpdateProfileBtn: {
    //     fontFamily: "Inter",
    //     color: Colors.BLACK,
    //     padding: 17,
    //     width: "100%",
    //     textAlign: "center",
    //     fontWeight: 700,
    //     fontSize: 16,
    //     borderRadius: 24,
    //     backgroundColor: Colors.GRAY2,
    //     marginBottom: 24,
    // },
    CustomerUpdateProfileBtn: {
        backgroundColor: Colors.BLACK,
        fontFamily: "Inter",
        color: Colors.WHITE,
        padding: 17,
        width: "100%",
        textAlign: "center",
        fontWeight: 700,
        fontSize: 16,
        borderRadius: 24,
        marginTop: 24,
    },
    UpdateProfilePictureText: {
        fontSize: 16,
        fontFamily: 'Inter',
        opacity: '50%',
        color: Colors.BLACK,
    },
    UpdateProfilePictureImage: {
        marginRight: 16,
    },
    UpdateProfilePicture: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 24,
    },
});