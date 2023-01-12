import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

import styles from './styles.css';
import Navbar from './components/Navbar.js';
import SearchBar from './components/SearchBar.js';
import Card from './components/Card.js';

const privateKey = '1259e13ddbaf48febf8d92d86f7a0509636b5a34';
const key = "9adc0fa329a794fce9cc9d03152b282e";
const url = `https://gateway.marvel.com:443/v1/public/comics?apikey=${key}`;



export default function App() {
  // gives an array of data about characters
  const [url,setUrl] = useState('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9adc0fa329a794fce9cc9d03152b282e&hash=080d38272f9b6f624b0d94a6d5562145')
  const [item, setItem] = useState();
  const [search, setSearch] = useState("");

  // gets the data through the url
  useEffect(()=>{
    const fetch = async() => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
    }
    fetch();
  }, [url])

  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
  }

  return (
    <View className='all'>
      <div className='topBar'>
        <h3 style={{textAlign: 'center'}}>COMIC RELIEF</h3>
        <Navbar></Navbar>
      </div>

      <div className='mainPage'>
        <div id='main'>
          <h1>Characters</h1>

          { /**
           * The text box sets the search to the string value entered
           * Once the button is clicked, it will show cards that matches with input.
           */}
  
          <div className="searchBar">
            <center>
              <input placeholder={`Enter name here`} size="40" 
              onChange={e=>setSearch(e.target.value)}
              />
            </center>
            <br></br>
            <center>
              <button onClick={searchMarvel}>Search</button>
            </center> 
          </div>
          <div className="content">
            {
              (!item)? <p>Not Found</p> : <Card data={item}></Card>
            }
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