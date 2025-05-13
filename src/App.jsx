import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [character, setCharacter] = useState([]);

  const fetchCharacter = () => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => { setCharacter(response.data.results) })
      .catch((error) => { console.error('ERRORE CARICAMENTO PERSONAGGI'), error });
  }

  return (
    <div>
      <button onClick={fetchCharacter}>Carica personaggi</button>
      <ul>
        {character.map((character) => {
          return (
            <li key={character.id}>
              <h2>{character.name}</h2>
              <img src={character.image} alt={character.name} />
              <p>{character.status}</p>
              <p>{character.species}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
};


export default App;
