import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import Navbar from './components/Navbar';
import menuImage from './assets/menu.png';

export default function App() {
  return (
    <View style={styles.container}>
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
    backgroundColor: '#7F669D',
    padding: '20px',
  },

  navBar: {
    backgroundColor: '#BA94D1',
    fontSize: 25,
  },

  mainPage: {
    padding: '20px',
  },

  container: {
    flex: 1,
    backgroundColor: '#DEBACE',
    fontFamily: 'cursive',
    color: '#FBFACD',
  },
});
