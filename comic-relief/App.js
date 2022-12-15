import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  return (
    <View style={styles.container}>
      <div>
        <h1>COMIC RELIEF</h1>
        <p>Get some Marvel comics to read!</p>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F669D',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'cursive',
    color: '#FBFACD',
  },
});
