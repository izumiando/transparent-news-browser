import { useState, useEffect } from 'react'
import LogoButton from './LogoButton'
import SearchBar from './SearchBar'
import UpperRight from './UpperRight'
import './Header.css'
import axios from 'axios'; // not sure if I need this

function Header() {
  const [count, setCount] = useState(0)

  const fetchAPI = async () => {
    const response = await axios.get('http://localhost:8080/api');
    console.log("if a list of fruits follows, the backend is connected");
    console.log(response.data.fruits);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  function doAction(){
    // this function should either allow
  }
  loggedIn

  return (
    <div id="root">
      <LogoButton />
      <SearchBar />
      <UpperRight accountAction={() => doAction(loggedIn)}/>
    </div>
  )
}

export default Header