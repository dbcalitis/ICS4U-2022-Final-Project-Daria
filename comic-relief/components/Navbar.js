import React, { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import Card from './Card.js';

export function Home() {
  return(
    <View>
      <h1>Home</h1>
    </View>
  )
}

export function About() {
  return(
    <View>
      <h1>About</h1>
    </View>
  )
}

export function Comics() {
  // gives an array of data about characters
  const [url,setUrl] = useState('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=9adc0fa329a794fce9cc9d03152b282e&hash=080d38272f9b6f624b0d94a6d5562145')
  const [item, setItem] = useState();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("home");

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
    </View>
  )
}

export function Characters() {
  // gives an array of data about characters
  const [url,setUrl] = useState('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=9adc0fa329a794fce9cc9d03152b282e&hash=080d38272f9b6f624b0d94a6d5562145')
  const [item, setItem] = useState();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("home");

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
    </View>
  )
}

