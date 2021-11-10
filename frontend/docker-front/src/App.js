import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';


async function getGreeting() {
  let res = await fetch("http://localhost:8080/"); 
  let data = await res.json();
  return data;
}


function App() {
  let [greetData, setGreetData] = useState([]);


  useEffect(() => {
    let mounted = true;
    getGreeting()
      .then(items => {
        if(mounted) {
          setGreetData(items);
        }
      })
    return () => mounted = false;
  }, [])

  
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {greetData.greeting}
        </p>
      </header>
    </div>
  );
}

export default App;
