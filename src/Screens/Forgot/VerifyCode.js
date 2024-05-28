import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function VerifyCode() {
  const navigation = useNavigation();
  const [code, setCode] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [count, setCount] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 0) {
          clearInterval(timer); // Clear the interval when count reaches 0
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    console.log('Input value:', value);

    // Move focus to the next input field if the current index is less than 3
    if (index < 3 && value) {
      inputRefs[index + 1].current.focus();
    } else if (index > 0 && !value) {
      // Focus on the previous input if the current value is empty and the index is greater than 0
      inputRefs[index - 1].current.focus();
    }
  };

  const handleVerify = () => {
    const otp = code.join('');
    console.log('Verifying OTP:', otp);
    navigation.navigate('NewPassword');
    setCode(['', '', '', '']);
    Keyboard.dismiss();
  };

  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-ios-new"
            size={30}
            color={'#000'}
            style={{marginTop: 20}}
          />
        </TouchableOpacity>
        <Text style={styles.forgot}>Enter Verification Code</Text>
        <Text style={styles.text}>
          We have sent the verification code to your mobile {'\n'}number
        </Text>
        <Image
          source={require('../../Assets/verify.jpg')}
          style={styles.logo}
        />
        <View style={styles.otpContainer}>
          {code.map((value, index) => (
            <TextInput
              key={index}
              ref={inputRefs[index]}
              style={styles.input}
              value={value}
              onChangeText={text => handleInputChange(index, text)}
              keyboardType="numeric"
              maxLength={1}
            />
          ))}
        </View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '500',
            color: '#000',
            textAlign: 'right',
            marginTop: 10,
          }}>
          Resent it 00:{count}
        </Text>
        <TouchableOpacity onPress={handleVerify} style={styles.verifyButton}>
          <Text style={styles.verifyButtonText}>Verify</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  forgot: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 25,
  },
  text: {
    fontSize: 15,
    fontWeight: '400',
    color: 'grey',
    marginTop: 5,
  },
  logo: {
    height: 350,
    width: '100%',
    // resizeMode: 'contain',
    marginTop: 20,
  },
  otpContainer: {
    // height:100,
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  input: {
    height: 50,
    width: 50,
    borderRadius: 10,
    borderColor: '#3085fe',
    color: '#3085fe',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 24,
  },
  verifyButton: {
    height: 50,
    width: '100%',
    backgroundColor: '#3085fe',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  verifyButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
