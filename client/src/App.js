import React from 'react';
import { useState } from 'react'
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Booking from './components/Bookings/Booking';
import Carousel from './components/Carousel/MyCarousel'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {console.log('ln', loggedIn)}
      <Carousel  />
      {loggedIn ? (<Booking />) : (null)}
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
