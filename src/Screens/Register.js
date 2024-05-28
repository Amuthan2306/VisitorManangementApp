import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput, Checkbox} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppHeader from '../Global/Appheader';
export default function Register() {
  const [firstname, setFirstname] = React.useState('');
  const [lastname, setLastname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [confirmpassword, setconfirmPassword] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showeyePassword1, setShoweyePassword1] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <AppHeader title={'Register'} />
        <View
          style={{
            height: 200,
            width: '95%',
            // alignSelf: 'center',
            margin: 10,
            // alignItems:'center',
            // justifyContent: 'center',
            // borderWidth: 1,
          }}>
          <Image
            source={require('../Assets/loginimg.png')}
            style={{height: 100, width: 100, marginTop: 20}}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: '#000',
              marginTop: 10,
            }}>
            Welcome 👋
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'grey',
              marginTop: 10,
            }}>
            Hello there,login to continue
          </Text>
        </View>
        <View
          style={{
            // margin: 10,
            height: 500,
            // marginTop: 10,
            // borderWidth: 1,
            width: '100%',
            // alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            label="First Name"
            // placeholder="Email"
            value={firstname}
            style={styles.input}
            mode="outlined"
            onChangeText={text => setFirstname(text)}
            activeOutlineColor={'#3085fe'}
          />
          <TextInput
            label="Last Name"
            // placeholder="Email"
            style={styles.input}
            value={lastname}
            mode="outlined"
            onChangeText={text => setLastname(text)}
            activeOutlineColor={'#3085fe'}
          />
          <TextInput
            label="Email"
            // placeholder="Email"
            style={styles.input}
            value={email}
            mode="outlined"
            onChangeText={text => setEmail(text)}
            activeOutlineColor={'#3085fe'}
          />
          <TextInput
            label="Password"
            secureTextEntry={!showPassword}
            style={styles.input}
            mode="outlined"
            value={Password}
            onChangeText={text => setPassword(text)}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye' : 'eye-off'}
                onPress={() => setShowPassword(!showPassword)}
                color={'#3085fe'}
              />
            }
            activeOutlineColor={'#3085fe'}
          />
          <TextInput
            label="Confirm Password"
            secureTextEntry={!showeyePassword1}
            style={styles.input}
            mode="outlined"
            value={confirmpassword}
            onChangeText={text => setconfirmPassword(text)}
            right={
              <TextInput.Icon
                icon={showeyePassword1 ? 'eye' : 'eye-off'}
                onPress={() => setShoweyePassword1(!showeyePassword1)}
                color={'#3085fe'}
              />
            }
            activeOutlineColor={'#3085fe'}
          />
          <View style={{flexDirection: 'row', borderWidth: 0,width:'96%',marginLeft:2.5}}>
            <Checkbox.Android
              status={isChecked ? 'checked' : 'unchecked'}
              onPress={() => setIsChecked(!isChecked)}
              color="#3085fe"
              style={{height: 20, width: 20}}
            />
            <Text style={{fontSize: 15, fontWeight: '400', color: '#000'}}>
              I agree to the
              <Text style={{fontSize: 15, fontWeight: '500', color: '#3085fe'}}>
                {' '}
                terms & conditions & privacy {'\n'}policy
              </Text>
             {" "}set out by this site
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              width: '95%',
              alignSelf: 'center',
              backgroundColor: '#3085fe',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 10, borderWidth: 0}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'grey',
              // marginTop: 10,
              textAlign: 'center',
            }}>
            Or continue with social account
          </Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: '100%',
              alignSelf: 'center',
              // backgroundColor: '#3085fe',
              marginTop: 10,
              borderRadius: 10,
              borderWidth: 0.5,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              source={require('../Assets/google.png')}
              style={{height: 25, width: 25, marginRight: 10}}
            />
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#000'}}>
              Google
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderWidth: 0,
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: '500',
                color: 'grey',
                // marginTop: 10,
                textAlign: 'center',
                // borderWidth:1
              }}>
              Already have an account?
            </Text>
            <TouchableOpacity
              style={{borderWidth: 0}}
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  color: 'grey',
                  // marginTop: 10,
                  textAlign: 'center',
                  // borderWidth:1,
                  color: '#3085fe',
                }}>
                {' '}
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  input:{
    width:'95%',
    alignSelf:'center'
  }
});
