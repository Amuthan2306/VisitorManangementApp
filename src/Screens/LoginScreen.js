import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    // Implement your login logic here
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <View style={styles.imageContainer}>
          <Image
            source={require('../Assets/loginimg.png')}
            style={styles.image}
          />
          <Text style={styles.title}>Welcome 👋</Text>
          <Text style={styles.subtitle}>Hello there, login to continue</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput
            label="Email"
            value={email}
            mode="outlined"
            onChangeText={text => setEmail(text)}
            style={styles.input}
            activeOutlineColor={'#3085fe'}
          />
          <TextInput
            label="Password"
            secureTextEntry={!showPassword}
            mode="outlined"
            value={password}
            onChangeText={text => setPassword(text)}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye' : 'eye-off'}
                onPress={() => setShowPassword(!showPassword)}
                color={'#3085fe'}
              />
            }
            style={styles.input}
            activeOutlineColor={'#3085fe'}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPassword}>Forgot Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>Or continue with social account</Text>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../Assets/google.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={styles.registerLink}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  safeArea: {
    flex: 1,
  },
  imageContainer: {
    height: 300,
    marginLeft:20,
    alignItems: 'baseline',
    justifyContent: 'flex-end',
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: 'grey',
    marginTop: 10,
  },
  formContainer: {
    height: 220,
    marginTop: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#fff',
  },
  forgotPassword: {
    fontSize: 15,
    fontWeight: '500',
    color: '#3085fe',
    textAlign: 'right',
  },
  loginButton: {
    height: 50,
    backgroundColor: '#3085fe',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  socialContainer: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  socialText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'grey',
    textAlign: 'center',
    marginBottom: 10,
  },
  socialButton: {
    height: 50,
    width:'95%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#000',
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  socialIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000',
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  registerText: {
    fontSize: 15,
    fontWeight: '500',
    color: 'grey',
    textAlign: 'center',
  },
  registerLink: {
    fontSize: 15,
    fontWeight: '500',
    color: '#3085fe',
    textAlign: 'center',
    marginLeft: 5,
  },
});
