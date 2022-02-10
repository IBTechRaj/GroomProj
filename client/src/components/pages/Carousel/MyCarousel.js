// https://www.npmjs.com/package/react-responsive-carousel

import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class MyCarousel extends Component {
  render() {
    return (
      <Carousel interval={5000} infiniteLoop={true} showThumbs={false} autoPlay={true}>


        <div>
          <img src="assets/bg1.jpg" alt="No img" />
          <p className="legend " style={{ fontSize: 30, color: '#fb6a33' }}>Make your Car Shine with Our Service</p>
        </div>
        <div>
          <img src="assets/bg2.jpg" alt="No img" />
          <p className="legend" style={{ fontSize: 30, color: '#fb6a33' }}>Your Satisfaction is our Motto</p>
        </div>
        {/* <div>
        Photo by <a href="https://unsplash.com/@bayleejadegramling?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Baylee Gramling</a> on <a href="https://unsplash.com/s/photos/beauty-salon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel >
    );
  }
}

export default MyCarousel
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));

// Don't forget to include the css in your page
// <link rel="stylesheet" href="carousel.css"/>
// Begin DemoSliderControls