import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from './components/Navbar';
import menuImage from './assets/menu.png';

export default function App() {
  return (
    <View style={styles.all}>
      <div style={styles.topBar}>
        <img src={menuImage} width="60" height="60" align="left"></img>
        <h1 style={{textAlign: 'center'}}>COMIC RELIEF</h1>
      </div>
      
      <div style={styles.navBar}>
          <Navbar></Navbar>
      </div>
      
      <div style={styles.mainPage}>
        <p>Get some Marvel comics to read!</p>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  topBar: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#000000',
    padding: '20px',
  },

  navBar: {
    backgroundColor: '#CF0A0A',
    fontSize: 25,
  },

  mainPage: {
    padding: '20px',
  },

  all: {
    flex: 1,
    backgroundColor: '#DC5F00',
    fontFamily: 'cursive',
    color: '#EEEEEE',
  },
});
