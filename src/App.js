import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/RegisterFolder/Register';
import Clients from './components/CarFolder/Clients'


function App() {
  return (
    <div className="App">
      <Clients/>
    </div>
  );
}

export default App;