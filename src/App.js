import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";


function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element= {<Home/>}>
        </Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
