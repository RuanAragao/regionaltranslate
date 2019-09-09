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
  const [words, setWords] = useState('');
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Regional Translate</h1>
      </header>
      <main>
        <div className="translate-box">
          <div className="words-input">
            <div className="source-wrap">
              <div className="input-wrap">
                <textarea 
                  className="textarea" 
                  id="TextFrom"
                  placeholder="Escreva aqui"
                  onChange={e => setWords(e.target.value)}
                  value={words}
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
                value={Translate(words)}
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
