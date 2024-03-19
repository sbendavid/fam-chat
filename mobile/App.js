import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Splash from './src/Splash';
import { useFonts } from 'expo-font';
import SignIn from './src/SignInPages/SignIn';
import SPLogin from './src/SPLogin';
import Login from './src/SignInPages/Login';
import CustomerLogin from './src/SignInPages/CustomerLogin';
import ServiceProviderLogin from './src/SignInPages/ServiceProviderLogin';
import CustomerOTP from './src/SignInPages/CustomerOTP';
import ServiceProviderOTP from './src/SignInPages/ServiceProviderOTP';
import CustomerForgotPassword from './src/SignInPages/CustomerForgotPassword';
import ServiceProviderForgotPassword from './src/SignInPages/ServiceProviderForgotPassword';


export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded, fontError] = useFonts({
    'PlayfairDisplay': require('./assets/Fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf'),
    'PlayfairDisplay-Bold': require('./assets/Fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf'),
    'OpenSans': require('./assets/Fonts/Open_Sans/static/OpenSans-Regular.ttf'),
    'OpenSans-Bold': require('./assets/Fonts/Open_Sans/static/OpenSans-Bold.ttf'),
    'Inter': require('./assets/Fonts/Inter/static/Inter-Regular.ttf'),
    'Inter-Bold': require('./assets/Fonts/Inter/static/Inter-Bold.ttf'),
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name='SPLogin' component={SPLogin} />
        <Stack.Screen name='CustomerLogin' component={CustomerLogin} />
        <Stack.Screen name='ServiceProviderLogin' component={ServiceProviderLogin} />
        <Stack.Screen name='CustomerOTP' component={CustomerOTP} />
        <Stack.Screen name='ServiceProviderOTP' component={ServiceProviderOTP} />
        <Stack.Screen name='CustomerForgotPassword' component={CustomerForgotPassword} />
        <Stack.Screen name='ServiceProviderForgotPassword' component={ServiceProviderForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
