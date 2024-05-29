import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Modal,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialScreen from '../Screens/InitialScreen';
import LoginScreen from '../Screens/LoginScreen';
import Register from '../Screens/Register';
import Mainscreen from '../Screens/Mainscreen';
import ForgotPassword from '../Screens/Forgot/ForgotPassword';
import VerifyCode from '../Screens/Forgot/VerifyCode';
import NewPassword from '../Screens/Forgot/NewPassword';
import HomeScreen from '../Screens/HomeScreen';
import DocumentPicker from 'react-native-document-picker';
import RNFS from 'react-native-fs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QRScanner from '../Screens/QRScanner';
import VisitorRegisterScreen from '../Screens/VisitorRegisterScreen';
import AttachFile from '../Screens/AttachFile';
import UploadCamera from '../Screens/UploadCamera';
import VisitorDetailsScreen from '../Screens/VisitorDetailsScreen';
import ViewerScreen from '../Screens/ViewerScreen';
import VisitorNumber from '../Screens/VisitorNumber';
import EditProfile from '../Screens/EditProfile'
import ViewReport from '../Screens/ViewReport';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const DrawerContents = props => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [images, SetImages] = useState('');
  const asyncc = '@MySuperStore:key';
  const [demo, setdemo] = useState('');

  const superData = [
    {
      id: '1',
      title: 'Building Admin Management',
    },
    {
      id: '2',
      title: 'Subscription Management',
    },
    {
      id: '3',
      title: 'Profile Management',
    },
    {
      id: '4',
      title: 'Logout',
    },
  ];

  const buildingData = [
    {
      id: '1',
      title: 'Staff Management',
    },
    {
      id: '2',
      title: 'QR Code Generator',
    },
    {
      id: '3',
      title: 'Building Setup',
    },

    {
      id: '4',
      title: 'CRUD Operation',
    },
    {
      id: '5',
      title: 'Edit Profile',
    },
    {
      id: '6',
      title: 'Update Form',
    },
    {
      id: '7',
      title: 'Profile Management',
    },
    {
      id: '8',
      title: 'Role And Permission Management',
    },
    {
      id: '9',
      title: 'Building Management',
    },
    {
      id: '10',
      title: 'Update Building Setup',
    },
    {
      id: '11',
      title: 'Logout',
    },
  ];
  const SecurityData = [
    {
      id: '1',
      title: 'Edit Profile',
    },
    {
      id: '2',
      title: 'View Report',
    },
    {
      id: '3',
      title: 'Saved Visitor Information',
    },
    {
      id: '4',
      title: 'Logout',
    },
  ];

  var retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(asyncc);
      if (value !== null) {
        console.log('Result', value, demo);
      }
      setdemo(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!demo) {
      retrieveData();
    }
  }, [demo]);
  const onClickBuildingDrawer = item => {
    item.id == 5
      ? navigation.navigate('EditProfile')
      : item.id == 11
      ? setModalVisible(true)
      : null;
  };
  const onClickSuperDrawer = item => {
    item.id == 3
      ? navigation.navigate('EditProfile')
      : item.id == 4
      ? setModalVisible(true)
      : null;
  };
  const onClickSecurityDrawer = item => {
    item.id == 1
      ? navigation.navigate('EditProfile')
      : item.id == 4
      ? setModalVisible(true)
      : null;
  };

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
              console.log('img===>', images);
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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3085fe',
      }}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => openFilePicker()}>
          <Image
            style={styles.avatar}
            source={images ? {uri: images} : require('../Assets/pic.png')}
          />
          <TouchableOpacity onPress={() => openFilePicker()}>
            <Image
              style={styles.cameras}
              source={require('../Assets/camera.png')}
            />
          </TouchableOpacity>
        </TouchableOpacity>

        <Text
          style={{
            color: '#fff',
            fontWeight: '700',
            fontSize: 16,
            marginTop: 10,
          }}>
          Hello user
        </Text>
      </View>
      <FlatList
        data={
          demo == 'Admin'
            ? buildingData
            : demo == 'SuperAdmin'
            ? superData
            : SecurityData
        }
        style={{margin: 10}}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: 16,
              marginTop: 20,
            }}>
            <View
              style={{
                width: 6,
                height: 5,
                borderRadius: 5 / 2,
                backgroundColor: '#fff',
              }}
            />
            <TouchableOpacity
              onPress={() =>
                demo == 'Admin'
                  ? onClickBuildingDrawer(item)
                  : demo == 'SuperAdmin'
                  ? onClickSuperDrawer(item)
                  : demo == 'Security'
                  ? onClickSecurityDrawer(item)
                  : null
              }>
              <Text
                fontSize={12}
                color={'#fff'}
                fontWeight="400"
                marginLeft={15}
                style={{color: '#fff', fontWeight: '700', fontSize: 14}}>
                {item.title}{' '}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure you want to logout?
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.subbutton}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Mainscreen');
                  }}
                  style={styles.subbutton}>
                  <Text style={styles.subtext}>Yes</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.subbutton}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}
                  style={styles.subbutton}>
                  <Text style={styles.subtext}>No</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContents {...props} />}
      screenOptions={{
        headerShown: false,
        drawerContentContainerStyle: {
          height: 500,
          width: 230,
          borderWidth: 1,
          justifyContent: 'center',
        },
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
        drawerLabelStyle: {
          fontSize: 17,
          color: '#fff',
        },
      }}>
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

function NavigationComponents() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="InitialScreen">
        <Stack.Screen name="InitialScreen" component={InitialScreen} />
        <Stack.Screen name="Mainscreen" component={Mainscreen} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerifyCode" component={VerifyCode} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="HomeScreen" component={MyDrawer} />
        <Stack.Screen name="QRScanner" component={QRScanner} />
        <Stack.Screen name="AttachFile" component={AttachFile} />
        <Stack.Screen name="UploadCamera" component={UploadCamera} />
        <Stack.Screen name="ViewerScreen" component={ViewerScreen} />
        <Stack.Screen name="VisitorNumber" component={VisitorNumber} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ViewReport" component={ViewReport} />
        <Stack.Screen
          name="VisitorRegisterScreen"
          component={VisitorRegisterScreen}
        />
        <Stack.Screen
          name="VisitorDetailsScreen"
          component={VisitorDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationComponents;
const styles = StyleSheet.create({
  avatar: {
    width: (Width / 19) * 4.8,
    height: (Height / 40) * 5,
    borderRadius: Width / 3,
    borderColor: '#242760',
    flexDirection: 'row',
    // borderWidth: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
  cameras: {
    width: 25,
    height: 22,
    bottom: 20,
    left: 85,
    tintColor: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
    fontWeight: '800',
    fontSize: 18,
  },
  subtext: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    height: 45,
    width: '40%',
    borderRadius: 10,
    backgroundColor: '#3085fe',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});
