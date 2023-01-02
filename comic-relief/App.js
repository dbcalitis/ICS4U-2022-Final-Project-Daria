import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import styles from './styles.css';
import Navbar from './components/Navbar.js';
import Card from './components/Card.js'



const privateKey = '1259e13ddbaf48febf8d92d86f7a0509636b5a34';
const key = "9adc0fa329a794fce9cc9d03152b282e";
const url = `https://gateway.marvel.com:443/v1/public/comics?apikey=${key}`;

let comicsData;

const response = fetch(url)
  .then((response) => response.json())
  .then(data => {
    comicsData = data;
   })
  .then(() => {
    console.log(comicsData);
    return comicsData;
   });

comicsData = response;
console.log(comicsData);

const comics = `<h1>John Doe</h1>`;


export default function App() {
  return (
    <View className='all'>
      <div className='topBar'>
        <h3 style={{textAlign: 'center'}}>COMIC RELIEF</h3>
        <Navbar></Navbar>
      </div>

      <div className='mainPage'>
        <div id='main'>
          <div dangerouslySetInnerHTML={{ __html: comics }}></div>
          <div className="content">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
        <center>
          <p><b>Data provided by Marvel. © 2014 Marvel</b></p>
        </center>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}