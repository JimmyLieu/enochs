import Navbar from './components/Navbar.js';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import Menu from './pages/Menu.js';
import About from './pages/About.js';
import Footer from './components/Footer';

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
      <Footer />
    </>
  );
}

export default App;
