import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import CarList from './components/CarList';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<CarList />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* Define other routes and corresponding components here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
