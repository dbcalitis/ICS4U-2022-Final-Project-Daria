import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

import styles from './styles.css';
import  {Home, About, Comics, Characters} from './components/Navbar.js';
import NavStyle from './components/Navbar.css'
import Card from './components/Card.js';

const privateKey = '1259e13ddbaf48febf8d92d86f7a0509636b5a34';
const key = "9adc0fa329a794fce9cc9d03152b282e";
const url = `https://gateway.marvel.com:443/v1/public/comics?apikey=${key}`;


export default function App() {
  const [category, setCategory] = useState("home");

  return (
    <View className='all'>
      <div className='topBar'>
        <h3 style={{textAlign: 'center'}}>COMIC RELIEF</h3>
        {
          // The navigation bar
        }
          <div className="navBar" style={NavStyle}>
            <a href="#home" onClick={() => setCategory("home")}>HOME</a>
            <a href="#about" onClick={() => setCategory("about")}>ABOUT</a>
            <a href="#comics" onClick={() => setCategory("comics")}>COMICS</a>
            <a href="#characters" onClick={() => setCategory("characters")}>CHARACTERS</a>
        </div>
      </div>

      <div className='mainPage'>
        <div id='main'>
          {(category == 'home')? <Home/>: null}
          {(category == 'about')? <About/>: null}
          {(category == 'comics')? <Comics/>: null}
          {(category == 'characters')? <Characters/>: null}
        </div>
        <center>
          <p><b>Data provided by Marvel. © 2014 Marvel</b></p>
        </center>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}