import React from 'react';
import { useState } from 'react'
import './App.css';
// import Home from './components/Home';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Booking from './components/Bookings/Booking';
import Carousel from './components/pages/Carousel/MyCarousel'
import Landing from './components/Landing'
import Sprovider from './components/Sprovider'
import SpLogin from './components/SpLogin'
// import SendMail from './components/SendMail';

// const getLoggedStatus = () => {
//   let loggedIn
// }


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [spLoggedIn, setSpLoggedIn] = useState(false)
  const [client, setClient]= useState(true)
  const [spId, setSpId]=useState(0)
  const [spSalonId, setSpSalonId]=useState(0)

  return (
    <Router>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Carousel  />
      {loggedIn ? (<Booking />) : (null)}
      <SpLogin  spLoggedIn={spLoggedIn} setSpLoggedIn={setSpLoggedIn}  client={client} setClient={setClient} spId={spId} setSpId={setSpId} spSalonId={spSalonId} setSpSalonId={setSpSalonId} />
      <Switch>
        {client ? 
        <Landing  /> :
        <Sprovider  spLoggedIn={spLoggedIn} setSpLoggedIn={setSpLoggedIn} spId={spId} setSpId={setSpId} client={client} setClient={setClient} spSalonId={spSalonId}/>
        }
        {/* <Route path='/' exact component={Home} /> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
