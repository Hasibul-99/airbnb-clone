import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (

    //BEM
    <div className="app">
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
