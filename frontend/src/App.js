import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/users/Login';
import NewUser from './components/users/NewUser';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';
import Gallery from './components/Gallery';
import Lesson from './components/lessons/Lesson'
import './App.css';





const App = () => {
  return (
    <div bg="dark">
    <h1>Nurse Plus</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<NewUser />} /> 
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/lesson" element={<Lesson />} />
      </Routes>
      <Footer />
      </div>
  );
}

export default App;
