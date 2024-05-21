import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MainScreen() {
  const navigation = useNavigation();

  const DATA = [
    {
      id: '1',
      title: 'Building Admin',
      image: require('../Assets/Admin.png'),
    },
    {
      id: '2',
      title: 'Super Admin',
      image: require('../Assets/Super_Admin.png'),
    },
    {
      id: '3',
      title: 'Visitor',
      image: require('../Assets/visitor.png'),
    },
    {
      id: '4',
      title: 'Security',
      image: require('../Assets/security.png'),
    },
  ];

  const [scaleAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, []);
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('LoginScreen')}
      style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Animated.View style={[{transform: [{scale: scaleAnim}]}]}>
          <Image
            source={require('../Assets/loginimg.png')}
            style={styles.logo}
          />
        </Animated.View>
        <Text style={styles.selecttext}>Select Your Role</Text>
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          data={DATA}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    flex: 0.3,
    backgroundColor: '#fff',
    // flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    flex: 0.7,
    backgroundColor: '#3085fe',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContainer: {
    paddingVertical: 20,
  },
  itemContainer: {
    height: 180,
    width: '45%',
    margin: '2.5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    height: 80,
    width: 80,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  logo: {
    height: 100,
    width: 100,
  },
  selecttext: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
  },
});
