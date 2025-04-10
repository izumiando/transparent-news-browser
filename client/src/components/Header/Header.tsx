import { useState, useEffect } from 'react'
import LogoButton from './LogoButton'
import SearchBar from './SearchBar'
import UpperRight from './UpperRight'
import './Header.css'
import axios from 'axios'; // not sure if I need this

function Header(runSearch: any) {
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8000/api');
    console.log("message from backend");
    console.log(response);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  function goHome(){
    // send user home
    console.log("pretend you got sent home");
  }

  return (
    <div className="header">
      <LogoButton logoClick={() => goHome()}/>
      <SearchBar onSearch={() => runSearch}/>
      <UpperRight loginStatus={loggedIn}/>
    </div>
  )
}

export default Header