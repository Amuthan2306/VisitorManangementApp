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
import {RadioButton} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const [value, setValue] = React.useState('first');
  const [check, setCheck] = React.useState(true);
  const [check1, setCheck1] = React.useState(false);
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
      <Text style={styles.forgot}>Forgot Password</Text>
      <Text style={styles.text}>
        Select which contact details should we use to reset {'\n'}your password
      </Text>
      <Image source={require('../../Assets/forgot.png')} style={styles.logo} />



      <TouchableOpacity
        onPress={() => {
          setCheck(true), setCheck1(false) , setValue("first")
        }}
        style={[
          styles.maliview,
          {borderColor: check ? '#3085fe' : 'lightgrey'},
        ]}>
        <View
          style={[
            styles.iconview,
            {backgroundColor: check ? '#3085fe' : 'lightgrey'},
          ]}>
          <Icon name={'mail'} size={30} color={check ? '#fff' : 'grey'} />
        </View>

        <View style={styles.phone}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            Email
          </Text>
          <Text style={{color: '#000'}}>colan@gmail.com</Text>
        </View>
        <RadioButton.Group
          onValueChange={newValue => (setValue(newValue),  setCheck(true), setCheck1(false))}
          value={value}>
          <View style={styles.radioOption}>
            <RadioButton value="first" color="#3085fe" uncheckedColor="grey" />
          </View>
        </RadioButton.Group>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={() => {
          setCheck(false), setCheck1(true), setValue("second")
        }}
        style={[
          styles.maliview,
          {borderColor: check1 ? '#3085fe' : 'lightgrey'},
        ]}>
        <View
          style={[
            styles.iconview,
            {backgroundColor: check1 ? '#3085fe' : 'lightgrey'},
          ]}>
          <Icon name={'phone'} size={30} color={check1 ? '#fff' : 'grey'} />
        </View>

        <View style={styles.phone}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
            PhoneNumber
          </Text>
          <Text style={{color: '#000'}}>+91 1234567890</Text>
        </View>
        <RadioButton.Group
          onValueChange={newValue => (setValue(newValue), setCheck(false), setCheck1(true))}
          value={value}>
          <View style={styles.radioOption}>
            <RadioButton value="second" color="#3085fe" uncheckedColor="grey" />
          </View>
        </RadioButton.Group>
      </TouchableOpacity>


      <TouchableOpacity onPress={() => navigation.navigate('VerifyCode')}
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
          Continue
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
    height: 300,
    width: 300,
    alignSelf: 'center',
    marginTop: 20,
  },
  maliview: {
    height: 70,
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 15,
    flexDirection: 'row',
  },
  phone: {
    width: '70%',
    // borderWidth: 1,
    marginLeft: 10,
  },
  iconview: {
    height: 40,
    width: 40,
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
