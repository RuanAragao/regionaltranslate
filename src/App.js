import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

// banco de dados **
const database = {
  'ola': 'e ai',
  'como vai?': 'comé que tá?'
}

// Função de tradução
function Translate(word) {

  //First remove accents
  const withoutAccents = word.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
  //Second remove special characters
  const withoutSpecialChar = withoutAccents.replace(/[^\w\s]/gi, '');

  const response = database[withoutSpecialChar];
  // procura pela palavra
  if ( response ) {
    // retorna a tradução
    return response;
  }

  // caso não enconte, retorna a mesma palavra.
  return withoutSpecialChar;
}

function App() {
  const [words, setWords] = useState('');
  const [separatedWords, setSeparatedWords] = useState([]);

  const onChangeWords = (event) => {
    setWords(event.target.value);
    setSeparatedWords(words.split(' '));
  };
  

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
                  onChange={onChangeWords}
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
