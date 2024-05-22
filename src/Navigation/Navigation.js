import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../Screens/InitialScreen';
import LoginScreen from '../Screens/LoginScreen';
import Register from '../Screens/Register';
import Mainscreen from '../Screens/Mainscreen';
import ForgotPassword from '../Screens/Forgot/ForgotPassword';
import VerifyCode from '../Screens/Forgot/VerifyCode';
import NewPassword from '../Screens/Forgot/NewPassword';
const Stack = createNativeStackNavigator();

function NavigationComponents() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='InitialScreen'>
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="Mainscreen" component={Mainscreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationComponents;
