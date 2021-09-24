import React, { useContext } from 'react'
import './App.css';
import Rows from './Rows';
import instance from "./axios"
import requests from './Requests';
import MovieContextProvider, { MovieContext } from './contexts/MovieContext';

function App() {
  
  return (
    <MovieContextProvider>
      <div className="App">
        <h1>Hello</h1>
        <Rows/>
      </div>
    </MovieContextProvider>
  );
}

export default App;
