import React, { useEffect, useState } from 'react';
import logo from './garage.png';
import './App.css';

function App() {
  const [serverMessage, setServerMessage] = useState('');

  useEffect(() => {
    // Effectue une requête au serveur Express lorsque le composant est monté
    fetch('/api')
      .then(response => response.json())
      .then(data => setServerMessage(data.message))
      .catch(error => console.error('Erreur:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {serverMessage || 'Bienvenue OSS\'CARS.'}
        </p>
        <a
          className="App-link"
          href="http://localhost:3001"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lancer l'application
        </a>
      </header>
    </div>
  );
}

export default App;
