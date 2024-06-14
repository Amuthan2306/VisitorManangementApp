import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Lottie from 'lottie-react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Calender from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Spinner} from '../components/Spinner';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const HomeScreen = props => {
  const navigation = useNavigation();
  const asyncc = '@MySuperStore:key';
  const [demo, setdemo] = useState('');
  const [day, setDay] = useState(true);
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);
  const [openCalendar, setOpencalendar] = useState(false);
  const [spin, setPin] = useState(true);
  const [dateTime, setDateTime] = useState(new Date());
  const [selected, setSelected] = useState('');
  const [press, setpress] = useState(false);

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

  const data = [
    {
      id: '1',
      visitorName: 'Vikram',
      inTime: '09:00 AM',
      persontoMeet: 'Vedha',
      status: 'Active',
      validity: '1 Month',
    },
    {
      id: '2',
      visitorName: 'Surya',
      inTime: '07:00 PM',
      persontoMeet: 'Meena',
      status: 'Inactive',
      validity: '-',
    },
    {
      id: '3',
      visitorName: 'divya',
      inTime: '09:00 AM',
      persontoMeet: 'ruby',
      status: 'Active',
      validity: '1 Month',
    },
    {
      id: '4',
      visitorName: 'Leo',
      inTime: '09:00 AM',
      persontoMeet: 'James',
      status: 'Active',
      validity: '1 Month',
    },
    {
      id: '5',
      visitorName: 'Muthu',
      inTime: '10:40 AM',
      persontoMeet: 'Priya',
      status: 'Active',
      validity: '1 Week',
    },
    {
      id: '6',
      visitorName: 'Ammu',
      inTime: '12:00 PM',
      persontoMeet: 'Saranya',
      status: 'Inactive',
      validity: '-',
    },
    {
      id: '7',
      visitorName: 'Ammu',
      inTime: '12:00 PM',
      persontoMeet: 'Saranya',
      status: 'Inactive',
      validity: '-',
    },

    {
      id: '8',
      visitorName: 'Ammu',
      inTime: '12:00 PM',
      persontoMeet: 'Saranya',
      status: 'Inactive',
      validity: '-',
    },
  ];

  const superData = [
    {
      id: '1',
      Name: 'Vikram',
      status: 'Active',
      validity: '1 Month',
    },
    {
      id: '2',
      Name: 'Surya',
      status: 'Inactive',
      validity: '-',
    },
    {
      id: '3',
      Name: 'divya',
      status: 'Active',
      validity: '1 Month',
    },
    {
      id: '4',
      Name: 'Leo',
      status: 'Active',
      validity: '1 Month',
    },
    {
      id: '5',
      Name: 'Muthu',
      status: 'Active',
      validity: '1 Week',
    },
    {
      id: '6',
      Name: 'Ammu',
      status: 'Inactive',
      validity: '-',
    },
    {
      id: '7',
      Name: 'mynank',
      status: 'inactive',
      validity: '-',
    },
  ];

  const dayBar = {
    labels: ['01', '02', '03', '04', '05', '06'],
    datasets: [
      {
        data: [2000, 2001, 2002, 2003, 2004, 2005],
      },
    ],
  };
  const weekBar = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        data: [2005, 2002, 2003, 2001, 2004, 2005],
      },
    ],
  };
  const monthBar = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [2005, 2004, 2003, 2002, 2001, 2000],
      },
    ],
  };

  const datas = [
    {
      Name: 'Amuthan ',
      NameText: 'is here to see Rubesh !\n would you like to',
      role: 'General Visitor',
    },
    {
      Name: 'Muthu ',
      NameText: 'is here to see Priya !\n would you like to',
      role: 'Guest',
    },
    {
      Name: 'Mani ',
      NameText: 'is here to see Prame !\n would you like to',
      role: 'Laundry',
    },
  ];

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPin(false);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const onClickDay = () => {
    setDay(true);
    setWeek(false);
    setMonth(false);
  };
  const onClickWeek = () => {
    setDay(false);
    setWeek(true);
    setMonth(false);
  };
  const onClickMonth = () => {
    setDay(false);
    setWeek(false);
    setMonth(true);
  };

  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayName = days[dayOfWeek];

  const clickOpenCalendar = () => {
    setOpencalendar(!openCalendar);
  };
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#fff'}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
        {/* {spin ? <Spinner /> : null} */}
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            backgroundColor: '#3085fe',
            justifyContent: 'space-between',
            height: 70,
          }}>
          <TouchableOpacity style={{}} onPress={() => navigation.goBack()}>
            <Image
              source={require('../Assets/back.png')}
              style={{height: 30, width: 30, marginLeft: 12, tintColor: '#fff'}}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>
            {demo === 'Admin'
              ? 'Building Admin'
              : demo === 'SuperAdmin'
              ? 'Super Admin'
              : demo === 'Security'
              ? 'Security'
              : null}
          </Text>
          <TouchableOpacity onPress={() => null}>
            <Ionicon
              name="notifications-outline"
              size={25}
              color={'#fff'}
              style={{fontWeight: '900', marginRight: 12}}
            />
          </TouchableOpacity>
        </View>
        {demo === 'Admin' ? (
          <View
            style={{
              width: '94%',
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                marginVertical: 10,
                // borderWidth:1
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // borderWidth: 1,
                  marginTop: 10,
                }}>
                <View style={styles.numofvisit}>
                  <Text style={styles.numtext}>
                    Total Number of Building Visitors
                  </Text>
                  <Text style={styles.numtext2}>20</Text>
                </View>
                <View style={styles.numofvisit2}>
                  <Text style={styles.numtext}>Approve Visitors</Text>
                  <Text style={[styles.numtext2, {color: '#A3D139'}]}>12</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 25,
                  // borderWidth:1,
                  marginTop: 15,
                  //   margin: 10,
                }}>
                <View style={styles.numofvisit4}>
                  <Text style={styles.numtext}>Waiting Visitors</Text>
                  <Text
                    style={[styles.numtext2, {color: 'rgba(48, 190, 182, 1)'}]}>
                    6
                  </Text>
                </View>
                <View style={styles.numofvisit3}>
                  <Text style={styles.numtext}>Inactive Visitors</Text>
                  <Text style={[styles.numtext2, {color: 'red'}]}>2</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: '100%',
                height: 50,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 15,
                borderRadius: 10,
                backgroundColor: '#fff',
              }}>
              <TouchableOpacity
                onPress={() => onClickDay()}
                style={[
                  styles.rowStyle,
                  {
                    backgroundColor: day ? '#3085fe' : '#fff',
                  },
                ]}>
                <Text style={[styles.days, {color: day ? '#fff' : '#000'}]}>
                  Day
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onClickWeek()}
                style={[
                  styles.rowStyle,
                  {
                    backgroundColor: week ? '#3085fe' : '#fff',
                  },
                ]}>
                <Text style={[styles.days, {color: week ? '#fff' : '#000'}]}>
                  Week
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => onClickMonth()}
                style={[
                  styles.rowStyle,
                  {
                    backgroundColor: month ? '#3085fe' : '#fff',
                  },
                ]}>
                <Text style={[styles.days, {color: month ? '#fff' : '#000'}]}>
                  Month
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center'}}>
              {day ? (
                <BarChart
                  data={dayBar}
                  width={380}
                  height={200}
                  // yAxisLabel="Year"
                  chartConfig={{
                    backgroundGradientFrom: '#ffff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradientFromOpacity: 1,
                    fillShadowGradientToOpacity: 0.5,
                    // barPercentage:5,
                    barPercentage: 0.6,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(48, 133, 254, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgb(48, 133, 254) ${opacity})`,
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 10,
                  }}
                />
              ) : week ? (
                <BarChart
                  data={weekBar}
                  width={380}
                  height={200}
                  // yAxisLabel="Year"
                  chartConfig={{
                    backgroundGradientFrom: '#ffff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradientFromOpacity: 1,
                    fillShadowGradientToOpacity: 0.5,
                    barPercentage: 0.6,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(48, 133, 254, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgb(48, 133, 254) ${opacity})`,
                  }}
                  bezier
                  style={{
                    // marginVertical: 8,
                    borderRadius: 10,
                  }}
                  // verticalLabelRotation={10}
                />
              ) : month ? (
                <BarChart
                  data={monthBar}
                  width={380}
                  height={200}
                  // yAxisLabel="Year"
                  chartConfig={{
                    backgroundGradientFrom: '#ffff',
                    backgroundGradientTo: '#fff',
                    fillShadowGradientFromOpacity: 1,
                    fillShadowGradientToOpacity: 0.5,
                    barPercentage: 0.6,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(48, 133, 254, ${opacity})`,
                    labelColor: (opacity = 1) =>
                      `rgb(48, 133, 254) ${opacity})`,
                  }}
                  bezier
                  style={{
                    // marginVertical: 8,
                    borderRadius: 10,
                  }}
                  // verticalLabelRotation={10}
                />
              ) : null}
            </View>
            <View style={{marginTop: 12}}>
              <View
                style={{
                  flexDirection: 'row',
                  height: 40,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.cardTitletext}>Visitor List</Text>
                <TouchableOpacity
                  style={{width: '10%', marginLeft: 0}}
                  onPress={() => clickOpenCalendar()}>
                  <Calender name={'calendar'} size={25} color="#000" />
                </TouchableOpacity>
              </View>
              {openCalendar ? (
                <View>
                  <Calendar
                    onDayPress={day => {
                      setSelected(day.dateString);
                    }}
                    markedDates={{
                      [selected]: {
                        selected: true,
                        disableTouchEvent: true,
                        selectedDotColor: 'orange',
                      },
                    }}
                    theme={{
                      backgroundColor: '#000',
                      calendarBackground: '#ffffff',
                      textSectionTitleColor: '#b6c1cd',
                      selectedDayBackgroundColor: '#3085fe',
                      selectedDayTextColor: '#ffffff',
                      todayTextColor: '#fff',
                      dayTextColor: '#2d4150',
                      textDisabledColor: 'lightgrey',
                      todayBackgroundColor: '#d9e',
                      arrowColor: '#3085fe',
                    }}
                  />
                </View>
              ) : null}
              <View>
                <View
                  style={{
                    borderRadius: 15,
                    width: '100%',
                    backgroundColor: '#3085fe',
                    marginBottom: 15,
                  }}>
                  <FlatList
                    data={data}
                    renderItem={({item}) => (
                      <View
                        style={{
                          backgroundColor: '#fff',
                          borderRadius: 15,
                          margin: 10,
                          marginTop: 10,
                          flexDirection: 'row',
                          padding: 10,
                        }}>
                        <View
                          style={{
                            flex: 0.8,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            borderWidth: 0,
                          }}>
                          <View
                            style={{
                              flex: 0.48,
                              borderWidth: 0,
                              justifyContent: 'center',
                            }}>
                            <Text style={styles.textStyle}>Visitor Name</Text>
                            <Text style={styles.textStyle}>In-Time</Text>
                            <Text style={styles.textStyle}>Person to Meet</Text>
                          </View>
                          <View style={{flex: 0.04}}>
                            <Text style={{color: '#000'}}>:</Text>
                            <Text style={{color: '#000'}}>:</Text>
                            <Text style={{color: '#000'}}>:</Text>
                          </View>
                          <View
                            style={{
                              flex: 0.48,
                              borderWidth: 0,
                              justifyContent: 'center',
                            }}>
                            <Text style={styles.textStyle}>
                              {item.visitorName}
                            </Text>
                            <Text style={styles.textStyle}>{item.inTime}</Text>
                            <Text style={styles.textStyle}>
                              {item.persontoMeet}
                            </Text>
                          </View>
                        </View>
                        <View style={{flex: 0.25, justifyContent: 'center'}}>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <View
                              style={{
                                width: 6,
                                height: 5,
                                borderRadius: 5 / 2,
                                backgroundColor: 'green',
                                marginRight: 5,
                              }}
                            />
                            <Text style={styles.textStyle}>{item.status}</Text>
                          </View>
                          {/* <Text>{item.validity}</Text> */}
                        </View>
                        <View style={{flex: 0.2, justifyContent: 'center'}}>
                          <View style={[styles.subbutton, {width: '100%'}]}>
                            <TouchableOpacity
                              onPress={() => {
                                null;
                              }}
                              style={[styles.subbutton, {width: '100%'}]}>
                              <Text style={styles.subtext}>View</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </View>
                    )}
                    keyExtractor={item => item.id}
                  />
                </View>
              </View>
            </View>
          </View>
        ) : demo === 'SuperAdmin' ? (
          <ScrollView style={{width: '95%', alignSelf: 'center'}}>
            <View
              style={{
                width: '100%',
                alignSelf: 'center',
                marginVertical: 10,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  margin: 3,
                }}>
                <View style={styles.numofvisit}>
                  <Text style={styles.numtext}>Total Subscription Count</Text>
                  <Text style={styles.numtext2}>250</Text>
                </View>
                <View style={styles.numofvisit2}>
                  <Text style={styles.numtext}>Active Subscription Count</Text>
                  <Text style={[styles.numtext2, {color: '#A3D139'}]}>100</Text>
                </View>
              </View>
            </View>
            <View>
              <View
                style={{
                  borderRadius: 15,
                  width: '100%',
                  backgroundColor: '#3085fe',
                  marginBottom: 10,
                }}>
                <FlatList
                  data={superData}
                  renderItem={({item}) => (
                    <View
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: 15,
                        margin: 10,
                        marginTop: 10,
                        flexDirection: 'row',
                        padding: 10,
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          borderWidth: 0,
                          flex: 0.8,
                          flexDirection: 'row',
                        }}>
                        <View
                          style={{
                            flex: 0.48,
                            borderWidth: 0,
                            justifyContent: 'center',
                          }}>
                          <Text style={styles.textStyle}>Name</Text>
                          <Text style={styles.textStyle}>Valid Upto</Text>
                          <Text style={styles.textStyle}>Status</Text>
                        </View>
                        <View
                          style={{
                            flex: 0.04,
                            borderWidth: 0,
                            justifyContent: 'center',
                          }}>
                          <Text style={styles.textStyle}>:</Text>
                          <Text style={styles.textStyle}>: </Text>
                          <Text style={styles.textStyle}>:</Text>
                        </View>
                        <View
                          style={{
                            flex: 0.48,
                            borderWidth: 0,
                            justifyContent: 'center',
                          }}>
                          <Text style={styles.textStyle}>{item.Name}</Text>
                          <Text style={styles.textStyle}>{item.validity}</Text>
                          <Text style={styles.textStyle}>{item.status}</Text>
                        </View>
                      </View>

                      <View
                        style={{
                          width: '30%',
                          justifyContent: 'center',
                          borderRadius: 10,
                        }}>
                        <View style={[styles.subbutton, {width: '100%'}]}>
                          <TouchableOpacity
                            onPress={() => {
                              null;
                            }}
                            style={[styles.subbutton, {width: '100%'}]}>
                            <Text style={styles.subtext}>View Details</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  )}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </ScrollView>
        ) : demo === 'Security' ? (
          <ScrollView style={{width: '95%', alignSelf: 'center'}}>
            <View style={styles.topview}>
              <View style={styles.dateCover}>
                <View style={styles.imgview}>
                  <Image
                    source={require('../Assets/calendar.png')}
                    style={styles.cal_logo}
                  />
                </View>
                <View style={styles.timedateview}>
                  <Text style={styles.time_date}>
                    Date {''}: {''}
                    {dateTime.toLocaleDateString('en-US', {
                      timeZone: 'Asia/Kolkata',
                    })}
                  </Text>
                  {/* <Text style={styles.time_date}>Day: {''}{dayName}</Text> */}
                  <Text style={[[styles.time_date, {fontSize: 17}]]}>
                    Time: {''}
                    {dateTime.toLocaleTimeString('en-US', {
                      timeZone: 'Asia/Kolkata',
                    })}
                  </Text>
                </View>
                <View style={styles.imgview}>
                  <Lottie
                    source={require('../Assets/Suns.json')}
                    autoPlay
                    loop
                    style={styles.lottiview}
                  />
                  <Text style={styles.time_date}>26{'\u00b0'}C</Text>
                </View>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.cardText}>Visitor's Requests:</Text>
              <FlatList
                data={datas}
                renderItem={({item}) => (
                  <View style={styles.flatview}>
                    <View style={styles.imgflatview}>
                      <Image
                        source={require('../Assets/pic.png')}
                        style={styles.flatlogo}
                      />
                    </View>
                    <View style={styles.nameview}>
                      <View
                        style={{
                          flexDirection: 'row',
                          borderWidth: 0,
                          width: 265,
                          justifyContent: 'space-between',
                        }}>
                        <Text style={styles.namestyle}>
                          {item.Name}
                          <Text style={styles.nametext}>{item.NameText}</Text>
                        </Text>
                        <TouchableOpacity
                          onPress={() => null}
                          style={{
                            height: 20,
                            width: 20,
                            borderWidth: 0,
                            justifyContent: 'center',
                            borderRadius: 20,
                            backgroundColor: '#3085fe',
                          }}>
                          <Text
                            style={{
                              fontSize: 12,
                              fontWeight: 'bold',
                              color: '#fff',
                              textAlign: 'center',
                            }}>
                            !
                          </Text>
                        </TouchableOpacity>
                      </View>
                      <View
                        style={{
                          flexDirection: 'row',
                          width: 250,
                          // alignSelf:'center',
                          justifyContent: 'space-between',
                          margin: 5,
                          // borderWidth:1
                        }}>
                        <TouchableOpacity
                          onPress={() => null}
                          style={[
                            styles.subbutton,
                            {backgroundColor: '#00CC00'},
                          ]}>
                          <Text
                            style={[
                              styles.subtext,
                              {fontSize: 14, fontWeight: '500'},
                            ]}>
                            Accept
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                          onPress={() => null}
                          style={[
                            styles.subbutton,
                            {backgroundColor: '#CC0000'},
                          ]}>
                          <Text
                            style={[
                              styles.subtext,
                              {fontSize: 14, fontWeight: '500'},
                            ]}>
                            Reject
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.cardText}>Active Visitors:</Text>
              <FlatList
                data={datas}
                renderItem={({item}) => (
                  <View style={styles.flatview}>
                    <View style={styles.imgflatview}>
                      <Image
                        source={require('../Assets/pic.png')}
                        style={styles.flatlogo}
                      />
                    </View>
                    <View style={styles.nameview1}>
                      <Text style={styles.namestyle}>{item.Name}</Text>
                      <Text style={styles.nametext}>{item.role}</Text>
                    </View>
                    <Text style={{color: '#000'}}>15 mins ago</Text>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </ScrollView>
        ) : (
          <View style={{flex: 1, backgroundColor: '#fff'}}>
            {/* <Lottie
            source={require('../../src/components/Assets/homeani.json')}
            autoPlay
            loop
            style={{height: 150, width: 150}}
          /> */}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  titleText: {
    // width:'70%',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  rowStyle: {
    justifyContent: 'space-around',
    width: '32%',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
  },
  countCard: {
    backgroundColor: '#2D2B89',
    marginVertical: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 10,
  },
  cardText: {
    fontSize: 17,
    color: '#000',
    fontWeight: '800',
    margin: 5,
  },
  cardTitletext: {
    fontSize: 17,
    color: '#000',
    fontWeight: '800',
    width: '80%',
  },
  subtext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    height: 40,
    margin: 5,
    width: '36%',
    backgroundColor: '#3085fe',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: '500',
    color: '#000',
    fontSize: 14,
  },
  time_date: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  cal_logo: {
    height: 60,
    width: 60,
    tintColor: '#fff',
  },
  topview: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#3085fe',
    width: '100%',
    borderRadius: 10,
    marginTop: 10,
  },
  dateCover: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  lottiview: {
    height: 80,
    width: 80,
  },
  imgview: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
  },
  timedateview: {
    justifyContent: 'center',
    width: '60%',
  },
  flatview: {
    width: '98%',
    alignSelf: 'center',
    marginTop: 7,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 7,
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOpacity: 0.45,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
  },
  flatlogo: {
    height: 70,
    width: 70,
  },
  namestyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3085fe',
    marginLeft: 5,
  },
  nametext: {
    fontSize: 15,
    color: '#000',
    fontWeight: '400',
    marginLeft: 5,
  },
  nameview: {
    width: '80%',
    justifyContent: 'center',
  },
  nameview1: {
    width: '50%',
    justifyContent: 'center',
  },
  imgflatview: {
    width: '25%',
    justifyContent: 'center',
    //backgroundColor:'#411350',
    alignItems: 'center',
    borderRadius: 50,
  },
  subtext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  days: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  numofvisit: {
    height: 130,
    width: 175,
    borderWidth: 1,
    borderColor: 'rgba(48, 133, 254, 0.85)',
    backgroundColor: 'rgba(48, 133, 254, 0.15)',
    borderRadius: 15,
    justifyContent: 'space-around',
  },
  numtext: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    marginLeft: 10,
  },
  numtext2: {
    fontSize: 16,
    fontWeight: '500',
    color: '#3085fe',
    marginLeft: 10,
  },
  numofvisit2: {
    height: 130,
    width: 175,
    borderWidth: 1,
    borderColor: 'rgba(163, 209, 57, 0.85)',
    backgroundColor: 'rgba(163, 209, 57, 0.15)',
    borderRadius: 15,
    justifyContent: 'space-around',
  },
  numofvisit3: {
    height: 130,
    width: 175,
    borderWidth: 1,
    borderColor: 'rgba(255, 127, 116, 0.85)',
    backgroundColor: 'rgba(255, 127, 116, 0.15)',
    borderRadius: 15,
    justifyContent: 'space-around',
  },
  numofvisit4: {
    height: 130,
    width: 175,
    borderWidth: 1,
    borderColor: 'rgba(48, 190, 182, 0.85)',
    backgroundColor: 'rgba(48, 190, 182, 0.15)',
    borderRadius: 15,
    justifyContent: 'space-around',
  },
});
