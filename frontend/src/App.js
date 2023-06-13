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
import Post from './components/posts/Post';
import PostDetails from './components/posts/PostDetails';
import NewPost from './components/posts/NewPost';
import EditPost from './components/posts/EditPost';
import './App.css';





const App = () => {
  return (
    <div className="app-css">
      <NavBar />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<NewUser />} /> 
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/post" element={<Post />} />
          <Route path="/details" element={<PostDetails />} />
          <Route path="/new-posts" element={<NewPost />} /> 
          <Route path='/editPost' element={<EditPost />} />
        </Routes>
      </div>
      <Footer />
      
      </div>
  );
}

export default App;
