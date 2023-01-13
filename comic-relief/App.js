import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import React, { useState} from 'react';

import styles from './styles.css';
import  {Home, About, Comics, Characters} from './components/Navbar.js';
import NavStyle from './components/Navbar.css'


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
            <a href="#" onClick={() => setCategory("home")}>HOME</a>
            <a href="#" onClick={() => setCategory("about")}>ABOUT</a>
            <a href="#" onClick={() => setCategory("comics")}>COMICS</a>
            <a href="#" onClick={() => setCategory("characters")}>CHARACTERS</a>
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