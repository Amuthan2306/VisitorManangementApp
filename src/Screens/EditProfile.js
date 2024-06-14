import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import countryList from 'react-select-country-list';
import AppHeader from '../global/Appheader';
import DropDown from 'react-native-paper-dropdown';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function EditProfile() {
  const navigation = useNavigation();
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [Email, SetEmail] = useState('');
  const [visit, setvisit] = useState('');
  const [meet, setmeet] = useState('');
  const [show, setshow] = useState(true);
  const [comapny, setcompany] = useState('');
  const [intime, setintime] = useState('');
  const [images, SetImages] = useState('');
  const [eye, setEye] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [country, setCountry] = useState('');
  const [showDropDown, setShowDropDown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const countryOptions = useMemo(() => countryList().getData(), []);

  const openFilePicker = async () => {
    // Your existing code for the file picker
  };

  const secureText = () => {
    setEye(!eye);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${
      day < 10 ? '0' : ''
    }${day}`;
    setmeet(formattedDate);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title={'Edit Profile'} />
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}}>
          <View style={styles.avatarCard}>
            <TouchableOpacity
              onPress={() => openFilePicker()}
              style={{flexDirection: 'row'}}>
              <Image
                style={styles.avatar}
                source={images ? {uri: images} : require('../Assets/pic.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openFilePicker()}>
              <Image
                style={styles.cameras}
                source={require('../Assets/camera.png')}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.text}>First Name</Text>
          <TextInput
            onChangeText={text => setfirstname(text)}
            style={styles.input}
            value={firstname}
            placeholder={'First Name'}
            placeholderTextColor={'lightgrey'}
          />
          <Text style={styles.text}>Last Name</Text>
          <TextInput
            onChangeText={text => setlastname(text)}
            style={styles.input}
            value={lastname}
            placeholder={'Last Name'}
            placeholderTextColor={'lightgrey'}
          />
          <Text style={styles.text}>Email</Text>
          <TextInput
            onChangeText={text => SetEmail(text)}
            style={styles.input}
            value={Email}
            placeholder={'Email ID'}
            placeholderTextColor={'lightgrey'}
          />
          <Text style={styles.text}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            value={comapny}
            onChangeText={text => setcompany(text)}
            placeholderTextColor={'lightgrey'}
            placeholder={'Date of Birth'}
          />
          <Text style={styles.text}>Country/Region</Text>
          <DropDown
            // label={'Country/Region'}
            mode={'outlined'}
            visible={showDropDown}
            dropDownItemTextStyle="#fff"
            dropDownItemSelectedStyle={{backgroundColor: '#fff'}}
            theme={{
              colors: {
                primary: '#3085fe',
                placeholder: '#3085fe',
              },
            }}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={selectedCountry}
            setValue={setSelectedCountry}
            list={countryOptions}
            placeholder="Country/Region"
            inputProps={{
              outlineColor: showDropDown ? '#3085fe' : '#000',
              right: <TextInput.Icon icon="menu-down" color={'#000'} />,
              style: styles.dropdownInput,
              textColor: '#000', // Apply styles here
              placeholderTextColor:'lightgrey'
            }}
            dropDownItemStyle={styles.dropdownItem}
          />
          <View style={styles.subbutton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}
              style={styles.subbutton}>
              <Text style={styles.subtext}>Save Changes</Text>
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
  avatarCard: {
    height: 90,
    backgroundColor: '#fff',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  avatar: {
    width: (Width / 22) * 6.5,
    height: (Height / 42) * 6,
    borderRadius: Width / 2,
    borderColor: '#3085fe',
    backgroundColor: 'grey',
  },
  cameras: {
    width: 25,
    height: 22,
    tintColor: '#3085fe',
    top: 50,
    right: 25,
  },
  subtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    height: 45,
    width: '80%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#3085fe',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  input: {
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 5,
    color: '#000',
  },
  dropdownInput: {
    height:50,
    borderRadius:10,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  dropdownItem: {
    color: '#fff',
    backgroundColor: '#3085fe',
  },
});
