import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import Mountain from './app/Mountain';
import { Store } from './app/redux/store';
import Register from './app/screens/Register';
import Navigation from './Navigation';
import { firebase } from './app/config/firebase';
import { useEffect, useState } from 'react';

export default function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
