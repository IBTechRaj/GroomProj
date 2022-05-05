// import React from 'react';
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap'
// import axios from 'axios';
import Salons from './Salons';
// import Services from './ErrServices.js.err'


function Sprovider(props) {
  const [salonId, setSalonId]=useState(0)
  const [showServices, setShowServices]=useState(true)

const closeChild = () => {
    setShowServices(false)
};
console.log('spro', props)

// { loggedIn, setLoggedIn  , client, setClient, id, setId}
  return (
    <>
      <section id="about">
        <Container className="container">
          <Row className="row">
            <div className="section-header">
              <h2 className="section-title text-center wow fadeInDown mt-3" style={{ color: 'black' }}>Provide your Salon and Services Details</h2>            
            </div>
          </Row>
          {showServices &&
            <Salons spId={props.spId} setSpId={props.setSpId} client={props.client} setClient={props.setClient} onClose={closeChild}  />
          }   
         
          {console.log('in sprov', salonId)}
          
        </Container>
      </section>
    </>
  )
}

export default Sprovider