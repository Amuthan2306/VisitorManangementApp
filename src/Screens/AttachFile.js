import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Backbutton} from '../components/headerbackbutton';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppHeader from '../Global/Appheader';
import {Spinner} from '../components/Spinner';
import LinearGradient from 'react-native-linear-gradient';
export default function AttachFile() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [load, setload] = useState('No Choosen file');
  const [loadx, setloadx] = useState('No Choosen file');
  useEffect(() => {
    valid();
  }, [isFocused]);

  const valid = async () => {
    const pho1 = await AsyncStorage.getItem('Image1');
    setload(pho1);
    console.log('Image1=>', pho1);
    const pho2 = await AsyncStorage.getItem('Image2');
    console.log('Image2=>', pho2);
    setloadx(pho2);
  };

  const send1 = async () => {
    await AsyncStorage.removeItem('Image1');
    navigation.navigate('UploadCamera', {
      image: 'Image1',
    });
  };

  const send2 = async () => {
    await AsyncStorage.removeItem('Image2');
    navigation.navigate('UploadCamera', {
      image: 'Image2',
    });
  };
  // const _chosen = () => {
  //   if((load != null)&&(loadx != null)){
  //    navigation.navigate('VisitorDetailsScreen')
  //   //  Alert.alert('hi')
  //   }
  // }

  const [spin, setPin] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPin(false);
  //   }, 2000);
  // }, []);
  return (
    <SafeAreaView style={styles.container}>
      {/* {spin ? <Spinner /> : null} */}
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View style={{flex: 0.25}}>
        <View style={styles.button_cover}>
          <AppHeader title={'Visitors Civil Id Details'} />
          {/* <Backbutton onPress={() => navigation.goBack()} />
            <Text style={styles.profile_text}>Visitor's Civil Id Details</Text> */}
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          justifyContent: 'space-between',
          // borderWidth:1
        }}>
        <View style={{flex: 0.65}}>
          <Text style={styles.civilidtext}> Civil Id Picture Front Side</Text>
          <View style={styles.choosefilecover}>
            <View style={styles.choosefile}>
              <TouchableOpacity onPress={() => send1()}>
                <Text style={styles.chooseText}>Choose File</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imgtext}>
              <Text style={styles.nochoosetext}>
                {load != null ? load : 'No Chosen file'}
              </Text>
            </View>
          </View>
          <Text style={styles.civilidtext}> Civil Id Picture Back Side</Text>
          <View style={styles.choosefilecover}>
            <View style={styles.choosefile}>
              <TouchableOpacity onPress={() => send2()}>
                <Text style={styles.chooseText}>Choose File</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imgtext}>
              <Text style={styles.nochoosetext}>
                {loadx != null ? loadx : 'No Chosen file'}{' '}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            // justifyContent: 'flex-start',
            // alignSelf: 'center',
            marginTop: 20,
            // flex: 0.35,
          }}>
          {/* <Button
            buttonStyle={styles.button}
            text={'Submit'}
            onPress={() => navigation.navigate('VisitorDetailsScreen')}
          /> */}
          <TouchableOpacity
            onPress={() => navigation.navigate('VisitorDetailsScreen')}
            style={{
              height: 40,
              width: '90%',
              borderRadius: 7,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#3085fe',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#fff',
                textAlign: 'center',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 0.3}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginHorizontal: 70,
  },
  civilidtext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 15,
    marginVertical: 15,
  },
  choosefilecover: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor:'red',
    borderRadius: 10,
    padding: 7,
    backgroundColor: 'white',
  },
  choosefile: {
    height: 35,
    width: '25%',
    backgroundColor: '#3085fe',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  chooseText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
  },
  imgtext: {
    // borderWidth: 1,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nochoosetext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'lightgrey',
  },
  button: {
    alignSelf: 'center',
  },
});
