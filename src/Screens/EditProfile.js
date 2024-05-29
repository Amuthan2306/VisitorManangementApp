import React, {useState, useMemo, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  PermissionsAndroid,
  Alert,
  Dimensions,
  Image,
  Modal,
  FlatList,
  TextInput,
  Button
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import countryList from 'react-select-country-list';
import AppHeader from '../Global/Appheader';
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
  const openFilePicker = async () => {
    if (Platform.OS == 'android') {
      requestMediaPermission();
    }
    try {
      const resp: any = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        readContent: true,
        // allowMultiSelection:true
      });
      console.log('resp===>', resp);
      let decodedFileName = resp[0].uri;
      decodedFileName = resp[0]?.uri?.replaceAll('%20', ' ');
      if (Platform.OS == 'android') {
      } else {
        decodedFileName = decodeURIComponent(decodedFileName);
      }
      if (
        resp[0]?.type === 'image/jpeg' ||
        resp[0]?.type === 'image/jpg' ||
        resp[0]?.type === 'image/png'
      ) {
        RNFS.readFile(decodedFileName, 'base64')
          .then(async res => {
            console.log('res', resp);
            console.log('typePDF', resp[0].uri);

            if (resp[0].type == 'image/jpeg' || resp[0].type == 'image/png') {
              console.log('frontpage==>####', resp[0]?.uri?.length);
              // props.navigation.navigate('ViewerScreen', {
              //   file: resp[0],
              // });
              SetImages(resp[0]?.uri);
            }
          })
          .catch(out => {
            console.log('real error====>', out);
          });
      } else {
        console.log('real error====>', out);
      }
    } catch (err) {
      console.log('data==>', err);
    }
  };

  async function requestMediaPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Media Permission',
          message: 'App needs access to your media files.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Media permission granted');
      } else {
        console.log('Media permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }
  const [date, Setdate] = useState('');
  console.log('meet=>', meet);
  // const _validate = () => {
  //   if (global.functions.isNullOrEmpty(firstname)) {
  //     global.functions.ShowAlert('Please enter name', global.const.warning);
  //   } else if (global.functions.isNullOrEmpty(Email)) {
  //     global.functions.ShowAlert('Please enter email', global.const.warning);
  //   } else if (global.functions.ValidateEmail(Email)) {
  //     global.functions.ShowAlert(
  //       'Please enter valid emailid',
  //       global.const.warning,
  //     );
  //   } else if (global.functions.isNullOrEmpty(visit)) {
  //     global.functions.ShowAlert('Please Enter Password', global.const.warning);
  //   } else if (visit.length < 8) {
  //     global.functions.ShowAlert(
  //       'Password Should be Minimum 8 char',
  //       global.const.warning,
  //     );
  //   } else {
  //     // navigation.navigate('VisitorRegisterScreen');
  //     Alert.alert('hi');
  //   }
  // };
  const secureText = () => {
    setEye(!eye);
  }

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const [value, setValue] = useState('');
  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);

    const dateObject = new Date(date);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Adding 1 because getMonth() returns zero-based index
    const day = dateObject.getDate();

    const formattedDate = `${year}-${month < 10 ? '0' : ''}${month}-${
      day < 10 ? '0' : ''
    }${day}`;
    console.log(formattedDate); // Output: "2024-03-27"

    setmeet(formattedDate);
    console.log('formattedDate=>', meet);
    hideDatePicker();
  };

  const options = useMemo(() => countryList().getData(), []);
  // console.log('options==>', options);

  const changeHandler = value => {
    setValue(value);
  };

  const _renderItem = item => {
    return (
      <View style={{flex: 1, width: '80%'}}>
        <TouchableOpacity
          onPress={() => (setCountry(item?.label), setModal(false))}>
          <Text style={{fontSize: 18, color: '#2D2B89', fontWeight: 'bold'}}>
            {item?.label}
          </Text>
        </TouchableOpacity>
      </View>
    );
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
            // editable={false}
            date={true}
            placeholder={'Date of Birth'}
          />

          <Text style={styles.text}>Country/Region</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => setintime(text)}
            value={country}
            placeholder={'Country/Region'}
            placeholderTextColor={'lightgrey'}
            date={true}
            onPressIn={() => setModal(!modal)}
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
          {/* <TouchableOpacity
            onPress={() => {
              _validate();
            }}
            style={styles.subbutton}>
            <Text style={styles.subtext}>Save Changes</Text>
          </TouchableOpacity> */}
        </KeyboardAvoidingView>
      </ScrollView>

      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modal1}
        onRequestClose={() => {
          setModal1(!modal1);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </View>
      </Modal> */}

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
            <FlatList
              keyExtractor={item => item.id}
              data={options}
              style={{flex: 1}}
              renderItem={({item, index}) => _renderItem(item)}
            />
          </View>
        </View>
      </Modal>
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
    // borderWidth: 1,
    backgroundColor: 'grey',
  },
  cameras: {
    width: 25,
    height: 22,
    tintColor: '#3085fe',
    // backgroundColor: '#fff',
    top: 50,
    right: 25,
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
    color: '#2D2B89',
    marginHorizontal: 130,
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
  //Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    height: (Height / 16) * 8,
    width: (Width / 10) * 8,
    borderRadius: 30,
    padding: 15,
    borderWidth: 0.5,
    borderColor: '#3085fe',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  input: {
    borderWidth: 0.5,
    width: '95%',
    alignSelf: 'center',
    borderRadius: 10,
    color: '#3085fe',
  },
});
