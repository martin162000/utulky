import React from 'react';
import { useSelector } from 'react-redux';
import './assets/scss/App.scss';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import Footer from './components/Footer';
import Header from './components/Header';



function App() {

  const showState = useSelector((state:any) => state)

  const showPage = () => {
    if(showState.currentPage === 1 || showState.data === false) {
      return (
        <FirstPage/>
      )
    } else if(showState.currentPage === 2) {
      return (
        <SecondPage/>
      )
    } else {
      return (
        <FirstPage/>
      )
    }
  }

  return (
    <div className="App">
      <Header />

      <div className="main">
          {showPage()}
      </div>

      <Footer/>
    </div>
  );
}

export default App;
