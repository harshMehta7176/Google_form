//import logo from './logo.svg';
//import './App.css';
import React from 'react';
import Header from "./components/Header";
import Centeredtabs from './components/Centeredtabs';
import Question_form from './components/Question_form';

function App() {
  return (
    <div className="App">
      <Header/>
      <Centeredtabs/>
      <Question_form/>
    </div>
  );
}

export default App;
