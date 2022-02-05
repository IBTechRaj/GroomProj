import React from 'react';
import { Row } from 'react-bootstrap'
import './location.css';

const Location = () => {
  return (
    <Row>
      <section className="contact-us">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title text-center wow fadeInDown">Location</h2>
            <p className="text-center wow fadeInDown">
              My Motor Wash<br />
              Lahari Susheela Apartments<br />
              Beerappagadda,
              Uppal
            </p>
          </div>
        </div>
      </section>
      {/* <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30457.3641564402!2d78.54611283098406!3d17.403602487626863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1610970422660!5m2!1sen!2sin" width="100%" height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
        &gt;
      </div> */}
    </Row>
  )
}

export default Location