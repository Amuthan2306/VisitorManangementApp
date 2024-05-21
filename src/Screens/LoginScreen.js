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
import {TextInput, Provider} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
export default function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <View
          style={{
            height: 300,
            width: '95%',
            alignSelf: 'center',
            // margin: 10,
            // alignItems:'flex-end',
            justifyContent: 'flex-end',
            // borderWidth: 1,
          }}>
          <Image
            source={require('../Assets/loginimg.png')}
            style={{height: 100, width: 100, marginTop: 10}}
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
            height: 220,
            marginTop: 10,
            // borderWidth: 1,
            width: '95%',
            alignSelf: 'center',
            justifyContent: 'space-between',
          }}>
          <TextInput
            label="Email"
            // placeholder="Email"
            value={email}
            mode="outlined"
            onChangeText={text => setEmail(text)}
            activeOutlineColor={'#3085fe'}
          />
          <TextInput
            label="Password"
            secureTextEntry={!showPassword}
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
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: '#3085fe',
              textAlign: 'right',
            }}>
            Forgot Password
          </Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: '100%',
              alignSelf: 'center',
              backgroundColor: '#3085fe',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{margin: 10, height: 150, borderWidth: 0}}>
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
          <View style={{borderWidth:0,marginTop:10,flexDirection:'row',justifyContent:'center'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'grey',
              // marginTop: 10,
              textAlign: 'center',
              // borderWidth:1
            }}>
            Did't have an account?</Text>
            <TouchableOpacity style={{borderWidth:0,}} onPress={() => navigation.navigate('Register')}>
            <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'grey',
              // marginTop: 10,
              textAlign: 'center',
              // borderWidth:1,
              color:'#3085fe'
            }}>
            {" "}Register</Text>
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
});
