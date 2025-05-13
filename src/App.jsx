import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [actresses, setActresses] = useState([]);

  const fetchCharacter = () => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => { setActresses(response.data) })
      .catch((error) => { console.error('ERRORE CARICAMENTO PERSONAGGI', error); });
  }

  return (
    <div>
      <button onClick={fetchCharacter}>Carica personaggi</button>
      <ul>
        {actresses.map((actress) => {
          return (
            <li key={actress.id}>
              <h2>{actress.name}</h2>
              <img src={actress.image} alt={actress.name} />
              <p>{actress.nationality}</p>
              <p>{actress.most_famous_movies}</p>
              <p>{actress.birth_year}</p>
              <p>{actress.awards}</p>
              <p>{actress.biography}</p>
            </li>
          )
        })}
      </ul>
    </div>
  );
};


export default App;
