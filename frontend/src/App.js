import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Error from './components/Error';
import Gallery from './components/Gallery';
import Post from './components/posts/Post';
import ViewPost from './components/posts/ViewPost';
import NewPost from './components/posts/NewPost';
import EditPost from './components/posts/EditPost';
import Login from './components/users/Login';
import NewUser from './components/users/NewUser';
import ViewUser from './components/users/ViewUser';
import EditUser from './components/users/EditUser';
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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/newPost/new" element={<NewPost />} /> 
          <Route path="/post" element={<Post />} />
          <Route path="/viewPost/:postId" element={<ViewPost />} />
          <Route path='/editPost/:postId' element={<EditPost />} />
          <Route path="/signup" element={<NewUser />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewUser/:userId" element={<ViewUser />} />
          <Route path="/editUser/:userId" element={<EditUser />} />
        </Routes>
      </div>
      <Footer />
      
      </div>
  );
}

export default App;
