import './App.css';
import Row from './Row';
import instance from "./axios"
import requests from './Requests';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Row title="NETFLIX ORIGINALS"/>
      <Row title="Trending Now"/>
    </div>
  );
}

export default App;
