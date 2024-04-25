import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/RegisterFolder/Register';
import Cars from './components/CarFolder/Cars'


function App() {
  return (
    <div className="App">
      <Cars/>
    </div>
  );
}

export default App;