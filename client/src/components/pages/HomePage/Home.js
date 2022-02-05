import React from 'react';
import Services from '../Services/Services'
import About from '../../pages/About'
import Hero from '../Hero/Hero'
import Hero2 from '../Hero/Hero2'
import Pricing from '../../Pricing';
import Gallery from '../Gallery/Gallery'
import Location from '../Location/Location'
import Contact from '../Contact/Contact'
import MyCarousel from '../Carousel/MyCarousel'

function Home() {
  return (
    <>
      <MyCarousel />
      <Hero />
      <Services />
      <Hero2 />
      <About />
      <Pricing />
      <Gallery />
      <Location />
      <Contact />
    </>
  );
}

export default Home;
