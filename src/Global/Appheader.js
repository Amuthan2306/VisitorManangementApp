import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Arrow from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

export default function AppHeader(props) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: 'center',
        // justifyContent:'center',
        backgroundColor:'#3085fe',
        flexDirection: 'row',
        width: '100%',
        height: 80,
      }}>
      <TouchableOpacity
        style={{flex: 0.2, marginLeft: 10}}
        onPress={() => navigation.goBack()}>
        <Arrow name={'arrowleft'} size={30} color={'#fff'} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    // margin: 20,
    color: '#fff',
    textAlign: 'center',
    flex: 0.6,
  },
});
