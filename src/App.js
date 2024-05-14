import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from "./app/components/Header"


import './App.css';
import Gallery from './app/components/PhotoGallery';
import About from './app/components/About';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
