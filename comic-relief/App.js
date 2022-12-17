import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import styles from './styles.css';
import Navbar from './components/Navbar.js';

export default function App() {
  return (
    <View className='all'>
      <div className='topBar'>
        <h3 style={{textAlign: 'center'}}>COMIC RELIEF</h3>
        <Navbar></Navbar>
      </div>
      
      
      <div className='mainPage'>
        <p style={{padding: '75%'}}>Get some Marvel comics to read!</p>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}