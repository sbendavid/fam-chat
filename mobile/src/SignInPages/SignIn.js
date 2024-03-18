import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Modal, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Colors from '../../Utils/Colors';
import { AntDesign } from '@expo/vector-icons';
import CustomerSignIn from './CustomerSignIn';
import ServiceProviderSignIn from './ServiceProviderSignIn';

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