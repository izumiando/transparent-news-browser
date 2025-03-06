import { useState, useEffect } from 'react'
import LogoButton from './LogoButton'
import SearchBar from './SearchBar'
import UpperRight from './UpperRight'
import './Header.css'
import axios from 'axios'; // not sure if I need this

function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080/api');
    console.log("if a list of fruits follows, the backend is connected");
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  function goHome(){
    // send user home
    console.log("pretend you got sent home");
  }

  return (
    <div id="root">
      <LogoButton logoClick={() => goHome()}/>
      <SearchBar />
      <UpperRight loginStatus={loggedIn}/>
    </div>
  )
}

export default Header