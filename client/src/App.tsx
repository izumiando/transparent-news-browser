import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0)

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080/api');
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <Header />
    </>
  )
}

export default App

// import 'App.css'
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'

