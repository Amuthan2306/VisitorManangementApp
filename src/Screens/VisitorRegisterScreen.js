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
import AppHeader from '../Global/Appheader';
import DropDown from 'react-native-paper-dropdown';
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
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [showDropDown1, setShowDropDown1] = useState(false);
  const [selectedValue1, setSelectedValue1] = useState('');

  const dropdownItems = [
    {label: 'Meeting', value: 'option1'},
    {label: 'Interview', value: 'option2'},
    {label: 'Client visit', value: 'option3'},
    {label: 'Others', value: 'option4'},
  ];
  const dropdownItems1 = [
    {label: 'Aadhar Card', value: 'option1'},
    {label: 'Voter Card', value: 'option2'},
    {label: 'Pan Card', value: 'option3'},
    {label: 'Driving Licence', value: 'option4'},
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* {spin ? <Spinner /> : null} */}
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <AppHeader title={"Visitor's Register"} />
      {/*<View style={styles.button_cover}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.profile_text}>Visitor's Register</Text>
      </View> */}
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={{width: '95%', alignSelf: 'center', borderWidth: 0}}>
            <Text style={styles.text}>Name</Text>
            <TextInput
              label="Name"
              selectionColor="#3085fe"
              textColor="#000"
              theme={{colors: {onSurfaceVariant: 'lightgrey'}}}
              value={firstname}
              style={{backgroundColor: '#fff'}}
              mode="outlined"
              onChangeText={text => setfirstname(text)}
              activeOutlineColor={'#3085fe'}
            />
            <Text style={styles.text}>Email</Text>
            {/* <InputText
            value={mobilenumber}
            // placeholder={'Moblie Number'}
            mobile={true}
            onChangeNumber={text => onChangeNumber(text)} */}

            <TextInput
              label="Email"
              value={email}
              textColor="#000"
              theme={{colors: {onSurfaceVariant: 'lightgrey'}}}
              style={{backgroundColor: '#fff'}}
              mode="outlined"
              onChangeText={text => setEmail(text)}
              activeOutlineColor={'#3085fe'}
            />
            <Text style={styles.text}>Company Name</Text>
            <TextInput
              label="Company Name"
              textColor="#000"
              theme={{colors: {onSurfaceVariant: 'lightgrey'}}}
              onChangeText={text => setcompany(text)}
              value={comapny}
              style={{backgroundColor: '#fff'}}
              mode="outlined"
              activeOutlineColor={'#3085fe'}
            />
            <Text style={styles.text}>ID Proof</Text>
            <DropDown
              // label={'Select an option'}
              mode={'outlined'}
              value={selectedValue1}
              setValue={setSelectedValue1}
              list={dropdownItems1}
              dropDownItemTextStyle="#fff"
              dropDownItemSelectedStyle={{backgroundColor:'#fff'}}
              placeholder="ID Proof"
              visible={showDropDown1}
              showDropDown={() => setShowDropDown1(true)}
              onDismiss={() => setShowDropDown1(false)}
              theme={{
                colors: {
                  primary: '#3085fe',
                  placeholder: '#3085fe',
                },
              }}
              inputProps={{
                outlineColor: showDropDown1 ? '#3085fe' : '#000',
                right: <TextInput.Icon icon="menu-down" color={'#000'} />,
                style: styles.dropdownInput,
                textColor:'#000', // Apply styles here
                placeholderTextColor:'lightgrey'
              }}
              dropDownItemStyle={styles.dropdownItem} // Custom style for dropdown items
            />
            <Text style={styles.text}>ID Proof Number</Text>
            <TextInput
              label="ID Proof Number"
              onChangeText={text => setcivilid(text)}
              textColor="#000"
              theme={{colors: {onSurfaceVariant: 'lightgrey'}}}
              value={civilid}
              style={{backgroundColor: '#fff'}}
              mode="outlined"
              activeOutlineColor={'#3085fe'}
            />
            <Text style={styles.text}>Purpose of Visit</Text>
            <DropDown
              // label={'Select an option'}
              mode={'outlined'}
              value={selectedValue}
              setValue={setSelectedValue}
              list={dropdownItems}
              placeholder="Purpose of Visit"
              dropDownItemTextStyle="#fff"
              dropDownItemSelectedStyle={{backgroundColor:'#fff'}}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              theme={{
                colors: {
                  primary: '#3085fe',
                  placeholder: '#3085fe',
                },
              }}
              inputProps={{
                outlineColor: showDropDown ? '#3085fe' : '#000',
                right: <TextInput.Icon icon="menu-down" color={'#000'} />,
                style: styles.dropdownInput, // Apply styles here
                textColor:'#000',
                placeholderTextColor:'lightgrey'
              }}
              dropDownItemStyle={styles.dropdownItem} // Custom style for dropdown items
            />
            <Text style={styles.text}>Person to Meet</Text>
            <TextInput
              label="Person to Meet"
              onChangeText={text => setmeet(text)}
              textColor="#000"
              theme={{colors: {onSurfaceVariant: 'lightgrey'}}}
              value={meet}
              style={{backgroundColor: '#fff'}}
              mode="outlined"
              activeOutlineColor={'#3085fe'}
            />

            <Text style={styles.text}>In Time</Text>
            <TextInput
              label="In Time"
              onChangeText={text => setintime(text)}
              textColor="#000"
              theme={{colors: {onSurfaceVariant: 'lightgrey'}}}
              value={intime}
              style={{backgroundColor: '#fff'}}
              mode="outlined"
              activeOutlineColor={'#3085fe'}
            />
          </View>
          <View style={styles.subbutton}>
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
    color: '#000',
    marginLeft: 5,
    marginVertical: 10,
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
  dropdownInput: {
    height:50,
    borderRadius:10,
    width: '100%',
    alignSelf: 'center',
    color:'lightgrey',
    backgroundColor: '#fff',
  },
  dropdownItem: {
    color: '#fff',
    backgroundColor: '#3085fe',
  },
  dropdownContainer: {
    backgroundColor: '#fff',
  },
});
