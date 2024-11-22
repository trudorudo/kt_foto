import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Header from "./app/components/Header"


import './App.css';
import MainCompiler from './app/MainCompiler';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainCompiler />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
