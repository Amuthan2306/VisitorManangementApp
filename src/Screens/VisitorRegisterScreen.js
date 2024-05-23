import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Backbutton} from '../components/headerbackbutton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from '../Global/Appheader';
export default function VisitorRegisterScreen() {
  const navigation = useNavigation();
  const [firstname, setfirstname] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [civilid, setcivilid] = useState('');
  const [visit, setvisit] = useState('');
  const [meet, setmeet] = useState('');
  const [comapny, setcompany] = useState('');
  const [intime, setintime] = useState('');
  const [email, setEmail] = useState('');
  const [dialcode, Setdialcode] = useState('');

  const onChangeNumber = ({dialCode, phoneNumber}) => {
    Setdialcode(dialCode);
    const num = dialCode + mobilenumber;
    setmobilenumber(phoneNumber);
  };

  // const _vaildate = () => {
  //   if (global.functions.isNullOrEmpty(firstname)) {
  //     global.functions.ShowAlert(
  //       'Please Enter Your Name',
  //       global.const.warning,
  //     );
  //   } else if (global.functions.isNullOrEmpty(mobilenumber)) {
  //     global.functions.ShowAlert(
  //       'Please Enter mobilenumber',
  //       global.const.warning,
  //     );
  //   } else if (global.functions.isNullOrEmpty(civilid)) {
  //     global.functions.ShowAlert('Please Enter civilid', global.const.warning);
  //   } else if (global.functions.isNullOrEmpty(visit)) {
  //     global.functions.ShowAlert(
  //       'Please Enter Purpose Of Visit',
  //       global.const.warning,
  //     );
  //   } else if (global.functions.isNullOrEmpty(meet)) {
  //     global.functions.ShowAlert(
  //       'Please Enter Person Of Meet',
  //       global.const.warning,
  //     );
  //   } else if (global.functions.isNullOrEmpty(comapny)) {
  //     global.functions.ShowAlert(
  //       'Please Enter Company Name',
  //       global.const.warning,
  //     );
  //   } else if (global.functions.isNullOrEmpty(intime)) {
  //     global.functions.ShowAlert('Please Enter In Time', global.const.warning);
  //   } else {
  //     const store = {
  //       firstname: firstname,
  //       mobilenumber: mobilenumber,
  //       civilid: civilid,
  //       visit: visit,
  //       meet: meet,
  //       comapny: comapny,
  //       intime: intime,
  //     };

  //     AsyncStorage.setItem('user', JSON.stringify(store));
  //     console.log('store==>', store);
  //     navigation.navigate('UploadCamera');
  //   }
  // };
  const [spin, setPin] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPin(false);
  //   },2000)

  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* {spin ? <Spinner /> : null} */}
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <AppHeader title={'Visitors Register'} />
      {/*<View style={styles.button_cover}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.profile_text}>Visitor's Register</Text>
      </View> */}
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}}>
          {/* <Text style={styles.text}>Name</Text> */}
          <View style={{width:'95%',alignSelf:'center',borderWidth:0}}>
            <TextInput
              label="Name"
              value={firstname}
              style={{marginVertical:15}}
              mode="outlined"
              onChangeText={text => setfirstname(text)}
              activeOutlineColor={'#3085fe'}
            />
            {/* <Text style={styles.text}>Mobile Number</Text>
          <InputText
            value={mobilenumber}
            // placeholder={'Moblie Number'}
            mobile={true}
            onChangeNumber={text => onChangeNumber(text)}
          /> */}
            <TextInput
              label="Email"
              value={email}
              style={{marginVertical:15}}
              mode="outlined"
              onChangeText={text => setEmail(text)}
              activeOutlineColor={'#3085fe'}
            />
            {/* <Text style={styles.text}>Civil ID</Text> */}
            <TextInput
              label="Civil ID"
              onChangeText={text => setcivilid(text)}
              value={civilid}
              style={{marginVertical:15}}
              mode="outlined"
              activeOutlineColor={'#3085fe'}
            />
            {/* <Text style={styles.text}>Purpose Of Visit</Text> */}
            <TextInput
              label="Purpose Of Visit"
              onChangeText={text => setvisit(text)}
              value={visit}
              style={{marginVertical:15}}
              mode="outlined"
              activeOutlineColor={'#3085fe'}
            />
            {/* <Text style={styles.text}>Person To Meet</Text> */}
            <TextInput
              label="Person To Meet"
              onChangeText={text => setmeet(text)}
              value={meet}
              style={{marginVertical:15}}
              mode="outlined"
              activeOutlineColor={'#3085fe'}
            />
            {/* <Text style={styles.text}>Company Name</Text> */}
            <TextInput
              label="Company Name"
              onChangeText={text => setcompany(text)}
              value={comapny}
              style={{marginVertical:15}}
              mode="outlined"
              activeOutlineColor={'#3085fe'}
            />
            {/* <Text style={styles.text}>In Time</Text> */}
            <TextInput
              label="In Time"
              onChangeText={text => setintime(text)}
              value={intime}
              style={{marginVertical:15}}
              mode="outlined"
              activeOutlineColor={'#3085fe'}
            />
          </View>
          <View
            style={styles.subbutton}>
            <TouchableOpacity
              onPress={() => {
                //  _vaildate();
                navigation.navigate('AttachFile');
              }}
              style={styles.subbutton}>
              <Text style={styles.subtext}>Submit</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#411350',
    marginLeft: 20,
    marginVertical: 15,
  },
  inputcover: {
    height: '100%',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    // borderWidth:1,
  },
  button_cover: {
    height: 50,
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profile_text: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: Colors.dark_button,
    marginHorizontal: 85,
  },
  subtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    height: 45,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#3085fe',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
});
