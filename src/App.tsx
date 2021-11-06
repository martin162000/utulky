import React from 'react';
import './assets/scss/App.scss';
import FirstPage from './components/FirstPage';
import Footer from './components/Footer';

import Header from './components/Header';



function App() {


  return (
    <div className="App">
      <Header />

      <div className="main">
        <FirstPage/>


        <Footer/>
      </div>

    </div>
  );
}

export default App;
