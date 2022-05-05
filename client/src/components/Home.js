// import React from 'react';
import React, { useState, useEffect } from 'react';
// import Services from './pages/Services/Services'
import Landing from './Landing'
import Salon from '../components/Salons/Salon'
// import Hero from './pages/Hero/Hero'
// import Hero2 from './pages/Hero/Hero2'
// import Pricing from './pages/Pricing/Pricing';
// import Gallery from './pages/Gallery/Gallery'
// import Location from './pages/Location/Location'
// import Contact from './pages/Contact/Contact'
// import MyCarousel from './pages/Carousel/MyCarousel'

function Home() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <>
      <Landing loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      {loggedIn ? (<Salon />) : (null)}
      {/* <MyCarousel /> */}
      {/* <Hero />
      <Services />
      <Hero2 />
      <About />
      <Pricing />
      <Gallery />
      <Location />
      <Contact /> */}
    </>
  );
}

export default Home;
