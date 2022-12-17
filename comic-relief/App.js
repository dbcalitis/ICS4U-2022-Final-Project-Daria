import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';

import styles from './styles.css';
import Navbar from './components/Navbar.js';
import menuImage from './assets/menu.png';

export default function App() {
  return (
    <View className='all'>
      <div className='topBar'>
        <h1 style={{textAlign: 'center'}}>COMIC RELIEF</h1>
        <Navbar></Navbar>
      </div>
      
      
      <div className='mainPage'>
        <p style={{padding: "1000px"}}>Get some Marvel comics to read!</p>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}


// const styles = StyleSheet.create({
//   topBar: {
//     position: 'sticky',
//     top: 0,
//     backgroundColor: '#000000',
//     padding: '5px',
//   },

//   mainPage: {
//     padding: '20px',
//   },

//   all: {
//     flex: 1,
//     backgroundColor: '#DC5F00',
//     fontFamily: 'cursive',
//     color: '#EEEEEE',
//   },
// });
