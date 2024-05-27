import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useNavigation} from '@react-navigation/native';

const InitialScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    SplashScreen.hide();
    // setTimeout(() => {
    navigation.navigate('Mainscreen');
    // }, 1000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#3085fe'} />
      <Image
        style={styles.logo}
        source={require('../Assets/splash_screen.png')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
});
export default InitialScreen;
