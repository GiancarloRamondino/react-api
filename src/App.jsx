import { useState } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [actresses, setActresses] = useState([]);

  const fetchActresses = () => {
    axios
      .get("https://lanciweb.github.io/demo/api/actresses/")
      .then((response) => { setActresses(response.data) })
      .catch((error) => { console.error('ERRORE CARICAMENTO PERSONAGGI', error); });
  }

  const [actors, setActors] = useState([]);

  const fetchActors = () => {
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((response) => { setActors(response.data) })
      .catch((error) => { console.error('ERRORE CARICAMENTO PERSONAGGI', error); });
  }



  return (
    <div>
      <div>
        <button onClick={fetchActresses}>Carica Attrici</button>
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
      <div>
        <button onClick={fetchActors}>Carica Attori</button>
        <ul>
          {actors.map((actors) => {
            return (
              <li key={actors.id}>
                <h2>{actors.name}</h2>
                <img src={actors.image} alt={actors.name} />
                <p>{actors.nationality}</p>
                <p>{actors.known_for}</p>
                <p>{actors.birth_year}</p>
                <p>{actors.awards}</p>
                <p>{actors.biography}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};


export default App;
