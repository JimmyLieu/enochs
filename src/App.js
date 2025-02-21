import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Menu from './components/pages/Menu';
import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element= {<Home/>}> 
        </Route>
        <Route path='/menu' exact element= {<Menu/>}>
        </Route>
        <Route path='/about' exact element= {<About/>}>
        </Route>
      </Routes>
      
      </Router>
    </>
  );
}

export default App;
