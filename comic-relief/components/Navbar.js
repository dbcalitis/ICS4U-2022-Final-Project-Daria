import React, { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Card from './Card.js';
import avengers from './Avengers.js';
import style from './Navbar.css';

import schoolLogo from './../assets/SMTHS_logo.jpg';
import me from './../assets/me.jpg';



export function Home() {
  return(
    <View className='page'>
      <div className='page'>
        <h1 className='centered'>Home</h1>
        <div className='homeImage' />
        <p>Access the Marvel Database to view all comics and characters that they have created!</p> 
        <h2>The Original Avengers (MCU)</h2>

        <div className="content" id="content">
          <Card className='avengers' data={avengers}/>
        </div>

      </div>
    </View>
  )
}

export function About() {
  return(
    <View>
      <div className='page'>
        <h1>About</h1>
        <div className='block'>
          <img className='image' src={schoolLogo}/>
          <div className='textBox'> 
            <p className='paragraph'>Comic Relief is a final ICS4U school project made by Daria Calitis. The website is made with 
              the <a className='link' href='https://developer.marvel.com/'> Marvel API </a>
              and <a className='link' href='https://expo.dev/'>Expo</a> through Github Codespaces.</p>
          </div>
        </div>

        <h2>More about the Creator</h2>
        <div className='block'>
          <img className='me' src={me}/>
          <div className='textBox'>
            <p className='paragraph'>
              Hi, my name is Daria Calitis. I was a Grade 12 student when I made this website. Through this project, I
              learned more about React Native and how to create web applications. While I was thinking for ideas, I wanted to
              play around with APIs and see how to work with them when creating an application.
              <br/>
              <br/>
              <a href='https://github.com/dbcalitis'>Github</a>
              <a href='https://www.linkedin.com/in/daria-calitis-125a8a242/'>LinkedIn</a>
            </p>
          </div>
        </div>
      </div>
    </View>
  )
}

// The Comics' page

export function Comics() {
  // gives an array of data about characters
  const [url,setUrl] = useState('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=9adc0fa329a794fce9cc9d03152b282e&hash=080d38272f9b6f624b0d94a6d5562145')
  const [item, setItem] = useState();
  const [search, setSearch] = useState("");

  // gets the data through the url.
  useEffect(()=>{
    const fetch = async() => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
    }
    fetch();
  }, [url])

  const searchMarvel=()=>{
    setUrl(`https://gateway.marvel.com:443/v1/public/comics?titleStartsWith=${search}&ts=1&apikey=2e1cdeec426ae323484f29024084c206&hash=d516513ba95b9407c7aca0f73b241f8a`)
  }
  return(
    <View>
      <div className='page'>
        <h1>Comics</h1>
        <div className="searchBar">
          <center>
            <input placeholder={`Enter name here`} size="40" 
              onChange={e=>setSearch(e.target.value)}/>
          </center>
          <br></br>
          <center>
            <button onClick={searchMarvel}>Search</button>
          </center> 
        </div>
        <div className="content" id="content">
          {
            (!item)? <p>Not Found</p> : <Card data={item}></Card>
          }
        </div>
      </div>
    </View>
  )
}

// The Characters' page

export function Characters() {
  // gives an array of data about characters
  const [url,setUrl] = useState('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9adc0fa329a794fce9cc9d03152b282e&hash=080d38272f9b6f624b0d94a6d5562145')
  const [item, setItem] = useState();
  const [search, setSearch] = useState("");

  // gets the data through the url.
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
  return(
    <View>
      <div className='page'>
        <h1>Characters</h1>
        <div className="searchBar">
          <center>
            <input placeholder={`Enter name here`} size="40" 
              onChange={e=>setSearch(e.target.value)}/>
          </center>
          <br></br>
          <center>
            <button onClick={searchMarvel}>Search</button>
          </center> 
        </div>
        <div className="content" id="content">
          {
            (!item)? <p>Not Found</p> : <Card data={item}></Card>
          }
        </div>
      </div>
    </View>
  )
}

