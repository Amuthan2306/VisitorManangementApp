import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import NavigationComponents from './src/Navigation/Navigation';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <NavigationComponents />
    </PaperProvider>
  );
};
export default App;
