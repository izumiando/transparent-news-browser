import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { Article } from '../../backend/src/Entities/Article';

function App() {
  const [count, setCount] = useState(0)

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8000/api');
    console.log("message from backend");
    console.log(response.data);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  function backendSearch(){
    
  }

  // dummy data
  const newArticle = new Article('ChatGPT thinks my life looks like this', "Izumi", "ANDO Publishing", null, "https://asia.nikkei.com/Economy/Trade-war/Trump-tariffs/Trump-ups-China-tariffs-to-125-pauses-others-at-10-for-90-days", "description", null, "NewsAPI");
  const dummyData: Article[] = 
  [ newArticle, newArticle, newArticle, newArticle, newArticle,
    newArticle, newArticle, newArticle, newArticle, newArticle,
    newArticle, newArticle, newArticle, newArticle, newArticle,
    newArticle, newArticle, newArticle, newArticle, newArticle ];

  return (
    <>
      <Header runSearch={() => backendSearch()}/>
      <Body articles={dummyData}/>
    </>
  )
}

export default App

// import 'App.css'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'

