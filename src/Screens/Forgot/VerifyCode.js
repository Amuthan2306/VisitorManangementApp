import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';


export default function VerifyCode() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon
        name="arrow-back-ios-new"
        size={30}
        color={'#000'}
        style={{marginTop: 20, marginLeft: 10}}
      />
      </TouchableOpacity>
      <Text style={styles.forgot}>Enter Verification Code</Text>
      <Text style={styles.text}>
        We have send the code verification to your moblie{'\n'}number
      </Text>
      <Image source={require('../../Assets/verify.jpg')} style={styles.logo} />

      <TouchableOpacity onPress={() => navigation.navigate('NewPassword')}
        style={{
          height: 50,
          width: '90%',
          alignSelf: 'center',
          backgroundColor: '#3085fe',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 30,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
          Verify
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  forgot: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 15,
    marginTop: 25,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: 'grey',
    marginLeft: 15,
    marginTop: 5,
  },
  logo: {
    height: 380,
    width: 380,
    alignSelf: 'center',
    marginTop: 20,
  },
});
