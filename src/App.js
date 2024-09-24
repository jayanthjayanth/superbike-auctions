import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Auctions from './pages/Auctions';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthProvider } from './AuthContext';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Header />
          <main className="content-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auctions" element={<Auctions />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;