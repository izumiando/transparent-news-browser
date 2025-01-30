import { useState, useEffect } from 'react'
import LogoButton from './LogoButton'
import SearchBar from './SearchBar'
import './Header.css'
import axios from 'axios'; // not sure if I need this

function Header() {
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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Header