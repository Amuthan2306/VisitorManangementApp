import {useNavigation} from '@react-navigation/native';
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
  ImageBackground,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/Entypo';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNFS from 'react-native-fs';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Profile = props => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [images, SetImages] = useState('');
  const asyncc = '@MySuperStore:key';
  const [demo, setdemo] = useState('');

  const superData = [
    {
      id: '1',
      title: 'Building Admin Management',
      icon: 'office-building-marker',
    },
    {
      id: '2',
      title: 'Subscription Management',
      icon: 'gesture-tap-button',
    },
    {
      id: '3',
      title: 'Profile Management',
      icon: 'note-text-outline',
    },
    {
      id: '4',
      title: 'Logout',
      icon: 'logout',
    },
  ];

  const buildingData = [
    {
      id: '1',
      title: 'Staff Management',
      icon: 'human-queue',
    },
    {
      id: '2',
      title: 'QR Code Generator',
      icon: 'qrcode-scan',
    },
    {
      id: '3',
      title: 'Building Setup',
      icon: 'office-building',
    },

    {
      id: '4',
      title: 'CRUD Operation',
      icon: 'crowd',
    },
    {
      id: '5',
      title: 'Edit Profile',
      icon: 'account-edit',
    },
    {
      id: '6',
      title: 'Update Form',
      icon: 'update',
    },
    {
      id: '7',
      title: 'Profile Management',
      icon: 'note-text-outline',
    },
    {
      id: '8',
      title: 'Role And Permission Management',
      icon: 'account-supervisor',
    },
    {
      id: '9',
      title: 'Building Management',
      icon: 'office-building-marker',
    },
    {
      id: '10',
      title: 'Update Building Setup',
      icon: 'office-building-cog',
    },
    {
      id: '11',
      title: 'Logout',
      icon: 'logout',
    },
  ];
  const SecurityData = [
    {
      id: '1',
      title: 'Edit Profile',
      icon: 'account-edit',
    },
    {
      id: '2',
      title: 'View Report',
      icon: 'human-male-board',
    },
    {
      id: '3',
      title: 'Saved Visitor Information',
      icon: 'human-greeting-variant',
    },
    {
      id: '4',
      title: 'Logout',
      icon: 'logout',
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
    console.log('platform===>', Platform.OS);
    if (Platform.OS === 'android') {
      await requestMediaPermission();
    }
    try {
      const resp = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        readContent: true,
        // allowMultiSelection:true
      });
      console.log('resp===>', resp);
      let decodedFileName = resp[0].uri.replace('%20', ' ');
      if (Platform.OS !== 'android') {
        decodedFileName = decodeURIComponent(decodedFileName);
      }

      if (
        resp[0]?.type === 'image/jpeg' ||
        resp[0]?.type === 'image/jpg' ||
        resp[0]?.type === 'image/png'
      ) {
        RNFS.readFile(decodedFileName, 'base64')
          .then(res => {
            // console.log('res', res);
            console.log('typePDF', resp[0].uri);

            if (resp[0].type === 'image/jpeg' || resp[0].type === 'image/png') {
              console.log('frontpage==>####', resp[0]?.uri?.length);
              SetImages(resp[0].uri);
              console.log('img===>', images);
            }
          })
          .catch(error => {
            console.log('error====>', error);
          });
      } else {
        console.log('File type not supported');
      }
    } catch (err) {
      console.log('Error:', err);
    }
  };

  const requestMediaPermission = async () => {
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
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground source={require('../Assets/proback.jpg')}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity onPress={openFilePicker}>
            <Image
              style={styles.avatar}
              source={images ? {uri: images} : require('../Assets/pic.png')}
            />
            <TouchableOpacity onPress={openFilePicker}>
              <Image
                style={styles.cameras}
                source={require('../Assets/camera.png')}
              />
            </TouchableOpacity>
          </TouchableOpacity>

          <Text
            style={{
              color: '#000',
              fontWeight: '700',
              fontSize: 18,
              marginBottom: 5,
            }}>
            Hi User
          </Text>
          <Text
            style={{
              color: '#000',
              fontWeight: '500',
              fontSize: 16,
              marginBottom: 10,
            }}>
            {demo === 'Admin'
              ? 'Building Admin'
              : demo === 'SuperAdmin'
              ? 'Super Admin'
              : demo === 'Security'
              ? 'Security'
              : null}
          </Text>
        </View>
      </ImageBackground>
      <FlatList
        data={
          demo == 'Admin'
            ? buildingData
            : demo == 'SuperAdmin'
            ? superData
            : demo === 'Security'
            ? SecurityData
            : null
        }
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <Icons
              name={item.icon}
              size={23}
              color={'#000'}
              style={styles.icon}
            />
            <TouchableOpacity
              style={styles.itemTouchable}
              onPress={() =>
                demo == 'Admin'
                  ? onClickBuildingDrawer(item)
                  : demo == 'SuperAdmin'
                  ? onClickSuperDrawer(item)
                  : demo == 'Security'
                  ? onClickSecurityDrawer(item)
                  : null
              }>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
            <Icon name="chevron-right" size={25} color={'#000'} />
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
            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Mainscreen');
                }}
                style={styles.modalButton}>
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                style={styles.modalButton}>
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: (Width / 19) * 4.8,
    height: (Height / 40) * 5,
    borderRadius: Width / 3,
    borderColor: '#242760',
    flexDirection: 'row',
    margin: 10,
  },
  cameras: {
    width: 25,
    height: 22,
    bottom: 25,
    left: 85,
    tintColor: '#000',
  },
  itemContainer: {
    height: 50,
    width: '93%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    elevation: 2,
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: 5,
  },
  itemTouchable: {
    borderWidth: 0,
    width: '85%',
  },
  itemText: {
    color: '#000',
    fontWeight: '700',
    fontSize: 14,
    marginLeft: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    width: '80%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
    fontWeight: '800',
    fontSize: 18,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    height: 45,
    width: '40%',
    borderRadius: 10,
    backgroundColor: '#3085fe',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  modalButtonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Profile;
