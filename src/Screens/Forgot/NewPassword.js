import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RadioButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {TextInput} from 'react-native-paper';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LottieView from 'lottie-react-native';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showeyePassword1, setShoweyePassword1] = useState(false);
  const [confirmpassword, setconfirmPassword] = React.useState('');
  const [Password, setPassword] = React.useState('');
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();
  return (
    <KeyboardAwareScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-ios-new"
            size={30}
            color={'#000'}
            style={{marginTop: 20, marginLeft: 10}}
          />
        </TouchableOpacity>
        <Text style={styles.forgot}>Enter New Password</Text>
        <Text style={styles.text}>Please enter your new password</Text>
        <Image
          source={require('../../Assets/newpass.png')}
          style={styles.logo}
        />
        <View
          style={{
            width: '90%',
            height: 150,
            justifyContent: 'space-around',
            alignSelf: 'center',
          }}>
          <TextInput
            label="Enter Password"
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
          <TextInput
            label="Re-Enter Password"
            secureTextEntry={!showeyePassword1}
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
        </View>
        <TouchableOpacity
          onPress={() => setModal(!modal)}
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
            Update Password
          </Text>
        </TouchableOpacity>
      </SafeAreaView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}>
        {/* <TouchableWithoutFeedback
      onPress={()=>setVisible(!visible)}
      > */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <LottieView
              source={require('../../Assets/lottie.json')}
              autoPlay
              loop
              style={{
                height: (Height / 20) * 4,
                width: (Width / 8) * 4,
                backgroundColor: '#fff',
                color: 'green',
              }}
            />

            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000'}}>
              Your Password Updated Successfully{' '}
            </Text>

            <TouchableOpacity
              style={{
                top: 10,
                height: (Height / 80) * 3.5,
                width: (Width / 80) * 9,
                borderColor: '#357AB4',
                borderRadius: 6,
                // borderWidth: 1,
                justifyContent: 'center',
                backgroundColor: '#3085fe',
              }}
              onPress={() => {
                setModal(false), navigation.navigate('LoginScreen');
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#fff',
                  textAlign: 'center',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* </TouchableWithoutFeedback> */}
      </Modal>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    height: (Height / 25) * 8,
    width: (Width / 10) * 8,
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
