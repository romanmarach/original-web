
import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Aboutme from './components/pages/Aboutme';
import Projects from './components/pages/Projects';
import Messageme from './components/pages/Messageme';

function App() {
  return (
   <Router>
      <NavBar />
      <Routes>
        <Route path='/'   element = {<Home/>} />
        <Route path='/aboutme' element={<Aboutme />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/messageme' element={<Messageme />} />
      </Routes>
      </Router>
  );
}

export default App;
