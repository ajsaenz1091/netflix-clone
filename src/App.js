import React, { useContext } from 'react'
import './App.css';
import Rows from './Rows';
// import Row from './components/row/Row'
import instance from "./axios"
// import MovieContextProvider, { MovieContext } from './contexts/MovieContext';

function App() {
  
  return (
      <div className="App">
        <h1>Hello</h1>
        <Rows/>
      </div>
  );
}

export default App;
