import React from 'react';
import './assets/scss/App.scss';

import Header from './components/Header';
import SelectDonate from './components/main/SelectDonate';
import SelectHelp from './components/main/SelectHelp';
import SelectUtulky from './components/main/SelectUtulky';

import logoFooter from './assets/img/logoFooter.png'

function App() {


  return (
    <div className="App">
      <Header />

      <div className="main">
        <div className="mainColumn">
            <div className="pageButtons">
              <span className="button active"></span>
              <span className="button"></span>
              <span className="button"></span>
            </div>

            <h1>Vyberte si možnosť, ako chcete pomôcť</h1>

            <SelectHelp />
            <SelectUtulky />
            <SelectDonate />

            <button className="continueBtn" type="submit"> Pokračovať </button>





        </div>

        <footer>
          <div>
            <img src={logoFooter} alt="Good boy logo" />
          </div>

          <div>
            <h2>Nadácia Good boy</h2>
            <ul>
              <li><a href="https://www.goodrequest.com/about-us" target = "_blank" rel = "noopener noreferrer"> O projekte</a></li>
              <li><a href="https://www.goodrequest.com/sk/sluzby" target = "_blank" rel = "noopener noreferrer"> Ako na to</a></li>
              <li><a href="https://www.goodrequest.com/contact" target = "_blank" rel = "noopener noreferrer"> Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h2>Nadácia Good boy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.
            </p>
          </div>

          <div>
            <h2>Nadácia Good boy</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in interdum ipsum, sit amet.
            </p>
          </div>
              
        </footer>

      </div>

    </div>
  );
}

export default App;
