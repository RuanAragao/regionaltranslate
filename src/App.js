import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function Translate(w) {
  if (w === "ola") {
    return "e aí";
  }

  return w;
}

function App() {
  const [worlds, setWorlds] = useState('');
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Local translate</h1>
      </header>
      <main>
        <div className="translate-box">
          <div className="worlds-input">
            <div className="source-wrap">
              <div className="input-wrap">
                <textarea 
                  className="textarea" 
                  id="TextFrom"
                  placeholder="Escreva aqui"
                  onChange={e => setWorlds(e.target.value)}
                  value={worlds}
                  autoFocus
                ></textarea> 
              </div>
            </div>
          </div>
          
          <div className="results-container">
            <div className="input-wrap">
              <textarea 
                className="textarea" 
                id="TextFor"
                value={Translate(worlds)}
                readOnly
              ></textarea>    
            </div>
          </div>
          
        </div> 
      </main>
    </div>
  );
}

export default App;
