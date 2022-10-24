import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [ditto, setDitto] = useState();
  const [loaded, setloaded]=useState(false);

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => res.json())
    .then((pokemon) => setDitto(pokemon))
    .catch((err) => console.log(err))
    .finally(()=> setloaded(true));
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {loaded ? ditto.name : <h2> Cargando... </h2>}
          
        </p>
      </header>
    </div>
  );
}

export default App;
