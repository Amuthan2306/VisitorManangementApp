import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  TextInput,
} from 'react-native';
import {Backbutton} from '../components/headerbackbutton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {Spinner} from '../components/Spinner';
import AppHeader from '../Global/Appheader';
export default function VisitorDetailsScreen() {
  const navigation = useNavigation();
  const [firstname, setfirstname] = useState('');
  const [names, setName] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [civilid, setcivilid] = useState('');
  const [visit, setvisit] = useState('');
  const [meet, setmeet] = useState('');
  const [comapny, setcompany] = useState('');
  const [intime, setintime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialcode, Setdialcode] = useState('');
  const [date, setdate] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    display();
  }, []);

  const display = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let data = JSON.parse(user);
      console.log('user==>', data);
      setName(data);
    } catch (error) {
      Alert.alert(error);
    }
  };
  const [spin, setPin] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPin(false);
  //   },2000)

  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* {spin ? <Spinner /> : null} */}
      <View style={styles.button_cover}>
        <AppHeader title={'Visitors Details'} />
        {/* <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.profile_text}>Visitor's Details</Text> */}
      </View>
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            onChangeText={text => setfirstname(text)}
            value={names}
            style={styles.input}
            placeholder={'Name'}
            editable={false}
          />
          <Text style={styles.text}>Email</Text>
            <TextInput
              placeholder={"Email"}
              value={email}
              style={styles.input}
              onChangeText={text => setEmail(text)}
              editable={false}
            />
         
          <Text style={styles.text}>Civil ID</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setcivilid(text)}
            value={names?.civilid}
            placeholder={'Civil ID'}
            editable={false}
          />
          <Text style={styles.text}>Purpose Of Visit</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setvisit(text)}
            value={names?.visit}
            placeholder={'Purpose Of Visit'}
            editable={false}
          />
          <Text style={styles.text}>Person To Meet</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setmeet(text)}
            value={names?.meet}
            placeholder={'Person To Meet'}
            editable={false}
          />
          <Text style={styles.text}>Company Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setcompany(text)}
            value={names?.comapny}
            placeholder={'Company Name'}
            editable={false}
          />
          <Text style={styles.text}>In Time</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setintime(text)}
            value={names?.intime}
            placeholder={'In Time'}
            editable={false}
          />
          {/* <Text style={styles.text}>Visited Date</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setdate(text)}
            value={names?.date}
            placeholder={'Visited Date'}
          /> */}
          <View
            style={styles.subbutton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ViewerScreen');
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
    color: '#000',
    marginLeft: 15,
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
    // height: 50,
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profile_text: {
    fontSize: 20,
    fontWeight: 'bold',
    // color: Colors.dark_button,
    marginHorizontal: 100,
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
  input: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#3085fe',
    // marginTop:10
  },
});
