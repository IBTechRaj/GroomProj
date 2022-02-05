import React from 'react';
import { useState } from 'react'
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Booking from './components/Bookings/Booking';

// const getLoggedStatus = () => {
//   let loggedIn
// }


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? (<Booking />) : (null)}
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
