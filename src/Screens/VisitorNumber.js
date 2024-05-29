import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {icons} from '../components/Assets';
import {Spinner} from '../components/Spinner';
import AppHeader from '../Global/Appheader';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default function VisitorNumber() {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();
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
      <View style={{backgroundColor: '#3085fe', flex: 1}}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            borderRadius: 30,
            borderWidth: 10,
            borderColor: '#3085fe',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              width: '90%',
              alignSelf: 'center',
              marginTop: 10,
              borderColor: '#3085fe',
            }}
          />
          <View
            style={{
              borderBottomWidth: 1,
              width: '90%',
              alignSelf: 'center',
              marginTop: 5,
              borderColor: '#3085fe',
            }}
          />
          <Text
            style={{
              fontSize: 40,
              fontWeight: 'bold',
              color: '#000',
              textAlign: 'center',
            }}>
            Visitor Pass
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              width: '90%',
              alignSelf: 'center',
              marginTop: 10,
              borderColor: '#3085fe',
            }}
          />
          <View
            style={{
              borderBottomWidth: 1,
              width: '90%',
              alignSelf: 'center',
              marginTop: 5,
              borderColor: '#3085fe',
            }}
          />
          <Image
            source={require('../Assets/loginimg.png')}
            style={{
              marginTop: 50,
              height: 120,
              width: 120,
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              height: 250,
              flexDirection: 'row',
              width: '100%',
              // borderWidth: 1,
              alignSelf: 'center',
              justifyContent: 'space-around',
            }}>
            <View style={{width: '47%', alignSelf: 'center', borderWidth: 0}}>
              <Text style={styles.nametext}>Name</Text>
              <Text style={styles.nametext}>Civil ID</Text>
              <Text style={styles.nametext}>Purpose Of Visit</Text>
              <Text style={styles.nametext}>Person To Meet</Text>
              <Text style={styles.nametext}>In Time</Text>
            </View>
            <View
              style={{
                width: '5%',
                alignSelf: 'center',
                alignItems: 'center',
                borderWidth: 0,
              }}>
              <Text style={styles.nametext}>:</Text>
              <Text style={styles.nametext}>:</Text>
              <Text style={styles.nametext}>:</Text>
              <Text style={styles.nametext}>:</Text>
              <Text style={styles.nametext}>:</Text>
            </View>
            <View style={{width: '47%', alignSelf: 'center', borderWidth: 0}}>
              <Text style={styles.nametext1}>Mohammed</Text>
              <Text style={styles.nametext1}>7845123697</Text>
              <Text style={styles.nametext1}>Meeting</Text>
              <Text style={styles.nametext1}>Aathif</Text>
              <Text style={styles.nametext1}>07:30</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setModal(!modal)}
            style={{
              height: 40,
              width: '90%',
              marginTop: 150,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#3085fe',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: '#fff',
                textAlign: 'center',
              }}>
              Save Record
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
              source={require('../Assets/lottie.json')}
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
              Your Record Saved Successfully{' '}
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
                setModal(false), navigation.navigate('Mainscreen');
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardview: {
    flex: 1,
    marginTop: 10,
    // borderWidth:1 ,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    borderWidth: 0.5,
    borderColor:'#3085fe',
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
  nametext: {
    fontSize: 21,
    color: '#000',
    marginLeft: 5,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  nametext1: {
    fontSize: 21,
    color: '#3085fe',
    fontWeight: 'bold',
    marginVertical: 5,
    // textAlign: 'right',
    marginLeft:10
  },
});
