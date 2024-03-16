import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect } from 'react';
import Colors from '../Utils/Colors';
// import * as Animatable from 'react-native-animatable';

export default function Splash({ navigation }) {
    useEffect(()=> {
        setTimeout(()=> {
            navigation.navigate('SignIn')
        }, 2500)
    })
    return (
        <View style={styles.splashContainer}>
            <Image
                source={require('../assets/Splash1.png')} style={styles.splashImage}
            />
            <Text style={styles.splashText}>Welcome to App <br />Name</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    splashContainer: {
        backgroundColor: Colors.OFFWHITE,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
    },
    splashText: {
        color: Colors.BLACK,
        fontSize: 40,
        fontFamily: 'PlayfairDisplay-Bold',
        fontWeight: 700,
        lineHeight: 50,
        textAlign: "center",
    },
    splashImage: {
        width: 134,
        height: 134,
        marginBottom: 66,
        // marginTop: 190,
    }
});
