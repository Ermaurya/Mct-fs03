import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import "./App.css";
import Login from './Route/Login';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import ReadBlog from './Route/About';

import UseEffectAPI from'./Components/UseEffectAPI'
import UserProfile from './Components/UserProfile';
import UserDetails from './Components/UserDetails';

const App = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <div className="container-fluid">
      {
        isLoggedIn ? <Nav /> : null
      }

      <Routes>
        
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={isLoggedIn ?<UseEffectAPI/> : <Navigate to="/login" replace />}
        />
        
        <Route path="/UserProfile" element={isLoggedIn ? <UserProfile/> : <Navigate to="/" replace />} />
        <Route path="/About" element={isLoggedIn ? <ReadBlog /> : <Navigate to="/" replace />} />
        <Route path="/:username" element={<UserDetails/>} />
        
            
      </Routes>
      {
        isLoggedIn ? <Footer /> : null
      }
     
    </div>
  );
};

export default App;
