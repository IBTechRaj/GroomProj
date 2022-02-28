import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import axios from 'axios';


function Landing() {
  const jwt = localStorage.getItem('token');
  const salonurl = 'http://localhost:3001/salons';
  const serviceurl = 'http://localhost:3001/services';

  axios.get(salonurl,
    // {
    //   headers: { Authorization: `Bearer ${jwt}` },
    // }
  )
    .then(({ data }) => {
      console.log('salons', data)
    })

  axios.get(serviceurl,
    // {
    //   headers: { Authorization: `Bearer ${jwt}` },
    // }
  )
    .then(({ data }) => {
      console.log('services', data)
    })



  return (
    <>
      <section id="about">
        <Container className="container">
          <Row className="row">
            <div className="section-header">
              <h2 className="section-title text-center wow fadeInDown mt-3" style={{ color: 'black' }}>Who We Are</h2>
              <p className="text-center wow fadeInDown">
                We are a group of young entrepreneurs who think of making life easier for the people of the city <br />
                This is the first step in that direction.
              </p>
            </div>
          </Row>
          <Row >

            <Col xs={6} >
              <Image src="images/about.png" fluid />
            </Col>
            <Col xs={6} >
              <p>
                It all started when our first car broke down and we had to run from pillar to post
              </p>
              <p>
                That was just the beginning.  As we experienced a series of hassles
                like periodical servicing, fixing minor repairs, more frequent washing
                we understood that it not only involves frequent visits to service centres
                or water service garages, but it also upsets one's work schedule and the
                resultant troubles.
              </p>
              <p>
                It is then we thought of a service which could help the vehicle owners
                get most of the vehicle maintenance things done at home.  This would make
                the life a vehicle owner comfortable.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )

}
// });

export default Landing